---
title: クロスサイトスクリプティング (XSS)
sidebar_label: クロスサイトスクリプティング (XSS)
draft: false
toc_max_heading_level: 4
tags: [セキュリティ]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## クロスサイトスクリプティング (XSS) とは

悪意のあるコードを標的となるサイトに埋め込む攻撃のことを`クロスサイトスクリプティング (XSS: Cross Site Scripting)`という。
頭文字を取ると`CSS`だが、これだとカスケーディングスタイルシートと区別がつかないため、X 始まりになったみたいである。

似たような攻撃でクロスサイトリクエストフォージェリ(CSRF)があるが、この攻撃との違いはクライアント(ブラウザ)側・サーバ側どちらに被害が及ぶかで分かれている。

### 攻撃方法

XSS には 3 種類の攻撃方法が存在する。

- 反射型 XSS
- 格納型 XSS
- DOM base XSS

#### 反射型 XSS

例えば、URL のクエリパラメータ等を用いてページを生成するような Web ページがあれば、対策を行っていない場合にこの攻撃を受ける可能性がある。

次のような HTML(JavaScript)があるとする。

```html title="脆弱性のあるページ"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Query Parameter Example</title>
  </head>
  <body>
    <h1>反射型XSS 例</h1>
    <script>
      // JavaScriptでクエリパラメータを取得する関数
      function getQueryParameter(name) {
        // URLからクエリ文字列を取得
        const queryString = window.location.search.substring(1);

        // クエリ文字列をパースしてオブジェクトに変換
        const params = new URLSearchParams(queryString);

        // 指定された名前のクエリパラメータを取得
        return params.get(name);
      }

      // クエリパラメータを取得して表示
      const parameterName = "example";
      const parameterValue = getQueryParameter(parameterName);

      if (parameterValue !== null) {
        // クエリパラメータが存在する場合は表示
        /* 
          この部分に脆弱性が存在する。
        */
        document.write(`<p>${parameterName}: ${parameterValue}</p>`);
      } else {
        // クエリパラメータが存在しない場合はメッセージを表示
        document.write(`<p>${parameterName} not found in the URL.</p>`);
      }
    </script>
  </body>
</html>
```

この HTML は単純にクエリパラメータ`example`から取得した値を画面に表示しているだけである。
しかし、このようなページがあった場合に`?example=</p><script>alert('test')</script></p>`のようなクエリパラメータが指定されると
`<script>alert('test')</script>`部分が JavaScript として解釈され、実行される。

これによりに Cookie に格納しているセッション情報を盗まれ、悪用されてしまう。

これを防ぐには`<>`等の特別な文字列をエスケープ処理することで防ぐことができる。エスケープ処理により、特別な意味を持つ文字ではなく、ただの文字として解釈され、悪意のあるスクリプトの埋め込みいを防止することができる。

```javascript
function escapeHtml(input) {
  if (typeof input !== "string") {
    return input;
  }

  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
  };

  return input.replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}
```

#### 格納型 XSS

格納型はチャット等のユーザが投稿した内容を履歴としてデータベースなどに保存し、保存した内容を Web 上で表示する様なアプリケーションをターゲットにした攻撃である。
投稿した内容に悪意のあるスクリプトが存在すると、そのスクリプトを含んだまま Web ページが生成されて、被害がでてしまう。

例えば、特定のユーザを指定するとそのユーザの情報が見れる様な Web ページがあったとする。

ユーザの入力をそのまま格納してしまっているので、表示する際に`script`タグが実行されてしまう。そのため、入力を格納する前にサニタイズ処理を行い、無効化することでこのような問題を防ぐことができる。
:::note
すでにブラウザでいくつか対策されており、innerHTML で`script`タグを埋め込んでも処理が実行されない。
このため、今回はわざと`script`タグを実行させる様に`eval`関数を用いてる。
:::

