"use strict";(self.webpackChunkpeeji_docs=self.webpackChunkpeeji_docs||[]).push([[207],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7896),r=(n(2784),n(876));const a={title:"API",sidebar_position:4},o=void 0,l={unversionedId:"api",id:"api",title:"API",description:"The core export of Peeji is peeji, a function that returns an object with the",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/peeji/api",draft:!1,editUrl:"https://github.com/meesvandongen/peeji/tree/main/packages/peeji-docs/docs/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"API",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"React Example",permalink:"/peeji/react"}},p={},s=[{value:"PeejiOptions",id:"peejioptions",level:2},{value:"<code>page</code>",id:"page",level:3},{value:"<code>pageCount</code>",id:"pagecount",level:3},{value:"<code>showLeft</code>",id:"showleft",level:3},{value:"<code>showRight</code>",id:"showright",level:3},{value:"PeejiResult",id:"peejiresult",level:2},{value:"<code>pages</code>",id:"pages",level:3},{value:"<code>hasPrevious</code>",id:"hasprevious",level:3},{value:"<code>hasNext</code>",id:"hasnext",level:3},{value:"Peeji",id:"peeji",level:2},{value:"<code>isEllipsis</code>",id:"isellipsis",level:3},{value:"<code>num</code>",id:"num",level:3},{value:"<code>key</code>",id:"key",level:3},{value:"<code>isActive</code>",id:"isactive",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The core export of Peeji is ",(0,r.kt)("inlineCode",{parentName:"p"},"peeji"),", a function that returns an object with the\npagination data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function peeji(options: PeejiOptions): PeejiResult;\n")),(0,r.kt)("h2",{id:"peejioptions"},"PeejiOptions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"peeji")," accepts a single object with the following options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PeejiOptions {\n  page: number;\n  pageCount: number;\n  showLeft?: number;\n  showRight?: number;\n}\n")),(0,r.kt)("h3",{id:"page"},(0,r.kt)("inlineCode",{parentName:"h3"},"page")),(0,r.kt)("p",null,"The current page number."),(0,r.kt)("h3",{id:"pagecount"},(0,r.kt)("inlineCode",{parentName:"h3"},"pageCount")),(0,r.kt)("p",null,"The total number of pages."),(0,r.kt)("h3",{id:"showleft"},(0,r.kt)("inlineCode",{parentName:"h3"},"showLeft")),(0,r.kt)("p",null,"The number of pages to show to the left of the current page. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("h3",{id:"showright"},(0,r.kt)("inlineCode",{parentName:"h3"},"showRight")),(0,r.kt)("p",null,"The number of pages to show to the right of the current page. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("h2",{id:"peejiresult"},"PeejiResult"),(0,r.kt)("p",null,"The result of ",(0,r.kt)("inlineCode",{parentName:"p"},"peeji")," is an object with the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PeejiResult {\n  pages: Peeji[];\n  hasPrevious: boolean;\n  hasNext: boolean;\n}\n")),(0,r.kt)("h3",{id:"pages"},(0,r.kt)("inlineCode",{parentName:"h3"},"pages")),(0,r.kt)("p",null,"An array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Peeji")," objects."),(0,r.kt)("h3",{id:"hasprevious"},(0,r.kt)("inlineCode",{parentName:"h3"},"hasPrevious")),(0,r.kt)("p",null,"Whether there is a previous page. Can be used to determine whether to show a\nprevious page button."),(0,r.kt)("h3",{id:"hasnext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hasNext")),(0,r.kt)("p",null,"Whether there is a next page. Can be used to determine whether to show a next\npage button."),(0,r.kt)("h2",{id:"peeji"},"Peeji"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Peeji")," object represents something to render in the pagination UI. It has the\nfollowing properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Peeji =\n  | {\n      isEllipsis: false;\n      num: number;\n      key: string;\n      isActive: boolean;\n    }\n  | {\n      isEllipsis: true;\n      key: string;\n    };\n")),(0,r.kt)("h3",{id:"isellipsis"},(0,r.kt)("inlineCode",{parentName:"h3"},"isEllipsis")),(0,r.kt)("p",null,"Whether this is an ellipsis object. If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the other properties are not\npresent."),(0,r.kt)("h3",{id:"num"},(0,r.kt)("inlineCode",{parentName:"h3"},"num")),(0,r.kt)("p",null,"The page number. Only present if ",(0,r.kt)("inlineCode",{parentName:"p"},"isEllipsis")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},"key")),(0,r.kt)("p",null,"A unique key for this object. This can be supplied to React as the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," prop."),(0,r.kt)("h3",{id:"isactive"},(0,r.kt)("inlineCode",{parentName:"h3"},"isActive")),(0,r.kt)("p",null,"Whether this page is the current page. Only present if ",(0,r.kt)("inlineCode",{parentName:"p"},"isEllipsis")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))}c.isMDXComponent=!0}}]);