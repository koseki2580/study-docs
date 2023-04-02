"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[9613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),u=r(6550),s=r(1980),i=r(7392),c=r(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,i]=f({queryString:r,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),k(e)}),[i,k,l]),tabValues:l}}var b=r(2389);const h="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(p(t),s(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},7936:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){let{children:t,color:r}=e;return n.createElement("span",{style:{color:r}},t)}},7643:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a="text_ward_j2fN";function l(e){let{children:t}=e;return n.createElement("div",{className:`${a}`},t)}},9014:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a="split_BsMO",l="border_none_AQxW";function o(e){let{children:t,border:r}=e;return n.createElement("span",{className:`${a} ${"false"===r?l:""}`},t)}},6412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162),r(7936),r(9014),r(7643);const l={title:"OSPF",sidebar_label:"OSPF",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},o=void 0,u={unversionedId:"Network/ospf",id:"Network/ospf",title:"OSPF",description:"OSPF \u3068\u306f",source:"@site/docs/03-Network/16-ospf.md",sourceDirName:"03-Network",slug:"/Network/ospf",permalink:"/study-docs/docs/Network/ospf",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/03-Network/16-ospf.md",tags:[{label:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/study-docs/docs/tags/\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1680422378,formattedLastUpdatedAt:"2023\u5e744\u67082\u65e5",sidebarPosition:16,frontMatter:{title:"OSPF",sidebar_label:"OSPF",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},sidebar:"NetworkSidebar",previous:{title:"BGP-4",permalink:"/study-docs/docs/Network/bgp4"},next:{title:"WAN\u9ad8\u901f\u5316\u88c5\u7f6e",permalink:"/study-docs/docs/Network/was"}},s={},i=[{value:"OSPF \u3068\u306f",id:"ospf-\u3068\u306f",level:2},{value:"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",level:3},{value:"AS \u5916\u90e8\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",id:"as-\u5916\u90e8\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:i};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ospf-\u3068\u306f"},"OSPF \u3068\u306f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2328.html"},"OSPF")," \u306f\u3001Interior Gateway Protocol\uff08IGP\uff09\u3068\u3057\u3066\u5206\u985e\u3055\u308c\u3001IP \u30d1\u30b1\u30c3\u30c8\u30d8\u30c3\u30c0\u30fc\u306b\u3042\u308b\u5b9b\u5148 IP \u30a2\u30c9\u30ec\u30b9\u306e\u307f\u306b\u57fa\u3065\u3044\u3066 IP \u30d1\u30b1\u30c3\u30c8\u3092\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3002\n\u307e\u305f\u3001\u52d5\u7684\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308a\u3001AS \u5185\u306e\u30c8\u30dd\u30ed\u30b8\u30fc\u306e\u5909\u5316(\u30eb\u30fc\u30bf\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u969c\u5bb3\u306a\u3069)\u3092\u3059\u3070\u3084\u304f\u691c\u51fa\u3057\u3001\u30eb\u30fc\u30d7\u306e\u306a\u3044\u65b0\u3057\u3044\u30eb\u30fc\u30c8\u3092\u8a08\u7b97\u3059\u308b\u3002"),(0,a.kt)("p",null,"OSPF \u306f\u30ea\u30f3\u30af\u30b9\u30c6\u30fc\u30c8\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308a\u3001\u5404\u30eb\u30fc\u30bf\u30fc\u306f AS \u306e\u30c8\u30dd\u30ed\u30b8\u3092\u8aac\u660e\u3059\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u6301\u3061\u3001\u30ea\u30f3\u30af\u72b6\u614b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u547c\u3070\u308c\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4fdd\u6301\u3057\u3066\u3044\u308b\u3002\n\u3059\u3079\u3066\u306e\u30eb\u30fc\u30bf\u30fc\u306f\u3001\u307e\u3063\u305f\u304f\u540c\u3058\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0(",(0,a.kt)("a",{parentName:"p",href:"/docs/Algorithm/dijkstra"},"\u30c0\u30a4\u30af\u30b9\u30c8\u30e9\u6cd5"),")\u3092\u4e26\u884c\u3057\u3066\u5b9f\u884c\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u5b9b\u5148\u3078\u306e\u7b49\u30b3\u30b9\u30c8\u30eb\u30fc\u30c8\u304c\u8907\u6570\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306f\u305d\u308c\u3089\u306e\u9593\u3067\u5747\u7b49\u306b\u5206\u6563\u3055\u308c\u3001Equal-cost multipath \u3068\u3044\u3046\u3002"),(0,a.kt)("p",null,"AS \u306e\u30ea\u30f3\u30af\u72b6\u614b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306f\u3001\u6709\u5411\u30b0\u30e9\u30d5\u3067\u8a18\u8ff0\u3059\u308b\u3002\u30eb\u30fc\u30bf\u30fc\u3068\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u30b0\u30e9\u30d5\u3067\u8868\u3057\u3066\u3044\u308b\u3002\u9802\u70b9\u306f\u30eb\u30fc\u30bf\u3092\u8868\u3057\u3001\u30b0\u30e9\u30d5\u306e\u8fba(\u30a8\u30c3\u30b8)\u306f\u3001\u7269\u7406\u7684\u306a\u30dd\u30a4\u30f3\u30c8\u30c4\u30fc\u30dd\u30a4\u30f3\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4ecb\u3057\u3066\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b 2 \u3064\u306e\u30eb\u30fc\u30bf\u30fc\u304c\u63a5\u7d9a\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u3002\u9802\u70b9\u304b\u3089\u8fba\u304c\u51fa\u3066\u3044\u308b\u3053\u3068\u306f\u3001\u30eb\u30fc\u30bf\u30fc\u304c\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u306b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u30012 \u7a2e\u985e\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u5b58\u5728\u3059\u308b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30c8\u30e9\u30f3\u30b8\u30c3\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30ed\u30fc\u30ab\u30eb\u3067\u767a\u4fe1\u3055\u308c\u305f\u3082\u306e\u3067\u3082\u30ed\u30fc\u30ab\u30eb\u3067\u9001\u4fe1\u3055\u308c\u305f\u3082\u306e\u3067\u3082\u306a\u3044\u30c7\u30fc\u30bf\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u4f1d\u9001\u3067\u304d\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u3042\u308a\u3001\u5165\u529b\u30a8\u30c3\u30b8\u3068\u51fa\u529b\u30a8\u30c3\u30b8\u306e\u4e21\u65b9\u3092\u6301\u3064\u30b0\u30e9\u30d5\u9802\u70b9\u3067\u8868\u3059\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u30b9\u30bf\u30d6\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9802\u70b9\u306b\u306f\u5165\u529b\u30a8\u30c3\u30b8\u306e\u307f")))),(0,a.kt)("p",null,"OSPF \u3067\u306f\u3001\u96a3\u63a5\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u30db\u30b9\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u30b0\u30eb\u30fc\u30d7\u5316\u3067\u304d\u3001\u30b0\u30eb\u30fc\u30d7\u306f\u3001\u542b\u307e\u308c\u3066\u3044\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u3044\u305a\u308c\u304b 1 \u3064\u3078\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064\u30eb\u30fc\u30bf\u30fc\u3068\u5408\u308f\u305b\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u30a8\u30ea\u30a2"),"\u3068\u547c\u3070\u308c\u308b\u3002\u5404\u30a8\u30ea\u30a2\u306b\u306f\u72ec\u81ea\u306e\u30ea\u30f3\u30af\u30b9\u30c6\u30fc\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u5bfe\u5fdc\u3059\u308b\u30b0\u30e9\u30d5\u304c\u5b58\u5728\u3059\u308b\u3002\u8907\u6570\u306e\u30a8\u30ea\u30a2\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30eb\u30fc\u30bf\u30fc\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc"),"\u3068\u547c\u3070\u308c\u308b\u3002"),(0,a.kt)("p",null,"\u7279\u5b9a\u306e\u30a8\u30ea\u30a2\u306e\u5185\u90e8\u306b\u3042\u308b\u30eb\u30fc\u30bf\u30fc\u306f\u3001\u30a8\u30ea\u30a2\u5185\u306e\u30c8\u30dd\u30ed\u30b8\u306e\u8a73\u7d30\u3092\u77e5\u3063\u3066\u3044\u308b\u304c\u3001\u5916\u90e8\u306b\u3042\u308b\u3001\u8a73\u7d30\u306a\u30c8\u30dd\u30ed\u30b8\u306b\u3064\u3044\u3066\u306f\u4f55\u3082\u77e5\u3089\u306a\u3044\u3002AS \u5168\u4f53\u3092\u5358\u4e00\u306e\u30ea\u30f3\u30af\u30b9\u30c6\u30fc\u30c8\u30c9\u30e1\u30a4\u30f3\u3068\u3057\u3066\u6271\u3046\u5834\u5408\u3068\u6bd4\u8f03\u3057\u3066\u3001\u30d7\u30ed\u30c8\u30b3\u30eb\u306f\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u5927\u5e45\u306b\u524a\u6e1b\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,"AS \u3067\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u306f\u3001\u30d1\u30b1\u30c3\u30c8\u306e\u9001\u4fe1\u5143\u3068\u5b9b\u5148\u304c\u540c\u3058\u30a8\u30ea\u30a2(\u30a8\u30ea\u30a2\u5185\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0)\u306b\u3042\u308b\u304b\u3001\u7570\u306a\u308b\u30a8\u30ea\u30a2(\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0)\u306b\u3042\u308b\u304b\u306b\u5fdc\u3058\u3066\u884c\u308f\u308c\u308b\u3002\u30a8\u30ea\u30a2\u5185\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3067\u306f\u3001\u30d1\u30b1\u30c3\u30c8\u306f\u30a8\u30ea\u30a2\u5185\u3067\u53d6\u5f97\u3055\u308c\u305f\u60c5\u5831\u306e\u307f\u306b\u57fa\u3065\u3044\u3066\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u308c\u3001\u30a8\u30ea\u30a2\u5916\u304b\u3089\u53d6\u5f97\u3057\u305f\u7d4c\u8def\u60c5\u5831\u306f\u4f7f\u7528\u3067\u304d\u306a\u3044\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30ea\u30a2\u5185\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u304c\u4e0d\u6b63\u306a\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u306e\u633f\u5165\u304b\u3089\u4fdd\u8b77\u3055\u308c\u308b\u3002"),(0,a.kt)("p",null,"OSPF \u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u306f\u7279\u5225\u306a OSPF \u30a8\u30ea\u30a2 0 \u3067\u3042\u308a\u3001\u5e38\u306b\u3059\u3079\u3066\u306e\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u306f\u3001\u975e\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u9593\u3067\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u914d\u4fe1\u3059\u308b\u5f79\u5272\u3092\u679c\u305f\u3059\u305f\u3081\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u306f\u5168\u3066\u306e\u30a8\u30ea\u30a2\u3068\u96a3\u63a5\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u305f\u3060\u3057\u3001\u7269\u7406\u7684\u306b\u96a3\u63a5\u3057\u3066\u3044\u308b\u5fc5\u8981\u306f\u306a\u3044\u3002"),(0,a.kt)("p",null,"2 \u3064\u306e\u975e\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u9593\u3067\u30d1\u30b1\u30c3\u30c8\u3092\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u5834\u5408\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u304c\u4f7f\u7528\u3055\u308c\u308b\u3002\u30d1\u30b1\u30c3\u30c8\u304c\u79fb\u52d5\u3059\u308b\u30d1\u30b9\u306f\u30013 \u3064\u306e\u9023\u7d9a\u3057\u305f\u90e8\u5206\u306b\u5206\u5272\u3067\u304d\u3001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9001\u4fe1\u5143\u304b\u3089\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u3078\u306e\u30a8\u30ea\u30a2\u5185\u30d1\u30b9"),(0,a.kt)("li",{parentName:"ul"},"\u9001\u4fe1\u5143\u3068\u5b9b\u5148\u30a8\u30ea\u30a2\u9593\u306e\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30d1\u30b9"),(0,a.kt)("li",{parentName:"ul"},"\u5b9b\u5148\u306e\u5225\u306e\u30a8\u30ea\u30a2\u5185\u30d1\u30b9")),(0,a.kt)("p",null,"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u306f\u3001AS \u4e0a\u3067\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u3092\u30cf\u30d6\u3068\u3057\u3066\u3001\u975e\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306e\u305d\u308c\u305e\u308c\u3092\u30b9\u30dd\u30fc\u30af\u3068\u3057\u305f\u30b9\u30bf\u30fc\u69cb\u6210\u3068\u8003\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,"AS \u304c OSPF \u30a8\u30ea\u30a2\u306b\u5206\u5272\u3055\u308c\u308b\u3068\u3001\u30eb\u30fc\u30bf\u30fc\u306f\u6a5f\u80fd\u306b\u5f93\u3063\u3066\u3055\u3089\u306b\u6b21\u306e 4 \u3064\u306b\u5206\u5272\u3055\u308c\u308b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u30eb\u30fc\u30bf\u30fc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540c\u3058\u30a8\u30ea\u30a2\u306b\u5c5e\u3059\u308b\u76f4\u63a5\u63a5\u7d9a\u3055\u308c\u305f\u30eb\u30fc\u30bf"))),(0,a.kt)("li",{parentName:"ul"},"\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8907\u6570\u306e\u30a8\u30ea\u30a2\u306b\u63a5\u7d9a\u3059\u308b\u30eb\u30fc\u30bf\u30fc\u3002\u63a5\u7d9a\u3055\u308c\u305f\u30a8\u30ea\u30a2\u306e\u30c8\u30dd\u30ed\u30b8\u30fc\u60c5\u5831\u3092\u51dd\u7e2e\u3057\u3066\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u306b\u9001\u4fe1\u3059\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30eb\u30fc\u30bf\u30fc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u3078\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u6301\u3064\u30eb\u30fc\u30bf\u30fc\u3002\u8907\u6570\u306e\u30a8\u30ea\u30a2\u306b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3059\u308b\u3059\u3079\u3066\u306e\u30eb\u30fc\u30bf\u30fc\u304c\u542b\u307e\u308c\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},"AS \u5883\u754c\u30eb\u30fc\u30bf\u30fc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u306e AS \u306b\u5c5e\u3059\u308b\u30eb\u30fc\u30bf\u30fc\u3068\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u4ea4\u63db\u3059\u308b\u30eb\u30fc\u30bf\u30fc\u3002AS \u5168\u4f53\u3067 AS \u5916\u90e8\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u9001\u4fe1\u3059\u308b\u3002")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a8\u30ea\u30a2",src:r(3950).Z,title:"\u30a8\u30ea\u30a2",width:"1082",height:"462"})),(0,a.kt)("h3",{id:"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,a.kt)("p",null,"\u30a8\u30ea\u30a2\u5916\u306e\u5b9b\u5148\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u306f\u8ffd\u52a0\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u30a8\u30ea\u30a2\u306b\u8ffd\u52a0\u3059\u308b\u3002\u3053\u306e\u8ffd\u52a0\u60c5\u5831\u306b\u306f AS \u306e\u30c8\u30dd\u30ed\u30b8\u306e\u6b8b\u308a\u306e\u90e8\u5206\u3092\u8981\u7d04\u3057\u305f\u3082\u306e\u3068\u306a\u3063\u3066\u3044\u308b\u3002\n\u5404\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u306f\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u3002\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u975e\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306e\u30c8\u30dd\u30ed\u30b8\u30fc\u3092\u8981\u7d04\u3057\u3066\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306b\u4f1d\u9054\u3059\u308b\u3002\u3059\u306a\u308f\u3061\u3001\u4ed6\u306e\u3059\u3079\u3066\u306e\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u306b\u9001\u4fe1\u3055\u308c\u308b\u3002\n\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u306f\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306b\u95a2\u3059\u308b\u5b8c\u5168\u306a\u30c8\u30dd\u30ed\u30b8\u60c5\u5831\u3068\u3001\u4ed6\u306e\u5404\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u30fc\u304b\u3089\u306e\u30a8\u30ea\u30a2\u60c5\u5831\u306e\u8981\u7d04\u3092\u53d6\u5f97\u3057\u3001\u3059\u3079\u3066\u306e\u30a8\u30ea\u30a2\u3078\u306e\u30d1\u30b9\u3092\u8a08\u7b97\u3067\u304d\u308b\u3002\u6b21\u306b\u3001\u30eb\u30fc\u30bf\u30fc\u306f\u3053\u308c\u3089\u306e\u30d1\u30b9\u3092\u63a5\u7d9a\u3055\u308c\u305f\u30a8\u30ea\u30a2\u306b\u4f1d\u9054\u3059\u308b\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a8\u30ea\u30a2\u306e\u5185\u90e8\u30eb\u30fc\u30bf\u30fc\u306f\u3001\u30a8\u30ea\u30a2\u9593\u5b9b\u5148\u306b\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u8ee2\u9001\u3059\u308b\u3068\u304d\u306b\u6700\u9069\u306a\u51fa\u53e3\u30eb\u30fc\u30bf\u30fc\u3092\u9078\u629e\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,"\u30a8\u30ea\u30a2 1 \u3068\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u3068\u306e\u5883\u754c\u306b\u5b58\u5728\u3059\u308b\u7d2b\u8272\u306e\u77e2\u5370\u3060\u3068\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306e\u60c5\u5831\u3068\u30a8\u30ea\u30a2 2,3,4 \u306e\u7d4c\u8def\u60c5\u5831\u304c\u96c6\u7d04\u3055\u308c\u3001\u30a8\u30ea\u30a2 1 \u306b\u914d\u4fe1\u3055\u308c\u308b\u3002\u305d\u306e\u305f\u3081\u3001\u30a8\u30ea\u30a2 1 \u3067\u306f\u5168\u3066\u306e\u30a8\u30ea\u30a2\u306e\u7d4c\u8def\u60c5\u5831\u304c\u308f\u304b\u308b\u306e\u3067\u3001\u81ea\u30eb\u30fc\u30bf\u3092\u8d77\u70b9\u306b\u6700\u9069\u306a\u7d4c\u8def\u3092\u8a08\u7b97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",src:r(3784).Z,title:"\u30a8\u30ea\u30a2\u9593\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",width:"651",height:"502"})),(0,a.kt)("h3",{id:"as-\u5916\u90e8\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"},"AS \u5916\u90e8\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,a.kt)("p",null,"AS \u5883\u754c\u30eb\u30fc\u30bf\u30fc\u306f\u4ed6\u306e AS \u306e\u7d4c\u8def\u60c5\u5831\u3092\u6301\u3061\u3001\u3053\u308c\u3092\u81ea\u30a8\u30ea\u30a2\u306b\u914d\u4fe1\u3059\u308b\u3002\u3053\u306e\u60c5\u5831\u306f\u9010\u6b21\u914d\u4fe1\u3059\u308b\u3002\u4f8b\u5916\u7684\u306b\u30b9\u30bf\u30d6\u30a8\u30ea\u30a2\u306b\u306f\u914d\u4fe1\u3055\u308c\u306a\u3044\u3002"),(0,a.kt)("p",null,"\u30b9\u30bf\u30d6\u30a8\u30ea\u30a2\u3068\u306f\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u306b\u3057\u304b\u96a3\u63a5\u305b\u305a\u3001\u30d0\u30c3\u30af\u30dc\u30fc\u30f3\u30a8\u30ea\u30a2\u3068\u96a3\u63a5\u3057\u3066\u3044\u308b\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf 1 \u53f0\u3057\u304b\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u304c\u5b58\u5728\u3057\u3066\u3044\u306a\u3044\u30a8\u30ea\u30a2\u306e\u3053\u3068\u3092\u6307\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30bf\u30d6\u30a8\u30ea\u30a2\u304b\u3089\u5225\u306e\u30a8\u30ea\u30a2\u3068\u901a\u4fe1\u3059\u308b\u969b\u306b\u306f\u5fc5\u305a\u56fa\u5b9a\u306e\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u3092\u901a\u308b\u305f\u3081\u3001\u4ed6\u306e\u7d4c\u8def\u60c5\u5831\u306f\u5fc5\u8981\u3068\u305b\u305a\u30a8\u30ea\u30a2\u5883\u754c\u30eb\u30fc\u30bf\u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30c8(",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0"),")\u3068\u3057\u3066\u7d4c\u8def\u60c5\u5831\u3092\u5b66\u7fd2\u3055\u305b\u3001\u30ea\u30f3\u30af\u30b9\u30c6\u30fc\u30c8\u60c5\u5831\u91cf\u3092\u524a\u6e1b\u3057\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u30c7\u30fc\u30bf\u91cf\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30b9\u30bf\u30d6\u30a8\u30ea\u30a2",src:r(1916).Z,title:"\u30b9\u30bf\u30d6\u30a8\u30ea\u30a2",width:"461",height:"501"})),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://milestone-of-se.nesuke.com/nw-advanced/ospf/neighbor/"},"https://milestone-of-se.nesuke.com/nw-advanced/ospf/neighbor/"))))}p.isMDXComponent=!0},3950:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ospf-1.drawio-949de6aa47dce70f6671657d7689abb7.svg"},3784:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ospf-2.drawio-b17ba4de3345bb685ead5d11eed3fdd1.svg"},1916:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ospf-3.drawio-0cf0d07981235a834e3f63a9b27d48bc.svg"}}]);