```html title="脆弱性のあるページ"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      label {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
      }
      .user-select {
        background-color: rgb(211, 211, 211);
      }
    </style>
    <title>Stored XSS Example</title>
  </head>
  <script>
    // 格納型のためにデータをsessionStorageに保存する。
    sessionStorage.setItem("normalUser", "テストユーザ");
    sessionStorage.setItem(
      "maliciousUser",
      '悪意のあるユーザ<script>alert("XSS Attack!");<\/script>'
    );
  </script>
  <body>
    <h1>格納型XSS 例</h1>
    <a href="./../index.html">戻る</a>
    <p>
      この例では特にサニタイズせずにユーザの入力をデータベースに追加している。開発者ツール画面のApplicationのSessiion
      storageを見ると normalUser,
      maliciousUserの2種類のユーザのデータを保存している。
      maliciousUserでは&lt;script&gt;&lt;/script&gt;が埋め込まれており、その処理が実行されている。
      今回はデモなのでalertが発生するだけだが、Cookieを取得するような処理が記述されているとセッション情報等が抜き取られる危険性がある。
    </p>
    <div class="user-select">
      <h2>閲覧可能ユーザ</h2>
      <label>
        <input type="radio" name="user" value="normalUser" checked /> 一般ユーザ
      </label>
      <br />

      <label>
        <input type="radio" name="user" value="maliciousUser" />
        悪意のあるユーザ
      </label>
      <br />
    </div>
    <div id="user-info" class="user-info">
      <h3>A<span>さんの情報</span></h3>
    </div>
    <script>
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      const userInfo = document.getElementById("user-info");
      // 各ラジオボタンに対してchangeイベントを追加
      radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", (e) => {
          userInfo.innerHTML = "";
          // ラジオボタンが選択されたときの処理
          const storedUserName = sessionStorage.getItem(e.target.value);
          // 文字列をDOM要素に変換
          const parser = new DOMParser();
          const doc = parser.parseFromString(
            `<h3>${storedUserName}<span>さんの情報</span></h3>`,
            "text/html"
          );
          // innerHTMLで追加<script>タグは実行されない ブラウザが実行を制限している
          // そのため、わざと以下の様な方法で要素を追加している。
          userInfo.appendChild(
            doc.getElementsByTagName("h3")[0].cloneNode(true)
          );
          // scriptタグのものが実行されないのでわざと以下のように実行させている
          const scriptText = doc.getElementsByTagName("script")[0];
          if (scriptText) {
            eval(scriptText.textContent);
          }
        });
        // デフォルトで選択されているラジオボタンに対してchangeイベントを手動で発生させる
        if (radioButton.checked) {
          radioButton.dispatchEvent(new Event("change"));
        }
      });
    </script>
  </body>
</html>
```

### DOM base XSS

反射型・格納型はともにサーバ側を一度通るので、攻撃を受けていることはすぐに検知することができる。しかし、DOM base XSS はクライアント側のみで処理が完結しているため、サーバに記録が残らない。そのため、被害に遭っているの気づくのに遅れてしまう可能性が高くなる。

具体的にはブラウザは URL についてる`#`以降はサーバに送信しない。これは`#`以降の情報はサーバにとっては不必要であるため、ブラウザが送信しない。この`#`に`script`タグが埋め込まれていた場合はサーバには情報が行かないためクライアント側で完結する。

フラグメントを使用して、表示するページを切り替えている Web ページがあった場合に記号を使える様にするため URL デコードの処理を入れてしまうと、悪意のあるスクリプトを入れることが可能となってしまう。
この対策も特別な記号をエスケープ処理を行うことで対策できる。

