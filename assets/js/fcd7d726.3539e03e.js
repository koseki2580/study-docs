"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[6789],{39025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151);t(74866),t(85162),t(97936),t(79014),t(97643);const i={title:"HTTP",sidebar_label:"HTTP",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},s=void 0,l={id:"Network/http",title:"HTTP",description:"HTTP\u3068\u306f",source:"@site/docs/30-Network/02-http.md",sourceDirName:"30-Network",slug:"/Network/http",permalink:"/study-docs/docs/Network/http",draft:!1,unlisted:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/30-Network/02-http.md",tags:[{label:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/study-docs/docs/tags/\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1715171895,formattedLastUpdatedAt:"2024\u5e745\u67088\u65e5",sidebarPosition:2,frontMatter:{title:"HTTP",sidebar_label:"HTTP",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},sidebar:"NetworkSidebar",previous:{title:"\u53c2\u7167\u30e2\u30c7\u30eb",permalink:"/study-docs/docs/Network/reference-model"},next:{title:"IP \u30d1\u30b1\u30c3\u30c8",permalink:"/study-docs/docs/Network/ip-packet"}},o={},d=[{value:"HTTP\u3068\u306f",id:"http\u3068\u306f",level:2},{value:"HTTP/0.9",id:"http09",level:3},{value:"HTTP/1.0",id:"http10",level:3},{value:"HTTP/1.1",id:"http11",level:3},{value:"keep-alive",id:"keep-alive",level:4},{value:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",id:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",level:4},{value:"\u30c7\u30fc\u30bf\u306e\u5f62\u5f0f",id:"\u30c7\u30fc\u30bf\u306e\u5f62\u5f0f",level:4},{value:"\u30ea\u30af\u30a8\u30b9\u30c8",id:"\u30ea\u30af\u30a8\u30b9\u30c8",level:5},{value:"Method",id:"method",level:6},{value:"Header",id:"header",level:6},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9",id:"\u30ec\u30b9\u30dd\u30f3\u30b9",level:5},{value:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9",id:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9",level:6},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"http\u3068\u306f",children:"HTTP\u3068\u306f"}),"\n",(0,r.jsx)(n.p,{children:"HTTP(HyperText Transfer Protocol)\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5c64\u3067\u306e\u901a\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308b\u3002\nHTTP\u304c\u7b56\u5b9a\u3055\u308c\u305f\u5f53\u521d\u306f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u884c\u3046\u7c21\u6613\u7684\u306a\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u3063\u305f\u304c\u3001\u73fe\u5728\u306f\u97f3\u58f0\u30fb\u52d5\u753b\u30d5\u30a1\u30a4\u30eb\u306e\u9001\u53d7\u4fe1\u3084\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u306e\u3084\u308a\u53d6\u308a\u306a\u3069\u5e45\u5e83\u304f\u4f7f\u308f\u308c\u3066\u3044\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308b\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP\u306b\u306f",(0,r.jsx)(n.code,{children:"HTTP/0.9"}),", ",(0,r.jsx)(n.code,{children:"HTTP/1.0"}),", ",(0,r.jsx)(n.code,{children:"HTTP/1.1"}),", ",(0,r.jsx)(n.code,{children:"HTTP/2"}),", ",(0,r.jsx)(n.code,{children:"HTTP/3"}),"\u3068\u8907\u6570\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u5b58\u5728\u3059\u308b\u30022024\u5e74\u73fe\u5728\u3067\u306f",(0,r.jsx)(n.code,{children:"HTTP/1.1"}),"\u304c\u4e3b\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u304c\u3001\u5927\u898f\u6a21\u306a\u30b5\u30a4\u30c8\u3067\u306f",(0,r.jsx)(n.code,{children:"HTTP/2"}),"\u306e\u5c0e\u5165\u304c\u9032\u3081\u3089\u308c\u3066\u3044\u308b\u3002\n",(0,r.jsx)(n.code,{children:"HTTP/3"}),"\u306fGoogle\u304c\u958b\u767a\u3057\u305f",(0,r.jsx)(n.code,{children:"QUIC (Quick UDP Internet Connections)"}),"\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3057\u3001",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc9114",children:"RFC 9114"}),"\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3002\n",(0,r.jsx)(n.code,{children:"HTTP/0.9"}),",",(0,r.jsx)(n.code,{children:"HTTP/1.0"}),", ",(0,r.jsx)(n.code,{children:"HTTP/1.1"}),", ",(0,r.jsx)(n.code,{children:"HTTP/2"}),"\u3067\u306f\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u5c64\u3067\u306f",(0,r.jsx)(n.code,{children:"TCP"}),"\u304c\u7528\u3044\u3089\u308c\u3066\u3044\u305f\u304c\u3001",(0,r.jsx)(n.code,{children:"HTTP/3"}),"\u3067\u306f",(0,r.jsx)(n.code,{children:"UDP(QUIC)"}),"\u304c\u7528\u3044\u3089\u308c\u3001\u901a\u4fe1\u901f\u5ea6\u306e\u9762\u3067\u5927\u304d\u304f\u9032\u5316\u3057\u3066\u3044\u308b\u3002\n\u3057\u304b\u3057\u30012024\u5e74\u73fe\u5728\u3067\u306f\u3042\u307e\u308a\u4f7f\u7528\u304c\u898b\u3089\u308c\u305a\u3001",(0,r.jsx)(n.code,{children:"youtube"}),"\u7b49\u306e\u3054\u304f\u4e00\u90e8\u3067\u306e\u307f\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"http09",children:"HTTP/0.9"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP/0.9\u306f\u30b5\u30fc\u30d0\u304b\u3089HTML(HyperText Markup Language)\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3060\u3051\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u3063\u305f\u3002\n\u521d\u671f\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f",(0,r.jsx)(n.code,{children:"HTTP"}),"\u3067\u3042\u3063\u305f\u304c\u5f8c\u7d9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u767b\u5834\u3057\u305f\u3053\u3068\u3067\u5f8c\u4ed8\u3051\u7684\u306b",(0,r.jsx)(n.code,{children:"HTTP/0.9"}),"\u3068\u306a\u3063\u305f\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"http10",children:"HTTP/1.0"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP/1.0\u306f",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1945",children:"RFC 1945"}),"\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3002\u30d8\u30c3\u30c0\u30fc\u3092\u5c0e\u5165\u3057\u305f\u3053\u3068\u3067\u3001HTML\u30d5\u30a1\u30a4\u30eb\u4ee5\u5916\u306e\u30d5\u30a1\u30a4\u30eb\u3082\u30b5\u30fc\u30d0\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30ea\u30af\u30b9\u30c8\u3054\u3068\u306bTCP\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u304a\u308a\u300130\u500b\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u969b\u306b\u306f30\u500b\u306eTCP\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u305f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HTTP/1.0",src:t(2062).Z+"",title:"HTTP/1.0",width:"375",height:"799"})}),"\n",(0,r.jsx)(n.h3,{id:"http11",children:"HTTP/1.1"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP/1.1\u306f",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2068",children:"RFC 2068"}),"\u3067\u521d\u3081\u3066\u5b9a\u7fa9\u3055\u308c\u3001",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2616",children:"RFC 2616"}),"\u3068",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7230",children:"RFC 7230"})," ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mo,{children:"\u223c"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\sim"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,r.jsx)(n.span,{className:"mrel",children:"\u223c"})]})})]})," ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7235",children:"RFC 7235"}),"\u30682\u56de\u6539\u8a02\u3055\u308c\u3066\u3044\u308b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["HTTP/1.1\u3067\u306fHTTP/1.0\u3067\u554f\u984c\u3067\u3042\u3063\u305fTCP\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u5927\u91cf\u306b\u4f5c\u6210\u3057\u3066\u3057\u307e\u3046\u554f\u984c\u3092\u6539\u5584\u3059\u308b\u305f\u3081\u306b\u4e00\u5ea6\u78ba\u7acb\u3057\u305f\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u518d\u5229\u7528\u3059\u308b",(0,r.jsx)(n.code,{children:"Connection: keep-alive"}),"\u3001\n\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u305f\u5f8c\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u5f85\u305f\u305a\u5225\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3067\u304d\u308b",(0,r.jsx)(n.code,{children:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3"}),"\u6a5f\u80fd\u304c\u65b0\u3057\u304f\u8ffd\u52a0\u3055\u308c\u3001\u4eca\u307e\u3067\u4ee5\u4e0a\u306b\u4f7f\u3044\u3084\u3059\u3044\u30d7\u30ed\u30c8\u30b3\u30eb\u3068\u306a\u308a\u3001\u9577\u5e74\u4f7f\u7528\u3055\u308c\u3066\u304d\u305f\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"keep-alive",children:"keep-alive"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u5ea6\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u78ba\u7acb\u3057\u305fTCP\u306e\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u3092\u518d\u5229\u7528\u3057\u3001\u30b5\u30fc\u30d0\u30fb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4e21\u65b9\u306e\u30ea\u30bd\u30fc\u30b9\u6d88\u8cbb\u91cf\u3092\u6291\u3048\u308b\u3002\u307e\u305f\u3001TCP\u306e3\u30a6\u30a7\u30a4\u30cf\u30f3\u30c9\u30b7\u30a7\u30a4\u30af\u304c\u7121\u304f\u306a\u308b\u5206\u901a\u4fe1\u901f\u5ea6\u3082\u65e9\u304f\u306a\u308b\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"keep-alive",src:t(20617).Z+"",title:"keep-alive",width:"782",height:"809"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",children:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3"}),"\n",(0,r.jsx)(n.p,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u306f\u30da\u30a2\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u9001\u4fe1\u5f8c\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u53d7\u3051\u53d6\u308b\u307e\u3067\u6b21\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u540c\u3058TCP\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u5185\u3067\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3002\n\u305d\u308c\u3092\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u9001\u4fe1\u5f8c\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u5f85\u3064\u3053\u3068\u306a\u304f\u6b21\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u6a5f\u80fd\u3067\u3042\u308b\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",src:t(88353).Z+"",title:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",width:"742",height:"599"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u5f85\u3064\u3053\u3068\u306a\u3044\u306e\u3067\u753b\u671f\u7684\u306a\u6a5f\u80fd\u3060\u3068\u601d\u308f\u308c\u3066\u3044\u305f\u304c\u3001HTTP/1.1\u306e\u4ed5\u69d8\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30da\u30a2\u3092\u4e26\u5217\u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305a\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u5c4a\u3044\u305f\u9806\u756a\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u5fc5\u8981\u304c\u3042\u3063\u305f\u3002\n\u305d\u306e\u305f\u3081\u3001\u901a\u4fe1\u4e2d\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u5b58\u5728\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u5f8c\u7d9a\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u3082\u6642\u9593\u304c\u304b\u304b\u3063\u3066\u3057\u307e\u3046",(0,r.jsx)(n.code,{children:"HoL (Head of Lock)\u30d6\u30ed\u30c3\u30ad\u30f3\u30b0 (Head of Line Blocking)"}),"\u3068\u3044\u3046\u554f\u984c\u304c\u3042\u308a\u3001\u6a5f\u80fd\u3068\u3057\u3066\u306f\u5b58\u5728\u3059\u308b\u304c\u3001\u3042\u307e\u308a\u4f7f\u308f\u308c\u306a\u3044\u6a5f\u80fd\u3068\u306a\u3063\u3066\u3044\u308b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Head of Line Blocking",src:t(42740).Z+"",title:"Head of Line Blocking",width:"551",height:"599"})}),"\n",(0,r.jsx)(n.p,{children:"\u56f3\u3067\u306f\u9752\u8272\u306e\u9818\u57df\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u6e96\u5099\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u306e\u306b\u3001\u524d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u305a\u3001\u5f85\u6a5f\u3057\u3066\u3044\u308b\u90e8\u5206\u3092\u8868\u3057\u3066\u3044\u308b\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u30c7\u30fc\u30bf\u306e\u5f62\u5f0f",children:"\u30c7\u30fc\u30bf\u306e\u5f62\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"HTTP\u901a\u4fe1\u306f\u6c7a\u3081\u3089\u308c\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u5f62\u5f0f\u3068\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u5f62\u5f0f\u304c\u6c7a\u3081\u3089\u308c\u3066\u3044\u308b\u3002\u305d\u306e\u5f62\u5f0f\u306b\u57fa\u3065\u3044\u3066\u30c7\u30fc\u30bf\u306e\u3084\u308a\u53d6\u308a\u304c\u884c\u308f\u308c\u308b\u3002"}),"\n",(0,r.jsx)(n.h5,{id:"\u30ea\u30af\u30a8\u30b9\u30c8",children:"\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u6295\u3052\u308b\u6642\u306f\u6b21\u306e\u69d8\u306a\u5f62\u5f0f\u3092\u3068\u308b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Request        = Request-Line *((general-header | request-header | entity-header) CRLF) CRLF [ message-body ]\nCRLF           = CR LF\nCR             = <US-ASCII CR, carriage return (13)>\nLF             = <US-ASCII LF, linefeed (10)>\nRequest-Line   = Method SP Request-URI SP HTTP-Version CRLF\nMethod         = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | extension-method\nextension-method = token\ntoken          = 1*<any CHAR except CTLs or separators>\nseparators = "(" | ")" | "<" | ">" | "@" | "," | ";" | ":" | "\\" | <"> | "/" | "[" | "]" | "?" | "=" | "{" | "}" | SP | HT\nSP             = <US-ASCII SP, space (32)>\nHT             = <US-ASCII HT, horizontal-tab (9)>\n\nRequest-URI    = "*" | absoluteURI | abs_path | authority\n\ngeneral-header = Cache-Control | Connection | Date | Pragma | Trailer | Transfer-Encoding | Upgrade | Via | Warning\nrequest-header = Accept | Accept-Charset | Accept-Encoding | Accept-Language | Authorization | Expect | From | Host | If-Match | If-Modified-Since | If-None-Match | If-Range | If-Unmodified-Since | Max-Forwards | Proxy-Authorization | Range | Referer | TE | User-Agent\nentity-header = Allow | Content-Encoding | Content-Language | Content-Length | Content-Location | Content-MD5 | Content-Range | Content-Type | Expires | Last-Modified | extension-header\nextension-header = message-header\nmessage-header = field-name ":" [ field-value ]\nfield-name     = token\nfield-value    = *( field-content | LWS(linear white space) )\nLWS            = [CRLF] 1*( SP | HT )\nfield-content  = <the OCTETs making up the field-value and consisting of either *TEXT or combinations of token, separators, and quoted-string>\nquoted-string  = ( <"> *(qdtext | quoted-pair ) <"> )\nqdtext         = <any TEXT except <">>\nquoted-pair    = "\\" CHAR\nTEXT           = <any OCTET except CTLs, but including LWS>\n(header\u306f\u5168\u3066message-header\u3068\u540c\u3058\u3088\u3046\u306bkey:value\u306e\u5f62\u5f0f\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u304c\u91cf\u304c\u591a\u3044\u306e\u3067\u5272\u611b)\nmessage-body = entity-body | <entity-body encoded as per Transfer-Encoding>\nentity-body := Content-Encoding( Content-Type( data ) )\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u30e9\u30a4\u30f3\u3055\u3048\u3042\u308c\u3070\u3001\u6700\u60aa\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u51fa\u6765\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30e9\u30a4\u30f3\u306f",(0,r.jsx)(n.code,{children:"Method URI Version"}),"\u306e3\u3064\u306e\u30c7\u30fc\u30bf\u3092\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3067\u7e4b\u3050\u3002"]}),"\n",(0,r.jsx)(n.h6,{id:"method",children:"Method"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OPTIONS\n\u30ea\u30bd\u30fc\u30b9\u3084\u30b5\u30fc\u30d0\u30fc\u306e\u6a5f\u80fd\u3092\u8abf\u67fb\u3059\u308b\u305f\u3081\u306e\u60c5\u5831\u8981\u6c42\u3002"}),"\n",(0,r.jsx)(n.li,{children:"GET\nRequest-URI\u3067\u6307\u5b9a\u3055\u308c\u305f\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3042\u308a\u3001\u6761\u4ef6\u4ed8\u304dGET\u3084\u90e8\u5206\u7684GET\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u307e\u305f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u3067\u3042\u308a\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u8003\u616e\u4e8b\u9805\u3082\u5b58\u5728\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"HEAD\nGET\u30e1\u30bd\u30c3\u30c9\u3068\u540c\u3058\u304f\u30ea\u30bd\u30fc\u30b9\u306e\u30e1\u30bf\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u304c\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u30dc\u30c7\u30a3\u3092\u8fd4\u3055\u306a\u3044\u3002"}),"\n",(0,r.jsx)(n.li,{children:"POST\n\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u9001\u4fe1\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u308a\u3001\u65b0\u3057\u3044\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u308f\u308c\u308b\u3002\u4f8b\u3048\u3070\u3001\u30d5\u30a9\u30fc\u30e0\u306e\u9001\u4fe1\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u6295\u7a3f\u306a\u3069\u304c\u3053\u308c\u306b\u5f53\u305f\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"PUT\n\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u9001\u4fe1\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u6307\u5b9a\u3055\u308c\u305fURI\u306b\u4fdd\u5b58\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"DELETE\n\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3092\u524a\u9664\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"TRACE\n\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u3084\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6700\u9069\u5316\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u78ba\u8a8d\u306a\u3069\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u52d5\u4f5c\u3092\u7406\u89e3\u3057\u3001\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u76e3\u8996\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"CONNECT\n\u30d7\u30ed\u30ad\u30b7\u30b5\u30fc\u30d0\u30fc\u304c\u901a\u5e38\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u4ecb\u3055\u305a\u306b\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u9593\u306e\u76f4\u63a5\u7684\u306a\u901a\u4fe1\u3092\u78ba\u7acb\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h6,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u8868\u7684\u306a\u3082\u306e\u3068\u3057\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30d8\u30c3\u30c0\u30fc\u304c\u5b58\u5728\u3059\u308b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Content-Type: \u30ea\u30af\u30a8\u30b9\u30c8\u307e\u305f\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u672c\u6587\u306e\u30e1\u30c7\u30a3\u30a2\u30bf\u30a4\u30d7\u3092\u793a\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Content-Length: \u30ea\u30af\u30a8\u30b9\u30c8\u307e\u305f\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u672c\u6587\u306e\u9577\u3055\u3092\u30d0\u30a4\u30c8\u5358\u4f4d\u3067\u793a\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Cache-Control: \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u52d5\u4f5c\u3092\u5236\u5fa1\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"User-Agent: \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30d6\u30e9\u30a6\u30b6\u3092\u8b58\u5225\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Authorization: \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8a8d\u8a3c\u60c5\u5831\u3092\u542b\u3081\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Location: \u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u30ec\u30b9\u30dd\u30f3\u30b9\u3067\u4f7f\u7528\u3055\u308c\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Accept: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u53d7\u3051\u5165\u308c\u53ef\u80fd\u306a\u30e1\u30c7\u30a3\u30a2\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Accept-Language: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u53d7\u3051\u5165\u308c\u53ef\u80fd\u306a\u8a00\u8a9e\u3092\u6307\u5b9a\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Accept-Encoding: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u53d7\u3051\u5165\u308c\u53ef\u80fd\u306a\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u65b9\u5f0f\u3092\u6307\u5b9a\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Connection: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u306e\u9593\u306e\u63a5\u7d9a\u306e\u72b6\u614b\u3092\u5236\u5fa1\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Host: \u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u308b\u5bfe\u8c61\u306e\u30db\u30b9\u30c8\u540d\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30dd\u30fc\u30c8\u756a\u53f7\u3092\u793a\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9",children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),"\n",(0,r.jsx)(n.p,{children:"\u540c\u69d8\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u3082\u4ee5\u4e0b\u306e\u69d8\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:'Response = Status-Line *((general-header | response-header | entity-header) CRLF) CRLF [ message-body ]\nStatus-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF\nStatus-Code = "100" (Continue) | "101" (Switching Protocols) |\n              "200" (OK) | "201" (Created) | "202" (Accepted) | "203" (Non-Authoritative Information) | "204" (No Content) | "205" (Reset Content) | "206" (Partial Content) | "300" (Multiple Choices) |\n              "301" (Moved Permanently) | "302" (Found) | "303" (See Other) | "304" (Not Modified) | "305" (Use Proxy) | "307" (Temporary Redirect) |\n              "400" (Bad Request) | "401" (Unauthorized) | "402" (Payment Required) | "403" (Forbidden) | "404" (Not Found) | "405" (Method Not Allowed) | "406" (Not Acceptable) | "407" (Proxy Authentication Required) | "408" (Request Time-out) | "409" (Conflict) | "410" (Gone) | "411" (Length Required) | "412" (Precondition Failed) | "413" (Request Entity Too Large) | "414" (Request-URI Too Large) | "415" (Unsupported Media Type) | "416" (Requested range not satisfiable) | "417" (Expectation Failed) |\n              "500" (Internal Server Error) | "501" (Not Implemented) | "502" (Bad Gateway) | "503" (Service Unavailable) | "504" (Gateway Time-out) | "505" (HTTP Version not supported) | extension-code\nextension-code = 3DIGIT\nReason-Phrase  = *<TEXT, excluding CR, LF>\n'})}),"\n",(0,r.jsx)(n.h6,{id:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9",children:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"}),"\n",(0,r.jsx)(n.p,{children:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u3057\u3066\u5272\u308a\u632f\u3089\u308c\u3066\u3044\u308b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1xx: \u60c5\u5831 - \u30ea\u30af\u30a8\u30b9\u30c8\u304c\u53d7\u3051\u53d6\u3089\u308c\u3001\u51e6\u7406\u304c\u7d9a\u884c\u4e2d\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"2xx: \u6210\u529f - \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6b63\u5e38\u306b\u53d7\u3051\u53d6\u3089\u308c\u3001\u7406\u89e3\u3055\u308c\u3001\u53d7\u3051\u5165\u308c\u3089\u308c\u307e\u3057\u305f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"3xx: \u30ea\u30c0\u30a4\u30ec\u30af\u30b7\u30e7\u30f3 - \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u5b8c\u4e86\u3059\u308b\u305f\u3081\u306b\u306f\u8ffd\u52a0\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"4xx: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a8\u30e9\u30fc - \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8aa4\u3063\u305f\u69cb\u6587\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u304b\u3001\u8981\u6c42\u3092\u6e80\u305f\u305b\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsx)(n.li,{children:"5xx: \u30b5\u30fc\u30d0\u30fc\u30a8\u30e9\u30fc - \u30b5\u30fc\u30d0\u30fc\u304c\u6709\u52b9\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u6e80\u305f\u3059\u3053\u3068\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP",children:"mdn"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>P});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),l=t(20469),o=t(91980),d=t(67392),c=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function T(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=u(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,h]=x({queryString:t,groupId:a}),[T,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=d??T;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(d(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...i,className:(0,a.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=T(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function P(e){const n=(0,m.Z)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},97936:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(85893);function a(e){let{children:n,color:t}=e;return(0,r.jsx)("span",{style:{color:t},children:n})}},97643:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);const r={text_ward:"text_ward_j2fN"};var a=t(85893);function i(e){let{children:n}=e;return(0,a.jsx)("div",{className:`${r.text_ward}`,children:n})}},79014:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);const r={split:"split_BsMO",border_none:"border_none_AQxW"};var a=t(85893);function i(e){let{children:n,border:t}=e;return(0,a.jsx)("span",{className:`${r.split} ${"false"===t?r.border_none:""}`,children:n})}},2062:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/http-1.drawio-fbf4d30654738619562a552a9badae56.svg"},20617:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/http-2.drawio-b0b3072fa9f0842e0f8d11c266550799.svg"},88353:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/http-3.drawio-919513661e915415dbbfa76eab56cbb4.svg"},42740:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/http-4.drawio-52d23422d1966325d5ec2443f531c7d6.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);