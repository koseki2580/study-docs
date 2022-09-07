"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[83],{5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(4334),l=n(2389),u=n(7392),o=n(7094),s=n(2466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,b=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),w=x.tabGroupChoices,y=x.setTabGroupChoices,C=(0,r.useState)(N),Z=C[0],T=C[1],_=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=w[b];null!=E&&E!==Z&&v.some((function(e){return e.value===E}))&&T(E)}var I=function(e){var t=e.currentTarget,n=_.indexOf(t),a=v[n].value;a!==Z&&(D(t),T(a),null!=b&&y(b,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=_.indexOf(e.currentTarget)+1;n=null!=(a=_[r])?a:_[0];break;case"ArrowLeft":var i,l=_.indexOf(e.currentTarget)-1;n=null!=(i=_[l])?i:_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},k)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return _.push(e)},onKeyDown:L,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=(n(1839),n(5488)),u=n(5162),o=["components"],s={title:"\u6728\u69cb\u9020",sidebar_label:"\u6728\u69cb\u9020",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},d=void 0,p={unversionedId:"Data-structure/tree",id:"Data-structure/tree",title:"\u6728\u69cb\u9020",description:"\u6728\u69cb\u9020\u3068\u306f",source:"@site/docs/01-Data-structure/03-tree.mdx",sourceDirName:"01-Data-structure",slug:"/Data-structure/tree",permalink:"/study-docs/docs/Data-structure/tree",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/01-Data-structure/03-tree.mdx",tags:[{label:"\u30c7\u30fc\u30bf\u69cb\u9020",permalink:"/study-docs/docs/tags/\u30c7\u30fc\u30bf\u69cb\u9020"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1659353735,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:3,frontMatter:{title:"\u6728\u69cb\u9020",sidebar_label:"\u6728\u69cb\u9020",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},sidebar:"Data-structureSidebar",previous:{title:"\u30b0\u30e9\u30d5",permalink:"/study-docs/docs/Data-structure/graph"},next:{title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",permalink:"/study-docs/docs/Data-structure/priority-queue"}},c={},m=[{value:"\u6728\u69cb\u9020\u3068\u306f",id:"\u6728\u69cb\u9020\u3068\u306f",level:2},{value:"\u7528\u8a9e",id:"\u7528\u8a9e",level:3},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:3}],f={toc:m};function b(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6728\u69cb\u9020\u3068\u306f"},"\u6728\u69cb\u9020\u3068\u306f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Data-structure/graph"},"\u30b0\u30e9\u30d5\u69cb\u9020"),"\u306e\u4e2d\u3067\u3082\u7279\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u9023\u7d50\u306a\u30b0\u30e9\u30d5"),"\u3092\u6728\u69cb\u9020\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044"),"\u3068\u306f\u3001\u3069\u3046\u3044\u3046\u3053\u3068\u3092\u6307\u3057\u3066\u3044\u308b\u304b\u3068\u3044\u3046\u3068"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u540c\u3058\u9802\u70b9\u3092\u901a\u3089\u305a\u306b\u59cb\u70b9\u3068\u7d42\u70b9\u304c\u540c\u3058\u306b\u306a\u308b\u3053\u3068\u306f\u306a\u3044")),(0,i.kt)("p",null,"\u3068\u3044\u3046\u3053\u3068\u3067\u3042\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(5311).Z,title:"\u9589\u8def",width:"686",height:"303"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u9023\u7d50\u3067\u3042\u308b"),"\u3068\u306f\u5168\u3066\u306e\u9802\u70b9\u304c\u7e4b\u304c\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u3044\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(8822).Z,title:"\u9023\u7d50",width:"686",height:"303"})),(0,i.kt)("p",null,"\u3064\u307e\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u9023\u7d50\u306a\u30b0\u30e9\u30d5"),"\u3068\u306f\u6b21\u306e\u3088\u3046\u306a\u72b6\u614b\u3067\u3042\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(4506).Z,title:"\u6728\u69cb\u9020",width:"241",height:"301"})),(0,i.kt)("p",null,"\u6728\u69cb\u9020\u306b\u306f\u5e73\u8861 2 \u5206\u63a2\u7d22\u6728\u30fbAVL \u6728\u30fb\u30c8\u30e9\u30a4\u6728\u30fb3 \u6587\u63a2\u7d22\u6728\u30fb\u8d64\u9ed2\u6728\u30fb\u30b9\u30ad\u30e5\u30fc\u6728\u30fb\u30b9\u30d7\u30ec\u30fc\u6728\u30fbB \uff0b\u6728\u30fb\u30d1\u30c8\u30ea\u30b7\u30a2\u6728\u306a\u3069\u304c\u5b58\u5728\u3059\u308b\u3002"),(0,i.kt)("h3",{id:"\u7528\u8a9e"},"\u7528\u8a9e"),(0,i.kt)("p",null,"\u958b\u59cb\u3068\u306a\u308b\u9802\u70b9(\u30ce\u30fc\u30c9)\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u6839"),"\u3068\u547c\u3073\u3001\u6839\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u8fba\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u679d"),"\u3068\u8a00\u3044\u3001\u6839\u3068\u679d\u3067\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u5b50\u30ce\u30fc\u30c9"),"\u3068\u547c\u3076\u3002\u307e\u305f\u3001\u6839\u304c\u5b58\u5728\u3059\u308b\u6728\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u6839\u4ed8\u304d\u6728"),"\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(6579).Z,title:"\u6839\u3068\u679d\u3068\u5b50",width:"306",height:"301"})),(0,i.kt)("p",null,"\u6839\u304b\u3089\u679d\u3092\u901a\u3063\u305f\u500b\u6570\u3092\u305d\u306e\u9802\u70b9\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"\u6df1\u3055"),"\u3068\u547c\u3073\u3001\u540c\u3058\u6839\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u3064\u540c\u3058\u6df1\u3055\u306e\u9802\u70b9\u540c\u58eb\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u5144\u5f1f\u30ce\u30fc\u30c9"),"\u3068\u547c\u3076\u3002\u679d\u3067\u63a5\u7d9a\u3057\u3066\u3044\u308b\u304b\u3064\u6df1\u3055\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),"\u3067\u3042\u308b\u9802\u70b9\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u89aa\u30ce\u30fc\u30c9"),"\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(1409).Z,title:"\u5144\u5f1f\u3068\u89aa\u3068\u6df1\u3055",width:"471",height:"302"})),(0,i.kt)("p",null,"\u6839\u4ed8\u304d\u6728\u306b\u304a\u3044\u3066\u6700\u5927\u306e\u6df1\u3055\u306b\u3042\u308b\u9802\u70b9\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u8449(\u30ea\u30fc\u30d5)"),"\u3068\u547c\u3073\u3001\u5b50\u30ce\u30fc\u30c9\u304c\u5b58\u5728\u3059\u308b\u30ce\u30fc\u30c9\u3092\u6839\u3068\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u306e\u898b\u65b9\u3092\u3057\u305f\u6839\u4ed8\u304d\u6728\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u90e8\u5206\u6728"),"\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(7470).Z,title:"\u30ea\u30fc\u30d5",width:"451",height:"316"})),(0,i.kt)("p",null,"\u6728\u69cb\u9020\u306e\u6761\u4ef6\u3067\u3042\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u9023\u7d50\u306a\u30b0\u30e9\u30d5"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"\u9023\u7d50\u306a"),"\u3092\u53d6\u308a\u9664\u3044\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u30b0\u30e9\u30d5"),"\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u68ee"),"\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(2163).Z,title:"\u68ee",width:"633",height:"302"})),(0,i.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,i.kt)("p",null,"\u30b0\u30e9\u30d5\u69cb\u9020\u306e\u7279\u5225\u306a\u6761\u4ef6\u304c\u6728\u69cb\u9020\u3068\u306a\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u30b0\u30e9\u30d5\u69cb\u9020\u3068\u5168\u304f\u4f5c\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u540c\u3058\u306b\u306a\u308b\u3002"),(0,i.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"box = [[1,5],[1,3],[1,4],[4,6],[6,2]]\ngraph = [[] for _ in range(6)]\nfor i in range(len(box)):\n    graph[box[i][0]-1].append(box[i][1]-1)\n    graph[box[i][1]-1].append(box[i][0]-1)\n"))),(0,i.kt)(u.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    vector<pair<int,int>> box = {{1,5},{1,3},{1,4},{4,6},{6,2}};\n    vector<vector<int>> graph(6);\n    for(int i = 0; i < box.size();++i){\n        graph[box[i].first-1].push_back(box[i].second-1);\n        graph[box[i].second-1].push_back(box[i].first-1);\n    }\n    return 0;\n}\n"))),(0,i.kt)(u.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static void Main(string[] args)\n{\n    int[,] box = new int[,] { { 1, 5 }, { 1, 3 }, { 1, 4 }, { 4, 6 }, { 6, 2 } };\n    List<List<int>> graph = new List<List<int>>();\n    for (int i = 0;i < 6; ++i)\n    {\n        graph.Add(new List<int>());\n    }\n    for (int i = 0; i < box.Length/2; ++i)\n    {\n        graph[box[i, 0] - 1].Add(box[i, 1] - 1);\n        graph[box[i, 1] - 1].Add(box[i, 0] - 1);\n    }\n}\n")))))}b.isMDXComponent=!0},5311:function(e,t,n){t.Z=n.p+"assets/images/tree-1.drawio-9a83ae9bcb593b4eb3fd83491aab0806.svg"},8822:function(e,t,n){t.Z=n.p+"assets/images/tree-2.drawio-8f1ce997e9fb36818a179c59950023c5.svg"},4506:function(e,t,n){t.Z=n.p+"assets/images/tree-3.drawio-e8603e3f932fc944c9dd0517ecd8d1f8.svg"},6579:function(e,t,n){t.Z=n.p+"assets/images/tree-4.drawio-0b3118aa70aa9cc915491384dfec8302.svg"},1409:function(e,t,n){t.Z=n.p+"assets/images/tree-5.drawio-1e56c41c11681474afe73d827a399f7d.svg"},7470:function(e,t,n){t.Z=n.p+"assets/images/tree-6.drawio-215c1581b0d809970e58832dd7e35794.svg"},2163:function(e,t,n){t.Z=n.p+"assets/images/tree-7.drawio-523304d087d4527fc11cf39f7b01b8e6.svg"}}]);