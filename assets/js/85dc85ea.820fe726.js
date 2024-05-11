"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[2558],{84349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(85893),i=t(11151),s=t(74866),a=t(85162);const l={title:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7",sidebar_label:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0","\u53e4\u5178\u6697\u53f7"]},o=void 0,u={id:"Cryptography/classical-cipher/vigenere-cipher",title:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7",description:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7\u3068\u306f",source:"@site/docs/02-Cryptography/00-classical-cipher/06-vigenere-cipher.md",sourceDirName:"02-Cryptography/00-classical-cipher",slug:"/Cryptography/classical-cipher/vigenere-cipher",permalink:"/study-docs/docs/Cryptography/classical-cipher/vigenere-cipher",draft:!1,unlisted:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/02-Cryptography/00-classical-cipher/06-vigenere-cipher.md",tags:[{label:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/study-docs/docs/tags/\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},{label:"\u53e4\u5178\u6697\u53f7",permalink:"/study-docs/docs/tags/\u53e4\u5178\u6697\u53f7"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1697714353,formattedLastUpdatedAt:"2023\u5e7410\u670819\u65e5",sidebarPosition:6,frontMatter:{title:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7",sidebar_label:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0","\u53e4\u5178\u6697\u53f7"]},sidebar:"CryptographySidebar",previous:{title:"\u591a\u8868\u5f0f\u6697\u53f7",permalink:"/study-docs/docs/Cryptography/classical-cipher/polyalphabetic-substitution-cipher"}},c={},d=[{value:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7\u3068\u306f",id:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7\u3068\u306f",level:2},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:3},{value:"\u52d5\u4f5c",id:"\u52d5\u4f5c",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7\u3068\u306f",children:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7\u3068\u306f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f7"}),"\u306f",(0,r.jsx)(n.a,{href:"/docs/Cryptography/classical-cipher/polyalphabetic-substitution-cipher",children:"\u591a\u8868\u5f0f\u6697\u53f7"}),"\u306e\u4e00\u7a2e\u3067\u3042\u308a\u3001\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u8868(\u4e0b\u56f3)\u3068\u8a00\u3046\u8868\u3092\u4f7f\u3063\u3066\u6697\u53f7\u5316\u3092\u884c\u3046\u6697\u53f7\u65b9\u5f0f\u3002\n",(0,r.jsx)(n.img,{alt:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u8868",src:t(23921).Z+"",width:"1082",height:"1081"})]}),"\n",(0,r.jsx)(n.p,{children:"\u8d64\u8272\u30a8\u30ea\u30a2\u306e\u6587\u5b57\u304c\u5e73\u6587\u3092\u8868\u3057\u3001\u9752\u8272\u30a8\u30ea\u30a2\u306e\u6587\u5b57\u304c\u9375\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u3002\u7dd1\u8272\u30a8\u30ea\u30a2\u306e\u6587\u5b57\u304c\u6697\u53f7\u5316\u5f8c\u306e\u6587\u5b57\u3092\u8868\u3057\u3066\u3044\u308b\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001",(0,r.jsx)(n.code,{children:"APPLE"}),"\u3092\u6697\u53f7\u5316\u3057\u305f\u3044\u3068\u3059\u308b\u3002",(0,r.jsx)(n.code,{children:"RINGO"}),"\u3092\u9375\u3068\u3057\u305f\u5834\u5408\u3001\u5e73\u6587\u306e",(0,r.jsx)(n.code,{children:"A"}),"\u3068\u9375\u306e",(0,r.jsx)(n.code,{children:"R"}),"\u3067\u5408\u81f4\u3059\u308b",(0,r.jsx)(n.code,{children:"R"}),"\u304c\u6697\u53f7\u5316\u5f8c\u306e\u6587\u5b57\u3068\u306a\u308b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f71",src:t(36838).Z+"",width:"1084",height:"1084"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7d9a\u3051\u3066\u3001",(0,r.jsx)(n.code,{children:"P"}),"\u3068",(0,r.jsx)(n.code,{children:"I"}),", ",(0,r.jsx)(n.code,{children:"P"}),"\u3068",(0,r.jsx)(n.code,{children:"N"}),", ",(0,r.jsx)(n.code,{children:"L"}),"\u3068",(0,r.jsx)(n.code,{children:"G"}),", ",(0,r.jsx)(n.code,{children:"E"}),"\u3068",(0,r.jsx)(n.code,{children:"O"}),"\u3067\u6697\u53f7\u6587\u5b57\u3092\u5c0e\u51fa\u3059\u308b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u30f4\u30a3\u30b8\u30e5\u30cd\u30eb\u6697\u53f72",src:t(61778).Z+"",width:"1085",height:"1084"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5e73\u6587",(0,r.jsx)(n.code,{children:"APPLE"}),"\u3068\u9375",(0,r.jsx)(n.code,{children:"RINGO"}),"\u3067\u6697\u53f7\u5316\u3057\u305f\u7d50\u679c\u3001\u6697\u53f7\u6587",(0,r.jsx)(n.code,{children:"RXCRS"}),"\u304c\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30d7\u30ed\u30b0\u30e9\u30e0",children:"\u30d7\u30ed\u30b0\u30e9\u30e0"}),"\n",(0,r.jsxs)(s.Z,{groupId:"code",children:[(0,r.jsx)(a.Z,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="vigenere-cipher.py"',children:'import random\ndef generate_key(size: int):\n    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n    result = []\n    for _ in range(size):\n        result.append(base[random.randint(0, 26)])\n    return "".join(result)\n\n\ndef vigenere_cipher(input_text: str, key: str, direction: str = "encryption"):\n    input_text = input_text.upper()\n    key = key.upper()\n    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n    mod = len(key)\n\n    result = []\n    dx = 1\n    if direction == "decryption":\n        dx = -1\n    for i in range(len(input_text)):\n        result.append(\n            base[(dx * base.find(key[i % mod]) + base.find(input_text[i])) % 26])\n    return "".join(result)\n'})})}),(0,r.jsx)(a.Z,{value:"C++",label:"C++",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="vigenere-cipher.cpp"',children:'string generateKey(int size)\n{\n    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    string result = "";\n    std::random_device rnd;\n    std::mt19937 mt(rnd());\n    uniform_int_distribution<> rand26(0, 25);\n    for (int i = 0; i < size; ++i)\n        result += base[rand26(mt)];\n\n    return result;\n}\n\nstring vigenereCipher(string inputText, string key, string direction = "encryption")\n{\n    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);\n    transform(key.begin(), key.end(), key.begin(), ::toupper);\n\n    int mod = key.size();\n\n    string result = "";\n    int dx = 1;\n    if (direction == "decryption")\n        dx = -1;\n    for (int i = 0; i < inputText.size(); ++i)\n    {\n        result += base[(dx * base.find(key[i % mod]) + base.find(inputText[i]) + 26) % 26];\n    }\n    return result;\n}\n\n'})})}),(0,r.jsx)(a.Z,{value:"C#",label:"C#",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="vigenere-cipher.cs"',children:'private static String GenerateKey(int size)\n{\n    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    var rand = new Random();\n    StringBuilder result = new StringBuilder();\n    for (int i = 0; i < size; ++i)\n    {\n        result.Append(_base[rand.Next(0, 26)]);\n    }\n    return result.ToString();\n}\n\nprivate static String VigenereCipher(\n    String inputText,\n    String key,\n    String direction = "encryption"\n)\n{\n    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    inputText.ToUpper();\n    key.ToUpper();\n    int mod = key.Length;\n    StringBuilder result = new StringBuilder();\n    int dx = 1;\n    if (direction == "decryption")\n        dx = -1;\n    for (int i = 0; i < inputText.Length; ++i)\n    {\n        result.Append(\n            _base[\n                (dx * _base.IndexOf(key[i % mod]) + _base.IndexOf(inputText[i]) + 26) % 26\n            ]\n        );\n    }\n    return result.ToString();\n}\n\n'})})}),(0,r.jsxs)(a.Z,{value:"Rust",label:"Rust",children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"rand \u30af\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="vigenere-cipher.rs"',children:'use rand::Rng;\n\nfn generate_key(size:usize) -> String{\n    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    let mut result = String::new();\n    let mut rng = rand::thread_rng();\n    for i in 0..size{\n        let  rand = rng.gen_range(0..26);\n        result += &base[rand..rand+1];\n    }\n    result\n}\n\nfn vigenere_cipher_to_encryption(input_text:String, key:String) -> String{\n    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    let  input_text_upper:String  = input_text.to_uppercase();\n    let key_upper: String = key.to_uppercase();\n    let _mod = key.len();\n    let mut result = String::new();\n    for i in 0..input_text.len(){\n        let pos_ =  base.find(key_upper.chars().nth(i % _mod).unwrap()).unwrap();\n        let pos__ = base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();\n        let pos = (pos_ + pos__) % 26;\n        result += &base[pos..pos+1];\n    }\n    result\n}\n\nfn vigenere_cipher_to_decryption(input_text:String, key:String) -> String{\n    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    let  input_text_upper:String  = input_text.to_uppercase();\n    let key_upper: String = key.to_uppercase();\n    let _mod = key.len();\n    let mut result = String::new();\n    for i in 0..input_text.len(){\n        let pos_ =  base.find(key_upper.chars().nth(i % _mod).unwrap()).unwrap();\n        let pos__ = base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();\n        let pos = ( 26 + pos__  - pos_) % 26;\n        result += &base[pos..pos+1];\n    }\n    result\n}\n\n'})})]}),(0,r.jsx)(a.Z,{value:"JavaScript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="vigenere-cipher.js"',children:'// \u6307\u5b9a\u7bc4\u56f2\u5185\u304b\u3089\u30e9\u30f3\u30c0\u30e0\u3067\u6570\u5b57\u3092\u751f\u6210 [min, max]\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min);\n}\n\nfunction generateKey(size) {\n  let result = "";\n  for (let i = 0; i < size; ++i) {\n    result += base[getRandomInt(0, 26)];\n  }\n  return result;\n}\n\nfunction vigenereCipher(inputText, key, direction = "encryption") {\n  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n  inputText = inputText.toUpperCase();\n  key = key.toUpperCase();\n  const mod = key.length;\n  let dx = 1;\n  if (direction == "decryption") dx = -1;\n  result = "";\n  for (let i = 0; i < inputText.length; ++i) {\n    result +=\n      base[\n        (dx * base.indexOf(key[i % mod]) + base.indexOf(inputText[i]) + 26) % 26\n      ];\n  }\n  return result;\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u52d5\u4f5c",children:"\u52d5\u4f5c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function SimpleSubstitutionCipher(props) {\n  // \u6697\u53f7\u5316 or \u5fa9\u53f7\u5316\u3059\u308b\u6587\u5b57\u5217\n  const inputText = "APPLE";\n\n  // encryption or decryption\n  const direction = "encryption";\n\n  // \u624b\u52d5\u3067\u9375\u3092\u6307\u5b9a\u3059\u308b\n  const defaultKey = "RINGO";\n\n  // defaultKey\u304cnull\u306e\u5834\u5408\u306b\u4f5c\u6210\u3059\u308b\u9375\u306e\u9577\u3055\n  const size = 3;\n\n  // \u4ee5\u4e0b\u306f\u7279\u306b\u5909\u66f4\u3057\u306a\u304f\u3066\u826f\u3044\n  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n\n  // \u6307\u5b9a\u7bc4\u56f2\u5185\u304b\u3089\u30e9\u30f3\u30c0\u30e0\u3067\u6570\u5b57\u3092\u751f\u6210 [min, max]\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  function generateKey(size) {\n    let result = "";\n    for (let i = 0; i < size; ++i) {\n      result += base[getRandomInt(0, 26)];\n    }\n    return result;\n  }\n\n  function vigenereCipher(inputText, key, direction = "encryption") {\n    inputText = inputText.toUpperCase();\n    key = key.toUpperCase();\n    const mod = key.length;\n    let dx = 1;\n    if (direction == "decryption") dx = -1;\n    result = "";\n    for (let i = 0; i < inputText.length; ++i) {\n      result +=\n        base[\n          (dx * base.indexOf(key[i % mod]) + base.indexOf(inputText[i]) + 26) %\n            26\n        ];\n    }\n    return result;\n  }\n\n  // React\n  const [key, setKey] = useState(undefined);\n  const [cipher, setCipher] = useState(undefined);\n\n  // table\u304c\u751f\u6210\u3055\u308c\u305f\u5f8c\u306b\u6697\u53f7\u5316\u3092\u884c\u3046\n  useEffect(() => {\n    if (!key) return;\n    const cipher = vigenereCipher(inputText, key, "encryption");\n    setCipher(cipher);\n  }, [key]);\n  // \u8aad\u307f\u8fbc\u307f\u6642\u306b\u4e00\u5ea6\u3060\u3051\u547c\u3073\u51fa\u3059\n  useEffect(() => {\n    // \u8aad\u307f\u8fbc\u307f\u3067\u304d\u3066\u304b\u3089\u547c\u3073\u3060\u3059\n    if (!defaultKey) {\n      setKey(generateKey(size));\n    } else {\n      setKey(defaultKey);\n    }\n  }, []);\n  return (\n    <>\n      <div\n        style={{\n          display: "flex",\n          flexDirection: "row",\n          flexWrap: "nowrap",\n          alignItems: "flex-start",\n          justifyContent: "space-evenly",\n        }}\n      >\n        <div>\n          <h3>\u5143\u306e\u6587\u5b57\u5217</h3>\n          <p>{inputText}</p>\n        </div>\n        {key === undefined || cipher === undefined ? (\n          /* \u5909\u63db\u30c6\u30fc\u30d6\u30eb\u3092\u751f\u6210\u3057\u3066\u308b\u304b\u3064\u6697\u53f7\u5316\u6e08\u307f\u3067\u3042\u308c\u3070\u8868\u793a */ <></>\n        ) : (\n          <>\n            <span\n              className="mrel"\n              style={{ padding: "5px", margin: "auto 0px" }}\n            >\n              \u2192\n            </span>\n            <div>\n              <h3>\u6697\u53f7\u5316</h3>\n              <p>{cipher}</p>\n            </div>\n            <span\n              className="mrel"\n              style={{ padding: "5px", margin: "auto 0px" }}\n            >\n              \u2192\n            </span>\n            <div>\n              <h3>\u5fa9\u53f7\u5316</h3>\n              <p style={{ padding: "1px", margin: "2px" }}>\n                {vigenereCipher(cipher, key, "decryption")}\n              </p>\n            </div>\n          </>\n        )}\n      </div>\n      <h3>\u9375</h3>\n      {key === undefined || cipher === undefined ? (\n        /* \u5909\u63db\u30c6\u30fc\u30d6\u30eb\u3092\u751f\u6210\u3057\u3066\u308b\u304b\u3064\u6697\u53f7\u5316\u6e08\u307f\u3067\u3042\u308c\u3070\u8868\u793a */ <></>\n      ) : (\n        <p>{key}</p>\n      )}\n    </>\n  );\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(67294),i=t(36905),s=t(12466),a=t(16550),l=t(20469),o=t(91980),u=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=g({queryString:t,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(u(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,i.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function _(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function j(e){const n=(0,x.Z)();return(0,y.jsx)(_,{...e,children:d(e.children)},String(n))}},23921:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vigenere-cipher-1.drawio-6fe2eee8374da15103b990e9f1f211fe.svg"},36838:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vigenere-cipher-2.drawio-d42ad434de6226a1b62e61dc2ced74a3.svg"},61778:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vigenere-cipher-3.drawio-5019fab286a8e984fa58e28aa12c9078.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);