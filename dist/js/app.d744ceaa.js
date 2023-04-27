(function(){var e={98025:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{baseListFetch:function(){return N},commonFetch:function(){return L},genApiService:function(){return _}});var o=n(20144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u=n(1001),c={},s=(0,u.Z)(c,a,i,!1,null,null,null),f=s.exports,d=n(78345);o["default"].use(d.ZP);const l=[{name:"databoard",path:"/",component:()=>n.e(397).then(n.bind(n,85397)),meta:{title:"看板"}}],p=new d.ZP({base:"/databoard/",routes:l,mode:"history"});var h=p,m=n(64720),g=n.n(m),v=n(29265),y=n(96486),b=n.n(y),w=(n(21703),n(80129)),O=n.n(w),S=n(9669),j=n.n(S),k=n(74865),E=n.n(k);let C,P=0;const A=j().create({timeout:5e4});function T({method:e="get",url:t,data:n,params:r,options:a={},headers:i={},isJSON:u=!0,loadingShow:c=!1,nprogressShow:s=!0,isFile:f=!1,successCodes:d=[]}){s&&E().start(),!C&&c&&(C=m.Loading.service({target:document.querySelector(".el-main")}));let l=null;l=u||n instanceof FormData||"string"===typeof n?n:O().stringify(n);const p={method:e,url:`/databoard-api/${t}`,data:l,params:r,...a};return p.headers={...i},A(p).then((function(e){if(f)return e;const{data:t}=e,n=[1e3,200].concat(d).findIndex((e=>String(e)===String(t.code)))>-1;if(t.success||n)return t;throw{code:t.code,message:t.msg}})).catch((e=>{if(e.response){const{data:t,status:n,statusText:r}=e.response;e={code:String(t.code||n),message:t.message||t.msg||r||"请求错误"}}else e instanceof Error&&(e={code:e.name,message:e});if("1998"!==e.code&&"2005"!==e.code)throw e;{if(P>0)return;P++;const t=1;(0,m.Message)({type:"warning",message:`登录超时，${t}秒后请重新登陆。`}),setTimeout((function(){throw P=0,p.headers={Authorization:""},o["default"].prototype.$ssoLogout(void 0,null),e}),1e3*t)}})).finally((()=>{s&&E().done(),C&&c&&C.close(),C=""}))}function x(e,t){const n={service:e};return Object.keys(e).forEach((r=>{"function"===typeof e[r]&&t.indexOf(r)<0?n[r]=async(t,n)=>e[r](t).then((e=>(n&&(0,m.Notification)({title:"操作成功",type:"success",message:n}),e))).catch((e=>((0,m.Notification)({title:`操作失败（Code = ${e.code}）`,type:"error",message:e.message}),Promise.reject(e)))):n[r]=e[r]})),n}var $=x;class F extends Error{constructor(e){super(e),this.code=-1,this.name="BaseListFetchParamsError"}}function N({apiJson:e={},apiKey:t,data:n,params:r}){const o=e[t];if(!o)return Promise.reject(new F(`缺少 ${t} 服务，请在管理后台配置对应的服务`));const[a,i]=o;return this.fetch({url:a,method:i,data:n,params:r})}function L(e){return this.fetch(e)}function _(e={},t={}){const n={};return Object.keys(e).forEach((r=>{const[o,a]=e[r];n[r]=({data:e,params:n,...r}={},i)=>this.commonFetch({...t,...r,url:o,method:a,data:e,params:n},i).then((({data:e})=>e))})),e=>{const t=n[e];if(!t){const t=`缺少 ${e} 服务，请在管理后台配置对应的服务`;return m.Message.error(t),()=>Promise.reject(new F(t))}return t}}const M={app:o["default"],init(e){e()},fetch:T,...r},B=$(M,["app","init","fetch","genApiService"]);o["default"].prototype.$service=B;var Z=n(13464);o["default"].prototype.$cUtils=Z.ZP,o["default"].prototype.$echarts=v,o["default"].prototype.$lodash=b(),o["default"].config.productionTip=!1,o["default"].use(g()),new o["default"]({router:h,render:e=>e(f)}).$mount("#app")},99678:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".1e02cf63.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".657b667a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="databoard:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/databoard/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={397:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0,949:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(949!=t){var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkdataboard"]=self["webpackChunkdataboard"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[381,704,200,706,878,946,209,135,895,335,772,30,431,733,144,415,20,439,317,488,729,640,905,448,442,41,992,949,348,141,602,86,456,870,139,957],(function(){return n(98025)}));r=n.O(r)})();