import { fileSave } from "browser-nativefs";

const resourceCache = new Map<string, string>();

const embedUrlResources = async (text: string) => {
  const urls = text.match(/url\(".*?"\);/g) || [];
  const resources = await Promise.all<string>(
    urls.map(
      (url) =>
        new Promise((resolve, reject) => {
          url = url.slice(5, -3);
          if (resourceCache.has(url)) {
            resolve(resourceCache.get(url) as string);
            return;
          }
          fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
              const reader = new FileReader();
              reader.onload = () => {
                const resource = `url(${reader.result});`;
                resourceCache.set(url, resource);
                resolve(resource);
              };
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            })
            .catch(reject);
        })
    )
  );
  return text.replace(/url\(".*?"\);/g, () => resources.shift() as string);
};

const generateImagesFromSvg = (
  container: HTMLDivElement,
  svg: SVGSVGElement,
  finishedMs: number,
  fps: number
) =>
  new Promise<HTMLImageElement[]>((resolve, reject) => {
    svg.pauseAnimations();
    const images: HTMLImageElement[] = [];
    const loop = async (t: number) => {
      if (t > finishedMs) {
        svg.unpauseAnimations();
        resolve(images);
        return;
      }
      svg.setCurrentTime(t / 1000);
      const html = await embedUrlResources(container.innerHTML);
      const img = new Image();
      img.src = "data:image/svg+xml;base64," + btoa(html);
      img.onload = () => {
        images.push(img);
        loop(t + 1000 / fps);
      };
      img.onerror = (err) => {
        window.alert("Unexpected error while preparing images");
        reject(err);
      };
    };
    loop(0);
  });

export const exportToSvgFile = async (svg: SVGSVGElement) => {
  const savedMs = svg.getCurrentTime();
  svg.setCurrentTime(0);
  const svgStr = new XMLSerializer().serializeToString(svg);
  svg.setCurrentTime(savedMs);
  await fileSave(new Blob([svgStr], { type: "image/svg+xml" }), {
    fileName: "excalidraw-animate.svg",
    extensions: [".svg"],
  });
};

export const exportToWebmFile = async (data: Blob) => {
  await fileSave(new Blob([data], { type: "video/webm" }), {
    fileName: "excalidraw-animate.webm",
    extensions: [".webm"],
  });
};

export const prepareWebmData = (svg: SVGSVGElement, finishedMs: number) =>
  new Promise<Blob>(async (resolve, reject) => {
    // This parentNode is not nice.
    // We would like to export it off screen.
    const container = svg.parentNode;
    if (!container) {
      window.alert("svg is not displayed");
      reject();
      return;
    }
    const images = await generateImagesFromSvg(
      container as HTMLDivElement,
      svg,
      finishedMs,
      60
    );
    const [, width, height] =
      svg.getAttribute("viewBox")?.match(/0 0 (\S+) (\S+)/) || [];
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", `${width}px`);
    canvas.setAttribute("height", `${height}px`);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const stream = (canvas as any).captureStream();
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
      resolve(e.data);
    };
    recorder.start();
    let index = 0;
    const drawSvg = () => {
      if (index >= images.length) {
        recorder.stop();
        return;
      }
      ctx.drawImage(images[index], 0, 0);
      index += 1;
      setTimeout(drawSvg, 1000 / 60);
    };
    drawSvg();
  });
