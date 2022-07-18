"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[102],{3905:function(e,l,a){a.d(l,{Zo:function(){return r},kt:function(){return Z}});var n=a(7294);function t(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?i(Object(a),!0).forEach((function(l){t(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function m(e,l){if(null==e)return{};var a,n,t=function(e,l){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],l.indexOf(a)>=0||(t[a]=e[a]);return t}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var b=n.createContext({}),c=function(e){var l=n.useContext(b),a=l;return e&&(a="function"==typeof e?e(l):d(d({},l),e)),a},r=function(e){var l=c(e.components);return n.createElement(b.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},o=n.forwardRef((function(e,l){var a=e.components,t=e.mdxType,i=e.originalType,b=e.parentName,r=m(e,["components","mdxType","originalType","parentName"]),o=c(a),Z=t,I=o["".concat(b,".").concat(Z)]||o[Z]||p[Z]||i;return a?n.createElement(I,d(d({ref:l},r),{},{components:a})):n.createElement(I,d({ref:l},r))}));function Z(e,l){var a=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var i=a.length,d=new Array(i);d[0]=o;var m={};for(var b in l)hasOwnProperty.call(l,b)&&(m[b]=l[b]);m.originalType=e,m.mdxType="string"==typeof e?e:t,d[1]=m;for(var c=2;c<i;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},5162:function(e,l,a){a.d(l,{Z:function(){return d}});var n=a(7294),t=a(4334),i="tabItem_Ymn6";function d(e){var l=e.children,a=e.hidden,d=e.className;return n.createElement("div",{role:"tabpanel",className:(0,t.Z)(i,d),hidden:a},l)}},5488:function(e,l,a){a.d(l,{Z:function(){return Z}});var n=a(3117),t=a(7294),i=a(4334),d=a(2389),m=a(7392),b=a(7094),c=a(2466),r="tabList__CuJ",p="tabItem_LNqP";function o(e){var l,a,d=e.lazy,o=e.block,Z=e.defaultValue,I=e.values,s=e.groupId,u=e.className,G=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),W=null!=I?I:G.map((function(e){var l=e.props;return{value:l.value,label:l.label,attributes:l.attributes}})),y=(0,m.l)(W,(function(e,l){return e.value===l.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===Z?Z:null!=(l=null!=Z?Z:null==(a=G.find((function(e){return e.props.default})))?void 0:a.props.value)?l:G[0].props.value;if(null!==h&&!W.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+W.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,b.U)(),N=g.tabGroupChoices,v=g.setTabGroupChoices,k=(0,t.useState)(h),x=k[0],j=k[1],O=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var Y=N[s];null!=Y&&Y!==x&&W.some((function(e){return e.value===Y}))&&j(Y)}var R=function(e){var l=e.currentTarget,a=O.indexOf(l),n=W[a].value;n!==x&&(w(l),j(n),null!=s&&v(s,String(n)))},D=function(e){var l,a=null;switch(e.key){case"ArrowRight":var n,t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break;case"ArrowLeft":var i,d=O.indexOf(e.currentTarget)-1;a=null!=(i=O[d])?i:O[O.length-1]}null==(l=a)||l.focus()};return t.createElement("div",{className:(0,i.Z)("tabs-container",r)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},u)},W.map((function(e){var l=e.value,a=e.label,d=e.attributes;return t.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===l?0:-1,"aria-selected":x===l,key:l,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:R,onClick:R},d,{className:(0,i.Z)("tabs__item",p,null==d?void 0:d.className,{"tabs__item--active":x===l})}),null!=a?a:l)}))),d?(0,t.cloneElement)(G.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},G.map((function(e,l){return(0,t.cloneElement)(e,{key:l,hidden:e.props.value!==x})}))))}function Z(e){var l=(0,d.Z)();return t.createElement(o,(0,n.Z)({key:String(l)},e))}},9900:function(e,l,a){a.r(l),a.d(l,{assets:function(){return o},contentTitle:function(){return r},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return Z}});var n=a(3117),t=a(102),i=(a(7294),a(3905)),d=a(5488),m=a(5162),b=["components"],c={title:"2\u5206\u63a2\u7d22",sidebar_label:"2\u5206\u63a2\u7d22",draft:!1,toc_max_heading_level:4},r=void 0,p={unversionedId:"Algorithm/binary-search",id:"Algorithm/binary-search",title:"2\u5206\u63a2\u7d22",description:"2 \u5206\u63a2\u7d22\u3068\u306f",source:"@site/docs/00-Algorithm/00-binary-search.mdx",sourceDirName:"00-Algorithm",slug:"/Algorithm/binary-search",permalink:"/study-docs/docs/Algorithm/binary-search",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/00-Algorithm/00-binary-search.mdx",tags:[],version:"current",lastUpdatedAt:1657017167,formattedLastUpdatedAt:"2022\u5e747\u67085\u65e5",sidebarPosition:0,frontMatter:{title:"2\u5206\u63a2\u7d22",sidebar_label:"2\u5206\u63a2\u7d22",draft:!1,toc_max_heading_level:4},sidebar:"AlgorithmSidebar",next:{title:"\u5e45\u512a\u5148\u63a2\u7d22",permalink:"/study-docs/docs/Algorithm/breadth-first-search"}},o={},Z=[{value:"2 \u5206\u63a2\u7d22\u3068\u306f",id:"2-\u5206\u63a2\u7d22\u3068\u306f",level:2},{value:"\u8003\u3048\u65b9",id:"\u8003\u3048\u65b9",level:2},{value:"\u898b\u65b9",id:"\u898b\u65b9",level:3},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:2}],I={toc:Z};function s(e){var l=e.components,c=(0,t.Z)(e,b);return(0,i.kt)("wrapper",(0,n.Z)({},I,c,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"2-\u5206\u63a2\u7d22\u3068\u306f"},"2 \u5206\u63a2\u7d22\u3068\u306f"),(0,i.kt)("p",null,"\u63a2\u7d22\u5bfe\u8c61\u304c\u30bd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u9650\u308a\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u63a2\u7d22\u65b9\u6cd5\u3067\u3042\u308b\u3002"),(0,i.kt)("p",null,"\u30bd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u914d\u5217\u306e\u7279\u6027\u3092\u6d3b\u304b\u3057\u305f\u63a2\u7d22\u3067\u3001\u7dda\u5f62\u63a2\u7d22\u3088\u308a\u3082\u9ad8\u901f\u306b\u63a2\u7d22\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\n\u8a08\u7b97\u91cf\u306f O(\u221aN)"),(0,i.kt)("h2",{id:"\u8003\u3048\u65b9"},"\u8003\u3048\u65b9"),(0,i.kt)("p",null,"2 \u5206\u63a2\u7d22\u306e\u8003\u3048\u65b9\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"1~1000"),"\u307e\u3067\u306e\u6570\u5b57\u306e\u4e2d\u3067 1 \u3064\u306e\u5024\u3092\u898b\u3064\u3051\u308b\u3068\u3044\u3046\u30b2\u30fc\u30e0\u3092\u8003\u3048\u308b\u3068\u5206\u304b\u308a\u3084\u3059\u3044\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(7149).Z,title:"1-1000\u306e\u914d\u5217",width:"594",height:"31"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"320"),"\u756a\u3092\u63a2\u3059\u5834\u5408\u3092\u8003\u3048\u308b\u3068\u3001\u7dda\u5f62\u63a2\u7d22\u3067\u306f\u524d\u304b\u3089\u9806\u306b\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001320 \u56de\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(444).Z,title:"\u7dda\u5f62\u63a2\u7d22\u306e\u4f8b",width:"744",height:"271"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1~1000"),"\u3068\u9806\u756a\u306b\u4e26\u3093\u3067\u3044\u308b\u3068\u3044\u3046\u3053\u3068\u306b\u7740\u76ee\u3059\u308b\u3068\u771f\u3093\u4e2d\u306e\u6570\u5b57\u3088\u308a\u3082\u5927\u304d\u3044\u304b\u5c0f\u3055\u3044\u304b\u3092\u5224\u5b9a\u3059\u308b\u3053\u3068\u3067\u63a2\u7d22\u5bfe\u8c61\u7bc4\u56f2\u3092\u534a\u5206\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\n\u5bfe\u8c61\u7bc4\u56f2\u304c\u534a\u5206\u534a\u5206\u3068\u306a\u3063\u3066\u3044\u304d\u3001\u6700\u7d42\u7684\u306b\u306f\u6c42\u3081\u3066\u3044\u308b\u5024\u306b\u305f\u3069\u308a\u7740\u304f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"500\u3088\u308a\u5927\u304d\u3044\u304b"),"\u3000 \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"250\u3088\u308a\u5927\u304d\u3044\u304b"),"\u3000 \u2192 Yes"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"375\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"312\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 Yes"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"343\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"327\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"319\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 Yes"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"323\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"321\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"320\u3067\u3059\u304b\uff1f"),"\u3000 \u2192 Yes")),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u8cea\u554f\u3059\u308b\u3053\u3068\u3067\u7dda\u5f62\u63a2\u7d22\u3067\u306f 320 \u56de\u5fc5\u8981\u3060\u3063\u305f\u3082\u306e\u304c\u300110 \u56de\u3067\u6c42\u3081\u305f\u3044\u3082\u306e\u3092\u6c42\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(4903).Z,title:"2\u5206\u63a2\u7d22\u306e\u4f8b",width:"794",height:"291"})),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u30bd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u7528\u3044\u3066\u63a2\u7d22\u7bc4\u56f2\u3092\u534a\u5206\u305a\u3064\u306b\u3057\u3066\u3044\u304f\u65b9\u6cd5\u3092",(0,i.kt)("strong",{parentName:"p"},"2 \u5206\u63a2\u7d22"),"\u3068\u3044\u3046\u3002"),(0,i.kt)("h3",{id:"\u898b\u65b9"},"\u898b\u65b9"),(0,i.kt)("p",null,"2 \u5206\u63a2\u7d22\u3092\u7528\u3044\u308b\u3068\u3042\u308b\u5024\u3092\u8d85\u3048\u306a\u3044\u6700\u5927\u306e\u5024\u3092\u9ad8\u901f\u306b\u6c42\u3081\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u56f3\u306e\u3088\u3046\u306b\u914d\u5217\u304c\u5b58\u5728\u3057\u305f\u969b\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"55"),"\u4ee5\u4e0b\u3067\u6700\u5927\u306e\u5024\u3092\u77e5\u308a\u305f\u3044\u5834\u5408"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u914d\u52176(300)\u306f55\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 Yes"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u914d\u52173(10)\u306f55\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u914d\u52174(15)\u306f55\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u914d\u52175(50)\u306f55\u3088\u308a\u5927\u304d\u3044\u304b")," \u2192 No")),(0,i.kt)("p",null,"\u3068\u63a2\u3059\u3053\u3068\u3067\u914d\u5217 5 \u306e",(0,i.kt)("inlineCode",{parentName:"p"},"50"),"\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"55"),"\u3092\u8d85\u3048\u306a\u3044\u6700\u5927\u306e\u5024\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(9742).Z,title:"\u914d\u5217",width:"481",height:"51"})),(0,i.kt)("p",null,"\u3053\u308c\u306f OK \u9818\u57df\u3068 NG \u9818\u57df\u3092\u5206\u3051\u3001\u305d\u306e\u5883\u754c\u7dda\u3092\u898b\u3064\u3051\u3066\u3044\u308b\u3068\u3082\u8a00\u3048\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(1443).Z,title:"2\u5206\u63a2\u7d22\u306e\u898b\u65b9",width:"709",height:"671"})),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u6570\u3042\u3066\u30b2\u30fc\u30e0\u3082",(0,i.kt)("inlineCode",{parentName:"p"},"320"),"\u3092\u8d85\u3048\u306a\u3044\u6700\u5927\u306e\u5024\u3092\u6c42\u3081\u308b\u3068\u8a00\u3044\u63db\u3048\u308b\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"320"),"\u4ee5\u4e0b\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"321"),"\u3088\u308a\u5927\u304d\u3044\u6570\u3067\u9818\u57df\u3092\u5206\u3051\u3066\u3044\u308b\u3068\u8003\u3048\u3089\u308c\u308b\u3002"),(0,i.kt)("h2",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,i.kt)("p",null,"\u4e0a\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"50"),"\u3092\u898b\u3064\u3051\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)(d.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(m.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="binary-search.py"',title:'"binary-search.py"'},"box = [1,2,10,15,50,300,503,504,700,874,5000,5001]\nl = 0\nr = len(box)\nwhile (r-l) > 1:\n    mid = (r+l) // 2\n    if box[mid] <= 55:\n        l = mid\n    else:\n        r = mid\nprint(box[l])\n"))),(0,i.kt)(m.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="binary-search.cpp"',title:'"binary-search.cpp"'},"int main() {\n\n    int box[] = {1,2,10,15,50,300,503,504,700,874,5000,5001};\n    int l = 0;\n    int r = size(box);\n    while (r-l > 1){\n        int mid = (r+l)/2;\n        if (box[mid] < 55){\n            l = mid;\n        }else{\n            r = mid;\n        }\n    }\n    cout << box[l] << endl;\n    return 0;\n}\n"))),(0,i.kt)(m.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="binary-search.cs"',title:'"binary-search.cs"'},"public static void Main(string[] args)\n{\n    int[] box = new int[] { 1, 2, 10, 15, 50, 300, 503, 504, 700, 874, 5000, 5001 };\n    int l = 0;\n    int r = box.Length;\n    while (r -l > 1)\n    {\n        int mid = (r + l) / 2;\n        if (box[mid] < 55)\n        {\n            l = mid;\n        }\n        else\n        {\n            r = mid;\n        }\n    }\n    Console.WriteLine(box[l]);\n}\n")))),(0,i.kt)("p",null,"\u6b21\u306e\u90e8\u5206\u3067\u691c\u7d22\u5bfe\u8c61\uff08\u5168\u3066\u306e\uff09\u3092\u6307\u5b9a\u3057\u3066\u3044\u308b\u3002\u4eca\u56de\u306e\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"l"),"\u306b OK \u9818\u57df\u306e\u6700\u5927\u306e\u756a\u53f7\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"\u306b NG \u9818\u57df\u306e\u6700\u5c0f\u306e\u756a\u53f7\u3092\u5165\u308c\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u6700\u5927\u306e OK \u9818\u57df\u306f\u914d\u5217\u306e\u6700\u5f8c\u306e\u8981\u7d20\u756a\u53f7\u306b\u306a\u308b\u306e\u3067\u3001NG \u9818\u57df\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"\uff09\u306f\u914d\u5217\u306e\u6570\u306b\u3057\u3066\u3044\u308b\uff08\u30a2\u30af\u30bb\u30b9\u756a\u53f7\u3067\u898b\u308b\u3068\u7bc4\u56f2\u5916\uff09\u3002\n(\u203b\u6b63\u78ba\u306b\u3059\u308b\u306e\u3067\u3042\u308c\u3070\u4e0a\u8a18\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4e00\u756a\u521d\u3081\u306e\u914d\u5217\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"-\u7121\u9650"),"\u3092\u633f\u5165\u3059\u308b\u3079\u304d\u3067\u3042\u308b\u3002\u7406\u7531\u306f\u6700\u5c0f\u306e NG \u9818\u57df\u304c\u914d\u5217\u306e\u4e00\u756a\u521d\u3081\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u304b\u3089\u3067\u3042\u308b\u3002\u4eca\u56de\u306f\u7701\u3044\u3066\u3044\u308b\u3002)"),(0,i.kt)(d.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(m.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"l = 0\nr = len(box)\n"))),(0,i.kt)(m.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int l = 0;\nint r = size(box);\n"))),(0,i.kt)(m.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"int l = 0;\nint r = box.Length;\n")))),(0,i.kt)("p",null,"OK \u9818\u57df\u3068 NG \u9818\u57df\u3092\u5206\u3051\u308b\u5883\u754c\u7dda\u3092\u6c42\u3081\u308b\u306b\u306f\u305d\u308c\u305e\u308c\u306e\u9818\u57df\u3092\u5897\u3084\u3057\u3066\u3044\u304d\u3001\u672a\u63a2\u7d22\u9818\u57df\u3092\u306a\u304f\u306a\u308b\u307e\u3067\u63a2\u7d22\u3092\u884c\u3046\u3002\n\u305d\u306e\u305f\u3081\u3001\u305d\u308c\u305e\u308c\u306e\u63a2\u7d22\u4f4d\u7f6e\u306e\u5dee\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u3068\u306a\u3063\u305f\u6642\u63a2\u7d22\u304c\u7d42\u4e86\u3059\u308b\u3002\n(\u5dee\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u3067\u3042\u308b\u3068\u63a2\u7d22\u9818\u57df\u306e\u4e2d\u5fc3\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"0.5"),"\u3068\u306a\u308a\u3001\u4eca\u56de\u306f\u6574\u6570\u3057\u304b\u5165\u3089\u306a\u3044\u305f\u3081\u3001\u7e70\u308a\u4e0a\u3052\u3001\u7e70\u308a\u4e0b\u3052\u3069\u3061\u3089\u3092\u884c\u3063\u3066\u3082\u3001\u63a2\u7d22\u6e08\u307f\u9818\u57df\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306b\u306a\u308b\u3002)"),(0,i.kt)(d.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(m.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"while (r-l) > 1:\n"))),(0,i.kt)(m.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"\nwhile (r-l > 1){\n}\n"))),(0,i.kt)(m.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"while (r -l > 1)\n{\n}\n")))),(0,i.kt)("p",null,"\u6b21\u306e\u63a2\u7d22\u4f4d\u7f6e\u306f\u672a\u63a2\u7d22\u9818\u57df\u306e\u4e2d\u5fc3\u3067\u3042\u308b\u306e\u3067\u3001\u305d\u308c\u305e\u308c\u3092\u8db3\u3057\u3066 2 \u3067\u5272\u308b\u4e8b\u3067\u7c21\u5358\u306b\u6c42\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"if (box[mid] <= 55)"),"\u90e8\u5206\u3067\u672a\u63a2\u7d22\u9818\u57df\u306e\u4e2d\u5fc3\u306e\u5024\u304c OK \u9818\u57df\u304b NG \u9818\u57df\u3069\u3061\u3089\u306b\u5c5e\u3059\u308b\u304b\u3092\u5224\u5b9a\u3057\u3066\u3044\u308b\u3002\n\u4eca\u56de\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"55"),"\u4ee5\u4e0b\u3067\u4e00\u756a\u5927\u304d\u306a\u5024\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<= 55"),"\u304c\u5224\u5b9a\u6761\u4ef6\u3068\u306a\u3063\u3066\u3044\u308b\u3002"),(0,i.kt)(d.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(m.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mid = (r+l) // 2\nif box[mid] <= 55:\n    l = mid\nelse:\n    r = mid\n"))),(0,i.kt)(m.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int mid = (r+l)/2;\nif (box[mid] < 55){\n    l = mid;\n}else{\n    r = mid;\n}\n"))),(0,i.kt)(m.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"int mid = (r + l) / 2;\nif (box[mid] < 55)\n{\n    l = mid;\n}\nelse\n{\n    r = mid;\n}\n")))))}s.isMDXComponent=!0},7149:function(e,l){l.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1OTRweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSItMC41IC0wLjUgNTk0IDMxIiBjb250ZW50PSImbHQ7bXhmaWxlIGhvc3Q9JnF1b3Q7OTExMzkxOGQtNGYwOS00YjQ0LWI3N2UtN2I2MGUzNTliZTViJnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjItMDUtMDdUMTE6NTk6MjMuMDY0WiZxdW90OyBhZ2VudD0mcXVvdDtNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMV82XzApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENvZGUvMS41OC4wIENocm9tZS84OS4wLjQzODkuMTI4IEVsZWN0cm9uLzEyLjAuMTMgU2FmYXJpLzUzNy4zNiZxdW90OyBldGFnPSZxdW90O3RMQVVneV9uQnZpS1dTLXoxX2ZSJnF1b3Q7IHZlcnNpb249JnF1b3Q7MTIuMi40JnF1b3Q7IHBhZ2VzPSZxdW90OzEmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7eFNiYTdLdDhWd0tTWGUwdkhVaHQmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7elpoTGM5c2dFTWMvamU1QzZHR09qWnVtbDg1a3hvZWVHYkdSbUVyQ2c3Qmw1OU1IV2VpQmNUTTVCVTZHUDdzOGZvdWxYVVY0MzE1ZUpEM1dmd1NESmtwaWRvbnd6eWhKVUp3aC9UTXExMG5KVWp3SmxlVE1HSzNDZ2IvRDdHblVFMmZRVzRaS2lFYnhveTJXb3V1Z1ZKWkdwUlNEYmZZbUdudlZJNjNBRVE0bGJWejFMMmVxbnRSZFVxejZiK0JWUGErTWNqS050SFEyTmlmcGE4ckVzSkh3YzRUM1VnZzF0ZHJMSHBvUjNzeGw4dnYxbjlGbFl4STY5UldIWkhJNDArWmtuNjFYMS9tMFVwdzZCcU5ESE9Hbm9lWUtEa2RhanFPRGpxL1dhdFUydW9kMDgwMTB5Z1FNNWJydmJzZ3NjQWFwNExLUnpBWmZRTFNnNUZXYm1OSGNzREtYQmMzOVlVV2ZHcW5lVU1kR295YlkxVEx4eWtNM0RKTEhlTENESndrT0Q0cjk4VWtkUGpnOFBxay9QcG5ESncyUHo4NGZuOXpoa3dYSFozbFdlK0JUT0h6eThQaDRmRDd2SEQ2RWhIZURVb1M5RVNJUENJVjNoOUxNSDZFNXFiUVFGZUVoSWg0UklRZVJ3d2M2OW1OTXJYV3ZFNTBXbnhqdDZ4c3c5RG1jMGU2VktnV3l1MWtrY2FyVlhrbnhiMG12aTg4Z0FyUFNkUmZoQmxIMkFOR3NTV2lvNG1jN0VYN0V6YXp3S3JqZXlSSWhmUCtpS0RKN2lsNmNaQW5HYTV1VTMwMlUzbWQwOXhNcEtpdFF6a1MzTUM3SC9scGszUUtBa0Yxd2x6L0RIaSsvV3dRUVFzSkRWSGhFNU5ZQnVpcUpnMk9VZjkrTFdIZlhLbjc2WTY3ZlF2RHpCdz09Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iOCIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOXB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iNDAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iOCIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOXB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iODAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iOCIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOXB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MzwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMTIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM1LjUsNi41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI4IiBoZWlnaHQ9IjE2Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA5cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxNjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzUuNSw2LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjgiIGhlaWdodD0iMTYiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDlweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjU8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjIwMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iOCIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOXB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMzUzIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU5LjUsNi41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMjlweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjk5NTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMzkzIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjUsNi41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMjlweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjk5NjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iNDMzIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDM5LjUsNi41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxNiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMjlweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjk5NzwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHBhdGggZD0iTSAyNjAgMTUgTCAzNDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlV2lkdGg9IjciIHN0cm9rZU1pdGVybGltaXQ9IjEwIiBzdHJva2VEYXNoYXJyYXk9IjcgMjgiIHBvaW50ZXJFdmVudHM9InN0cm9rZSIvPjxyZWN0IHg9IjQ3MyIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3OS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iMjYiIGhlaWdodD0iMTYiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDI5cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij45OTg8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjUxMyIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxOS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iMjYiIGhlaWdodD0iMTYiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDI5cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij45OTk8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjU1MyIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1NS41LDYuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iMzUiIGhlaWdodD0iMTYiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDM3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4xMDAwPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9zdmc+"},444:function(e,l,a){l.Z=a.p+"assets/images/binary-2.drawio-48d0c913b8560d180b563113ff6ef9c1.svg"},4903:function(e,l,a){l.Z=a.p+"assets/images/binary-3.drawio-02213dc15676cd2539548aec724fad23.svg"},9742:function(e,l,a){l.Z=a.p+"assets/images/binary-4.drawio-fd12b2763ae0793ce624ba994fd74ca2.svg"},1443:function(e,l,a){l.Z=a.p+"assets/images/binary-5.drawio-8c9252aac4eba0dfc28123ad0d9c2ec7.svg"}}]);