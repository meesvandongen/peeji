"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[827],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||s;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7896),i=(r(2784),r(876));const s={title:"Usage",sidebar_position:2},a=void 0,o={unversionedId:"usage",id:"usage",title:"Usage",description:"",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Usage",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Peeji",permalink:"/"},next:{title:"React Example",permalink:"/react"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { peeji } from "peeji";\n\npeeji({\n  page: 6, // current page\n  pageCount: 11, // 11 pages\n  showLeft: 1, // defaults to 2\n  showRight: 2, // defaults to 2\n});\n\n// Output:\n{\n  hasNext: true,\n  hasPrevious: true,\n  pages: [\n    { isActive: false, isEllipsis: false, key: "1", num: 1 },\n    { isEllipsis: true, key: "left-ellipsis" },\n    { isActive: false, isEllipsis: false, key: "5", num: 5 },\n    { isActive: true, isEllipsis: false, key: "6", num: 6 },\n    { isActive: false, isEllipsis: false, key: "7", num: 7 },\n    { isActive: false, isEllipsis: false, key: "8", num: 8 },\n    { isEllipsis: true, key: "right-ellipsis" },\n    { isActive: false, isEllipsis: false, key: "11", num: 11 },\n  ],\n}\n')))}u.isMDXComponent=!0}}]);