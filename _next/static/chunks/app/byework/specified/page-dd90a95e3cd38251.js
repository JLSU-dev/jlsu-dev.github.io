(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172,440,813],{6001:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4839,23)),Promise.resolve().then(r.t.bind(r,916,23)),Promise.resolve().then(r.t.bind(r,1456,23)),Promise.resolve().then(r.bind(r,1373))},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(306),o=r(666),i=r(7970),l=n._(r(5514));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=i.Image},1373:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(5155),o=r(2115),i=r(2888),l=r(4839),a=r.n(l),s=r(4146),c=r.n(s);function u(){let e="/byework",[t,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);let l=t=>{if(window.location.pathname===e){let r=document.querySelector(t);r&&r.scrollIntoView({behavior:"smooth"}),window.history.pushState(null,"","".concat(e).concat(t))}else window.location.href="".concat(e).concat(t);r(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{className:"w-full bg-white shadow-sm z-10",children:(0,n.jsxs)("div",{className:"container mx-auto p-4 flex items-center justify-between",children:[(0,n.jsx)(a(),{href:"/byework",className:"flex items-center",children:(0,n.jsx)(c(),{src:"/images/byework/logo.png",alt:"Byeバイトのロゴ",width:130,height:120,className:"h-12 md:h-14"})}),(0,n.jsx)("button",{className:"text-white bg-red-500 hover:bg-red-400 transition rounded-full p-2 focus:outline-none shadow-lg top-4 md:top-6 right-4 md:right-8 z-10 md:scale-125 md:fixed",onClick:()=>r(!t),"aria-label":t?"メニューを閉じる":"メニューを開く",children:t?(0,n.jsx)(i.yGN,{size:28}):(0,n.jsx)(i.ND1,{size:28})})]})}),(0,n.jsxs)("div",{className:"fixed inset-0 bg-gradient-to-br from-red-300 to-red-600 text-white flex flex-col items-center justify-center space-y-6 z-20 transform transition-all duration-300 ".concat(t?"translate-y-0 opacity-100":"-translate-y-full opacity-0 pointer-events-none"),children:[(0,n.jsx)("button",{className:"absolute top-4 md:top-6 right-4 md:right-8 text-white focus:outline-none z-50",onClick:()=>r(!1),"aria-label":"メニューを閉じる",children:(0,n.jsx)(i.yGN,{size:32})}),[{text:"Top",href:"#top"},{text:"料金プラン",href:"#price"},{text:"お支払い方法",href:"#payment"},{text:"Byeバイトの特徴",href:"#features"},{text:"サービス比較",href:"#compare"},{text:"サービスの流れ",href:"#flow"},{text:"よくある質問",href:"#faq"}].map((e,t)=>(0,n.jsx)("button",{onClick:()=>l(e.href),className:"text-lg font-semibold hover:underline",children:e.text},t))]})]})}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:s}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[841,565,844,698,441,517,358],()=>t(6001)),_N_E=e.O()}]);