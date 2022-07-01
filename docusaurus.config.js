// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const fs = require("fs");
const crypto = require("crypto");
const math = require("remark-math");
const katex = require("rehype-katex");

let contents = [];
let sidebar_js = {};
let navbar_items = [];
getFiles();
// console.log(navbar_items);
// console.log(contents);

WriteFile(
  "./src/components/HomepageFeatures/content.js",
  WriteContents(contents, "content")
);
WriteFile("./sidebars.js", WriteContents(sidebar_js, "sidebar"));
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "備忘録",
  url: "https://koseki2580.github.io/study-docs",
  baseUrl: "/study-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "koseki2580", // Usually your GitHub org/user name.
  projectName: "study-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/koseki2580/study-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "勉強メモ",
        // items: [
        //   {
        //     type: 'doc',
        //     docId: 'Algorithm/home',
        //     to : "docs/Algorithm/home",
        //     position: 'left',
        //     label: 'ドキュメント',
        //   },
        //   {
        //     type: 'dropdown',
        //     label: 'Tutorials',
        //     items: [
        //       {type: 'doc', to:"/docsAlgorithm/home", label:"aaaa",docId: 'Algorithm/home'},
        //       {type: 'doc', to:"/docsAlgorithm/home", label:"bbb", docId: 'Algorithm/home'},
        //     ],
        //   },
        //   {
        //     type: 'search',
        //     position: 'right',
        //   },
        // ],
        items: navbar_items,
      },
      // footer: {},
      prism: {
        additionalLanguages: ["csharp"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "3TKZBSXW6M",

        // Public API key: it is safe to commit it
        apiKey: "ebf396899e7416ef1152bfa118a63d29",

        indexName: "study",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
  plugins: [
    ["./my-plugin", {}],
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     // Options here
    //     language: "ja",
    //     indexDocSidebarParentCategories: 1,
    //   },
    // ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    {
      href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3",
      type: "text/css",
    },
  ],
};

module.exports = config;
/**
 * docsの親要素・子要素をjson形式で取り出し
 */