```html title="脆弱性のあるページ"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Base XSS Example</title>
  </head>
  <body>
    <h1>DOM Base XSS 例</h1>
    <a href="./../index.html">戻る</a>
    <p>
      フラグメントを使用してページの表示内容を変更している。ここに悪意のあるフラグメントを設定したURLを配置し、
      反射型のようにクリックされることでサーバ側にXSSとわからないようにクライアント側に被害を出すことができる。
    </p>
    <nav>
      <ul>
        <li><a href="#home">ホーム</a></li>
        <li><a href="#about">概要</a></li>
        <li><a href="#contact">コンタクト</a></li>
        <li>
          <a
            href="#<img%20src=x%20onerror=alert('XSS　Attack') id=xss> <style>#xss{display:none}</style>"
          >
            悪意のあるフラグメント
          </a>
        </li>
      </ul>
    </nav>

    <div id="content">
      <!-- コンテンツはここに表示されます -->
    </div>

    <script>
      // 表示するコンテンツの要素
      const contentElement = document.getElementById("content");

      // フラグメントが変更されたら、対応するコンテンツを表示する
      window.addEventListener("hashchange", function () {
        const fragment = window.location.hash.substring(1); // # を取り除く
        showContentForFragment(fragment);
      });

      // 初期表示時にもコンテンツを表示
      const initialFragment = window.location.hash.substring(1);

      showContentForFragment(initialFragment);

      function showContentForFragment(fragment) {
        switch (fragment) {
          case "home":
            contentElement.innerHTML = "<p>Welcome to the Home Page!</p>";
            break;
          case "about":
            contentElement.innerHTML = "<p>Learn more About Us.</p>";
            break;
          case "contact":
            contentElement.innerHTML =
              "<p>Contact us at example@example.com.</p>";
            break;
          default:
            contentElement.innerHTML = `<p>${decodeURI(
              fragment
            )} Page not found.</p>`;
        }
      }
    </script>
  </body>
</html>
```

他にも`a`タグの`href`のキーには`javascript:{コード}`の形式で任意のコードを実行できる。そのため、ユーザの入力値をそのままリンクとして使用するようなケースでは気を付ける必要がある。

この場合は`http`, `https`から始まる場合のみ`href`属性に追加する・`target=”_blank”`を設定するなどで対策することができる。

```html title="脆弱性のあるページ"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Base XSS Example2</title>
  </head>
  <style>
    label {
      margin: 10px 10px;
    }
    button {
      margin: 10px 10px;
    }
  </style>
  <body>
    <h1>DOM Base XSS 例2</h1>
    <a href="./../index.html">戻る</a>
    <p>
      任意の値をaタグのhref属性に設定できるため、「javascript:alert('XSS
      Attack!')」を設定することでクリックした際にalertを出すことができてしまう。
    </p>
    <button onclick="injectJavascript()">悪意のあるスクリプトを設定する</button>
    <br />
    <!-- サイトのタイトルとURLを入力するフォーム -->
    <label for="siteTitle">
      サイトのタイトル:
      <input type="text" id="siteTitle" placeholder="例: Google" />
    </label>
    <br />
    <label for="siteURL">
      サイトのURL:
      <input
        type="text"
        id="siteURL"
        placeholder="例: https://www.google.com"
      />
    </label>
    <br />
    <!-- サイトを追加するボタン -->
    <button onclick="addFavoriteSite()">お気に入りに追加する</button> <br />

    <!-- お気に入りサイトのリスト -->
    <h2>お気に入りのサイト</h2>
    <ul id="favoriteSitesList"></ul>
    <script>
      const siteTitle = document.getElementById("siteTitle");
      const siteURL = document.getElementById("siteURL");
      function injectJavascript() {
        siteTitle.value = "悪意のあるリンク";
        siteURL.value = "javascript:alert('XSS Attack!')";
      }
      function addFavoriteSite() {
        // 入力されたサイトのタイトルとURLを取得
        const title = siteTitle.value;
        const url = siteURL.value;

        // タイトルとURLが入力されている場合のみ処理を続行
        if (title && url) {
          // 新しいリストアイテムを作成してお気に入りリストに追加
          var listItem = document.createElement("li");
          listItem.innerHTML = `<a href="${url}" >${title}</a>`;
          document.getElementById("favoriteSitesList").appendChild(listItem);

          // 入力フィールドをクリア
          siteTitle.value = "";
          siteURL.value = "";
        }
      }
    </script>
  </body>
</html>
```

対策は以下の様に書き込む条件を変更する。

```javascript
if (title && /^(https?:)/.test(url))
```

[IPA XSS について](https://www.ipa.go.jp/security/vuln/websecurity/cross-site-scripting.html)
のページでは

- エスケープ処理を施す
- URL 出力時は`http://`, `https://`のみにする
- `script`タグを動的に生成しない
- スタイルシートを任意のサイトから取り込めない様にする

の 4 点が根本的解決としている。
