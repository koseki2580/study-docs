---
title: スキュタレー暗号
sidebar_label: スキュタレー暗号
draft: true
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## スキュタレー暗号とは

筒や棒などに紙を巻きつけ、筒の伸びる方向に平文を記述し、余白部分に任意の文字で埋め尽くす。これにより、紙を筒から取り外した際に平文で書いた文字はバラバラに配置されているため、暗号化される。
同じ筒に同じ様に巻きつけることで文字を復元することができる。このような暗号化方式を`スキュタレー暗号`という。

![イメージ図](/img/png/Cryptography/classical-cipher/scythia-cipher/scythia-cipher-1.png "スキュタレー暗号 イメージ1")

![イメージ図](/img/png/Cryptography/classical-cipher/scythia-cipher/scythia-cipher-2.png "スキュタレー暗号 イメージ2")

図のように筒に合わせて文字を書くことで紙を筒から外すと`AAKL PXMP PSXQ LWRJ EEAE`となる。(わかりやすいように区切っている。区切りの始めの文字のみを取り出すと`APPLE`となる。)

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="scythia-cipher.py"

```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="scythia-cipher.cpp"

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="scythia-cipher.cs"

```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="scythia-cipher.rs"

```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="scythia-cipher.js"

```

  </TabItem>
</Tabs>

### 動作

```jsx live
function ShiftCipher(props) {
  // 暗号化 or 復号化する文字列
  const inputText = "APPLE";

  // 回転数
  const rot = 4;

  // encryption or decryption
  const direction = "encryption";

  // 以下は特に変更しなくて良い
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rotText = base.substring(rot) + base.substring(0, rot);

  function shiftCipher(inputText, direction = "encryption") {
    inputText = inputText.toUpperCase();
    let retText = "";
    let _base = base;
    let _rotText = rotText;
    if (direction == "decryption") {
      _rotText = base;
      _base = rotText;
    }
    for (let i = 0; i < inputText.length; ++i) {
      retText += _rotText[_base.indexOf(inputText[i])];
    }
    return retText;
  }
  return (
    <>
      <h3>{direction === "encryption" ? "暗号化" : "復号化"}</h3>
      <p>
        {direction === "encryption"
          ? inputText
          : shiftCipher(inputText, direction)}
        <span class="mrel" style={{ padding: "5px" }}>
          {direction === "encryption" ? "→" : "←"}
        </span>
        {direction === "encryption"
          ? shiftCipher(inputText, direction)
          : inputText}
      </p>
    </>
  );
}
```