(()=>{"use strict";var e,v={},m={};function r(e){var o=m[e];if(void 0!==o)return o.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(o,t,i,f)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,i,f]=e[n],u=!0,d=0;d<t.length;d++)(!1&f||a>=f)&&Object.keys(r.O).every(p=>r.O[p](t[d]))?t.splice(d--,1):(u=!1,f<a&&(a=f));if(u){e.splice(n--,1);var l=i();void 0!==l&&(o=l)}}return o}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[t,i,f]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>(592===e?"common":e)+"."+{228:"8faf692cf68f9839",229:"674b3638d528e865",367:"4f37cf6e13bf305e",445:"414f5cfe956495b8",509:"ce32752ceb020528",592:"dfadf60c3b4e2327",595:"44f5d4c8c47f38bf",859:"1b869e16ac6d8c50"}[e]+".js",r.miniCssF=e=>{},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="vizochat:";r.l=(t,i,f,n)=>{if(e[t])e[t].push(i);else{var a,u;if(void 0!==f)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==o+f){a=c;break}}a||(u=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+f),a.src=r.tu(t)),e[t]=[i];var s=(h,p)=>{a.onerror=a.onload=null,clearTimeout(b);var g=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),g&&g.forEach(y=>y(p)),h)return h(p)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(i,f)=>{var n=r.o(e,i)?e[i]:void 0;if(0!==n)if(n)f.push(n[2]);else if(666!=i){var a=new Promise((c,s)=>n=e[i]=[c,s]);f.push(n[2]=a);var u=r.p+r.u(i),d=new Error;r.l(u,c=>{if(r.o(e,i)&&(0!==(n=e[i])&&(e[i]=void 0),n)){var s=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;d.message="Loading chunk "+i+" failed.\n("+s+": "+b+")",d.name="ChunkLoadError",d.type=s,d.request=b,n[1](d)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var o=(i,f)=>{var d,l,[n,a,u]=f,c=0;if(n.some(b=>0!==e[b])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(u)var s=u(r)}for(i&&i(f);c<n.length;c++)r.o(e,l=n[c])&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},t=self.webpackChunkvizochat=self.webpackChunkvizochat||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();