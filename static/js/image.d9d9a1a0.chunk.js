(this["webpackJsonpexcalidraw-animate"]=this["webpackJsonpexcalidraw-animate"]||[]).push([[30],{117:function(t,e,r){"use strict";r.r(e),r.d(e,"getTEXtChunk",(function(){return m})),r.d(e,"encodePngMetadata",(function(){return A})),r.d(e,"decodePngMetadata",(function(){return E})),r.d(e,"encodeSvgMetadata",(function(){return O})),r.d(e,"decodeSvgMetadata",(function(){return j}));var n=r(1),a=r.n(n),c=r(4),u=r(88),o=r.n(u),s=r(94),i=r.n(s),p=r(97),d=r.n(p),f=r(99),l=function(t){return new Promise((function(e,r){var n="string"===typeof t?new Blob([(new TextEncoder).encode(t)]):new Blob([t]),a=new FileReader;a.onload=function(t){if(!t.target||"string"!==typeof t.target.result)return r(new Error("couldn't convert to byte string"));e(t.target.result)},a.readAsBinaryString(n)}))},x=function(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0,a=t.length;n<a;n++)r[n]=t.charCodeAt(n);return e},w=function(t){return new TextDecoder("utf-8").decode(x(t))},b=function(){var t=Object(c.a)(a.a.mark((function t(e){var r=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.length>1&&void 0!==r[1]&&r[1])){t.next=5;break}t.t0=btoa(e),t.next=10;break;case 5:return t.t1=btoa,t.next=8,l(e);case 8:t.t2=t.sent,t.t0=(0,t.t1)(t.t2);case 10:return t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]&&n[1],t.abrupt("return",r?atob(e):w(atob(e)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.text,!1===e.compress){t.next=11;break}return t.prev=2,t.next=5,l(Object(f.deflate)(r));case 5:n=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.error("encode: cannot deflate",t.t0);case 11:if(t.t1=!!n,t.t2=n,t.t2){t.next=17;break}return t.next=16,l(r);case 16:t.t2=t.sent;case 17:return t.t3=t.t2,t.abrupt("return",{version:"1",encoding:"bstring",compressed:t.t1,encoded:t.t3});case 19:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.encoding,t.next="bstring"===t.t0?3:12;break;case 3:if(!e.compressed){t.next=7;break}t.t1=e.encoded,t.next=10;break;case 7:return t.next=9,w(e.encoded);case 9:t.t1=t.sent;case 10:return r=t.t1,t.abrupt("break",13);case 12:throw new Error('decode: unknown encoding "'.concat(e.encoding,'"'));case 13:if(!e.compressed){t.next=15;break}return t.abrupt("return",Object(f.inflate)(new Uint8Array(x(r)),{to:"string"}));case 15:return t.abrupt("return",r);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=r(5),g=function(t){return"arrayBuffer"in t?t.arrayBuffer():new Promise((function(e,r){var n=new FileReader;n.onload=function(t){var n;if(!(null===(n=t.target)||void 0===n?void 0:n.result))return r(new Error("couldn't convert blob to ArrayBuffer"));e(t.target.result)},n.readAsArrayBuffer(t)}))},m=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o.a,t.t1=Uint8Array,t.next=4,g(e);case 4:if(t.t2=t.sent,t.t3=new t.t1(t.t2),r=(0,t.t0)(t.t3),!(n=r.find((function(t){return"tEXt"===t.name})))){t.next=10;break}return t.abrupt("return",i.a.decode(n.data));case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.blob,n=e.metadata,t.t0=o.a,t.t1=Uint8Array,t.next=5,g(r);case 5:return t.t2=t.sent,t.t3=new t.t1(t.t2),c=(0,t.t0)(t.t3),t.t4=i.a,t.t5=k.i.excalidraw,t.t6=JSON,t.next=13,h({text:n,compress:!0});case 13:return t.t7=t.sent,t.t8=t.t6.stringify.call(t.t6,t.t7),u=t.t4.encode.call(t.t4,t.t5,t.t8),c.splice(-1,0,u),t.abrupt("return",new Blob([d()(c)],{type:"image/png"}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:if((null===(r=t.sent)||void 0===r?void 0:r.keyword)!==k.i.excalidraw){t.next=19;break}if(t.prev=4,"encoded"in(n=JSON.parse(r.text))){t.next=10;break}if(!("type"in n)||"excalidraw"!==n.type){t.next=9;break}return t.abrupt("return",r.text);case 9:throw new Error("FAILED");case 10:return t.next=12,y(n);case 12:return t.abrupt("return",t.sent);case 15:throw t.prev=15,t.t0=t.catch(4),console.error(t.t0),new Error("FAILED");case 19:throw new Error("INVALID");case 20:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.text,t.t0=b,t.t1=JSON,t.next=5,h({text:r});case 5:return t.t2=t.sent,t.t3=t.t1.stringify.call(t.t1,t.t2),t.next=9,(0,t.t0)(t.t3,!0);case 9:return n=t.sent,c="",c+="\x3c!-- payload-type:".concat(k.i.excalidraw," --\x3e"),c+="\x3c!-- payload-version:2 --\x3e",c+="\x3c!-- payload-start --\x3e",c+=n,c+="\x3c!-- payload-end --\x3e",t.abrupt("return",c);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n,c,u,o,s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.svg).includes("payload-type:".concat(k.i.excalidraw))){t.next=26;break}if(n=r.match(/<!-- payload-start -->(.+?)<!-- payload-end -->/)){t.next=5;break}throw new Error("INVALID");case 5:return c=r.match(/<!-- payload-version:(\d+) -->/),u=(null===c||void 0===c?void 0:c[1])||"1",o="1"!==u,t.prev=8,t.next=11,v(n[1],o);case 11:if(s=t.sent,"encoded"in(i=JSON.parse(s))){t.next=17;break}if(!("type"in i)||"excalidraw"!==i.type){t.next=16;break}return t.abrupt("return",s);case 16:throw new Error("FAILED");case 17:return t.next=19,y(i);case 19:return t.abrupt("return",t.sent);case 22:throw t.prev=22,t.t0=t.catch(8),console.error(t.t0),new Error("FAILED");case 26:throw new Error("INVALID");case 27:case"end":return t.stop()}}),t,null,[[8,22]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=image.d9d9a1a0.chunk.js.map