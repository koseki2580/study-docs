"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[8598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:r,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var b=r(2389);const h="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(p(t),u(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===t})}),r??t)})))}function N(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(N,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},7936:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){let{children:t,color:r}=e;return a.createElement("span",{style:{color:r}},t)}},7643:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);const n="text_ward_j2fN";function l(e){let{children:t}=e;return a.createElement("div",{className:`${n}`},t)}},9014:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n="split_BsMO",l="border_none_AQxW";function o(e){let{children:t,border:r}=e;return a.createElement("span",{className:`${n} ${"false"===r?l:""}`},t)}},3355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));r(4866),r(5162),r(7936),r(9014),r(7643);const l={title:"\u3068\u308a\u3042\u3048\u305a\u307e\u3068\u3081",sidebar_label:"\u3068\u308a\u3042\u3048\u305a\u307e\u3068\u3081",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},o=void 0,i={unversionedId:"Network/other",id:"Network/other",title:"\u3068\u308a\u3042\u3048\u305a\u307e\u3068\u3081",description:"\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9 \u3068\u306f",source:"@site/docs/03-Network/99-other.md",sourceDirName:"03-Network",slug:"/Network/other",permalink:"/study-docs/docs/Network/other",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/03-Network/99-other.md",tags:[{label:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/study-docs/docs/tags/\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1677912846,formattedLastUpdatedAt:"2023\u5e743\u67084\u65e5",sidebarPosition:99,frontMatter:{title:"\u3068\u308a\u3042\u3048\u305a\u307e\u3068\u3081",sidebar_label:"\u3068\u308a\u3042\u3048\u305a\u307e\u3068\u3081",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},sidebar:"NetworkSidebar",previous:{title:"WAN\u9ad8\u901f\u5316\u88c5\u7f6e",permalink:"/study-docs/docs/Network/was"}},u={},s=[{value:"\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9 \u3068\u306f",id:"\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9-\u3068\u306f",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"STUN",id:"stun",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003-1",level:3}],c={toc:s};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9-\u3068\u306f"},"\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9 \u3068\u306f"),(0,n.kt)("p",null,"\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306f\u3001\u30b5\u30fc\u30d0\u30fb\u30eb\u30fc\u30bf\u304c\u3082\u3064\u4eee\u60f3\u7684\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u3053\u3068\u3067\u3042\u308a\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7279\u5fb4\u304c\u3042\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6a5f\u5668\u304c\u30c0\u30a6\u30f3\u3057\u306a\u3044\u9650\u308a\u30c0\u30a6\u30f3\u3057\u306a\u3044"),(0,n.kt)("li",{parentName:"ul"},"\u4efb\u610f\u306e IP \u30a2\u30c9\u30ec\u30b9\u3092\u4ed8\u4e0e\u3067\u304d\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u8907\u6570\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b")),(0,n.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u304a\u3044\u3066\u7279\u5b9a\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u6307\u5b9a\u3059\u308b\u969b\u306b\u30eb\u30fc\u30d7\u30d0\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u304c\u6307\u5b9a\u3055\u308c\u308b\u3002"),(0,n.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nozawana44.hatenablog.com/entry/2019/01/20/204557"},"https://nozawana44.hatenablog.com/entry/2019/01/20/204557"))),(0,n.kt)("h2",{id:"stun"},"STUN"),(0,n.kt)("p",null,"Session Traversal Utilities for NAT(STUN)\u306f NAT \u30c8\u30e9\u30d0\u30fc\u30b5\u30eb(NAT \u8d85\u3048)\u306e\u65b9\u6cd5\u306e 1 \u3064\u3068\u3057\u3066\u6a19\u6e96\u5316\u3055\u308c\u305f\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"STUN \u6d41\u308c",src:r(5310).Z,title:"STUN \u6d41\u308c",width:"712",height:"379"})),(0,n.kt)("p",null,"STUN \u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a 20 \u30d0\u30a4\u30c8\u306e\u69cb\u9020\u3092\u3057\u3066\u3044\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"STUN\u30e1\u30c3\u30bb\u30fc\u30b8",src:r(6263).Z,title:"STUN\u30e1\u30c3\u30bb\u30fc\u30b8",width:"702",height:"241"})),(0,n.kt)("p",null,"\u540c\u3058\u30dd\u30fc\u30c8\u756a\u53f7\u3092\u4f7f\u7528\u3057\u3066\u3044\u305f\u5834\u5408\u306b STUN \u30d1\u30b1\u30c3\u30c8\u3067\u3042\u308b\u3068\u8b58\u5225\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u5148\u982d\u306e 2bit \u306f\u5fc5\u305a",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8489"},"RFC8489"),"\n\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message Type"),(0,n.kt)("p",{parentName:"li"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30af\u30e9\u30b9(\u30ea\u30af\u30a8\u30b9\u30c8\u30fb\u6210\u529f\u30ec\u30b9\u30dd\u30f3\u30b9\u30fb\u30a8\u30e9\u30fc\u30ec\u30b9\u30dd\u30f3\u30b9\u30fb\u6307\u793a)\u3068\u30e1\u30c3\u30bb\u30fc\u30b8\u30e1\u30bd\u30c3\u30c9\u3067\u3042\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message Length"),(0,n.kt)("p",{parentName:"li"},"20 \u30d0\u30a4\u30c8\u3092\u9664\u3044\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30a4\u30ba\u3092\u683c\u7d0d\u3059\u308b\u3002STUN \u30e1\u30c3\u30bb\u30fc\u30b8\u306f 4 \u306e\u500d\u6570\u306b\u306a\u308b\u3088\u3046\u306b\u6271\u308f\u308c\u308b\u305f\u3081\u3001\u5fc5\u305a\u6700\u5f8c\u306e 2bit \u304c 0 \u3068\u306a\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Magic Cookie"),(0,n.kt)("p",{parentName:"li"},"\u56fa\u5b9a\u3067\u3042\u308a\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"0x2112A442"),"\u304c\u683c\u7d0d\u3055\u308c\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transaction ID"),(0,n.kt)("p",{parentName:"li"},"STUN \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4e00\u610f\u306b\u8b58\u5225\u3059\u308b\u305f\u3081\u4f7f\u7528\u3055\u308c\u308b\u3002"))),(0,n.kt)("p",null,"\u30d8\u30c3\u30c0\u30fc\u306e\u5f8c\u306f\u4ee5\u4e0b\u306e\u5f62\u5f0f\u306e\u5024\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u3002",(0,n.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc5389.html"},"RFC5389"),"\u306e 15 \u7bc0\u306b\u8a73\u7d30\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"STUN\u30e1\u30c3\u30bb\u30fc\u30b8 \u5c5e\u6027",src:r(1216).Z,title:"STUN\u30e1\u30c3\u30bb\u30fc\u30b8 \u5c5e\u6027",width:"701",height:"121"})),(0,n.kt)("p",null,"IP \u30a2\u30c9\u30ec\u30b9\u306e\u3084\u308a\u3068\u308a\u3092\u3059\u308b\u306e\u306b\u5fc5\u8981\u306a",(0,n.kt)("inlineCode",{parentName:"p"},"MAPPED-ADDRESS"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"XOR-MAPPED-ADDRESS"),"\u3060\u3051\u8a73\u7d30\u3092\u8a18\u8ff0\u3059\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MAPPED-ADDRESS"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MAPPED-ADDRESS",src:r(6934).Z,title:"MAPPED-ADDRESS",width:"701",height:"121"})),(0,n.kt)("p",{parentName:"li"},"\u521d\u3081\u306b\u5b58\u5728\u3059\u308b 0 \u304c 8bit \u7d9a\u3044\u3066\u3044\u308b\u306e\u306f 32bit \u306b\u5408\u308f\u305b\u308b\u305f\u3081\u306b\u4ed8\u52a0\u3055\u308c\u3066\u3044\u308b\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"Family"),"\u306f IPv4 \u3067\u3042\u308c\u3070",(0,n.kt)("inlineCode",{parentName:"p"},"0x01"),"\u3001IPv6 \u3067\u3042\u308c\u3070",(0,n.kt)("inlineCode",{parentName:"p"},"0x02"),"\u304c\u683c\u7d0d\u3055\u308c\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"XOR-MAPPED-ADDRESS"),(0,n.kt)("p",{parentName:"li"},"\u96e3\u8aad\u5316\u304c\u884c\u308f\u308c\u305f MAPPED-ADDRESS \u3067\u3042\u308b\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"XOR-MAPPED-ADDRESS",src:r(4352).Z,title:"XOR-MAPPED-ADDRESS",width:"701",height:"121"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Family"),"\u306f MAPPED-ADDRESS \u3068\u540c\u3058\u3067\u3042\u308b\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"X-Port"),"\u306f Port \u756a\u53f7\u3092\u30d0\u30a4\u30c8\u3067\u53d6\u5f97\u3057\u3001Magic Cookie \u306e\u6700\u4e0a\u4f4d 16bit \u3068 XOR \u3057\u305f\u7d50\u679c\u3092\u683c\u7d0d\u3059\u308b\u3002\n",(0,n.kt)("inlineCode",{parentName:"p"},"X-Address"),"\u306f IPv4 \u306e\u5834\u5408\u306f Magic Cookie \u3068 XOR \u3057\u305f\u7d50\u679c\u3092\u683c\u7d0d\u3057\u3001IPv6 \u306e\u5834\u5408\u306f\u3001Magic Cookie + Transaction ID \u306e 128bit \u3067 XOR \u3057\u305f\u7d50\u679c\u3092\u683c\u7d0d\u3059\u308b\u3002\n\u6700\u521d\u306e X \u306e 8 \u30d0\u30a4\u30c8\u306f MAPPED-ADDRESS \u3068\u540c\u3058\u3067 32bit \u306b\u3059\u308b\u305f\u3081\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u3002(X \u306b\u3057\u3066\u3044\u308b\u306e\u306f RFC \u3067 X \u3068\u8868\u73fe\u3055\u308c\u3066\u3044\u308b\u304b\u3089)"))),(0,n.kt)("h3",{id:"\u53c2\u8003-1"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ja.wikipedia.org/wiki/STUN"},"Wikipedia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc5389.html"},"RFC5389"))))}p.isMDXComponent=!0},6263:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/stun-1.drawio-b7fcec9ba4dbc510c80709e2e50dd31b.svg"},5310:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/stun-2.drawio-7f6662778317a220279f8bccc91d009c.svg"},1216:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/stun-3.drawio-209636d2881c4d1561f1cc5a676c3234.svg"},6934:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/stun-4.drawio-ec0b2caa56233a20035e047375d2d0df.svg"},4352:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/stun-5.drawio-c4e28b0c7db8b5a76c3dd995c8558d22.svg"}}]);