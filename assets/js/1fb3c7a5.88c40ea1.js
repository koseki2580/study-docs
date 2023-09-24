"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[8365],{3905:(l,d,a)=>{a.d(d,{Zo:()=>e,kt:()=>s});var I=a(67294);function b(l,d,a){return d in l?Object.defineProperty(l,d,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[d]=a,l}function Z(l,d){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(l);d&&(I=I.filter((function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable}))),a.push.apply(a,I)}return a}function c(l){for(var d=1;d<arguments.length;d++){var a=null!=arguments[d]?arguments[d]:{};d%2?Z(Object(a),!0).forEach((function(d){b(l,d,a[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(a,d))}))}return l}function i(l,d){if(null==l)return{};var a,I,b=function(l,d){if(null==l)return{};var a,I,b={},Z=Object.keys(l);for(I=0;I<Z.length;I++)a=Z[I],d.indexOf(a)>=0||(b[a]=l[a]);return b}(l,d);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(l);for(I=0;I<Z.length;I++)a=Z[I],d.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(l,a)&&(b[a]=l[a])}return b}var m=I.createContext({}),t=function(l){var d=I.useContext(m),a=d;return l&&(a="function"==typeof l?l(d):c(c({},d),l)),a},e=function(l){var d=t(l.components);return I.createElement(m.Provider,{value:d},l.children)},n={inlineCode:"code",wrapper:function(l){var d=l.children;return I.createElement(I.Fragment,{},d)}},G=I.forwardRef((function(l,d){var a=l.components,b=l.mdxType,Z=l.originalType,m=l.parentName,e=i(l,["components","mdxType","originalType","parentName"]),G=t(a),s=b,W=G["".concat(m,".").concat(s)]||G[s]||n[s]||Z;return a?I.createElement(W,c(c({ref:d},e),{},{components:a})):I.createElement(W,c({ref:d},e))}));function s(l,d){var a=arguments,b=d&&d.mdxType;if("string"==typeof l||b){var Z=a.length,c=new Array(Z);c[0]=G;var i={};for(var m in d)hasOwnProperty.call(d,m)&&(i[m]=d[m]);i.originalType=l,i.mdxType="string"==typeof l?l:b,c[1]=i;for(var t=2;t<Z;t++)c[t]=a[t];return I.createElement.apply(null,c)}return I.createElement.apply(null,a)}G.displayName="MDXCreateElement"},85162:(l,d,a)=>{a.d(d,{Z:()=>c});var I=a(67294),b=a(86010);const Z="tabItem_Ymn6";function c(l){let{children:d,hidden:a,className:c}=l;return I.createElement("div",{role:"tabpanel",className:(0,b.Z)(Z,c),hidden:a},d)}},74866:(l,d,a)=>{a.d(d,{Z:()=>r});var I=a(87462),b=a(67294),Z=a(86010),c=a(12466),i=a(16550),m=a(91980),t=a(67392),e=a(50012);function n(l){return function(l){return b.Children.map(l,(l=>{if(!l||(0,b.isValidElement)(l)&&function(l){const{props:d}=l;return!!d&&"object"==typeof d&&"value"in d}(l))return l;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof l.type?l.type:l.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(l).map((l=>{let{props:{value:d,label:a,attributes:I,default:b}}=l;return{value:d,label:a,attributes:I,default:b}}))}function G(l){const{values:d,children:a}=l;return(0,b.useMemo)((()=>{const l=d??n(a);return function(l){const d=(0,t.l)(l,((l,d)=>l.value===d.value));if(d.length>0)throw new Error(`Docusaurus error: Duplicate values "${d.map((l=>l.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(l),l}),[d,a])}function s(l){let{value:d,tabValues:a}=l;return a.some((l=>l.value===d))}function W(l){let{queryString:d=!1,groupId:a}=l;const I=(0,i.k6)(),Z=function(l){let{queryString:d=!1,groupId:a}=l;if("string"==typeof d)return d;if(!1===d)return null;if(!0===d&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:d,groupId:a});return[(0,m._X)(Z),(0,b.useCallback)((l=>{if(!Z)return;const d=new URLSearchParams(I.location.search);d.set(Z,l),I.replace({...I.location,search:d.toString()})}),[Z,I])]}function p(l){const{defaultValue:d,queryString:a=!1,groupId:I}=l,Z=G(l),[c,i]=(0,b.useState)((()=>function(l){let{defaultValue:d,tabValues:a}=l;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(d){if(!s({value:d,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${a.map((l=>l.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return d}const I=a.find((l=>l.default))??a[0];if(!I)throw new Error("Unexpected error: 0 tabValues");return I.value}({defaultValue:d,tabValues:Z}))),[m,t]=W({queryString:a,groupId:I}),[n,p]=function(l){let{groupId:d}=l;const a=function(l){return l?`docusaurus.tab.${l}`:null}(d),[I,Z]=(0,e.Nk)(a);return[I,(0,b.useCallback)((l=>{a&&Z.set(l)}),[a,Z])]}({groupId:I}),u=(()=>{const l=m??n;return s({value:l,tabValues:Z})?l:null})();(0,b.useLayoutEffect)((()=>{u&&i(u)}),[u]);return{selectedValue:c,selectValue:(0,b.useCallback)((l=>{if(!s({value:l,tabValues:Z}))throw new Error(`Can't select invalid tab value=${l}`);i(l),t(l),p(l)}),[t,p,Z]),tabValues:Z}}var u=a(72389);const o="tabList__CuJ",y="tabItem_LNqP";function g(l){let{className:d,block:a,selectedValue:i,selectValue:m,tabValues:t}=l;const e=[],{blockElementScrollPositionUntilNextRender:n}=(0,c.o5)(),G=l=>{const d=l.currentTarget,a=e.indexOf(d),I=t[a].value;I!==i&&(n(d),m(I))},s=l=>{let d=null;switch(l.key){case"Enter":G(l);break;case"ArrowRight":{const a=e.indexOf(l.currentTarget)+1;d=e[a]??e[0];break}case"ArrowLeft":{const a=e.indexOf(l.currentTarget)-1;d=e[a]??e[e.length-1];break}}d?.focus()};return b.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,Z.Z)("tabs",{"tabs--block":a},d)},t.map((l=>{let{value:d,label:a,attributes:c}=l;return b.createElement("li",(0,I.Z)({role:"tab",tabIndex:i===d?0:-1,"aria-selected":i===d,key:d,ref:l=>e.push(l),onKeyDown:s,onClick:G},c,{className:(0,Z.Z)("tabs__item",y,c?.className,{"tabs__item--active":i===d})}),a??d)})))}function N(l){let{lazy:d,children:a,selectedValue:I}=l;const Z=(Array.isArray(a)?a:[a]).filter(Boolean);if(d){const l=Z.find((l=>l.props.value===I));return l?(0,b.cloneElement)(l,{className:"margin-top--md"}):null}return b.createElement("div",{className:"margin-top--md"},Z.map(((l,d)=>(0,b.cloneElement)(l,{key:d,hidden:l.props.value!==I}))))}function h(l){const d=p(l);return b.createElement("div",{className:(0,Z.Z)("tabs-container",o)},b.createElement(g,(0,I.Z)({},l,d)),b.createElement(N,(0,I.Z)({},l,d)))}function r(l){const d=(0,u.Z)();return b.createElement(h,(0,I.Z)({key:String(d)},l))}},28746:(l,d,a)=>{a.r(d),a.d(d,{assets:()=>e,contentTitle:()=>m,default:()=>s,frontMatter:()=>i,metadata:()=>t,toc:()=>n});var I=a(87462),b=(a(67294),a(3905)),Z=a(74866),c=a(85162);const i={title:"\u30b9\u30bf\u30c3\u30af",sidebar_label:"\u30b9\u30bf\u30c3\u30af",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},m=void 0,t={unversionedId:"Data-Structure/stack",id:"Data-Structure/stack",title:"\u30b9\u30bf\u30c3\u30af",description:"\u30b9\u30bf\u30c3\u30af\u3068\u306f",source:"@site/docs/10-Data-Structure/01-stack.md",sourceDirName:"10-Data-Structure",slug:"/Data-Structure/stack",permalink:"/study-docs/docs/Data-Structure/stack",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/10-Data-Structure/01-stack.md",tags:[{label:"\u30c7\u30fc\u30bf\u69cb\u9020",permalink:"/study-docs/docs/tags/\u30c7\u30fc\u30bf\u69cb\u9020"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1695463669,formattedLastUpdatedAt:"2023\u5e749\u670823\u65e5",sidebarPosition:1,frontMatter:{title:"\u30b9\u30bf\u30c3\u30af",sidebar_label:"\u30b9\u30bf\u30c3\u30af",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},sidebar:"Data-StructureSidebar",previous:{title:"\u30ad\u30e5\u30fc",permalink:"/study-docs/docs/Data-Structure/queue"},next:{title:"\u30b0\u30e9\u30d5",permalink:"/study-docs/docs/Data-Structure/graph"}},e={},n=[{value:"\u30b9\u30bf\u30c3\u30af\u3068\u306f",id:"\u30b9\u30bf\u30c3\u30af\u3068\u306f",level:2},{value:"Pop",id:"pop",level:3},{value:"Push",id:"push",level:3}],G={toc:n};function s(l){let{components:d,...i}=l;return(0,b.kt)("wrapper",(0,I.Z)({},G,i,{components:d,mdxType:"MDXLayout"}),(0,b.kt)("h2",{id:"\u30b9\u30bf\u30c3\u30af\u3068\u306f"},"\u30b9\u30bf\u30c3\u30af\u3068\u306f"),(0,b.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5f8c\u5165\u308c\u5148\u51fa\u3057(LIFO : Last In First Out)\u306e\u30ea\u30b9\u30c8\u69cb\u9020\u3092\u6301\u3064\u30c7\u30fc\u30bf\u69cb\u9020\u3092",(0,b.kt)("inlineCode",{parentName:"p"},"\u30b9\u30bf\u30c3\u30af(stack)"),"\u3068\u3044\u3046\u3002"),(0,b.kt)("p",null,(0,b.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(53989).Z,title:"\u30b9\u30bf\u30c3\u30af",width:"451",height:"132"})),(0,b.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u8a00\u8a9e\u3067\u6a19\u6e96\u3067\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u305d\u308c\u4f7f\u7528\u3059\u308b\u306e\u304c\u4e00\u756a\u9ad8\u901f\u306b\u52d5\u4f5c\u3059\u308b\u305f\u3081\u3001\u6a19\u6e96\u3067\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,b.kt)(Z.Z,{groupId:"code",mdxType:"Tabs"},(0,b.kt)(c.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="stack.py"',title:'"stack.py"'},"# Python\u306e\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\nfrom collections import deque\n\n# \u521d\u671f\u5316\nbox = deque()\n\n# push \u8981\u7d20\u3092\u4e00\u756a\u5f8c\u308d\u306b\u8ffd\u52a0\u3059\u308b\nbox.append(1)\nbox.append(2)\nbox.append(3)\nprint(box) # deque([1, 2, 3])\nbox.append(4)\nprint(box) # deque([1, 2, 3, 4])\n\n# pop \u4e00\u756a\u5f8c\u308d\uff08\u65b0\u3057\u3044\uff09\u8981\u7d20\u3092\u53d6\u308a\u51fa\u3057\nprint(box.pop()) # 4\nprint(box.pop()) # 3\nprint(box) # deque([1, 2])\n"))),(0,b.kt)(c.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="stack.cpp"',title:'"stack.cpp"'},"int main() {\n    // \u521d\u671f\u5316\n    stack<int> s;\n    // push\u3000\u8981\u7d20\u3092\u5f8c\u308d\u306b\u8ffd\u52a0\n    s.push(1);\n    s.push(2);\n    s.push(3);\n    // \u4e00\u756a\u5f8c\u308d\u306e\u8981\u7d20\u3092\u78ba\u8a8d\n    cout << s.top() << endl; // 3  s:[1,2,3]\n    s.push(4);\n    cout << s.top() << endl; // 4  s:[1,2,3,4]\n\n    // pop \u4e00\u756a\u5f8c\u308d\uff08\u4e00\u756a\u65b0\u3057\u3044\uff09\u8981\u7d20\u3092\u53d6\u308a\u9664\u304f\n    s.pop();\n    s.pop();\n    cout << s.top() << endl; // 2  s:[1,2]\n    return 0;\n}\n"))),(0,b.kt)(c.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="stack.cs"',title:'"stack.cs"'},"public static void Main()\n{\n  // \u521d\u671f\u5316\n  Stack<int> s = new Stack<int>();\n\n  // Push \u8981\u7d20\u3092\u4e00\u756a\u5f8c\u308d\u306b\u8ffd\u52a0\n  s.Push(1);\n  s.Push(2);\n  s.Push(3);\n  Console.WriteLine(s.Peek()); // 3  s:[1,2,3]\n  s.Push(4);\n  Console.WriteLine(s.Peek()); // 4  s:[1,2,3,4]\n\n  // Pop\u3000\u4e00\u756a\u5f8c\u308d\uff08\u4e00\u756a\u65b0\u3057\u3044\uff09\u8981\u7d20\u3092\u53d6\u308a\u9664\u304f\n  s.Pop();\n  s.Pop();\n  Console.WriteLine(s.Peek()); // 2  s:[1,2]\n\n  return;\n}\n")))),(0,b.kt)("h3",{id:"pop"},"Pop"),(0,b.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5f8c\u308d\u304b\u3089\u53d6\u308a\u51fa\u3059\u51e6\u7406\u3002\u8a00\u8a9e\u306b\u3088\u308a\u3001\u540d\u79f0\u304c\u7570\u306a\u308b\u304c\u30b9\u30bf\u30c3\u30af\u306e\u30c7\u30fc\u30bf\u69cb\u9020\u3067\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\u51e6\u7406\u3092",(0,b.kt)("inlineCode",{parentName:"p"},"Pop"),"\u3068\u3044\u3046\u3002"),(0,b.kt)("p",null,(0,b.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(42893).Z,title:"\u30dd\u30c3\u30d7",width:"536",height:"132"})),(0,b.kt)("h3",{id:"push"},"Push"),(0,b.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5f8c\u308d\u306b\u5165\u308c\u308b\u51e6\u7406\u3002\u8a00\u8a9e\u306b\u3088\u308a\u3001\u540d\u79f0\u304c\u7570\u306a\u308b\u304c\u30b9\u30bf\u30c3\u30af\u306e\u30c7\u30fc\u30bf\u69cb\u9020\u3067\u30c7\u30fc\u30bf\u3092\u5165\u308c\u308b\u51e6\u7406\u3092",(0,b.kt)("inlineCode",{parentName:"p"},"Push"),"\u3068\u3044\u3046\u3002"),(0,b.kt)("p",null,(0,b.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(20631).Z,title:"\u30d7\u30c3\u30b7\u30e5",width:"491",height:"132"})))}s.isMDXComponent=!0},53989:(l,d,a)=>{a.d(d,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0NTFweCIgaGVpZ2h0PSIxMzJweCIgdmlld0JveD0iLTAuNSAtMC41IDQ1MSAxMzIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDtkNzgzNTQwMy1jMzkyLTQ3OTEtYWEyMC05ZTU0ODZmZGUzNzUmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0wNS0xMFQxMTozMDoyNi45NjNaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDExXzZfMCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ29kZS8xLjU4LjAgQ2hyb21lLzg5LjAuNDM4OS4xMjggRWxlY3Ryb24vMTIuMC4xMyBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7MUZoVHVaOGtoLWxsNEE0NzNZOE8mcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi4yLjQmcXVvdDsgcGFnZXM9JnF1b3Q7MSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtMdktaQUlEV0hlZ01mMVk1V0RoNCZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs3WmxOazVzZ0dNYy9qZGNkRkZGejNLVGI3YVV6bmNtaFo2cEVtYUpra0x6MTB4Y3J4QmZpSnB0eGhtMW1UNUUvOEFpLy95TWk4ZUNxUEw0S3ZDMis4NHd3THdEWjBZTmZ2Q0R3QVlMcXAxRk9yWUpDTGVTQ1pycFJKNnpwSDJKNmFuVkhNMUlQR2tyT21hVGJvWmp5cWlLcEhHaFlDSDRZTnR0d05yenJGdWZFRXRZcFpyYjZrMmF5YU5Va2lEdjlHNkY1WWU3c1I0dTJwc1Ntc1o1SlhlQ01IM29TZlBIZ1NuQXUyNnZ5dUNLc2dXZTR0UDIrVHRTZUJ5WklKVy9xb01Idk1kdnB5WVY2WlBKa3BpdjRyc3BJMHdONGNIa29xQ1RyTFU2YjJvTXlXR21GTEprcStlclNIb0VlMUo0SVNZNDlTWS9vbGZDU1NIRlNUVXh0b3VubzlBaWdMaDg2MkFpMVV0SGpiSnBoYlc5K2p0d1JVQmNhd2dTUTBBS0NuQU1KSUhJSEJGbEFmUGRBRmc0ekpQcUFqd3dNSFdaSWJBRUpuQU1KZ2NNTVNTd2cwRDBRNURCREZqZXNJV29lY2pqcldncittNnc0NDBJcEZhOVV5K1dHTWphU01LTjVwWXFwb2tPVXZteW9VUFc2ZnRZVkpjMnk1allYTVErTm1PWDFGVCtOV0FPYmRRaHMxc0VNckUyTU41L0doMkVkaElGTDFyN0YybjdRSDRmMXdtbGUzN0pUZlJqV0VEbk42MXMyd1EvRE9nUk84OXJlWDBjUHpEcHltdGYyVHRWQ1RhcnN1VGtpNkJCT1V2Y0N1SW9oQW1DRVh1a2JIQ1hnVFdZa0c1d3gyTVQ2KzdJTFBJd21DTU9TN29mYnFrdVE5QjErY0twR2N2MWIyNFNvK1U2a1JQZnFueVNNQXFHcC9hVUpKTEhJaWJRQy9mUHNQTzNiYkxUMzE1ODJqbXlNNXJKeEhHaEdHKzJ2QXN2R3VzRGI1bkxEeUZIN3VleFptekpjMXpRZHVxdnF6YWtjQW0xWkh5SDY0Q21KTDdpY3BDUk5MK1hGcndTRjZIL3dIMFVqLzhIQ3JMUHZ6WUFJWGcwMVh3NUErMnZsTXdmdXpBSEx1UGp1SExEU3lRNDFZdzdZWDFIdlc4Nm5GdTNwWmY2ald6bmJXL25xZStGdUcxV3grNXVpYmQ3OTJRTmYvZ0k9Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxyZWN0IHg9IjAiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuNSw1OS41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSI1NSIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OS41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjU8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjExMCIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQuNSw1OS41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4xPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxNjUiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NDwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMjIwIiB5PSI1MSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NC41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjI8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjI3NSIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTkuNSw1OS41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4zPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSI3LjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4xPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSI2Mi41IiB5PSIyMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4LjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMTE3LjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMzLjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MzwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMTcyLjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg4LjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NDwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMjI3LjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQzLjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMjgyLjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4LjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHBhdGggZD0iTSAwIDUxIEwgMzc1IDUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNzM1MDAiIHN0cm9rZU1pdGVybGltaXQ9IjEwIiBwb2ludGVyRXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDAgODEgTCAzNzUgODEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M3MzUwMCIgc3Ryb2tlTWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXJFdmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMzgwLjUgMzUuNSBMIDM4MC41IDI1LjUgTCA0MTUuODkgMjUuNSBMIDQxNS44OSAwIEwgNDQ5LjUgMzAuNSBMIDQxNS44OSA2MSBMIDQxNS44OSAzNS41IFoiIGZpbGw9IiNmOGNlY2MiIHN0cm9rZT0iI2I4NTQ1MCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSA0NDkuNSA5NS41IEwgNDQ5LjUgMTA1LjUgTCA0MTQuMTEgMTA1LjUgTCA0MTQuMTEgMTMxIEwgMzgwLjUgMTAwLjUgTCA0MTQuMTEgNzAgTCA0MTQuMTEgOTUuNSBaIiBmaWxsPSIjZjhjZWNjIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZUxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlTWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMCA1MSBMIDAgODEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M3MzUwMCIgc3Ryb2tlTWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXJFdmVudHM9InN0cm9rZSIvPjwvZz48L3N2Zz4="},42893:(l,d,a)=>{a.d(d,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MzZweCIgaGVpZ2h0PSIxMzJweCIgdmlld0JveD0iLTAuNSAtMC41IDUzNiAxMzIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthYTgxYmVkYy1lMjE3LTRjZTEtYmQ4Yi02YTY1NzE2MmUyODUmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0wNS0xMFQxMTozMzo0OS43NjVaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDExXzZfMCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ29kZS8xLjU4LjAgQ2hyb21lLzg5LjAuNDM4OS4xMjggRWxlY3Ryb24vMTIuMC4xMyBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7WkxsT2ZuWXBJc1AzWkhoOUozcTImcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi4yLjQmcXVvdDsgcGFnZXM9JnF1b3Q7MSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtMdktaQUlEV0hlZ01mMVk1V0RoNCZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs3Wm5MY3RzZ0ZJYWZSdHNNQXFITE1uYlNkTk9aem5qUk5aV3d4QlFKRDhLeDNhY3Zxc0M2WU1lT1IxT2xucXdzZnVBQTN6a0NqdXloWmJsL2tXUlRmQk1aNVI0RTJkNURUeDZFUHNCSS96VEtvVlZ3WUlSY3NzdzA2b1FWKzAxdFQ2TnVXVWJyUVVNbEJGZHNNeFJUVVZVMFZRT05TQ2wydzJacndZZWpia2hPSFdHVkV1NnFQMWltaWxhTllkVHBYeW5MQ3p1eUh5WnRUVWxzWTdPU3VpQ1oyUFVrOU95aHBSUkN0VS9sZmtsNUE4OXlhZnQ5T1ZON25KaWtsYnFtQXpJOVhnbmZtc1VGWm1icVlKY3J4YmJLYU5NRGVHaXhLNWlpcXcxSm05cWRkckRXQ2xWeVhmTDFvenNET3dTVml1NTdrcG5SQ3hVbFZmS2dtOWphMk5BeDRRR1JLZTg2MkJpM1V0SGpiSnNSNDk3OGFMa2pvQjhNaEROQW9BTUV6dzRFSWp3ZkVPUUE4ZWNIa3N3WUljRUhmR1ZRTUdPRVlBY0luQjFJQUdhTWtOQUJnbVlIRW9aRElIN3lENEZFVit3aGVoMXF1T3BhU2ZHTExnVVhVaXVWcUhUTHhacHhQcElJWjNtbGk2bW1RN1crYUtnd2ZWdy9tb3FTWlZrenpFbk1RMGRNY254RkQ2TzNFYmlzQStDeWhsT3dqcTk0RysrR05RemduS3lUSzE3MCsyR2R6Qm5YMXU2YngrN2RzRVo0enJnTzNLekF2UVRmRGVzQXpCclg3djNhUVUycjdMRkpXenVFWjZsN0VDMGpoQUVZb2RmNm1vUXhlSk1aelFaNXIwdXNmMWM0d2NOcWtuS2kyT3Z3cUQ4RnlZendYVEE5azh2NW56VlJpNjFNcWVuVnoyNUhoakErY3l1MmhoU1JPVldPb2I4K095NzdPamU2V2NHbkcwZHVES2R5NDlqUWhHNTBjeG5IalhWQk5zM2ptdE85OGVlaTU5cVVrN3BtNmRDN3V0NStLY0tnTFp2UFdqNTRpS01UWG81VG1xYW40dUpuakFQOFAvZ2ZqeklPQ0JLN3o3NDNBa0owMGRTRU1lQ21iNTh4Y0dNTU9JNkxibzRCSjV4Y1V4UEdnSnV4dm04N1A3ZHBuOS9tUDdvckp6dVZMNTRMTjd0UkY3dFA1MjN6N2c4STlQd0gmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMCIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjQ8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjU1IiB5PSI1MSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMTEwIiB5PSI1MSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNC41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjE8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjE2NSIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODkuNSw1OS41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIyMjAiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ0LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iNDgwIiB5PSIxMSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwNC41LDE5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjM8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjcuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy41LDI0LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjciIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDdweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjE8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjYyLjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzguNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4yPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxMTcuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzMuNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4zPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxNzIuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODguNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIyMjcuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDMuNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij41PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cGF0aCBkPSJNIDAgNTEgTCAzNzUgNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M3MzUwMCIgc3Ryb2tlTWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXJFdmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMCA4MSBMIDM3NSA4MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzczNTAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzODAuNSAzNS41IEwgMzgwLjUgMjUuNSBMIDQxNS44OSAyNS41IEwgNDE1Ljg5IDAgTCA0NDkuNSAzMC41IEwgNDE1Ljg5IDYxIEwgNDE1Ljg5IDM1LjUgWiIgZmlsbD0iI2Y4Y2VjYyIgc3Ryb2tlPSIjYjg1NDUwIiBzdHJva2VMaW5lam9pbj0icm91bmQiIHN0cm9rZU1pdGVybGltaXQ9IjEwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDQ0OS41IDk1LjUgTCA0NDkuNSAxMDUuNSBMIDQxNC4xMSAxMDUuNSBMIDQxNC4xMSAxMzEgTCAzODAuNSAxMDAuNSBMIDQxNC4xMSA3MCBMIDQxNC4xMSA5NS41IFoiIGZpbGw9IiNmOGNlY2MiIHN0cm9rZT0iI2I4NTQ1MCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAwIDUxIEwgMCA4MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzczNTAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0ic3Ryb2tlIi8+PC9nPjwvc3ZnPg=="},20631:(l,d,a)=>{a.d(d,{Z:()=>I});const I=a.p+"assets/images/stack-3.drawio-2f2aad801823b1bca498fa4eada1de40.svg"}}]);