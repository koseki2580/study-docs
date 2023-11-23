"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[9510],{16884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(85893),a=t(11151);t(74866),t(85162);const s={title:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS)",sidebar_label:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS)",draft:!1,toc_max_heading_level:4,tags:["\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"]},i=void 0,l={id:"Security/cross-site-scripting",title:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS)",description:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS) \u3068\u306f",source:"@site/docs/50-Security/00-cross-site-scripting.md",sourceDirName:"50-Security",slug:"/Security/cross-site-scripting",permalink:"/study-docs/docs/Security/cross-site-scripting",draft:!1,unlisted:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/50-Security/00-cross-site-scripting.md",tags:[{label:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",permalink:"/study-docs/docs/tags/\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1700711999,formattedLastUpdatedAt:"2023\u5e7411\u670823\u65e5",sidebarPosition:0,frontMatter:{title:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS)",sidebar_label:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS)",draft:!1,toc_max_heading_level:4,tags:["\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"]},sidebar:"SecuritySidebar"},c={},o=[{value:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS) \u3068\u306f",id:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0-xss-\u3068\u306f",level:2},{value:"\u653b\u6483\u65b9\u6cd5",id:"\u653b\u6483\u65b9\u6cd5",level:3},{value:"\u53cd\u5c04\u578b XSS",id:"\u53cd\u5c04\u578b-xss",level:4},{value:"\u683c\u7d0d\u578b XSS",id:"\u683c\u7d0d\u578b-xss",level:4},{value:"DOM base XSS",id:"dom-base-xss",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0-xss-\u3068\u306f",children:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS) \u3068\u306f"}),"\n",(0,r.jsxs)(n.p,{children:["\u60aa\u610f\u306e\u3042\u308b\u30b3\u30fc\u30c9\u3092\u6a19\u7684\u3068\u306a\u308b\u30b5\u30a4\u30c8\u306b\u57cb\u3081\u8fbc\u3080\u653b\u6483\u306e\u3053\u3068\u3092",(0,r.jsx)(n.code,{children:"\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0 (XSS: Cross Site Scripting)"}),"\u3068\u3044\u3046\u3002\n\u982d\u6587\u5b57\u3092\u53d6\u308b\u3068",(0,r.jsx)(n.code,{children:"CSS"}),"\u3060\u304c\u3001\u3053\u308c\u3060\u3068\u30ab\u30b9\u30b1\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3068\u533a\u5225\u304c\u3064\u304b\u306a\u3044\u305f\u3081\u3001X \u59cb\u307e\u308a\u306b\u306a\u3063\u305f\u307f\u305f\u3044\u3067\u3042\u308b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f3c\u305f\u3088\u3046\u306a\u653b\u6483\u3067\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\u30d5\u30a9\u30fc\u30b8\u30a7\u30ea(CSRF)\u304c\u3042\u308b\u304c\u3001\u3053\u306e\u653b\u6483\u3068\u306e\u9055\u3044\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8(\u30d6\u30e9\u30a6\u30b6)\u5074\u30fb\u30b5\u30fc\u30d0\u5074\u3069\u3061\u3089\u306b\u88ab\u5bb3\u304c\u53ca\u3076\u304b\u3067\u5206\u304b\u308c\u3066\u3044\u308b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u653b\u6483\u65b9\u6cd5",children:"\u653b\u6483\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"XSS \u306b\u306f 3 \u7a2e\u985e\u306e\u653b\u6483\u65b9\u6cd5\u304c\u5b58\u5728\u3059\u308b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53cd\u5c04\u578b XSS"}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u7d0d\u578b XSS"}),"\n",(0,r.jsx)(n.li,{children:"DOM base XSS"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53cd\u5c04\u578b-xss",children:"\u53cd\u5c04\u578b XSS"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u3001URL \u306e\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u7b49\u3092\u7528\u3044\u3066\u30da\u30fc\u30b8\u3092\u751f\u6210\u3059\u308b\u3088\u3046\u306a Web \u30da\u30fc\u30b8\u304c\u3042\u308c\u3070\u3001\u5bfe\u7b56\u3092\u884c\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3053\u306e\u653b\u6483\u3092\u53d7\u3051\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306e\u3088\u3046\u306a HTML(JavaScript)\u304c\u3042\u308b\u3068\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="\u8106\u5f31\u6027\u306e\u3042\u308b\u30da\u30fc\u30b8"',children:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Query Parameter Example</title>\n  </head>\n  <body>\n    <h1>\u53cd\u5c04\u578bXSS \u4f8b</h1>\n    <script>\n      // JavaScript\u3067\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u95a2\u6570\n      function getQueryParameter(name) {\n        // URL\u304b\u3089\u30af\u30a8\u30ea\u6587\u5b57\u5217\u3092\u53d6\u5f97\n        const queryString = window.location.search.substring(1);\n\n        // \u30af\u30a8\u30ea\u6587\u5b57\u5217\u3092\u30d1\u30fc\u30b9\u3057\u3066\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5909\u63db\n        const params = new URLSearchParams(queryString);\n\n        // \u6307\u5b9a\u3055\u308c\u305f\u540d\u524d\u306e\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\n        return params.get(name);\n      }\n\n      // \u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3066\u8868\u793a\n      const parameterName = "example";\n      const parameterValue = getQueryParameter(parameterName);\n\n      if (parameterValue !== null) {\n        // \u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u8868\u793a\n        /* \n          \u3053\u306e\u90e8\u5206\u306b\u8106\u5f31\u6027\u304c\u5b58\u5728\u3059\u308b\u3002\n        */\n        document.write(`<p>${parameterName}: ${parameterValue}</p>`);\n      } else {\n        // \u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\n        document.write(`<p>${parameterName} not found in the URL.</p>`);\n      }\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e HTML \u306f\u5358\u7d14\u306b\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf",(0,r.jsx)(n.code,{children:"example"}),"\u304b\u3089\u53d6\u5f97\u3057\u305f\u5024\u3092\u753b\u9762\u306b\u8868\u793a\u3057\u3066\u3044\u308b\u3060\u3051\u3067\u3042\u308b\u3002\n\u3057\u304b\u3057\u3001\u3053\u306e\u3088\u3046\u306a\u30da\u30fc\u30b8\u304c\u3042\u3063\u305f\u5834\u5408\u306b",(0,r.jsx)(n.code,{children:"?example=</p><script>alert('test')<\/script></p>"}),"\u306e\u3088\u3046\u306a\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u6307\u5b9a\u3055\u308c\u308b\u3068\n",(0,r.jsx)(n.code,{children:"<script>alert('test')<\/script>"}),"\u90e8\u5206\u304c JavaScript \u3068\u3057\u3066\u89e3\u91c8\u3055\u308c\u3001\u5b9f\u884c\u3055\u308c\u308b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u306b Cookie \u306b\u683c\u7d0d\u3057\u3066\u3044\u308b\u30bb\u30c3\u30b7\u30e7\u30f3\u60c5\u5831\u3092\u76d7\u307e\u308c\u3001\u60aa\u7528\u3055\u308c\u3066\u3057\u307e\u3046\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u3092\u9632\u3050\u306b\u306f",(0,r.jsx)(n.code,{children:"<>"}),"\u7b49\u306e\u7279\u5225\u306a\u6587\u5b57\u5217\u3092\u30a8\u30b9\u30b1\u30fc\u30d7\u51e6\u7406\u3059\u308b\u3053\u3068\u3067\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u30a8\u30b9\u30b1\u30fc\u30d7\u51e6\u7406\u306b\u3088\u308a\u3001\u7279\u5225\u306a\u610f\u5473\u3092\u6301\u3064\u6587\u5b57\u3067\u306f\u306a\u304f\u3001\u305f\u3060\u306e\u6587\u5b57\u3068\u3057\u3066\u89e3\u91c8\u3055\u308c\u3001\u60aa\u610f\u306e\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u57cb\u3081\u8fbc\u307f\u3044\u3092\u9632\u6b62\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function escapeHtml(input) {\n  if (typeof input !== "string") {\n    return input;\n  }\n\n  const entityMap = {\n    "&": "&amp;",\n    "<": "&lt;",\n    ">": "&gt;",\n    \'"\': "&quot;",\n    "\'": "&#39;",\n    "/": "&#x2F;",\n    "`": "&#x60;",\n    "=": "&#x3D;",\n  };\n\n  return input.replace(/[&<>"\'`=\\/]/g, function (s) {\n    return entityMap[s];\n  });\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u683c\u7d0d\u578b-xss",children:"\u683c\u7d0d\u578b XSS"}),"\n",(0,r.jsx)(n.p,{children:"\u683c\u7d0d\u578b\u306f\u30c1\u30e3\u30c3\u30c8\u7b49\u306e\u30e6\u30fc\u30b6\u304c\u6295\u7a3f\u3057\u305f\u5185\u5bb9\u3092\u5c65\u6b74\u3068\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306a\u3069\u306b\u4fdd\u5b58\u3057\u3001\u4fdd\u5b58\u3057\u305f\u5185\u5bb9\u3092 Web \u4e0a\u3067\u8868\u793a\u3059\u308b\u69d8\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u305f\u653b\u6483\u3067\u3042\u308b\u3002\n\u6295\u7a3f\u3057\u305f\u5185\u5bb9\u306b\u60aa\u610f\u306e\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5b58\u5728\u3059\u308b\u3068\u3001\u305d\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u542b\u3093\u3060\u307e\u307e Web \u30da\u30fc\u30b8\u304c\u751f\u6210\u3055\u308c\u3066\u3001\u88ab\u5bb3\u304c\u3067\u3066\u3057\u307e\u3046\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u3001\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u3092\u6307\u5b9a\u3059\u308b\u3068\u305d\u306e\u30e6\u30fc\u30b6\u306e\u60c5\u5831\u304c\u898b\u308c\u308b\u69d8\u306a Web \u30da\u30fc\u30b8\u304c\u3042\u3063\u305f\u3068\u3059\u308b\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30e6\u30fc\u30b6\u306e\u5165\u529b\u3092\u305d\u306e\u307e\u307e\u683c\u7d0d\u3057\u3066\u3057\u307e\u3063\u3066\u3044\u308b\u306e\u3067\u3001\u8868\u793a\u3059\u308b\u969b\u306b",(0,r.jsx)(n.code,{children:"script"}),"\u30bf\u30b0\u304c\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3046\u3002\u305d\u306e\u305f\u3081\u3001\u5165\u529b\u3092\u683c\u7d0d\u3059\u308b\u524d\u306b\u30b5\u30cb\u30bf\u30a4\u30ba\u51e6\u7406\u3092\u884c\u3044\u3001\u7121\u52b9\u5316\u3059\u308b\u3053\u3068\u3067\u3053\u306e\u3088\u3046\u306a\u554f\u984c\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u3059\u3067\u306b\u30d6\u30e9\u30a6\u30b6\u3067\u3044\u304f\u3064\u304b\u5bfe\u7b56\u3055\u308c\u3066\u304a\u308a\u3001innerHTML \u3067",(0,r.jsx)(n.code,{children:"script"}),"\u30bf\u30b0\u3092\u57cb\u3081\u8fbc\u3093\u3067\u3082\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u306a\u3044\u3002\n\u3053\u306e\u305f\u3081\u3001\u4eca\u56de\u306f\u308f\u3056\u3068",(0,r.jsx)(n.code,{children:"script"}),"\u30bf\u30b0\u3092\u5b9f\u884c\u3055\u305b\u308b\u69d8\u306b",(0,r.jsx)(n.code,{children:"eval"}),"\u95a2\u6570\u3092\u7528\u3044\u3066\u308b\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="\u8106\u5f31\u6027\u306e\u3042\u308b\u30da\u30fc\u30b8"',children:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <style>\n      label {\n        user-select: none;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n      }\n      .user-select {\n        background-color: rgb(211, 211, 211);\n      }\n    </style>\n    <title>Stored XSS Example</title>\n  </head>\n  <script>\n    // \u683c\u7d0d\u578b\u306e\u305f\u3081\u306b\u30c7\u30fc\u30bf\u3092sessionStorage\u306b\u4fdd\u5b58\u3059\u308b\u3002\n    sessionStorage.setItem("normalUser", "\u30c6\u30b9\u30c8\u30e6\u30fc\u30b6");\n    sessionStorage.setItem(\n      "maliciousUser",\n      \'\u60aa\u610f\u306e\u3042\u308b\u30e6\u30fc\u30b6<script>alert("XSS Attack!");<\\/script>\'\n    );\n  <\/script>\n  <body>\n    <h1>\u683c\u7d0d\u578bXSS \u4f8b</h1>\n    <a href="./../index.html">\u623b\u308b</a>\n    <p>\n      \u3053\u306e\u4f8b\u3067\u306f\u7279\u306b\u30b5\u30cb\u30bf\u30a4\u30ba\u305b\u305a\u306b\u30e6\u30fc\u30b6\u306e\u5165\u529b\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u8ffd\u52a0\u3057\u3066\u3044\u308b\u3002\u958b\u767a\u8005\u30c4\u30fc\u30eb\u753b\u9762\u306eApplication\u306eSessiion\n      storage\u3092\u898b\u308b\u3068 normalUser,\n      maliciousUser\u306e2\u7a2e\u985e\u306e\u30e6\u30fc\u30b6\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u3066\u3044\u308b\u3002\n      maliciousUser\u3067\u306f&lt;script&gt;&lt;/script&gt;\u304c\u57cb\u3081\u8fbc\u307e\u308c\u3066\u304a\u308a\u3001\u305d\u306e\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u3002\n      \u4eca\u56de\u306f\u30c7\u30e2\u306a\u306e\u3067alert\u304c\u767a\u751f\u3059\u308b\u3060\u3051\u3060\u304c\u3001Cookie\u3092\u53d6\u5f97\u3059\u308b\u3088\u3046\u306a\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u3068\u30bb\u30c3\u30b7\u30e7\u30f3\u60c5\u5831\u7b49\u304c\u629c\u304d\u53d6\u3089\u308c\u308b\u5371\u967a\u6027\u304c\u3042\u308b\u3002\n    </p>\n    <div class="user-select">\n      <h2>\u95b2\u89a7\u53ef\u80fd\u30e6\u30fc\u30b6</h2>\n      <label>\n        <input type="radio" name="user" value="normalUser" checked /> \u4e00\u822c\u30e6\u30fc\u30b6\n      </label>\n      <br />\n\n      <label>\n        <input type="radio" name="user" value="maliciousUser" />\n        \u60aa\u610f\u306e\u3042\u308b\u30e6\u30fc\u30b6\n      </label>\n      <br />\n    </div>\n    <div id="user-info" class="user-info">\n      <h3>A<span>\u3055\u3093\u306e\u60c5\u5831</span></h3>\n    </div>\n    <script>\n      const radioButtons = document.querySelectorAll(\'input[type="radio"]\');\n      const userInfo = document.getElementById("user-info");\n      // \u5404\u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u306b\u5bfe\u3057\u3066change\u30a4\u30d9\u30f3\u30c8\u3092\u8ffd\u52a0\n      radioButtons.forEach((radioButton) => {\n        radioButton.addEventListener("change", (e) => {\n          userInfo.innerHTML = "";\n          // \u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u304c\u9078\u629e\u3055\u308c\u305f\u3068\u304d\u306e\u51e6\u7406\n          const storedUserName = sessionStorage.getItem(e.target.value);\n          // \u6587\u5b57\u5217\u3092DOM\u8981\u7d20\u306b\u5909\u63db\n          const parser = new DOMParser();\n          const doc = parser.parseFromString(\n            `<h3>${storedUserName}<span>\u3055\u3093\u306e\u60c5\u5831</span></h3>`,\n            "text/html"\n          );\n          // innerHTML\u3067\u8ffd\u52a0<script>\u30bf\u30b0\u306f\u5b9f\u884c\u3055\u308c\u306a\u3044 \u30d6\u30e9\u30a6\u30b6\u304c\u5b9f\u884c\u3092\u5236\u9650\u3057\u3066\u3044\u308b\n          // \u305d\u306e\u305f\u3081\u3001\u308f\u3056\u3068\u4ee5\u4e0b\u306e\u69d8\u306a\u65b9\u6cd5\u3067\u8981\u7d20\u3092\u8ffd\u52a0\u3057\u3066\u3044\u308b\u3002\n          userInfo.appendChild(\n            doc.getElementsByTagName("h3")[0].cloneNode(true)\n          );\n          // script\u30bf\u30b0\u306e\u3082\u306e\u304c\u5b9f\u884c\u3055\u308c\u306a\u3044\u306e\u3067\u308f\u3056\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5b9f\u884c\u3055\u305b\u3066\u3044\u308b\n          const scriptText = doc.getElementsByTagName("script")[0];\n          if (scriptText) {\n            eval(scriptText.textContent);\n          }\n        });\n        // \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u306b\u5bfe\u3057\u3066change\u30a4\u30d9\u30f3\u30c8\u3092\u624b\u52d5\u3067\u767a\u751f\u3055\u305b\u308b\n        if (radioButton.checked) {\n          radioButton.dispatchEvent(new Event("change"));\n        }\n      });\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"dom-base-xss",children:"DOM base XSS"}),"\n",(0,r.jsx)(n.p,{children:"\u53cd\u5c04\u578b\u30fb\u683c\u7d0d\u578b\u306f\u3068\u3082\u306b\u30b5\u30fc\u30d0\u5074\u3092\u4e00\u5ea6\u901a\u308b\u306e\u3067\u3001\u653b\u6483\u3092\u53d7\u3051\u3066\u3044\u308b\u3053\u3068\u306f\u3059\u3050\u306b\u691c\u77e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u3057\u304b\u3057\u3001DOM base XSS \u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u307f\u3067\u51e6\u7406\u304c\u5b8c\u7d50\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30b5\u30fc\u30d0\u306b\u8a18\u9332\u304c\u6b8b\u3089\u306a\u3044\u3002\u305d\u306e\u305f\u3081\u3001\u88ab\u5bb3\u306b\u906d\u3063\u3066\u3044\u308b\u306e\u6c17\u3065\u304f\u306e\u306b\u9045\u308c\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u9ad8\u304f\u306a\u308b\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u7684\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u306f URL \u306b\u3064\u3044\u3066\u308b",(0,r.jsx)(n.code,{children:"#"}),"\u4ee5\u964d\u306f\u30b5\u30fc\u30d0\u306b\u9001\u4fe1\u3057\u306a\u3044\u3002\u3053\u308c\u306f",(0,r.jsx)(n.code,{children:"#"}),"\u4ee5\u964d\u306e\u60c5\u5831\u306f\u30b5\u30fc\u30d0\u306b\u3068\u3063\u3066\u306f\u4e0d\u5fc5\u8981\u3067\u3042\u308b\u305f\u3081\u3001\u30d6\u30e9\u30a6\u30b6\u304c\u9001\u4fe1\u3057\u306a\u3044\u3002\u3053\u306e",(0,r.jsx)(n.code,{children:"#"}),"\u306b",(0,r.jsx)(n.code,{children:"script"}),"\u30bf\u30b0\u304c\u57cb\u3081\u8fbc\u307e\u308c\u3066\u3044\u305f\u5834\u5408\u306f\u30b5\u30fc\u30d0\u306b\u306f\u60c5\u5831\u304c\u884c\u304b\u306a\u3044\u305f\u3081\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u5b8c\u7d50\u3059\u308b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3092\u5207\u308a\u66ff\u3048\u3066\u3044\u308b Web \u30da\u30fc\u30b8\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u8a18\u53f7\u3092\u4f7f\u3048\u308b\u69d8\u306b\u3059\u308b\u305f\u3081 URL \u30c7\u30b3\u30fc\u30c9\u306e\u51e6\u7406\u3092\u5165\u308c\u3066\u3057\u307e\u3046\u3068\u3001\u60aa\u610f\u306e\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5165\u308c\u308b\u3053\u3068\u304c\u53ef\u80fd\u3068\u306a\u3063\u3066\u3057\u307e\u3046\u3002\n\u3053\u306e\u5bfe\u7b56\u3082\u7279\u5225\u306a\u8a18\u53f7\u3092\u30a8\u30b9\u30b1\u30fc\u30d7\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u3067\u5bfe\u7b56\u3067\u304d\u308b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="\u8106\u5f31\u6027\u306e\u3042\u308b\u30da\u30fc\u30b8"',children:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>DOM Base XSS Example</title>\n  </head>\n  <body>\n    <h1>DOM Base XSS \u4f8b</h1>\n    <a href="./../index.html">\u623b\u308b</a>\n    <p>\n      \u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30da\u30fc\u30b8\u306e\u8868\u793a\u5185\u5bb9\u3092\u5909\u66f4\u3057\u3066\u3044\u308b\u3002\u3053\u3053\u306b\u60aa\u610f\u306e\u3042\u308b\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u305fURL\u3092\u914d\u7f6e\u3057\u3001\n      \u53cd\u5c04\u578b\u306e\u3088\u3046\u306b\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u3053\u3068\u3067\u30b5\u30fc\u30d0\u5074\u306bXSS\u3068\u308f\u304b\u3089\u306a\u3044\u3088\u3046\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306b\u88ab\u5bb3\u3092\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002\n    </p>\n    <nav>\n      <ul>\n        <li><a href="#home">\u30db\u30fc\u30e0</a></li>\n        <li><a href="#about">\u6982\u8981</a></li>\n        <li><a href="#contact">\u30b3\u30f3\u30bf\u30af\u30c8</a></li>\n        <li>\n          <a\n            href="#<img%20src=x%20onerror=alert(\'XSS\u3000Attack\') id=xss> <style>#xss{display:none}</style>"\n          >\n            \u60aa\u610f\u306e\u3042\u308b\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\n          </a>\n        </li>\n      </ul>\n    </nav>\n\n    <div id="content">\n      \x3c!-- \u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3053\u3053\u306b\u8868\u793a\u3055\u308c\u307e\u3059 --\x3e\n    </div>\n\n    <script>\n      // \u8868\u793a\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8981\u7d20\n      const contentElement = document.getElementById("content");\n\n      // \u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u304c\u5909\u66f4\u3055\u308c\u305f\u3089\u3001\u5bfe\u5fdc\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3059\u308b\n      window.addEventListener("hashchange", function () {\n        const fragment = window.location.hash.substring(1); // # \u3092\u53d6\u308a\u9664\u304f\n        showContentForFragment(fragment);\n      });\n\n      // \u521d\u671f\u8868\u793a\u6642\u306b\u3082\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\n      const initialFragment = window.location.hash.substring(1);\n\n      showContentForFragment(initialFragment);\n\n      function showContentForFragment(fragment) {\n        switch (fragment) {\n          case "home":\n            contentElement.innerHTML = "<p>Welcome to the Home Page!</p>";\n            break;\n          case "about":\n            contentElement.innerHTML = "<p>Learn more About Us.</p>";\n            break;\n          case "contact":\n            contentElement.innerHTML =\n              "<p>Contact us at example@example.com.</p>";\n            break;\n          default:\n            contentElement.innerHTML = `<p>${decodeURI(\n              fragment\n            )} Page not found.</p>`;\n        }\n      }\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ed6\u306b\u3082",(0,r.jsx)(n.code,{children:"a"}),"\u30bf\u30b0\u306e",(0,r.jsx)(n.code,{children:"href"}),"\u306e\u30ad\u30fc\u306b\u306f",(0,r.jsx)(n.code,{children:"javascript:{\u30b3\u30fc\u30c9}"}),"\u306e\u5f62\u5f0f\u3067\u4efb\u610f\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3067\u304d\u308b\u3002\u305d\u306e\u305f\u3081\u3001\u30e6\u30fc\u30b6\u306e\u5165\u529b\u5024\u3092\u305d\u306e\u307e\u307e\u30ea\u30f3\u30af\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3088\u3046\u306a\u30b1\u30fc\u30b9\u3067\u306f\u6c17\u3092\u4ed8\u3051\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u5834\u5408\u306f",(0,r.jsx)(n.code,{children:"http"}),", ",(0,r.jsx)(n.code,{children:"https"}),"\u304b\u3089\u59cb\u307e\u308b\u5834\u5408\u306e\u307f",(0,r.jsx)(n.code,{children:"href"}),"\u5c5e\u6027\u306b\u8ffd\u52a0\u3059\u308b\u30fb",(0,r.jsx)(n.code,{children:"target=\u201d_blank\u201d"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u306a\u3069\u3067\u5bfe\u7b56\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="\u8106\u5f31\u6027\u306e\u3042\u308b\u30da\u30fc\u30b8"',children:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>DOM Base XSS Example2</title>\n  </head>\n  <style>\n    label {\n      margin: 10px 10px;\n    }\n    button {\n      margin: 10px 10px;\n    }\n  </style>\n  <body>\n    <h1>DOM Base XSS \u4f8b2</h1>\n    <a href="./../index.html">\u623b\u308b</a>\n    <p>\n      \u4efb\u610f\u306e\u5024\u3092a\u30bf\u30b0\u306ehref\u5c5e\u6027\u306b\u8a2d\u5b9a\u3067\u304d\u308b\u305f\u3081\u3001\u300cjavascript:alert(\'XSS\n      Attack!\')\u300d\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u30af\u30ea\u30c3\u30af\u3057\u305f\u969b\u306balert\u3092\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u3066\u3057\u307e\u3046\u3002\n    </p>\n    <button onclick="injectJavascript()">\u60aa\u610f\u306e\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8a2d\u5b9a\u3059\u308b</button>\n    <br />\n    \x3c!-- \u30b5\u30a4\u30c8\u306e\u30bf\u30a4\u30c8\u30eb\u3068URL\u3092\u5165\u529b\u3059\u308b\u30d5\u30a9\u30fc\u30e0 --\x3e\n    <label for="siteTitle">\n      \u30b5\u30a4\u30c8\u306e\u30bf\u30a4\u30c8\u30eb:\n      <input type="text" id="siteTitle" placeholder="\u4f8b: Google" />\n    </label>\n    <br />\n    <label for="siteURL">\n      \u30b5\u30a4\u30c8\u306eURL:\n      <input\n        type="text"\n        id="siteURL"\n        placeholder="\u4f8b: https://www.google.com"\n      />\n    </label>\n    <br />\n    \x3c!-- \u30b5\u30a4\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u30dc\u30bf\u30f3 --\x3e\n    <button onclick="addFavoriteSite()">\u304a\u6c17\u306b\u5165\u308a\u306b\u8ffd\u52a0\u3059\u308b</button> <br />\n\n    \x3c!-- \u304a\u6c17\u306b\u5165\u308a\u30b5\u30a4\u30c8\u306e\u30ea\u30b9\u30c8 --\x3e\n    <h2>\u304a\u6c17\u306b\u5165\u308a\u306e\u30b5\u30a4\u30c8</h2>\n    <ul id="favoriteSitesList"></ul>\n    <script>\n      const siteTitle = document.getElementById("siteTitle");\n      const siteURL = document.getElementById("siteURL");\n      function injectJavascript() {\n        siteTitle.value = "\u60aa\u610f\u306e\u3042\u308b\u30ea\u30f3\u30af";\n        siteURL.value = "javascript:alert(\'XSS Attack!\')";\n      }\n      function addFavoriteSite() {\n        // \u5165\u529b\u3055\u308c\u305f\u30b5\u30a4\u30c8\u306e\u30bf\u30a4\u30c8\u30eb\u3068URL\u3092\u53d6\u5f97\n        const title = siteTitle.value;\n        const url = siteURL.value;\n\n        // \u30bf\u30a4\u30c8\u30eb\u3068URL\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u51e6\u7406\u3092\u7d9a\u884c\n        if (title && url) {\n          // \u65b0\u3057\u3044\u30ea\u30b9\u30c8\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u3057\u3066\u304a\u6c17\u306b\u5165\u308a\u30ea\u30b9\u30c8\u306b\u8ffd\u52a0\n          var listItem = document.createElement("li");\n          listItem.innerHTML = `<a href="${url}" >${title}</a>`;\n          document.getElementById("favoriteSitesList").appendChild(listItem);\n\n          // \u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30af\u30ea\u30a2\n          siteTitle.value = "";\n          siteURL.value = "";\n        }\n      }\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5bfe\u7b56\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u66f8\u304d\u8fbc\u3080\u6761\u4ef6\u3092\u5909\u66f4\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"if (title && /^(https?:)/.test(url))\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.ipa.go.jp/security/vuln/websecurity/cross-site-scripting.html",children:"IPA XSS \u306b\u3064\u3044\u3066"}),"\n\u306e\u30da\u30fc\u30b8\u3067\u306f"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30a8\u30b9\u30b1\u30fc\u30d7\u51e6\u7406\u3092\u65bd\u3059"}),"\n",(0,r.jsxs)(n.li,{children:["URL \u51fa\u529b\u6642\u306f",(0,r.jsx)(n.code,{children:"http://"}),", ",(0,r.jsx)(n.code,{children:"https://"}),"\u306e\u307f\u306b\u3059\u308b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"script"}),"\u30bf\u30b0\u3092\u52d5\u7684\u306b\u751f\u6210\u3057\u306a\u3044"]}),"\n",(0,r.jsx)(n.li,{children:"\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3092\u4efb\u610f\u306e\u30b5\u30a4\u30c8\u304b\u3089\u53d6\u308a\u8fbc\u3081\u306a\u3044\u69d8\u306b\u3059\u308b"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u306e 4 \u70b9\u304c\u6839\u672c\u7684\u89e3\u6c7a\u3068\u3057\u3066\u3044\u308b\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(86010),s=t(12466),i=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,u]=m({queryString:t,groupId:a}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=o??x;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function S(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(S,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,f.jsx)(j,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);