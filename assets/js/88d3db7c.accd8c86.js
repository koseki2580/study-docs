"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[4411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=l,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),l=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(7462),l=a(7294),n=a(6010),o=a(2466),u=a(6550),i=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=p(e),[o,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[i,s]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),k=(()=>{const e=i??d;return m({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,n]),tabValues:n}}var k=a(2389);const v="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==u&&(d(t),i(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,n.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",v)},l.createElement(y,(0,r.Z)({},e,t)),l.createElement(g,(0,r.Z)({},e,t)))}function E(e){const t=(0,k.Z)();return l.createElement(w,(0,r.Z)({key:String(t)},e))}},7936:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294);function l(e){let{children:t,color:a}=e;return r.createElement("span",{style:{color:a}},t)}},45:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),l=(a(7294),a(3905)),n=(a(4866),a(5162),a(7936));const o={title:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",sidebar_label:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"]},u=void 0,i={unversionedId:"Database/data-model/README",id:"Database/data-model/README",title:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",description:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3068\u306f",source:"@site/docs/02-Database/00-data-model/README.mdx",sourceDirName:"02-Database/00-data-model",slug:"/Database/data-model/",permalink:"/study-docs/docs/Database/data-model/",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/02-Database/00-data-model/README.mdx",tags:[{label:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",permalink:"/study-docs/docs/tags/\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1660994589,formattedLastUpdatedAt:"2022\u5e748\u670820\u65e5",frontMatter:{title:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",sidebar_label:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"]},sidebar:"DatabaseSidebar",next:{title:"\u30b7\u30b9\u30c6\u30e0\u958b\u767a",permalink:"/study-docs/docs/Database/data-model/system-development"}},s={},c=[{value:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3068\u306f",id:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3068\u306f",level:2},{value:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u306e\u7a2e\u985e",id:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u306e\u7a2e\u985e",level:3},{value:"\u8ad6\u7406\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",id:"\u8ad6\u7406\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",level:3},{value:"\u968e\u5c64\u578b\u30e2\u30c7\u30eb",id:"\u968e\u5c64\u578b\u30e2\u30c7\u30eb",level:4},{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u30e2\u30c7\u30eb",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u30e2\u30c7\u30eb",level:4},{value:"\u95a2\u4fc2\u30e2\u30c7\u30eb(\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb)",id:"\u95a2\u4fc2\u30e2\u30c7\u30eb\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb",level:4},{value:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u578b\u30e2\u30c7\u30eb",id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u578b\u30e2\u30c7\u30eb",level:4}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3068\u306f"},"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3068\u306f"),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u306b\u306f\u73fe\u5b9f\u4e16\u754c\u306b\u3042\u308b\u30c7\u30fc\u30bf\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u9069\u5207\u306b\u683c\u7d0d\u3059\u308b\u306b\u306f\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\n\u3053\u306e\u5909\u63db\u3092\u884c\u3046\u6642\u306e\u30e2\u30c7\u30eb\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb"),"\u3068\u547c\u3076\u3002"),(0,l.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u3068\u30c7\u30fc\u30bf\u3092\u72ec\u7acb\u3055\u305b\u3066\u5225\u3005\u306b\u7ba1\u7406\u3059\u308b\u3053\u3068\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"\u30c7\u30fc\u30bf\u72ec\u7acb"),"\u3068\u547c\u3073\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306f\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u72ec\u7acb\u3057\u305f\u30c7\u30fc\u30bf\u3092\u6271\u3046\u305f\u3081\u306e\u4ed5\u7d44\u307f\u3067\u3042\u308b\u3002"),(0,l.kt)("h3",{id:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u306e\u7a2e\u985e"},"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u306e\u7a2e\u985e"),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u306b\u306f\u5927\u304d\u304f\u5206\u3051\u3066"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6982\u5ff5\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb : \u5bfe\u8c61\u30c7\u30fc\u30bf\u306e\u69cb\u9020\u3092\u62bd\u8c61\u5316\u3057\u3066\u8868\u73fe\u3057\u305f\u30e2\u30c7\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u8ad6\u7406\u30e2\u30c7\u30eb : \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u5b9f\u969b\u306b\u5b9f\u88c5\u3067\u304d\u308b\u30e2\u30c7\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u7269\u7406\u30e2\u30c7\u30eb : DBMS(DataBase Management System)\u3067\u7269\u7406\u7684\u306b\u914d\u7f6e\u3059\u308b\u30e2\u30c7\u30eb")),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e 3 \u7a2e\u985e\u306b\u5206\u985e\u3055\u308c\u308b\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u3069\u3093\u306a\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3059\u308b\u304b\u3092\u6c7a\u3081\u308b(\u6982\u5ff5\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb)"),(0,l.kt)("li",{parentName:"ol"},"\u3069\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u5b9f\u88c5\u3059\u308b\u304b\u6c7a\u3081\u308b(\u8ad6\u7406\u30e2\u30c7\u30eb)"),(0,l.kt)("li",{parentName:"ol"},"\u7269\u7406\u7684\u306a\u914d\u7f6e\u3092\u3069\u3046\u3059\u308b\u304b\u6c7a\u3081\u308b(\u7269\u7406\u30e2\u30c7\u30eb)")),(0,l.kt)("p",null,"\u306e\u3088\u3046\u306b 3 \u7a2e\u985e\u306e\u30e2\u30c7\u30eb\u5225\u3005\u306b\u8003\u3048\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u9806\u3005\u306b\u8003\u3048\u3066\u3044\u304f\u3053\u3068\u3067\u6700\u9069\u5316\u3092\u56f3\u3063\u3066\u3044\u304f\u3002"),(0,l.kt)("h3",{id:"\u8ad6\u7406\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb"},"\u8ad6\u7406\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb"),(0,l.kt)("p",null,"\u8ad6\u7406\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3068\u3057\u3066\u306f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u968e\u5c64\u578b\u30e2\u30c7\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u30e2\u30c7\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u95a2\u4fc2\u30e2\u30c7\u30eb(\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30e2\u30c7\u30eb)"),(0,l.kt)("li",{parentName:"ul"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u578b\u30e2\u30c7\u30eb")),(0,l.kt)("p",null,"\u306e 4 \u3064\u304c\u3088\u304f\u77e5\u3089\u308c\u3066\u3044\u308b\u3002"),(0,l.kt)("h4",{id:"\u968e\u5c64\u578b\u30e2\u30c7\u30eb"},"\u968e\u5c64\u578b\u30e2\u30c7\u30eb"),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u6728\u69cb\u9020\u3067\u8868\u3057\u305f\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3067\u3042\u308b\u3002"),(0,l.kt)("p",null,"\u89aa\u30ce\u30fc\u30c9\u306f\u8907\u6570\u306e\u5b50\u30ce\u30fc\u30c9\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u308b\u304c\u3001\u5b50\u30ce\u30fc\u30c9\u306f\u89aa\u30ce\u30fc\u30c9\u3092 1 \u3064\u3057\u304b\u6301\u3066\u306a\u3044\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u7279\u5b9a\u306e\u30ce\u30fc\u30c9\u3078\u306e\u30eb\u30fc\u30c8\u304c\u9650\u5b9a\u7684\u306b\u306a\u308a\u3001\u901f\u5ea6\u304c\u30a2\u30af\u30bb\u30b9\u901f\u5ea6\u304c\u901f\u3044\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308b\u53cd\u9762\u3001\n\u5b50\u30ce\u30fc\u30c9\u304c\u8907\u6570\u306e\u89aa\u30ce\u30fc\u30c9\u3092\u6301\u3061\u305f\u3044\u5834\u5408\u3001\u91cd\u8907\u767b\u9332\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u3001\u540c\u3058\u30ce\u30fc\u30c9\u3092\u8907\u6570\u5165\u529b\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u3001\u30c7\u30fc\u30bf\u7684\u306b\u4e0d\u81ea\u7136\u306b\u306a\u308b\u3002\n\u307e\u305f\u3001\u30c7\u30fc\u30bf\u306e\u8ffd\u52a0\u3084\u524a\u9664\u3092\u884c\u3063\u305f\u5834\u5408\u306f\u30eb\u30fc\u30c8\u3092\u518d\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"red",mdxType:"FontColor"},"\u30e1\u30ea\u30c3\u30c8 : \u7279\u5b9a\u306e\u30ce\u30fc\u30c9\u306e\u30eb\u30fc\u30c8\u304c\u9650\u5b9a\u7684\u306b\u306a\u308a\u3001\u901f\u5ea6\u304c\u901f\u3044")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"blue",mdxType:"FontColor"},"\u30c7\u30e1\u30ea\u30c3\u30c8 : \u67d4\u8edf\u6027\u306b\u6b20\u3051\u308b"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(9223).Z,title:"\u968e\u5c64\u578b\u30e2\u30c7\u30eb",width:"937",height:"426"})),(0,l.kt)("h4",{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u30e2\u30c7\u30eb"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u30e2\u30c7\u30eb"),(0,l.kt)("p",null,"\u968e\u5c64\u578b\u3067\u306f\u8868\u73fe\u3067\u304d\u306a\u304b\u3063\u305f\u3001\u5b50\u30ce\u30fc\u30c9\u304c\u8907\u6570\u306e\u89aa\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3067\u3042\u308a\u3001\u7db2\u72b6(\u30cd\u30c3\u30c8\u30ef\u30fc\u30af)\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),(0,l.kt)("p",null,"\u968e\u5c64\u578b\u30fb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u306f\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u306e\u904e\u7a0b\u3067\u7d4c\u9a13\u7684\u306b\u51fa\u6765\u4e0a\u304c\u3063\u3066\u304d\u305f\u30e2\u30c7\u30eb\u3067\u3042\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\u72ec\u7acb\u306b\u3064\u3044\u3066\u306f\u8003\u3048\u3089\u308c\u3066\u3044\u306a\u3044\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c7\u30fc\u30bf\u3068\u30b7\u30b9\u30c6\u30e0\u3092\u540c\u6642\u306b\u5909\u66f4\u3057\u306a\u3051\u308c\u3070\u6574\u5408\u6027\u304c\u53d6\u308c\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"red",mdxType:"FontColor"},"\u30e1\u30ea\u30c3\u30c8 : \u91cd\u8907\u3059\u308b\u8981\u7d20\u3092\u53d6\u308a\u9664\u3051\u308b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"blue",mdxType:"FontColor"},"\u30c7\u30e1\u30ea\u30c3\u30c8 : \u30c7\u30fc\u30bf\u72ec\u7acb\u304c\u3067\u304d\u306a\u3044"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(5186).Z,title:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u30e2\u30c7\u30eb",width:"954",height:"351"})),(0,l.kt)("h4",{id:"\u95a2\u4fc2\u30e2\u30c7\u30eb\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb"},"\u95a2\u4fc2\u30e2\u30c7\u30eb(\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30e2\u30c7\u30eb)"),(0,l.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb(\u8868)\u3068\u30c6\u30fc\u30d6\u30eb\u9593\u306e\u95a2\u9023\u3067\u30c7\u30fc\u30bf\u3092\u8868\u73fe\u3057\u3001\u95a2\u4fc2\u7406\u8ad6\u3092\u57fa\u306b\u8003\u3048\u3089\u308c\u3001\u30c7\u30fc\u30bf\u72ec\u7acb\u3057\u3066\u3044\u308b\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3067\u3042\u308b\u3002"),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u95a2\u4fc2(\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3)\u306e\u96c6\u307e\u308a\u3068\u8003\u3048\u3001\u968e\u5c64\u578b\u30fb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u578b\u306e\u6b20\u70b9\u3067\u3042\u3063\u305f\u67d4\u8edf\u6027\u3092\u89e3\u6c7a\u3067\u304d\u305f\u53cd\u9762\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u8907\u96d1\u5316\u3057\u3084\u3059\u304f\u3001\u51e6\u7406\u901f\u5ea6\u304c\u9045\u304f\u306a\u308b\u50be\u5411\u306b\u3042\u308b\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001\u95a2\u4fc2\u30e2\u30c7\u30eb\u306f\u8868\u5f62\u5f0f\u306e\u30c7\u30fc\u30bf\u3067\u3042\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u304c\u7528\u3044\u3089\u308c\u308b\u3002\u3053\u306e 2 \u3064\u306e\u9593\u3067\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u4e0d\u4e00\u81f4\u304c\u8d77\u304d\u3066\u3044\u308b\u3002(",(0,l.kt)("inlineCode",{parentName:"p"},"O/R(Object/Relational) \u30a4\u30f3\u30d4\u30fc\u30c0\u30f3\u30b9 \u30df\u30b9\u30de\u30c3\u30c1"),"\u3068\u547c\u3076)\n\u3053\u306e\u30df\u30b9\u30de\u30c3\u30c1\u3092\u53d6\u308a\u9664\u304f\u305f\u3081\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u4f5c\u6cd5\u3067\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u4ed5\u7d44\u307f\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"O/R \u30de\u30c3\u30d1\u30fc\uff08O/R mapper)"),"\u3068\u547c\u3076\u3002\nO/R \u30de\u30c3\u30d4\u30f3\u30b0\u306e\u5b9f\u88c5\u306b\u3088\u308a\u3001\u30e1\u30e2\u30ea\u3092\u5927\u91cf\u306b\u6d88\u8cbb\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u3001\u30c7\u30fc\u30bf\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u5834\u5408\u306a\u3069\u306b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u4e0a\u306e\u30dc\u30c8\u30eb\u30cd\u30c3\u30c8\u3068\u306a\u308b\u5834\u5408\u3082\u3042\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"red",mdxType:"FontColor"},"\u30e1\u30ea\u30c3\u30c8 : \u67d4\u8edf\u306a\u30c7\u30fc\u30bf\u306e\u6271\u3044")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"blue",mdxType:"FontColor"},"\u30c7\u30e1\u30ea\u30c3\u30c8 : \u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u8907\u96d1\u5316\u30fb\u51e6\u7406\u901f\u5ea6\u4f4e\u4e0b"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(6612).Z,title:"\u95a2\u4fc2\u30e2\u30c7\u30eb",width:"954",height:"313"})),(0,l.kt)("h4",{id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u578b\u30e2\u30c7\u30eb"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u578b\u30e2\u30c7\u30eb"),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u3068\u64cd\u4f5c\u3092\u4e00\u4f53\u5316\u3057\u3066\u6271\u3046\u8003\u3048\u65b9\u306e\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3067\u3042\u308b\u3002"),(0,l.kt)("p",null,"\u95a2\u4fc2\u30e2\u30c7\u30eb\u3067\u306f\u8868\u5f62\u5f0f\u3067\u30c7\u30fc\u30bf\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u305f\u306e\u306b\u6bd4\u3079\u3066\u3001\u8907\u96d1\u306a\u30c7\u30fc\u30bf\u69cb\u9020\u3092\u9ad8\u901f\u306b\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3042\u308a\u3001\n\u30c6\u30ad\u30b9\u30c8\u3084\u97f3\u58f0\u30fb\u52d5\u753b\u306e\u3088\u3046\u306a\u69d8\u3005\u306a\u5f62\u5f0f\u306e\u30c7\u30fc\u30bf\u3092\u7ba1\u7406\u3059\u308b\u5834\u5408\u306b\u9069\u3057\u3066\u3044\u308b\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u3067\u3042\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"red",mdxType:"FontColor"},"\u30e1\u30ea\u30c3\u30c8 : \u8907\u96d1\u306a\u30c7\u30fc\u30bf\u69cb\u9020\u3092\u9ad8\u901f\u3067\u51e6\u7406\u304c\u53ef\u80fd\u3002O/R \u30de\u30c3\u30d4\u30f3\u30b0\u3092\u5b9f\u88c5\u3057\u306a\u304f\u3066\u826f\u3044")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(n.Z,{color:"blue",mdxType:"FontColor"},"\u30c7\u30e1\u30ea\u30c3\u30c8 : \u60f3\u5b9a\u3057\u306a\u3044\u30a2\u30af\u30bb\u30b9\u3092\u3057\u305f\u3068\u304d\u306b\u51e6\u7406\u901f\u5ea6\u304c\u9045\u304f\u306a\u308b\u3002\u76f8\u4e92\u904b\u7528\u6027\u304c\u4f4e\u3044"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(3724).Z,title:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b\u30e2\u30c7\u30eb",width:"623",height:"551"})))}p.isMDXComponent=!0},9223:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-model-1.drawio-71bb3b5fedbd94bc4c5fbd80f84ba38f.svg"},5186:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-model-2.drawio-4cb585cf6b955296c620df921088f28f.svg"},6612:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-model-3.drawio-1a7fd84148ff45b3a0c763e58f108693.svg"},3724:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-model-4.drawio-00a6be93e09b4bf3768573c46615812c.svg"}}]);