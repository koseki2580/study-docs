"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[7120],{20427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(85893),l=t(11151);t(74866),t(85162),t(97936);const r={title:"WebAssembly(C++) \u74b0\u5883\u69cb\u7bc9",sidebar_label:"WebAssembly(C++) \u74b0\u5883\u69cb\u7bc9",draft:!1,toc_max_heading_level:4,tags:["WebAssembly","emscripten","\u74b0\u5883\u69cb\u7bc9"]},i=void 0,a={id:"Web-Language/web-assembly/README",title:"WebAssembly(C++) \u74b0\u5883\u69cb\u7bc9",description:"\u74b0\u5883\u69cb\u7bc9",source:"@site/docs/40-Web-Language/50-web-assembly/README.md",sourceDirName:"40-Web-Language/50-web-assembly",slug:"/Web-Language/web-assembly/",permalink:"/study-docs/docs/Web-Language/web-assembly/",draft:!1,unlisted:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/40-Web-Language/50-web-assembly/README.md",tags:[{label:"WebAssembly",permalink:"/study-docs/docs/tags/web-assembly"},{label:"emscripten",permalink:"/study-docs/docs/tags/emscripten"},{label:"\u74b0\u5883\u69cb\u7bc9",permalink:"/study-docs/docs/tags/\u74b0\u5883\u69cb\u7bc9"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1699701117,formattedLastUpdatedAt:"2023\u5e7411\u670811\u65e5",frontMatter:{title:"WebAssembly(C++) \u74b0\u5883\u69cb\u7bc9",sidebar_label:"WebAssembly(C++) \u74b0\u5883\u69cb\u7bc9",draft:!1,toc_max_heading_level:4,tags:["WebAssembly","emscripten","\u74b0\u5883\u69cb\u7bc9"]},sidebar:"Web-LanguageSidebar",next:{title:"\u30aa\u30bb\u30ed\u3092\u884c\u3046",permalink:"/study-docs/docs/Web-Language/web-assembly/othello"}},c={},o=[{value:"\u74b0\u5883\u69cb\u7bc9",id:"\u74b0\u5883\u69cb\u7bc9",level:2},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:3},{value:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080",id:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080",level:3},{value:"\u6700\u9069\u5316",id:"\u6700\u9069\u5316",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u74b0\u5883\u69cb\u7bc9",children:"\u74b0\u5883\u69cb\u7bc9"}),"\n",(0,s.jsx)(n.p,{children:"Mac \u74b0\u5883(Ventura)\u3067\u306e\u74b0\u5883\u69cb\u7bc9\u624b\u9806\u3092\u6b8b\u3057\u3066\u3044\u304f\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://emscripten.org/docs/getting_started/downloads.html",children:"https://emscripten.org/docs/getting_started/downloads.html"}),"\u306e\u624b\u9806\u306b\u6cbf\u3063\u3066\u74b0\u5883\u69cb\u7bc9\u3092\u884c\u3046\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"git clone https://github.com/emscripten-core/emsdk.git"}),"\u3092\u5b9f\u884c\u3057\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u624b\u5143\u306b\u6301\u3063\u3066\u304f\u308b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cd emsdk"}),"\u3067\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u79fb\u52d5\u3059\u308b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"./emsdk install latest"}),"\u3092\u5b9f\u884c\u3059\u308b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"./emsdk activate latest"}),"\u3092\u5b9f\u884c\u3059\u308b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source ./emsdk_env.sh"}),"\u3092\u5b9f\u884c\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u3060\u3051\u3067\u5fc5\u8981\u306a\u3082\u306e\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u52d5\u4f5c\u78ba\u8a8d",children:"\u52d5\u4f5c\u78ba\u8a8d"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"**/emsdk/upstream/emscripten"}),"\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"./em++ -v"}),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u69d8\u306a\u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u308b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 3.1.47 (431685f05c67f0424c11473cc16798b9587bb536)\nclang version 18.0.0 (https://github.com/llvm/llvm-project 21030b9ab4487d845e29792063f5666d8c4b8e09)\nTarget: wasm32-unknown-emscripten\nThread model: posix\nInstalledDir: ~/WebAssembly/c++/emsdk/upstream/bin\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u3064\u3051\u308b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'alias em++="~/WebAssembly/c++/emsdk/upstream/emscripten/em++"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u308c\u3067",(0,s.jsx)(n.code,{children:"em++"}),"\u30b3\u30de\u30f3\u30c9\u3067",(0,s.jsx)(n.code,{children:"em++"}),"\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u304c\u53ef\u80fd\u3068\u306a\u308b\u3002\n",(0,s.jsx)(n.code,{children:"~/.zshrc"}),"\u306a\u3069\u306b\u8a18\u8ff0\u3057\u3066\u304a\u304f\u3053\u3068\u3067",(0,s.jsx)(n.code,{children:"em++"}),"\u3092\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u518d\u8d77\u52d5\u3057\u305f\u5834\u5408\u3067\u3082\u30a8\u30a4\u30ea\u30a2\u30b9\u3067\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u8cbc\u308b\u3068 python \u30d5\u30a1\u30a4\u30eb\u306e\u691c\u7d22\u3067\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u304c\u5b58\u5728\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u691c\u7d22\u3057\u3066\u3057\u307e\u3044\u3001\u3046\u307e\u304f\u52d5\u4f5c\u3057\u306a\u304b\u3063\u305f\u3002\n\u3053\u306e\u8fba\u308a\u306b\u3042\u307e\u308a\u8a73\u3057\u304f\u306a\u3044\u306e\u3067\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3082\u3067\u304d\u308b\u65b9\u6cd5\u304c\u3042\u308c\u3070\u6559\u3048\u3066\u3044\u305f\u3060\u3051\u308c\u3070\u3068\u601d\u3044\u307e\u3059\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"src"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",metastring:'title="hello_world.cpp"',children:'/*\n* Copyright 2011 The Emscripten Authors.  All rights reserved.\n* Emscripten is available under two separate licenses, the MIT license and the\n* University of Illinois/NCSA Open Source License.  Both these licenses can be\n* found in the LICENSE file.\n*/\n\n#include <stdio.h>\n\nint main() {\n printf("hello, world!\\n");\n return 0;\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"em++ src/hello_world.cpp -o ./output/hello.html"}),"\u3092\u5b9f\u884c\u3057\u3001html \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3002(",(0,s.jsx)(n.code,{children:"output"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30a8\u30e9\u30fc\u304c\u51fa\u308b\u306e\u3067\u6ce8\u610f)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["4.\u3067\u751f\u6210\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb html \u3092\u958b\u3044\u3066\u3082 WebAssembly \u306f\u52d5\u4f5c\u3057\u306a\u3044\u306e\u3067\u30b5\u30fc\u30d0\u3092\u7acb\u3066\u3066\u958b\u304f\u3068",(0,s.jsx)(n.code,{children:"hello world"}),"\u3068\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6b21\u306f\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u3001",(0,s.jsx)(n.code,{children:"em++ src/canvas.cpp -o ./output/canvas.html"}),"\u3092\u5b9f\u884c\u3059\u308b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",metastring:'title="canvas.cpp"',children:'// Copyright 2011 The Emscripten Authors.  All rights reserved.\n// Emscripten is available under two separate licenses, the MIT license and the\n// University of Illinois/NCSA Open Source License.  Both these licenses can be\n// found in the LICENSE file.\n\n#include <stdio.h>\n#include <SDL/SDL.h>\n\n#ifdef __EMSCRIPTEN__\n#include <emscripten.h>\n#endif\n\nint main(int argc, char** argv) {\n  printf("hello, world!\\n");\n\n  SDL_Init(SDL_INIT_VIDEO);\n  SDL_Surface *screen = SDL_SetVideoMode(256, 256, 32, SDL_SWSURFACE);\n\n#ifdef TEST_SDL_LOCK_OPTS\n  EM_ASM("SDL.defaults.copyOnLock = false; SDL.defaults.discardOnLock = true; SDL.defaults.opaqueFrontBuffer = false;");\n#endif\n\n  if (SDL_MUSTLOCK(screen)) SDL_LockSurface(screen);\n  for (int i = 0; i < 256; i++) {\n    for (int j = 0; j < 256; j++) {\n#ifdef TEST_SDL_LOCK_OPTS\n      // Alpha behaves like in the browser, so write proper opaque pixels.\n      int alpha = 255;\n#else\n      // To emulate native behavior with blitting to screen, alpha component is ignored. Test that it is so by outputting\n      // data (and testing that it does get discarded)\n      int alpha = (i+j) % 255;\n#endif\n      *((Uint32*)screen->pixels + i * 256 + j) = SDL_MapRGBA(screen->format, i, j, 255-i, alpha);\n    }\n  }\n  if (SDL_MUSTLOCK(screen)) SDL_UnlockSurface(screen);\n  SDL_Flip(screen);\n\n  printf("you should see a smoothly-colored square - no sharp lines but the square borders!\\n");\n  printf("and here is some text that should be HTML-friendly: amp: |&| double-quote: |\\"| quote: |\'| less-than, greater-than, html-like tags: |<cheez></cheez>|\\nanother line.\\n");\n\n  SDL_Quit();\n\n  return 0;\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Emscripten"}),"\u306f libc stdio API \u3067\u30d5\u30a1\u30a4\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u6a21\u64ec\u3057\u3066\u3044\u308b\u3002\n\u4e8b\u524d\u8aad\u307f\u8fbc\u307f(--preload-file {name}) or \u57cb\u3081\u8fbc\u307f(--embed-file {file})\u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u3053\u3068\u3067\u4eee\u60f3\u7684\u306a\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3059\u308b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e c++\u306e\u30d5\u30a1\u30a4\u30eb\u3068",(0,s.jsx)(n.code,{children:"preload/hello_world_file.txt"}),"\u306b\u4f55\u304b\u3092\u8a18\u8ff0\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u7528\u610f\u3059\u308b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",metastring:'title="hello_world_file.cpp"',children:'// Copyright 2012 The Emscripten Authors.  All rights reserved.\n// Emscripten is available under two separate licenses, the MIT license and the\n// University of Illinois/NCSA Open Source License.  Both these licenses can be\n// found in the LICENSE file.\n\n#include <stdio.h>\n\nint main() {\n  FILE *file = fopen("preload/hello_world_file.txt", "rb");\n  if (!file) {\n    printf("cannot open file\\n");\n    return 1;\n  }\n  while (!feof(file)) {\n    char c = fgetc(file);\n    if (c != EOF) {\n      putchar(c);\n    }\n  }\n  fclose (file);\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u30d5\u30a1\u30a4\u30eb\u306e\u6e96\u5099\u304c\u5b8c\u4e86\u3057\u305f\u3089\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u78ba\u8a8d\u3059\u308b\u3068 txt \u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u304c\u8868\u793a\u3055\u308c\u308b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"em++ src/hello_world_file.cpp -o ./output/hello_file.html --preload-file preload/hello_world_file.txt\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001txt \u30d5\u30a1\u30a4\u30eb\u306f\u6700\u5f8c\u306b\u6539\u884c\u3067\u7d42\u308f\u3063\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6700\u9069\u5316",children:"\u6700\u9069\u5316"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-o1"}),"\u3068",(0,s.jsx)(n.code,{children:"-o2"}),"\u3068\u8a00\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u6700\u9069\u5316\u3055\u305b\u305f\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u696d\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u305f\u3089\u968f\u6642\u8ffd\u8a18\u3057\u3066\u3044\u304f\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var s=t(86010);const l={tabItem:"tabItem_Ymn6"};var r=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(l.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var s=t(67294),l=t(86010),r=t(12466),i=t(16550),a=t(20469),c=t(91980),o=t(67392),d=t(50012);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:l}}=e;return{value:n,label:t,attributes:s,default:l}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,u]=m({queryString:t,groupId:l}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Nk)(t);return[l,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),x=(()=>{const e=o??b;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),l=a[t].value;l!==s&&(o(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},97936:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var s=t(85893);function l(e){let{children:n,color:t}=e;return(0,s.jsx)("span",{style:{color:t},children:n})}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);