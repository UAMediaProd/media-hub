"use strict";(self["webpackChunkbox_api"]=self["webpackChunkbox_api"]||[]).push([[443],{587:function(e){function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,a,n,s){a=a||"&",n=n||"=";var r={};if("string"!==typeof e||0===e.length)return r;var o=/\+/g;e=e.split(a);var i=1e3;s&&"number"===typeof s.maxKeys&&(i=s.maxKeys);var c=e.length;i>0&&c>i&&(c=i);for(var l=0;l<c;++l){var d,u,p,h,g=e[l].replace(o,"%20"),m=g.indexOf(n);m>=0?(d=g.substr(0,m),u=g.substr(m+1)):(d=g,u=""),p=decodeURIComponent(d),h=decodeURIComponent(u),t(r,p)?Array.isArray(r[p])?r[p].push(h):r[p]=[r[p],h]:r[p]=h}return r}},361:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,a,n,s){return a=a||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?Object.keys(e).map((function(s){var r=encodeURIComponent(t(s))+n;return Array.isArray(e[s])?e[s].map((function(e){return r+encodeURIComponent(t(e))})).join(a):r+encodeURIComponent(t(e[s]))})).join(a):s?encodeURIComponent(t(s))+n+encodeURIComponent(t(e)):""}},673:function(e,t,a){t.decode=t.parse=a(587),t.encode=t.stringify=a(361)},526:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(252),s=a(577);const r=e=>((0,n.dD)("data-v-25e98122"),e=e(),(0,n.Cn)(),e),o={class:"page"},i=r((()=>(0,n._)("br",null,null,-1))),c=r((()=>(0,n._)("br",null,null,-1))),l={key:0,class:"grid"};function d(e,t,a,r,d,u){const p=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("p",null,"Hi "+(0,s.zw)(d.user)+"!",1),i,c,d.images.length>0?((0,n.wg)(),(0,n.iD)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.images,(e=>((0,n.wg)(),(0,n.j4)(p,{key:e,to:{name:"Media",params:{id:e.id,name:e.name,link:e.link,access:d.access}}},{default:(0,n.w5)((()=>["image"==e.type?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"grid-item",style:(0,s.j5)({backgroundImage:"url('"+e.link+"')"})},null,4)):(0,n.kq)("",!0)])),_:2},1032,["to"])))),128))])):(0,n.kq)("",!0)])}var u=a(673),p={name:"callback",data(){return{access:"",results:null,images:[],user:null}},mounted(){const e="https://api.box.com/oauth2/token";var t;if(null==window.localStorage.accessToken){var a=u.parse(window.location.search.substring(1)).code;axios.post(e,u.stringify({grant_type:"authorization_code",code:a,client_id:"arf4uj4hfq3cqfsrnwcm1tudhojeazka",client_secret:"60lAp5OUOMOdKSLEo60PvDbIF09P600J"})).then((e=>{t=e.data.access_token,window.localStorage.accessToken=t,this.access=t,this.getMe(),this.getMediaFolder()}))}else t=window.localStorage.accessToken,this.access=t,this.getMe(),this.getMediaFolder()},methods:{getMe(){axios.get("https://api.box.com/2.0/users/me",{headers:{Authorization:"Bearer "+this.access}}).then((e=>{console.log(e.data),this.user=e.data.name.split(" ")[0]}))},getMediaFolder(){axios.get("https://api.box.com/2.0/folders/125596063649/items",{headers:{Authorization:"Bearer "+this.access}}).then((e=>{let t=e.data.entries;this.results=t;for(var a=0;a<this.results.length;a++)this.getFileInfo(t[a].id,t[a].name)}))},getFileInfo(e,t){axios.get("https://api.box.com/2.0/files/"+e,{headers:{Authorization:"Bearer "+this.access}}).then((a=>{if(null!=a.data.shared_link){var n=a.data.shared_link.download_url;this.createEntry(e,t,n)}else this.createSharedLink(e,t)}))},createSharedLink(e,t){axios.put("https://api.box.com/2.0/files/"+e,{shared_link:{access:"open",permissions:{can_download:!0}}},{headers:{Authorization:"Bearer "+this.access}}).then((a=>{var n=a.data.shared_link.download_url;this.createEntry(e,t,n)}))},createEntry(e,t,a){var n,s=a.split(/[#?]/)[0].split(".").pop().trim();n="jpg"==s||"jpeg"==s||"png"==s||"gif"==s?"image":"mp4"==s||"mov"==s||"avi"==s||"wmv"==s?"video":"other",this.images.push({id:e,name:t,link:a,type:n})}}},h=a(744);const g=(0,h.Z)(p,[["render",d],["__scopeId","data-v-25e98122"]]);var m=g}}]);
//# sourceMappingURL=about.62eb5da6.js.map