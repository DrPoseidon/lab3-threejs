(function(){"use strict";var t={5154:function(t,o,n){var e=n(9242),i=n(3396),s=n(4870),r=n.p+"img/chevron-down.e0e85248.svg",l=n(1114),a=n(4198),c={props:{root:{type:String,required:!0},cameraOptions:{type:Object,default:()=>({fov:45,near:1,far:100})},lightOptions:{type:Object,default:()=>({color:16777215,intensity:1})},objectOptions:{type:Object,default:()=>({position:{x:0,y:0,z:-3},rotation:{x:0,y:0,z:0}})},gltfUrl:{type:String,required:!0}},setup(t){const o=t;let n=(0,s.qj)(void 0),e=(0,s.qj)(void 0),r=(0,s.qj)(void 0),c=(0,s.qj)(void 0),u=(0,s.qj)(void 0);(0,i.YP)((()=>o.objectOptions),(t=>{u.rotation.y=t.rotation.y}),{deep:!0});const p=()=>{n=new l.CP7,e.append(n.domElement),n.setSize(e.offsetWidth,e.offsetHeight),n.setClearColor(16777215,0)},f=()=>{const{fov:t,near:n,far:i}=o.cameraOptions;r=new l.cPb(t,e.offsetWidth/e.offsetHeight,n,i)},h=()=>{c=new l.xsS},d=()=>{p(),f(),h(),b(),g(),v()},b=()=>{const{position:t,rotation:n}=o.objectOptions,e=new a.E;e.load(o.gltfUrl,(o=>{u=o.scene,c.add(u),u.position.set(t.x,t.y,t.z),u.rotation.set(n.x,n.y,n.z)}),(()=>{}),(t=>{console.log(t)}))},g=()=>{const{color:t,intensity:n}=o.lightOptions,e=new l.Mig(t,n);c.add(e)},v=()=>{requestAnimationFrame(v),n.render(c,r)},y=()=>{r.aspect=e.offsetWidth/e.offsetHeight,r.updateProjectionMatrix(),n.setSize(e.offsetWidth,e.offsetHeight)};return(0,i.bv)((()=>{e=document.querySelector(o.root),addEventListener("resize",y),e&&d()})),()=>{}}};const u=c;var p=u;const f={class:"iphone13pm"},h=(0,i._)("a",{class:"header",target:"_blank",href:"https://www.dns-shop.ru/product/8c6be93d15daed20/67-smartfon-apple-iphone-13-pro-max-128-gb-goluboj/"},[(0,i._)("h1",null,"iPhone 13 Pro Max")],-1),d={class:"buttons"},b=(0,i._)("img",{src:r,style:{width:"40px",height:"40px"}},null,-1),g=[b],v=(0,i._)("img",{src:r,style:{width:"40px",height:"40px"}},null,-1),y=[v];var w={setup(t){let o=(0,s.qj)({x:0,y:0,z:0}),n=(0,s.iH)();const e=t=>{n=setInterval((()=>{t?o.y+=.1:o.y-=.1}),20)},r=t=>{t?o.y+=.5:o.y-=.5},l=()=>{clearInterval(n)};return(t,n)=>((0,i.wg)(),(0,i.iD)("div",f,[h,(0,i.Wm)(p,{root:".iphone13pm",gltfUrl:"models/iPhone13PM/scene.gltf","object-options":{position:{x:0,y:0,z:-3.5},rotation:(0,s.SU)(o)},"light-options":{color:16777215,intensity:2}},null,8,["object-options"]),(0,i._)("div",d,[(0,i._)("button",{class:"button-left",onClick:n[0]||(n[0]=t=>r(!1)),onMousedown:n[1]||(n[1]=t=>e(!1)),onMouseup:l},g,32),(0,i._)("button",{class:"button-right",onClick:n[2]||(n[2]=t=>r(!0)),onMousedown:n[3]||(n[3]=t=>e(!0)),onMouseup:l},y,32)])]))}};const m=w;var j=m;const x={class:"iphone12p"},_=(0,i._)("a",{class:"header",target:"_blank",href:"https://www.dns-shop.ru/product/33faf78c0da03332/61-smartfon-apple-iphone-12-pro-128-gb-sinij/"},[(0,i._)("h1",null,"iPhone 12 Pro")],-1),O={class:"buttons"},M=(0,i._)("img",{src:r,style:{width:"40px",height:"40px"}},null,-1),P=[M],k=(0,i._)("img",{src:r,style:{width:"40px",height:"40px"}},null,-1),z=[k];var q={setup(t){let o=(0,s.qj)({x:0,y:3.1,z:0}),n=(0,s.iH)();const e=t=>{n=setInterval((()=>{t?o.y+=.1:o.y-=.1}),20)},r=t=>{t?o.y+=.5:o.y-=.5},l=()=>{clearInterval(n)};return(t,n)=>((0,i.wg)(),(0,i.iD)("div",x,[_,(0,i.Wm)(p,{root:".iphone12p",gltfUrl:"models/iPhone12P/scene.gltf","object-options":{position:{x:0,y:-45,z:-350},rotation:(0,s.SU)(o)},"camera-options":{fov:45,near:1,far:1e3},"light-options":{color:16777215,intensity:10}},null,8,["object-options"]),(0,i._)("div",O,[(0,i._)("button",{class:"button-left",onMousedown:n[0]||(n[0]=t=>e(!1)),onMouseup:l,onClick:n[1]||(n[1]=t=>r(!1))},P,32),(0,i._)("button",{class:"button-right",onClick:n[2]||(n[2]=t=>r(!0)),onMousedown:n[3]||(n[3]=t=>e(!0)),onMouseup:l},z,32)])]))}};const C=q;var S=C;const W={class:"iphone5s"},U=(0,i._)("a",{class:"header",target:"_blank",href:"https://www.dns-shop.ru/product/167cdc1539443120/4-smartfon-apple-iphone-5s-16-gb-zolotistyj/"},[(0,i._)("h1",null,"iPhone 5S")],-1),H={class:"buttons"},I=(0,i._)("img",{src:r,style:{width:"40px",height:"40px"}},null,-1),D=[I],E=(0,i._)("img",{src:r,style:{width:"40px",height:"40px"}},null,-1),F=[E];var T={setup(t){let o=(0,s.qj)({x:0,y:3.1,z:0}),n=(0,s.iH)();const e=t=>{n=setInterval((()=>{t?o.y+=.1:o.y-=.1}),20)},r=t=>{t?o.y+=.5:o.y-=.5},l=()=>{clearInterval(n)};return(t,n)=>((0,i.wg)(),(0,i.iD)("div",W,[U,(0,i.Wm)(p,{root:".iphone5s",gltfUrl:"models/iPhone5S/scene.gltf","object-options":{position:{x:0,y:0,z:-5},rotation:(0,s.SU)(o)}},null,8,["object-options"]),(0,i._)("div",H,[(0,i._)("button",{class:"button-left",onMousedown:n[0]||(n[0]=t=>e(!1)),onMouseup:l,onClick:n[1]||(n[1]=t=>r(!1))},D,32),(0,i._)("button",{class:"button-right",onMousedown:n[2]||(n[2]=t=>e(!0)),onMouseup:l,onClick:n[3]||(n[3]=t=>r(!0))},F,32)])]))}};const A=T;var L=A;const Y={class:"app"};var B={setup(t){return(t,o)=>((0,i.wg)(),(0,i.iD)("div",Y,[(0,i.Wm)(j,{class:"object"}),(0,i.Wm)(S,{class:"object"}),(0,i.Wm)(L,{class:"object"})]))}};const G=B;var J=G;(0,e.ri)(J).mount("#app")}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(o,e,i,s){if(!e){var r=1/0;for(u=0;u<t.length;u++){e=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,a=0;a<e.length;a++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](e[a])}))?e.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(u--,1);var c=i();void 0!==c&&(o=c)}}return o}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[e,i,s]}}(),function(){n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,{a:o}),o}}(),function(){n.d=function(t,o){for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){n.p="/lab3-threejs/"}(),function(){var t={143:0};n.O.j=function(o){return 0===t[o]};var o=function(o,e){var i,s,r=e[0],l=e[1],a=e[2],c=0;if(r.some((function(o){return 0!==t[o]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var u=a(n)}for(o&&o(e);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},e=self["webpackChunklaba3"]=self["webpackChunklaba3"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(5154)}));e=n.O(e)})();
//# sourceMappingURL=app.40b153c9.js.map