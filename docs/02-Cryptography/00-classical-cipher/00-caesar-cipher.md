---
title: シーザー暗号
sidebar_label: シーザー暗号
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## シーザー暗号とは

ある単語・文のそれぞれのアルファベットを 3 文字分ずらして表現する暗号を`シーザー暗号`という。

例えば、APPLE という単語をシーザー暗号のアルゴリズムを使うと`DSSOH`となる。

![イメージ図](/img/svg/Cryptography/classical-cipher/caesar-cipher/caesar-cipher-1.drawio.svg "シーザー暗号 暗号化")

3 つずつずらすので`DEFGHIJKLMNOPQRSTUVWXYZABC`となり、元の文字の場所のアルファベットを取得することで暗号化される。

復号化は反対の処理を行うだけで良いので以下の図となる。

![イメージ図](/img/svg/Cryptography/classical-cipher/caesar-cipher/caesar-cipher-2.drawio.svg "シーザー暗号 復号化")

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="caesar-cipher.py"
def caesar_cipher(input_text: str, direction: str = "encryption"):
    input_text = input_text.upper()
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    rot = 3
    rot_text = base[rot:] + base[:rot]
    ret_text = []
    if direction == "decryption":
        rot_text, base = base, rot_text
    for i in range(len(input_text)):
        ret_text.append(rot_text[base.index(input_text[i])])
    return "".join(ret_text)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="caesar-cipher.cpp"
string caesar_cipher(string input_text, string direction = "encryption")
{
  transform(input_text.begin(), input_text.end(), input_text.begin(), ::toupper);
  string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  int rot = 3;
  string rot_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  rotate(rot_text.begin(), rot_text.begin() + rot, rot_text.end());
  if (direction == "decryption")
    swap(base, rot_text);
  string ret_text;
  for (int i = 0; i < input_text.size(); ++i)
  {
    ret_text += rot_text[base.find(input_text[i])];
  }
  return ret_text;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="caesar-cipher.cs"
private static String caesar_cipher(String input_text, String direction = "encryption")
{
    input_text.ToUpper();
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int rot = 3;
    String rot_text = _base.Substring(rot) + _base.Substring(0, rot);
    if (direction == "decryption")
    {
        (_base, rot_text) = (rot_text, _base);
    }
    StringBuilder ret_text = new StringBuilder();
    for (int i = 0; i < input_text.Length; ++i)
    {
        ret_text.Append(rot_text[_base.IndexOf(input_text[i])]);
    }
    return ret_text.ToString();
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="caesar-cipher.rs"
fn  caesar_cipher_encryption(input_text:String) -> String {
    let input_text_upper = input_text.to_uppercase();
    let base = String::from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let rot = 3;
    let rot_text = (&base[rot..]).to_string() + &base[..rot].to_string();
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(rot_text.chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}

fn  caesar_cipher_decryption(input_text:String) -> String {
    let input_text_upper = input_text.to_uppercase();
    let base = String::from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let rot = 3;
    let rot_text = (&base[rot..]).to_string() + &base[..rot].to_string();
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  rot_text.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(base.chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}
```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="caesar-cipher.js"
function caesarCipher(inputText, direction = "encryption") {
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
```

  </TabItem>
</Tabs>

### 動作

```jsx live
function CaesarCipher(props) {
  // 暗号化 or 復号化する文字列
  const inputText = "apple";

  // encryption or decryption
  const direction = "encryption";

  // 以下は特に変更しなくて良い
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rot = 3;
  const rotText = base.substring(rot) + base.substring(0, rot);
  function caesarCipher(inputText, direction = "encryption") {
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
          : caesarCipher(inputText, direction)}
        <span class="mrel" style={{ padding: "5px" }}>
          {direction === "encryption" ? "→" : "←"}
        </span>
        {direction === "encryption"
          ? caesarCipher(inputText, direction)
          : inputText}
      </p>
    </>
  );
}
```
