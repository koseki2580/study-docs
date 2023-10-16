"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[6362],{3905:(i,I,n)=>{n.d(I,{Zo:()=>g,kt:()=>C});var e=n(67294);function t(i,I,n){return I in i?Object.defineProperty(i,I,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[I]=n,i}function a(i,I){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);I&&(e=e.filter((function(I){return Object.getOwnPropertyDescriptor(i,I).enumerable}))),n.push.apply(n,e)}return n}function l(i){for(var I=1;I<arguments.length;I++){var n=null!=arguments[I]?arguments[I]:{};I%2?a(Object(n),!0).forEach((function(I){t(i,I,n[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(I){Object.defineProperty(i,I,Object.getOwnPropertyDescriptor(n,I))}))}return i}function r(i,I){if(null==i)return{};var n,e,t=function(i,I){if(null==i)return{};var n,e,t={},a=Object.keys(i);for(e=0;e<a.length;e++)n=a[e],I.indexOf(n)>=0||(t[n]=i[n]);return t}(i,I);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(e=0;e<a.length;e++)n=a[e],I.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}var o=e.createContext({}),s=function(i){var I=e.useContext(o),n=I;return i&&(n="function"==typeof i?i(I):l(l({},I),i)),n},g=function(i){var I=s(i.components);return e.createElement(o.Provider,{value:I},i.children)},c={inlineCode:"code",wrapper:function(i){var I=i.children;return e.createElement(e.Fragment,{},I)}},d=e.forwardRef((function(i,I){var n=i.components,t=i.mdxType,a=i.originalType,o=i.parentName,g=r(i,["components","mdxType","originalType","parentName"]),d=s(n),C=t,p=d["".concat(o,".").concat(C)]||d[C]||c[C]||a;return n?e.createElement(p,l(l({ref:I},g),{},{components:n})):e.createElement(p,l({ref:I},g))}));function C(i,I){var n=arguments,t=I&&I.mdxType;if("string"==typeof i||t){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var o in I)hasOwnProperty.call(I,o)&&(r[o]=I[o]);r.originalType=i,r.mdxType="string"==typeof i?i:t,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return e.createElement.apply(null,l)}return e.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(i,I,n)=>{n.d(I,{Z:()=>l});var e=n(67294),t=n(86010);const a="tabItem_Ymn6";function l(i){let{children:I,hidden:n,className:l}=i;return e.createElement("div",{role:"tabpanel",className:(0,t.Z)(a,l),hidden:n},I)}},74866:(i,I,n)=>{n.d(I,{Z:()=>Z});var e=n(87462),t=n(67294),a=n(86010),l=n(12466),r=n(16550),o=n(91980),s=n(67392),g=n(50012);function c(i){return function(i){return t.Children.map(i,(i=>{if(!i||(0,t.isValidElement)(i)&&function(i){const{props:I}=i;return!!I&&"object"==typeof I&&"value"in I}(i))return i;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof i.type?i.type:i.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(i).map((i=>{let{props:{value:I,label:n,attributes:e,default:t}}=i;return{value:I,label:n,attributes:e,default:t}}))}function d(i){const{values:I,children:n}=i;return(0,t.useMemo)((()=>{const i=I??c(n);return function(i){const I=(0,s.l)(i,((i,I)=>i.value===I.value));if(I.length>0)throw new Error(`Docusaurus error: Duplicate values "${I.map((i=>i.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(i),i}),[I,n])}function C(i){let{value:I,tabValues:n}=i;return n.some((i=>i.value===I))}function p(i){let{queryString:I=!1,groupId:n}=i;const e=(0,r.k6)(),a=function(i){let{queryString:I=!1,groupId:n}=i;if("string"==typeof I)return I;if(!1===I)return null;if(!0===I&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:I,groupId:n});return[(0,o._X)(a),(0,t.useCallback)((i=>{if(!a)return;const I=new URLSearchParams(e.location.search);I.set(a,i),e.replace({...e.location,search:I.toString()})}),[a,e])]}function A(i){const{defaultValue:I,queryString:n=!1,groupId:e}=i,a=d(i),[l,r]=(0,t.useState)((()=>function(i){let{defaultValue:I,tabValues:n}=i;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(I){if(!C({value:I,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${I}" but none of its children has the corresponding value. Available values are: ${n.map((i=>i.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return I}const e=n.find((i=>i.default))??n[0];if(!e)throw new Error("Unexpected error: 0 tabValues");return e.value}({defaultValue:I,tabValues:a}))),[o,s]=p({queryString:n,groupId:e}),[c,A]=function(i){let{groupId:I}=i;const n=function(i){return i?`docusaurus.tab.${i}`:null}(I),[e,a]=(0,g.Nk)(n);return[e,(0,t.useCallback)((i=>{n&&a.set(i)}),[n,a])]}({groupId:e}),m=(()=>{const i=o??c;return C({value:i,tabValues:a})?i:null})();(0,t.useLayoutEffect)((()=>{m&&r(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((i=>{if(!C({value:i,tabValues:a}))throw new Error(`Can't select invalid tab value=${i}`);r(i),s(i),A(i)}),[s,A,a]),tabValues:a}}var m=n(72389);const b="tabList__CuJ",u="tabItem_LNqP";function y(i){let{className:I,block:n,selectedValue:r,selectValue:o,tabValues:s}=i;const g=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=i=>{const I=i.currentTarget,n=g.indexOf(I),e=s[n].value;e!==r&&(c(I),o(e))},C=i=>{let I=null;switch(i.key){case"Enter":d(i);break;case"ArrowRight":{const n=g.indexOf(i.currentTarget)+1;I=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(i.currentTarget)-1;I=g[n]??g[g.length-1];break}}I?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},I)},s.map((i=>{let{value:I,label:n,attributes:l}=i;return t.createElement("li",(0,e.Z)({role:"tab",tabIndex:r===I?0:-1,"aria-selected":r===I,key:I,ref:i=>g.push(i),onKeyDown:C,onClick:d},l,{className:(0,a.Z)("tabs__item",u,l?.className,{"tabs__item--active":r===I})}),n??I)})))}function M(i){let{lazy:I,children:n,selectedValue:e}=i;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(I){const i=a.find((i=>i.props.value===e));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((i,I)=>(0,t.cloneElement)(i,{key:I,hidden:i.props.value!==e}))))}function w(i){const I=A(i);return t.createElement("div",{className:(0,a.Z)("tabs-container",b)},t.createElement(y,(0,e.Z)({},i,I)),t.createElement(M,(0,e.Z)({},i,I)))}function Z(i){const I=(0,m.Z)();return t.createElement(w,(0,e.Z)({key:String(I)},i))}},97936:(i,I,n)=>{n.d(I,{Z:()=>t});var e=n(67294);function t(i){let{children:I,color:n}=i;return e.createElement("span",{style:{color:n}},I)}},28389:(i,I,n)=>{n.r(I),n.d(I,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var e=n(87462),t=(n(67294),n(3905)),a=n(74866),l=n(85162),r=n(97936);const o={title:"\u5ea7\u6a19\u5727\u7e2e",sidebar_label:"\u5ea7\u6a19\u5727\u7e2e",draft:!1,toc_max_heading_level:5,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},s=void 0,g={unversionedId:"Algorithm/coordinate-compression",id:"Algorithm/coordinate-compression",title:"\u5ea7\u6a19\u5727\u7e2e",description:"\u5ea7\u6a19\u5727\u7e2e\u3068\u306f",source:"@site/docs/00-Algorithm/07-coordinate-compression.md",sourceDirName:"00-Algorithm",slug:"/Algorithm/coordinate-compression",permalink:"/study-docs/docs/Algorithm/coordinate-compression",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/00-Algorithm/07-coordinate-compression.md",tags:[{label:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/study-docs/docs/tags/\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1695466162,formattedLastUpdatedAt:"2023\u5e749\u670823\u65e5",sidebarPosition:7,frontMatter:{title:"\u5ea7\u6a19\u5727\u7e2e",sidebar_label:"\u5ea7\u6a19\u5727\u7e2e",draft:!1,toc_max_heading_level:5,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},sidebar:"AlgorithmSidebar",previous:{title:"\u7d2f\u7a4d\u548c",permalink:"/study-docs/docs/Algorithm/cumulative-sum"},next:{title:"\u30c0\u30d6\u30ea\u30f3\u30b0",permalink:"/study-docs/docs/Algorithm/doubling"}},c={},d=[{value:"\u5ea7\u6a19\u5727\u7e2e\u3068\u306f",id:"\u5ea7\u6a19\u5727\u7e2e\u3068\u306f",level:2},{value:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:3},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:3},{value:"2 \u6b21\u5143",id:"2-\u6b21\u5143",level:2},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],C={toc:d};function p(i){let{components:I,...o}=i;return(0,t.kt)("wrapper",(0,e.Z)({},C,o,{components:I,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"\u5ea7\u6a19\u5727\u7e2e\u3068\u306f"},"\u5ea7\u6a19\u5727\u7e2e\u3068\u306f"),(0,t.kt)("p",null,"\u8981\u7d20\u306e\u524d\u5f8c\u3067\u5909\u5316\u8d77\u304d\u306a\u3044\u306e\u3067\u3042\u308c\u3070\u3001\u53d6\u308a\u9664\u3044\u3066\u5727\u7e2e\u3059\u308b\u64cd\u4f5c\u3092\u5ea7\u6a19\u5727\u7e2e\u3068\u3044\u3046\u3002"),(0,t.kt)("p",null,"\u4f8b\u3048\u3070\u3001"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[100, 2, 10, 550, 4, 93]\n")),(0,t.kt)("p",null,"\u306e\u3088\u3046\u306a\u914d\u5217\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u3001\u914d\u5217\u306e\u5024\u305d\u306e\u3082\u306e\u3067\u306f\u306a\u304f\u5927\u5c0f\u95a2\u4fc2\u306e\u307f\u304c\u5fc5\u8981\u3067\u3042\u308b\u5834\u5408\u306b",(0,t.kt)("inlineCode",{parentName:"p"},"100"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"550"),"\u306e\u3088\u3046\u306a\u5927\u304d\u306a\u6570\u5b57\u306f\u4e0d\u5fc5\u8981\u3067\u3042\u308b\u3068\u8a00\u3048\u308b\u3002\n\u3053\u306e\u914d\u5217\u3092"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[4, 0, 2, 5, 1, 3]\n")),(0,t.kt)("p",null,"\u306e\u3088\u3046\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u3067\u5c0f\u3055\u306a\u6570\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u5ea7\u6a19\u5727\u7e2e",src:n(2272).Z,title:"\u5ea7\u6a19\u5727\u7e2e",width:"361",height:"261"})),(0,t.kt)("h3",{id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,t.kt)("p",null,"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u30b7\u30f3\u30d7\u30eb\u3067\u3001"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u5727\u7e2e\u3057\u305f\u914d\u5217\u3092\u30b3\u30d4\u30fc\u3057\u3001\u914d\u5217\u306e\u91cd\u8907\u3092\u524a\u9664"),(0,t.kt)("li",{parentName:"ol"},"\u91cd\u8907\u3092\u524a\u9664\u3057\u305f\u914d\u5217\u3092\u30bd\u30fc\u30c8"),(0,t.kt)("li",{parentName:"ol"},"\u4e8c\u5206\u63a2\u7d22\u3092\u7528\u3044\u3066\u4f4d\u7f6e\u3092\u6c42\u3081\u308b")),(0,t.kt)("p",null,"\u3060\u3051\u3067\u3042\u308b\u3002"),(0,t.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,t.kt)(a.Z,{groupId:"code",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="coordinate-compression.py"',title:'"coordinate-compression.py"'},"def compress(input):\n    vals = []\n    for i in range(len(input)):\n        vals.append(input[i])\n    return sorted(set(vals))\n\n\na = [100, 2, 10, 550, 4, 93]\ncompress_a = {v: i for i, v in enumerate(compress(a))}\ncompressed_a = [compress_a[i] for i in a]\n")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Python \u306e\u5834\u5408\u306f\u8f9e\u66f8\u578b\u3067 O(1)\u3067\u6c42\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067 2 \u5206\u63a2\u7d22\u3092\u4f7f\u7528\u305b\u305a\u306b\u5727\u7e2e\u3092\u884c\u306a\u3063\u3066\u3044\u308b\u3002\nC++\u3067\u306f map \u578b\u304c Python \u306e\u8f9e\u66f8\u578b\u306b\u76f8\u5f53\u3059\u308b\u304c\u3001O(log n)\u3068\u306a\u3063\u3066\u3044\u308b\u306e\u3067 2 \u5206\u63a2\u7d22\u3068\u5909\u308f\u3089\u306a\u3044\u3002"))),(0,t.kt)(l.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="coordinate-compression.cpp"',title:'"coordinate-compression.cpp"'},"vector<int> compress(vector<int> input){\n  vector<int> vals\n  for(int i = 0; i< input.size(); ++i){\n    vals.push_back(input[i]);\n  }\n    sort(vals.begin(), vals.end());\n  vals.erase(unique(vals.begin(), vals.end()), vals.end());\n  return vals;\n}\nint main() {\n  vector<int> a = {100, 2, 10, 550, 4, 93};\n  vector<int> compress_a = compress(a);\n  vector<int> compressed_a;\n  for (int i = 0; i < a.size();++i){\n    compressed_a.push_back(lower_bound(compress_a.begin(),compress_a.end(), a[i]) - compress_a.begin());\n  }\n  return 0;\n}\n"))),(0,t.kt)(l.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="coordinate-compression.cs"',title:'"coordinate-compression.cs"'},"public static void Main(string[] args)\n{\n    List<int> a = new List<int> { 100, 2, 10, 550, 4, 93 };\n    List<int> compress_a = compress(a);\n    List<int> compressed_a = new List<int>();\n    for (int i = 0; i < a.Count; ++i)\n    {\n        compressed_a.Add(BinarySearch(compress_a, a[i]));\n        // BinarySearch\u306f2\u5206\u63a2\u7d22\u306e\u8a18\u4e8b\u306e\u51e6\u7406\u3092\u5c11\u3057\u3060\u3051\u4fee\u6b63\u3057\u305f\u3082\u306e\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n    }\n}\n\nprivate static List<int> compress(List<int> input)\n{\n    List<int> vals = new List<int>();\n    for (int i = 0; i < input.Count; i++)\n    {\n        vals.Add(input[i]);\n    }\n    vals.Sort();\n    return vals.Distinct().ToList();\n}\nprivate static int BinarySearch(List<int> box, int index)\n{\n    int l = 0;\n    int r = box.Count;\n    while (r - l > 1)\n    {\n        int mid = (r + l) / 2;\n        if (box[mid] <= index)\n        {\n            l = mid;\n        }\n        else\n        {\n            r = mid;\n        }\n    }\n    return l;\n}\n")))),(0,t.kt)("h2",{id:"2-\u6b21\u5143"},"2 \u6b21\u5143"),(0,t.kt)("p",null,"2 \u6b21\u5143\u306e\u5834\u5408\u306b\u3082\u5ea7\u6a19\u5727\u7e2e\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u5ea7\u6a19\u5727\u7e2e 2\u6b21\u5143",src:n(75040).Z,title:"\u5ea7\u6a19\u5727\u7e2e 2\u6b21\u5143",width:"801",height:"321"})),(0,t.kt)("p",null,"\u5f62\u3092\u5909\u3048\u305a\u306b\u3001\u5727\u7e2e\u3059\u308b\u306e\u3067\u30c7\u30fc\u30bf\u91cf\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,t.kt)(r.Z,{color:"red",mdxType:"FontColor"},"\u6ce8\u610f\u70b9"),"\u3068\u3057\u3066\u5ea7\u6a19\u60c5\u5831\u306e\u96a3\u3092\u5727\u7e2e\u6642\u306b\u8ffd\u52a0\u3057\u306a\u3044\u3068\u9593\u306b\u5b58\u5728\u3059\u308b\u7a7a\u767d\u3092\u524a\u9664\u3057\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002",(0,t.kt)("p",null,"\u96a3\u306e\u5ea7\u6a19\u3092\u633f\u5165\u3057\u306a\u3044\u3067\u3046\u307e\u304f\u3044\u304f\u30b1\u30fc\u30b9\u3082\u5b58\u5728\u3059\u308b\u3002\u305d\u306e\u305f\u3081\u3001\u3069\u3046\u3044\u3063\u305f\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u304b\u3092\u8003\u3048\u3066\u3001\u96a3\u306e\u5ea7\u6a19\u3092\u8ffd\u52a0\u3059\u308b\u304b\u3092\u8003\u3048\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,t.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0-1"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,t.kt)("p",null,"\u4eca\u56de\u984c\u6750\u306b\u3057\u305f\u56f3\u306f\u4e21\u96a3\u306b\u7a7a\u767d\u3068\u3057\u3066\u8981\u7d20\u3092\u4ee3\u5165\u3059\u308b\u5fc5\u8981\u304c\u3042\u3063\u305f\u306e\u3067\u3042\u307e\u308a\u5727\u7e2e\u3055\u308c\u3066\u3044\u306a\u3044\u3088\u3046\u306b\u898b\u3048\u308b\u304c\u3001\u3053\u308c\u304c\u3082\u3063\u3068\u5927\u304d\u306a\u56f3\u3067\u3042\u308c\u3070\u304b\u306a\u308a\u5727\u7e2e\u3055\u308c\u308b\u3002"),(0,t.kt)(a.Z,{groupId:"code",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="coordinate-compression-2.py"',title:'"coordinate-compression-2.py"'},"import bisect\n\n\ndef compress(a, b):\n    vals = []\n    dx = [-1, 0, 1]\n    for i in range(len(a)):\n        for j in dx:\n            vals.append(a[i] + j)\n            vals.append(b[i] + j)\n    return sorted(set(vals))\n\n\n# X1 Y1 X2 Y2\u306e\u9806\u3067\u683c\u7d0d\n# X1 Y1 \u5de6\u4e0a\n# X2 Y2 \u53f3\u4e0b\nbox = [\n    (3, 2, 3, 6),\n    (3, 11, 3, 13),\n    (7, 6, 7, 8),\n    (7, 10, 7, 12),\n    (3, 4, 9, 4),\n    (8, 11, 13, 11),\n]\n\nx1 = []\ny1 = []\nx2 = []\ny2 = []\nfor i in range(len(box)):\n    x1.append(box[i][0])\n    y1.append(box[i][1])\n    x2.append(box[i][2])\n    y2.append(box[i][3])\n\nX = compress(x1, x2)\nY = compress(y1, y2)\nfor i in range(len(x1)):\n    x1[i] = bisect.bisect_left(X, x1[i])\n    x2[i] = bisect.bisect_left(X, x2[i])\n    y1[i] = bisect.bisect_left(Y, y1[i])\n    y2[i] = bisect.bisect_left(Y, y2[i])\n"))),(0,t.kt)(l.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="coordinate-compression-2.cpp"',title:'"coordinate-compression-2.cpp"'},"vector<int> compress(vector<int> a,  vector<int> b){\n  vector<int> vals;\n  int dx[3]= {-1,0,1};\n  for(int i = 0; i< a.size(); ++i){\n    for(int j: dx ){\n      vals.push_back(a[i] + j);\n      vals.push_back(b[i] + j);\n    }\n  }\n  sort(vals.begin(), vals.end());\n  vals.erase(unique(vals.begin(), vals.end()), vals.end());\n\n  return vals;\n}\n\nint main() {\n  vector<tuple<int,int,int,int>> box = {\n    {3, 2, 3, 6},\n    {3, 11, 3, 13},\n    {7, 6, 7, 8},\n    {7, 10, 7, 12},\n    {3, 4, 9, 4},\n    {8, 11, 13, 11},\n  };\n  vector<int> x1,x2,y1,y2;\n  for (int i = 0; i < box.size(); ++i){\n    x1.push_back(get<0>(box[i]));\n    y1.push_back(get<1>(box[i]));\n    x2.push_back(get<2>(box[i]));\n    y2.push_back(get<3>(box[i]));\n  }\n  vector<int> X = compress(x1,x2);\n  vector<int> Y = compress(y1,y2);\n  for (int i = 0; i < x1.size(); ++i){\n    x1[i] = lower_bound(X.begin(), X.end(), x1[i]) - X.begin();\n    y1[i] = lower_bound(Y.begin(), Y.end(), y1[i]) - Y.begin();\n    x2[i] = lower_bound(X.begin(), X.end(), x2[i]) - X.begin();\n    y2[i] = lower_bound(Y.begin(), Y.end(), y2[i]) - Y.begin();\n  }\n\n  return 0;\n}\n\n"))),(0,t.kt)(l.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="coordinate-compression-2.cs"',title:'"coordinate-compression-2.cs"'},"public static void Main(string[] args)\n        {\n            List<int[]> box = new List<int[]>()\n            {\n                new int[4] { 3, 2, 3, 6 },\n                new int[4] { 3, 11, 3, 13 },\n                new int[4] { 7, 6, 7, 8 },\n                new int[4] { 7, 10, 7, 12 },\n                new int[4] { 3, 4, 9, 4 },\n                new int[4] { 8, 11, 13, 11 },\n            };\n            List<int> x1 = new List<int>();\n            List<int> y1 = new List<int>();\n            List<int> x2 = new List<int>();\n            List<int> y2 = new List<int>();\n            for (int i = 0; i < box.Count; ++i)\n            {\n                x1.Add(box[i][0]);\n                y1.Add(box[i][1]);\n                x2.Add(box[i][2]);\n                y2.Add(box[i][3]);\n            }\n            List<int> X = compress(x1, x2);\n            List<int> Y = compress(y1, y2);\n            for (int i = 0; i < x1.Count; ++i)\n            {\n                x1[i] = BinarySearch(X, x1[i]);\n                y1[i] = BinarySearch(Y, y1[i]);\n                x2[i] = BinarySearch(X, x2[i]);\n                y2[i] = BinarySearch(Y, y2[i]);\n            }\n        }\n\n        private static List<int> compress(List<int> a, List<int> b)\n        {\n            List<int> vals = new List<int>();\n            int[] dx = new int[3] { -1, 0, 1 };\n            for (int i = 0; i < a.Count; i++)\n            {\n                foreach (int j in dx)\n                {\n                    vals.Add(a[i] + j);\n                    vals.Add(b[i] + j);\n                }\n            }\n            vals.Sort();\n            return vals.Distinct().ToList();\n        }\n\n        private static int BinarySearch(List<int> box, int index)\n        {\n            int l = 0;\n            int r = box.Count;\n            while (r - l > 1)\n            {\n                int mid = (r + l) / 2;\n                if (box[mid] <= index)\n                {\n                    l = mid;\n                }\n                else\n                {\n                    r = mid;\n                }\n            }\n            return l;\n        }\n")))),(0,t.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://algo-logic.info/coordinate-compress/"},"https://algo-logic.info/coordinate-compress/"))))}p.isMDXComponent=!0},2272:(i,I,n)=>{n.d(I,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyBob3N0PSI2NWJkNzExNDRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNjFweCIgaGVpZ2h0PSIyNjFweCIgdmlld0JveD0iLTAuNSAtMC41IDM2MSAyNjEiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7VkZqSmF3UTJjbWtsUFpXS3dNV3ImcXVvdDsgbmFtZT0mcXVvdDvjg5rjg7zjgrgxJnF1b3Q7Jmd0OzFaelBrNXNnRk1mL21sd3pBbXJpc2MxdTIwdG5Pck9IbnFtUzZKU0VESkpOdG45OWNRV04wcDNkU3gvUGk2TVBRZm53Zkh6NWthelk3bmo3cXZtNS9xNHFJVmMwcVc0cjlyQ2lOR1hVSGp2RFMyK2dOT3NOQjkxVXZZbU1ocWZtajNER3hGa3ZUU1hheVkxR0tXbWE4OVJZcXROSmxHWmk0MXFyNi9TMnZaTFRwNTc1UVFTR3A1TEwwUHF6cVV6ZFc3ZDBNOXEvaWVaUSt5ZVR2T2hUanR6ZjdHclMxcnhTMXpzVGUxeXhuVmJLOUdmSDIwN0lqcDNuMHVmNzhrYnE4R0phbk14SE1yQnRuK09aeTR1cm5Ic3g4K0pycTlYbFZJa3VRN0ppbjY5MVk4VFRtWmRkNnRVMnI3WFY1aWp0RmJHbnJqaWhqYmk5K1U1a3FLbjFFS0dPd3VnWGU0dlBrRHM0M2p0U2QzMGRXWHQrOVIxbWIrT3VkUTlEeVNNQWUrSVl2TUdqV0FDUEhJNkhSNCtLeHpZaUQ0S1BCMDBpOHFBSWVkQ0lQQmhDSG1sRUhpbENIakhqYVlhUFJ4QlBLU0NQZkFFOEFQVkh1c0hISStoZklQMERvVDROZUVENkIwSjlHdlF2Z1A2UklkU25BUTlBLzhndzZ0TjVmd3ZwSHhqMWFjVHhiWVpSbjg1NERQMHZCSThsNk5NRWtNY1M5Q2trandYb1V3STRmc2tRNnRPQUIyVDhRS2hQQXg2US9RdENmUnJ3QUl3Zi90TkV6UU5RaitVWTllbGNyMFA2QjBaOW1zYnJYM0tNK25UT0E3Qi95VCtnVDl1YW43dlR2UlMzVDkzcXBxMjJPRlh1OUtHVXZHMmJjb3JGcHZ1VlM4YlcyelFuR1hQSHJFOTJxNjdGT3J0THM4Y091Y3RKTit1OG9DelorS05OMnpkUzdwUlUrdlhkV01YRmR0ODl1elZhL1JaM0tYbTVGYi8yUXd1SktsaHlmYmQ5N3Zobi8rRHZiVnBJYnBybmFmSC9haFQzaEIrcXNROGVtcC9ObHhOb3NmYWZyUytsVlJkZENwZHhiTjJ3ck0zN1pSbXVEOElFWmIxNnlsRDVEemxQZ1REWXBoRW56d3FFd1RiZ0FSaHNDNFRCTm8yNGVGY2duQXhJSXk3ZUZRZ25BOUtJaTNjRndzbUFOT0ptaUFMaFpFQVdNNTRpbkF3STRpbmdZSzlBT0JrUThBRFVIOFBFQXlvZ0VWZnZTSUpSb1VaY3ZpTUpSb2thY1g4SVNUQnExSWdiUkVpQ1VLUUduUzZvaHlCVXFRRVFVQTlaZ2l3RG5HTWx5UkowR1NpUUJRZ3p5RmxuNG45WWdob0k0TFF6SVFoN21hRGJoZnhrQ01LeC96eW93bm9Jd3FBYTdNd0U5UkNFUVRYWVdnVVpWQ25Db0JvQWdSUm1GT0ZvTndBQ0tkMTkvVEVCbWUrT2dJeXBGT0ZnZDg0RE5JSWdWQ0hoYmtSQUhnaUh1bk1lb0FFVm9TZ0xBaXFrQnFFSWgvNXpJS0FCRmFOSXpTTitNQXZRcVArdmc3R1g0ejhyOVB0cHhyK25ZSTkvQVE9PSZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPgogICAgPGRlZnMvPgogICAgPGc+CiAgICAgICAgPHJlY3QgeD0iMCIgeT0iMjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjIwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjQwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjYwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjgwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjEwMCIgeT0iMjQwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyMCIgeT0iMjAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyMCIgeT0iMjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI0MCIgeT0iMjAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI0MCIgeT0iMjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI4MCIgeT0iMjAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI4MCIgeT0iMjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIxMDAiIHk9IjIwMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMTAwIiB5PSIyMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjEwMCIgeT0iMTYwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIxMDAiIHk9IjE4MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjAiIHk9IjE4MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjAiIHk9IjE0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjAiIHk9IjE2MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjAiIHk9IjEyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjAiIHk9IjgwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyMCIgeT0iMTAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI4MCIgeT0iMTgwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI4MCIgeT0iMTQwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI4MCIgeT0iMTYwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cGF0aCBkPSJNIDE2MC41IDIyMy40NyBMIDE2MC41IDE5NS43NyBMIDE3OS44MiAxOTUuNzcgTCAxNzkuODIgMTc4LjM1IEwgMjA5LjUgMjA5LjYyIEwgMTc5LjgyIDI0MC44OSBMIDE3OS44MiAyMjMuNDcgWiIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjNmM4ZWJmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjQwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjI2MCIgeT0iMjQwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyODAiIHk9IjI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMzAwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjMyMCIgeT0iMjQwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIzNDAiIHk9IjI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjYwIiB5PSIyMDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjI2MCIgeT0iMjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyODAiIHk9IjIwMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjgwIiB5PSIyMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjMyMCIgeT0iMjAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMzQwIiB5PSIyMDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjM0MCIgeT0iMjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIzNDAiIHk9IjE4MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjYwIiB5PSIxODAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjI2MCIgeT0iMTQwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyNjAiIHk9IjE2MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMzIwIiB5PSIxODAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjM0MCIgeT0iMTYwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI0MCIgeT0iMTgwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIxMDAiIHk9IjE0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMTAwIiB5PSIxMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIyMCIgeT0iNjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjIwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMTAwIiB5PSI4MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMTAwIiB5PSI2MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMTAwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMTAwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICA8L2c+Cjwvc3ZnPg=="},75040:(i,I,n)=>{n.d(I,{Z:()=>e});const e=n.p+"assets/images/coordinate-compression-2.drawio-14586ca83c5b4814a2501f3f37fead18.svg"}}]);