function getFiles() {
  // docsを見て、インデックスページなどを作成するのでベースのURLを作成する
  const baseUrl = "docs";
  let parentdatas = fs.readdirSync(baseUrl);

  // 正規表現でマッチするファイルのみ検索する
  const pattern = /(^\d{2}-[a-zA-Z]+)|(_category_.json)|(README.(md|mdx))/g;

  // 再帰で使えるように外に変数を出す
  let parentdata;
  let navparent;
  let recursionParentData;
  let recursionNavparent;
  // docs直下の親要素を探索する
  for (let i = 0; i < parentdatas.length; ++i) {
    // マッチしないファイルは検索対象外
    if (parentdatas[i].match(pattern) === null) continue;

    // 親データの形は以下のなので定義する
    parentdata = {
      headtitle: "",
      contents: [],
    };
    // 親要素の名前を取り出す
    let parentName = RemovePrefix(parentdatas[i]);

    // サイドバーのコンフィグを設定する
    sidebar_js[parentName + "Sidebar"] = [
      { type: "autogenerated", dirName: parentdatas[i] },
    ];

    navparent = {
      type: "dropdown",
      label: "",
      items: [],
    };
    recursionParentData = [[]];
    recursionNavparent = [[]];
    CreateContent("", parentdatas[i]);
    for (let data of recursionParentData.pop()) parentdata.contents.push(data);
    for (let data of recursionNavparent.pop()) navparent.items.push(data);
    if (navparent.items.length !== 0) navbar_items.push(navparent);
    if (parentdata.contents.length !== 0) contents.push(parentdata);
  }

  navbar_items.push({
    href: "https://github.com/koseki2580/study-docs",
    position: "right",
    className: "header-github-link",
    "aria-label": "GitHub repository",
  });
  navbar_items.push({
    type: "search",
    position: "right",
  });

  /**
   * 再帰処理でコンテンツを作成
   * @param {string} basePath ドキュメントのファイルパス
   * @param {string} fileName ドキュメントのファイル名
   */
  function CreateContent(basePath, fileName) {
    // マッチしないファイルは検索対象外
    if (fileName.match(pattern) === null) return;

    // _category_.jsonにタイトルが存在
    if (fileName === "_category_.json") {
      if (basePath.length === 0 || basePath.includes("/") === true) return;
      // JSONオブジェクトを取得
      const jsonObject = JSON.parse(
        fs.readFileSync(baseUrl + "/" + basePath + "/" + fileName, "utf8")
      );
      parentdata.headtitle = jsonObject.label;
      navparent.label = jsonObject.label;
      return;
    }

    // jsonファイルではないのでフォルダ
    // 探索を進める
    if (fileName.includes(".md") !== true) {
      let nextfile = fs.readdirSync(baseUrl + "/" + basePath + "/" + fileName);
      recursionParentData.push([]);
      recursionNavparent.push([]);
      for (let next of nextfile) {
        CreateContent(
          basePath + (basePath.length === 0 ? "" : "/") + fileName,
          next
        );
      }
      let temppar = recursionParentData.pop();
      let tempnav = recursionNavparent.pop();
      for (let data of temppar)
        recursionParentData[recursionParentData.length - 1].push(data);
      for (let data of tempnav)
        recursionNavparent[recursionNavparent.length - 1].push(data);
      return;
    }

    // ファイル読み込み
    let filepath = RemovePrefix(basePath + "/" + fileName.split(".")[0]);
    let title = fs.readFileSync(
      baseUrl + "/" + basePath + "/" + fileName,
      "utf8"
    );
    let draft = title.split("---")[1].split("\n")[3].split(" ")[1];
    if (draft === "true") return;
    // mdファイルからタイトル要素取り出し
    title = title.split("---")[1].split("\n")[1].split(" ")[1];

    // インデックスページに表示するコンテンツ
    let datas = {
      title: title,
      href: `docs/${filepath.replace("README", "")}`,
    };
    if (fileName.includes("README") === true) {
      recursionParentData[recursionParentData.length - 1].unshift(datas);
    } else {
      recursionParentData[recursionParentData.length - 1].push(datas);
    }
    // parentdata.contents.push(datas);

    // navbarに子要素を入れる
    let navbaritem = {
      type: "doc",
      to: `/docs${filepath}`,
      label: title,
      docId: `${filepath}`,
    };
    if (fileName.includes("README") === true) {
      recursionNavparent[recursionNavparent.length - 1].unshift(navbaritem);
    } else {
      recursionNavparent[recursionNavparent.length - 1].push(navbaritem);
    }

    // navparent.items.push(navbaritem);
  }
}

/**
 *
 * ファイル名のプレフィックスを取り除く(00-部分)
 * @param {string} filename ファイル名
 *
 * @returns filename
 */
function RemovePrefix(filename) {
  let filepath = filename.split("/");
  for (let i = 0; i < filepath.length; ++i) {
    let temp = filepath[i].split("-");
    let res = "";
    if (temp.length === 1) continue;
    for (let j = 1; j < temp.length; ++j) {
      res += temp[j];
      if (j !== temp.length - 1) res += "-";
    }
    filepath[i] = res;
  }

  return filepath.join("/");
}

function WriteContents(contents, variable) {
  let str = `const ${variable} = ${JSON.stringify(
    contents
  )}\nmodule.exports = ${variable};`;
  return str;
}

/**
 * ファイルを書き出す際に前のファイルと変化しているか確認してから書き出す
 * @param {string} path 保存先のパス
 * @param {string} data 保存するデータ
 * @returns 戻り値なし
 */
// ファイルを常に書き込むとホットリロードの際に無限ループに入るためファイルの内容が変更しているか確認し、変更されていればファイルを書き出す
function WriteFile(path, data) {
  let oddData = fs.readFileSync(path).toString();
  if (
    crypto.createHash("md5").update(oddData).digest("hex") ===
    crypto.createHash("md5").update(data).digest("hex")
  )
    return;
  fs.writeFileSync(path, data);
}
