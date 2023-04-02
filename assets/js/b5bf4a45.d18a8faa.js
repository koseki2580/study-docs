"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[8473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(7462),n=a(7294),l=a(6010),i=a(2466),p=a(6550),o=a(1980),u=a(7392),s=a(12);function c(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[i,p]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=k({queryString:a,groupId:r}),[c,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=o??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&p(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),u(e),N(e)}),[u,N,l]),tabValues:l}}var b=a(2389);const f="tabList__CuJ",A="tabItem_LNqP";function S(e){let{className:t,block:a,selectedValue:p,selectValue:o,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=s.indexOf(t),r=u[a].value;r!==p&&(c(t),o(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",A,null==i?void 0:i.className,{"tabs__item--active":p===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function P(e){const t=N(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(S,(0,r.Z)({},e,t)),n.createElement(h,(0,r.Z)({},e,t)))}function g(e){const t=(0,b.Z)();return n.createElement(P,(0,r.Z)({key:String(t)},e))}},7936:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);function n(e){let{children:t,color:a}=e;return r.createElement("span",{style:{color:a}},t)}},7643:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294);const n="text_ward_j2fN";function l(e){let{children:t}=e;return r.createElement("div",{className:`${n}`},t)}},9014:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294);const n="split_BsMO",l="border_none_AQxW";function i(e){let{children:t,border:a}=e;return r.createElement("span",{className:`${n} ${"false"===a?l:""}`},t)}},7086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162),a(7936),a(9014),a(7643);const l={title:"BGP-4",sidebar_label:"BGP-4",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},i=void 0,p={unversionedId:"Network/bgp4",id:"Network/bgp4",title:"BGP-4",description:"BGP-4 \u3068\u306f",source:"@site/docs/03-Network/15-bgp4.md",sourceDirName:"03-Network",slug:"/Network/bgp4",permalink:"/study-docs/docs/Network/bgp4",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/03-Network/15-bgp4.md",tags:[{label:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/study-docs/docs/tags/\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1679480596,formattedLastUpdatedAt:"2023\u5e743\u670822\u65e5",sidebarPosition:15,frontMatter:{title:"BGP-4",sidebar_label:"BGP-4",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},sidebar:"NetworkSidebar",previous:{title:"Diffie-Hellman\u9375\u4ea4\u63db\u65b9\u5f0f",permalink:"/study-docs/docs/Network/diffie-hellman"},next:{title:"OSPF",permalink:"/study-docs/docs/Network/ospf"}},o={},u=[{value:"BGP-4 \u3068\u306f",id:"bgp-4-\u3068\u306f",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"bgp-4-\u3068\u306f"},"BGP-4 \u3068\u306f"),(0,n.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306e IP \u30a2\u30c9\u30ec\u30b9\u306f ICANN \u304c\u7ba1\u7406\u3057\u3066\u304a\u308a\u3001AS(Aytibiniys System)\u3068\u547c\u3070\u308c\u308b\u7d44\u7e54(ISP \u7b49)\u306b IP \u30a2\u30c9\u30ec\u30b9\u3092\u5272\u308a\u632f\u3063\u3066\u3044\u308b\u3002\n\u3053\u306e AS \u9593\u3067\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u3084\u308a\u53d6\u308a\u3059\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3092 EGP(Exterior Gateway Protocol)\u3068\u547c\u3073\u3001AS \u5185\u3067\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092 IGP(Interior Gateway Protocol)\u3068\u547c\u3076\u3002"),(0,n.kt)("p",null,"AS \u306b\u3082\u3044\u304f\u3064\u304b\u306e\u7a2e\u985e\u304c\u5b58\u5728\u3059\u308b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Multihomed AS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u8907\u6570\u306e\u4ed6\u306e AS \u3078\u306e\u63a5\u7d9a\u3092\u7dad\u6301\u3059\u308b AS\u3002\u3042\u308b AS \u304b\u3089\u5225\u306e AS \u306b\u5411\u304b\u3046\u9014\u4e2d\u3067\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u901a\u904e\u3055\u305b\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Stub AS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4ed6\u306e 1 \u3064\u306e AS \u3060\u3051\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b AS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Transit AS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u3042\u308b AS \u3068\u30ea\u30f3\u30af\u3057\u3066\u3044\u308b\u5225\u306e AS \u306e\u9593\u3067\u30c7\u30fc\u30bf\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u4f1d\u9001\u3059\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Internet Exchange Point AS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ISP \u307e\u305f\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u914d\u4fe1\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(CDN) \u304c\u81ea\u5f8b\u30b7\u30b9\u30c6\u30e0\u9593\u3067\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u4ea4\u63db\u3059\u308b\u305f\u3081\u306e\u7269\u7406\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc4271.html"},"BGP")," \u306f EGP \u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308a\u3001Border Gateway Protocol \u306e\u7565\u3067\u3042\u308b\u3002"),(0,n.kt)("p",null,"BGP \u306f TCP \u3092\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001AS \u9593\u306e\u6b7b\u6d3b\u76e3\u8996\u306f KEEPALIVE \u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u5408\u3044\u63a5\u7d9a\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u3044\u308b\u3002\u307e\u305f\u3001\nNOTIFICATION \u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u30a8\u30e9\u30fc\u307e\u305f\u306f\u7279\u5225\u306a\u6761\u4ef6\u306b\u5fdc\u7b54\u3057\u3066\u9001\u4fe1\u3055\u308c\u308b\u3002\n\u7570\u306a\u308b AS \u3068\u306e\u30d4\u30a2\u3092 EBGP(External BGP)\u3068\u547c\u3073\u3001\u540c\u3058 AS \u3068\u306e\u30d4\u30a2\u3092 IBGP(Internal BGP)\u3068\u547c\u3076\u3002"),(0,n.kt)("p",null,"BGP \u306e\u4e3b\u306a\u6a5f\u80fd\u306f\u3001\u4ed6\u306e BGP \u30b7\u30b9\u30c6\u30e0\u3068\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u4ea4\u63db\u3059\u308b\u3053\u3068\u3067\u3042\u308a\u3001\u3053\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u306b\u306f\u3001\u901a\u904e\u3059\u308b\u81ea\u5f8b\u30b7\u30b9\u30c6\u30e0(AS)\u306e\u30ea\u30b9\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002"),(0,n.kt)("p",null,"BGP \u3067\u4f7f\u7528\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u4ee5\u4e0b\u3067\u3042\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OPEN",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CP \u63a5\u7d9a\u304c\u78ba\u7acb\u3055\u308c\u305f\u5f8c\u3001\u4e21\u5074\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u6700\u521d\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"))),(0,n.kt)("li",{parentName:"ul"},"UPDATE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BGP \u30d4\u30a2\u9593\u3067\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u8ee2\u9001"))),(0,n.kt)("li",{parentName:"ul"},"KEEPALIVE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b7b\u6d3b\u76e3\u8996"))),(0,n.kt)("li",{parentName:"ul"},"NOTIFICATION",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u6642\u306b\u9001\u4fe1")))),(0,n.kt)("p",null,"\u4ee5\u5f8c\u3001BGP \u30b9\u30d4\u30fc\u30ab\u3068\u3044\u3046\u8a00\u8449\u767b\u5834\u3059\u308b\u304c\u3001\u3053\u308c\u306f BGP \u3092\u5b9f\u88c5\u3059\u308b\u30eb\u30fc\u30bf\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u3066\u3044\u308b\u3002\u307e\u305f\u3001\u56f3\u306b\u767b\u5834\u3059\u308b\u8d64\u8272\u3067\u5857\u3089\u308c\u305f\u3082\u306e\u304c BGP \u30b9\u30d4\u30fc\u30ab\u3092\u8868\u3059\u3002"),(0,n.kt)("p",null,"UPDATE \u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5c64\u5230\u9054\u53ef\u80fd\u6027\u60c5\u5831(Network Layer Reachability Information)\u3068\u30d1\u30b9\u5c5e\u6027\u304c\u3084\u308a\u53d6\u308a\u3055\u308c\u308b\u3002\n\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5c64\u5230\u9054\u53ef\u80fd\u6027\u60c5\u5831\u3068\u306f IP \u30a2\u30c9\u30ec\u30b9\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u3053\u3068\u3092\u6307\u3057\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30c9\u30ec\u30b9\u306e\u3053\u3068\u3067\u3042\u308b\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u3067\u306f\u5404\u30d1\u30b9\u5c5e\u6027\u306f\u3001\u53ef\u5909\u9577\u306e 3 \u3064\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027\u30bf\u30a4\u30d7"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027\u9577"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027\u5024"),"\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u3002"),(0,n.kt)("p",null,"\u30d1\u30b9\u5c5e\u6027\u306b\u306f\u69d8\u3005\u306a\u7a2e\u985e\u304c\u5b58\u5728\u3059\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ORIGIN")),(0,n.kt)("p",{parentName:"li"},"\u30d1\u30b9\u60c5\u5831\u306e\u8d77\u70b9\u3092\u5b9a\u7fa9\u3059\u308b\u3002IGP, EGP, \u305d\u308c\u4ee5\u5916(INCOMPLETE)\u306e 3 \u7a2e\u985e\u304c\u5b58\u5728\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AS_PATH")),(0,n.kt)("p",{parentName:"li"},"\u4f1d\u9054\u3055\u308c\u308b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u304c\u901a\u904e\u3057\u305f\u81ea\u5f8b\u30b7\u30b9\u30c6\u30e0\u3092\u8b58\u5225\u3059\u308b\u3002\u5404 AS_PATH \u30bb\u30b0\u30e1\u30f3\u30c8\u306f\u30013 \u3064\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u30bf\u30a4\u30d7"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u9577"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u5024"),"\u3067\u69cb\u6210\u3057\u3066\u3044\u308b\u3002"),(0,n.kt)("p",{parentName:"li"},"AS_PATH \u306b\u306f 2 \u7a2e\u985e\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u30bf\u30a4\u30d7\u5b58\u5728\u3057\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"AS_SET"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"AS_SEQUENCE"),"\u304c\u3042\u308b\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AS_SET")),(0,n.kt)("p",{parentName:"li"},"UPDATE \u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u306e\u30eb\u30fc\u30c8\u304c\u901a\u904e\u3057\u305f\u7121\u9806\u5e8f\u306e AS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AS_SEQUENCE")),(0,n.kt)("p",{parentName:"li"},"UPDATE \u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u306e\u30eb\u30fc\u30c8\u304c\u901a\u904e\u3057\u305f AS \u306e\u9806\u5e8f"))),(0,n.kt)("p",{parentName:"li"},"BGP \u30b9\u30d4\u30fc\u30ab\u30fc\u306f\u3001\u5225\u306e BGP \u30b9\u30d4\u30fc\u30ab\u30fc\u306e UPDATE \u30e1\u30c3\u30bb\u30fc\u30b8\u304b\u3089\u5b66\u7fd2\u3057\u305f\u30eb\u30fc\u30c8\u3092\u4f1d\u64ad\u3059\u308b\u3068\u304d\u306b\u3001\u30eb\u30fc\u30c8\u306e\u9001\u4fe1\u5148\u306e BGP \u30b9\u30d4\u30fc\u30ab\u30fc\u306e\u5834\u6240\u306b\u57fa\u3065\u3044\u3066\u30eb\u30fc\u30c8\u306e AS_PATH \u5c5e\u6027\u3092\u5909\u66f4\u3059\u308b\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5185\u90e8\u30d4\u30a2\u306e\u5834\u5408(IBGP)"),(0,n.kt)("p",{parentName:"li"},"AS_PATH \u3092\u5909\u66f4\u3057\u306a\u3044")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5916\u90e8\u30d4\u30a2\u306e\u5834\u5408(EBGP)"),(0,n.kt)("p",{parentName:"li"},"\u5916\u90e8\u30d4\u30a2\u306e\u5834\u5408\u306f\u6b21\u306e 3 \u30d1\u30bf\u30fc\u30f3\u306b\u5206\u304b\u308c\u308b\u3002AS_PATH \u306f\u5148\u982d\u304c\u4e00\u756a\u6700\u5f8c\u3068\u307f\u306a\u3055\u308c\u308b\u305f\u3081\u3001\u5148\u982d\u306b\u8981\u7d20\u3092\u8ffd\u52a0\u3059\u308b\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AS_PATH\u306e\u6700\u521d\u306e\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u306e\u30bf\u30a4\u30d7\u304cAS_SEQUENCE\u306e\u5834\u5408")),(0,n.kt)("p",{parentName:"li"},"\u72ec\u81ea\u306e AS \u756a\u53f7\u3092\u6700\u5f8c\u306e\u8981\u7d20\u3068\u3057\u3066\u4ed8\u52a0\u3059\u308b\u3002\u305f\u3060\u3057\u3001AS_PATH \u30bb\u30b0\u30e1\u30f3\u30c8\u3067\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30fc\u304c\u767a\u751f\u3059\u308b\u5834\u5408(\u3064\u307e\u308a\u3001255 AS \u3092\u8d85\u3048\u308b\u5834\u5408)\u3001\u30bf\u30a4\u30d7 AS_SEQUENCE \u306e\u65b0\u3057\u3044\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u3001\u3053\u306e\u65b0\u3057\u3044\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u72ec\u81ea\u306e AS \u756a\u53f7\u3092\u8ffd\u52a0\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AS_PATH\u306e\u6700\u521d\u306e\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u30bf\u30a4\u30d7AS_SET\u3067\u3042\u308b\u5834\u5408")),(0,n.kt)("p",{parentName:"li"},"\u30bf\u30a4\u30d7 AS_SEQUENCE \u306e\u65b0\u3057\u3044\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u3092 AS_PATH \u306b\u8ffd\u52a0\u3057\u3001\u305d\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u5185\u306e\u72ec\u81ea\u306e AS \u756a\u53f7\u3092\u8ffd\u52a0\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AS_PATH\u304c\u7a7a\u306e\u5834\u5408")),(0,n.kt)("p",{parentName:"li"},"AS_SEQUENCE \u30bf\u30a4\u30d7\u306e\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u72ec\u81ea\u306e AS \u3092\u305d\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u914d\u7f6e\u3057\u3001\u305d\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u3092 AS_PATH \u306b\u914d\u7f6e\u3059\u308b\u3002"))))),(0,n.kt)("p",{parentName:"li"},"BGP \u30b9\u30d4\u30fc\u30ab\u30fc\u304c\u30eb\u30fc\u30c8\u3092\u767a\u4fe1\u3059\u308b\u5834\u5408\u306f\u6b21\u306e 2 \u30d1\u30bf\u30fc\u30f3\u306b\u306a\u308b\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5185\u90e8\u30d4\u30a2\u306e\u5834\u5408"),(0,n.kt)("p",{parentName:"li"},"\u7a7a\u306e AS_PATH \u5c5e\u6027\u3092\u8ffd\u52a0\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5916\u90e8\u30d4\u30a2\u306e\u5834\u5408"),(0,n.kt)("p",{parentName:"li"},"AS_PATH \u5c5e\u6027\u306b\u3001\u30bf\u30a4\u30d7 AS_SEQUENCE \u306e\u30d1\u30b9\u30bb\u30b0\u30e1\u30f3\u30c8\u306e\u72ec\u81ea\u306e AS \u756a\u53f7\u3092\u8ffd\u52a0\u3059\u308b\u3002")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"NEXT_HOP")),(0,n.kt)("p",{parentName:"li"},"\u6b21\u306e\u5b9b\u5148\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30eb\u30fc\u30bf\u30fc\u306e IP \u30a2\u30c9\u30ec\u30b9\u3092\u5b9a\u7fa9\u3059\u308b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MULTI_EXIT_DISC")),(0,n.kt)("p",{parentName:"li"},"\u5916\u90e8\uff08AS \u9593\uff09\u30ea\u30f3\u30af\u3067\u4f7f\u7528\u3057\u3066\u3001\u540c\u3058\u96a3\u63a5 AS \u3078\u306e\u8907\u6570\u306e\u51fa\u53e3\u307e\u305f\u306f\u5165\u53e3\u3092\u533a\u5225\u3059\u308b\u3002\n\u5916\u90e8\u306e AS \u304b\u3089\u81ea AS \u3078\u5411\u304b\u3063\u3066\u304f\u308b\u3001\u5185\u5411\u304d\u306e\u901a\u4fe1\u3092\u5236\u5fa1\u3057\u3066\u304a\u308a\u3001\u96a3\u63a5 AS \u304b\u3089\u53d7\u4fe1\u3057\u305f MULTI_EXIT_DISC \u5c5e\u6027\u306f\u3001\u4ed6\u306e\u96a3\u63a5 AS \u306b\u9001\u4fe1\u3059\u308b UPDATE \u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u3053\u306e\u5c5e\u6027\u3092\u542b\u3081\u306a\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},"\u9001\u4fe1\u5143\u304b\u3089\u5b9b\u5148 A \u3078\u306f 1,2 \u306e\u7d4c\u8def\u3092\u4f7f\u3063\u305f\u65b9\u304c\u3088\u304f\u3001\u5b9b\u5148 B \u3078\u306f 3,4 \u306e\u7d4c\u8def\u3092\u4f7f\u3063\u305f\u65b9\u304c\u3044\u3044\u5834\u5408\u306a\u3069\u306b\u3001MULTI_EXIT_DISC \u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5b9b\u5148\u306b\u5fdc\u3058\u3066\u4f7f\u7528\u3059\u308b\u7d4c\u8def\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002(\u3053\u3053\u3067\u306e\u5b9b\u5148\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"1.1.1.0/24"),"\u306a\u3069\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8868\u3059\u3002)\n",(0,n.kt)("img",{alt:"MULTI_EXIT_DISC",src:a(3214).Z,title:"MULTI_EXIT_DISC",width:"645",height:"551"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"LOCAL_PREF")),(0,n.kt)("p",{parentName:"li"},"BGP \u30b9\u30d4\u30fc\u30ab\u30fc\u306f\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u5e83\u544a\u3055\u308c\u305f\u30eb\u30fc\u30c8\u306b\u5bfe\u3059\u308b\u5e83\u544a\u3059\u308b\u30b9\u30d4\u30fc\u30ab\u30fc\u306e\u512a\u5148\u5ea6\u3092\u4ed6\u306e\u5185\u90e8\u30d4\u30a2\u306b\u901a\u77e5\u3059\u308b\u3002\n\u5916\u90e8\uff08AS \u9593\uff09\u30ea\u30f3\u30af\u3067\u4f7f\u7528\u3057\u3066\u3001\u540c\u3058\u96a3\u63a5 AS \u3078\u306e\u8907\u6570\u306e\u51fa\u53e3\u307e\u305f\u306f\u5165\u53e3\u3092\u533a\u5225\u3059\u308b\u3002\n\u81ea AS \u304b\u3089\u5916\u90e8\u3078\u9001\u4fe1\u3055\u308c\u308b\u3001\u5916\u5411\u304d\u306e\u901a\u4fe1\u3092\u5236\u5fa1\u3057\u3001\u5916\u90e8\u30d4\u30a2\u306b\u9001\u4fe1\u3059\u308b UPDATE \u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u3053\u306e\u5c5e\u6027\u3092\u542b\u3081\u306a\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u56f3\u306e\u3088\u3046\u306b\u5b9b\u5148\u3078\u306e\u7d4c\u8def\u304c 2 \u901a\u308a\u3042\u308a\u3001\u7247\u65b9\u304c\u5e2f\u57df\u5e45\u304c\u5e83\u3044\u3068\u3044\u3046\u3053\u3068\u304c\u4e8b\u524d\u306b\u308f\u304b\u3063\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u306b\u3001LOCAL_PREF \u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5e2f\u57df\u5e45\u306e\u5e83\u3044\u7d4c\u8def\u3092\u512a\u5148\u3057\u3066\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u3002\n",(0,n.kt)("img",{alt:"LOCAL_PREF",src:a(2462).Z,title:"LOCAL_PREF",width:"361",height:"402"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ATOMIC_AGGREGATE")),(0,n.kt)("p",{parentName:"li"},"\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u304c\u96c6\u7d04\u3055\u308c\u305f\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u3092\u8868\u3059\u3002(\u30d5\u30e9\u30b0\u306e\u5f79\u5272)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"AGGREGATOR")),(0,n.kt)("p",{parentName:"li"},"\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u96c6\u7d04\u3057\u305f (\u6700\u5f8c\u306e)AS \u756a\u53f7\u304a\u3088\u3073 BGP \u30b9\u30d4\u30fc\u30ab\u30fc\u306e BGP \u8b58\u5225\u5b50\u3092\u8868\u3059\u3002"))),(0,n.kt)("p",null,"\u7d4c\u8def\u3092\u6c7a\u5b9a\u3059\u308b\u512a\u5148\u5ea6\u306f\u4ee5\u4e0b\u306e\u8868\u306e\u4e0a\u304b\u3089\u9806\u306b\u512a\u5148\u7684\u306b\u5224\u65ad\u3055\u308c\u308b\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2021r03_1/2021r03h_nw_pm2_qs.pdf"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8 \u4ee4\u548c 3 \u5e74 \u5348\u5f8c 2 \u554f 2 \u3088\u308a"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8a55\u4fa1\u9806"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"LOCAL_PREF \u306e\u5024\u304c\u6700\u3082\u5927\u304d\u3044\u7d4c\u8def\u60c5\u5831\u3092\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"AS_PATH \u306e\u9577\u3055\u304c\u6700\u3082\u77ed\u3044\u7d4c\u8def\u60c5\u5831\u3092\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ORIGIN \u306e\u5024\u304c IGP, EGP, INCOMPLETE \u306e\u9806\u3067\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:"center"},"MULTI_EXIT_DISC \u306e\u5024\u304c\u6700\u3082\u4f4e\u3044\u7d4c\u8def\u60c5\u5831\u3092\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:"center"},"eBGP \u30d4\u30a2\u3067\u53d7\u4fe1\u3057\u305f\u7d4c\u8def\u60c5\u5831, iBGP \u30d4\u30a2\u3067\u53d7\u4fe1\u3057\u305f\u7d4c\u8def\u60c5\u5831\u306e\u9806\u3067\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6"),(0,n.kt)("td",{parentName:"tr",align:"center"},"NEXT_HOP \u304c\u6700\u3082\u8fd1\u3044\u7d4c\u8def\u60c5\u5831\u3092\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"7"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30eb\u30fc\u30bf ID \u304c\u6700\u3082\u5c0f\u3055\u3044\u7d4c\u8def\u60c5\u5831\u3092\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30d4\u30a2\u30ea\u30f3\u30b0\u306b\u4f7f\u7528\u3059\u308b IP \u30a2\u30c9\u30ec\u30b9\u304c\u6700\u3082\u5c0f\u3055\u3044\u7d4c\u8def\u60c5\u5831\u3092\u9078\u629e")))),(0,n.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u540c\u3058\u5b9b\u5148\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30c9\u30ec\u30b9\u306e\u7d4c\u8def\u60c5\u5831\u304c 2 \u3064\u5b58\u5728\u3057\u305f\u5834\u5408(\u4ee5\u4e0b\u306e\u56f3)\u306b\u4e0a\u304b\u3089\u9806\u306b\u8a55\u4fa1\u3057\u3001\u3069\u3061\u3089\u304b 1 \u3064\u306b\u7d5e\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u6642\u70b9\u3067\u8a55\u4fa1\u3092\u7d42\u4e86\u3059\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BGP4 AS_PATH",src:a(6290).Z,title:"BGP4 AS_PATH",width:"912",height:"522"})),(0,n.kt)("p",null,"AS 1 \u304b\u3089 AS7 \u307e\u3067\u306e\u30d1\u30b9\u306f 2 \u3064\u5b58\u5728\u3059\u308b\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"AS1, AS4, AS5, AS7"),(0,n.kt)("li",{parentName:"ol"},"AS1, AS2, AS3, AS6, AS7")),(0,n.kt)("p",null,"2 \u3064\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"LOCAL_PREF"),"\u304c\u540c\u3058\u3067\u3042\u3063\u305f\u5834\u5408\u306b\u3001AS_PATH \u306e\u9577\u3055\u3067\u7d4c\u8def\u3092\u5224\u5b9a\u3057\u3001\n1 \u306e\u65b9\u304c 2 \u3088\u308a\u3082\u9577\u3055\u304c\u77ed\u3044\u306e\u3067\u30011 \u756a\u306e\u7d4c\u8def\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nic.ad.jp/ja/newsletter/No35/0800.html"},"https://www.nic.ad.jp/ja/newsletter/No35/0800.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.allied-telesis.co.jp/support/list/router/ar450s/docs/overview_20IP_24RTBGP.html"},"https://www.allied-telesis.co.jp/support/list/router/ar450s/docs/overview_20IP_24RTBGP.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.allied-telesis.co.jp/support/list/switch/x930/rel/5.4.5-0.1/002105b/docs/overview-35.html"},"https://www.allied-telesis.co.jp/support/list/switch/x930/rel/5.4.5-0.1/002105b/docs/overview-35.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Autonomous_system_(Internet)"},"https://en.wikipedia.org/wiki/Autonomous",(0,n.kt)("em",{parentName:"a"},"system"),"(Internet)"))))}c.isMDXComponent=!0},6290:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bgp4-1.drawio-ee579e13a2eeb24717ccd6e8da124471.svg"},2462:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bgp4-2.drawio-2af26ae382c8958762982e7beba0cf59.svg"},3214:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bgp4-3.drawio-397385c5333f05116954300cdb6b7df5.svg"}}]);