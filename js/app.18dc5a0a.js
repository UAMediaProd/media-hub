(function(){"use strict";var e={839:function(e,t,n){var o=n(963),r=n(252);const i=(0,r._)("nav",null,[(0,r._)("h1",{class:"brand"},[(0,r.Uk)("Media"),(0,r._)("span",{style:{color:"#d40000"}},"Hub")])],-1);function u(e,t,n,o,u,a){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[i,(0,r.Wm)(c)])}var a={},c=n(744);const s=(0,c.Z)(a,[["render",u]]);var f=s,l=n(119);const d={class:"home"};function p(e,t,n,o,i,u){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("button",{class:"btn btn-primary mr-2 my-2",onClick:t[0]||(t[0]=(...e)=>u.test&&u.test(...e))},"Click")])}var h=n(455),m=n.n(h),v={name:"Home",data(){return{access:""}},mounted(){var e=window.localStorage.accessToken;null!=e?(this.access=e,console.log(e),this.$router.push("Callback")):m().fire({title:"Login required",text:"To use the Media Hub, you'll need to log in to your Box account on the following page",icon:"warning",confirmButtonColor:"#102535",confirmButtonText:"Go to Box.com"}).then((e=>{e.isConfirmed&&(this.test(),m().fire({title:"Thank you!",text:"Logging you into the Media Hub now...",icon:"success",showConfirmButton:!1}))}))},methods:{test(){var e="https://account.box.com/api/oauth2/authorize",t="arf4uj4hfq3cqfsrnwcm1tudhojeazka",n=`${e}?client_id=${t}&response_type=code`;window.location.href=n}}};const b=(0,c.Z)(v,[["render",p]]);var g=b;const y=[{path:"/",name:"Home",component:g},{path:"/callback",name:"Callback",component:()=>n.e(443).then(n.bind(n,526))},{path:"/media/:id",name:"Media",component:()=>n.e(335).then(n.bind(n,335)),props:!0}],w=(0,l.p7)({history:(0,l.PO)(),routes:y});var k=w;window.axios=n(669),(0,o.ri)(f).use(k).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{335:"d74e437d",443:"62eb5da6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{335:"fd178a65",443:"31ab24c3"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="box-api:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var u=n.miniCssF(o),a=n.p+u;if(t(u,a))return r();e(o,a,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={335:1,443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var f=c(n)}for(t&&t(o);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},o=self["webpackChunkbox_api"]=self["webpackChunkbox_api"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(839)}));o=n.O(o)})();
//# sourceMappingURL=app.18dc5a0a.js.map