---
title: シフト暗号
sidebar_label: シフト暗号
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## シフト暗号とは

[シーザー暗号](/docs/Cryptography/classical-cipher/caesar-cipher)ではシフト幅が 3 で固定であった。これを任意の値にしたものを`シフト暗号`という

例えば、APPLE という単語をシフト暗号(rot = 4)アルゴリズムを使うと`ETTPI`となる。

![イメージ図](/img/svg/Cryptography/classical-cipher/shift-cipher/shift-cipher-1.drawio.svg "シフト暗号 暗号化")

今回の例では 4 つずつずらすので`EFGHIJKLMNOPQRSTUVWXYZABCD`となり、元の文字の場所のアルファベットを取得することで暗号化される。

復号化は反対の処理を行うだけで良いので以下の図となる。

![イメージ図](/img/svg/Cryptography/classical-cipher/shift-cipher/shift-cipher-2.drawio.svg "シフト暗号 復号化")

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="shift-cipher.py"
def shift_cipher(input_text: str, rot: int, direction: str = "encryption"):
    input_text = input_text.upper()
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
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

```cpp title="shift-cipher.cpp"
string ShiftCipher(string inputText,int rot, string direction = "encryption")
{
  transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);
  string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  string rotText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  rotate(rotText.begin(), rotText.begin() + rot, rotText.end());
  if (direction == "decryption")
    swap(base, rotText);
  string retText;
  for (int i = 0; i < inputText.size(); ++i)
  {
    retText += rotText[base.find(inputText[i])];
  }
  return retText;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="shift-cipher.cs"
private static String ShiftCipher(String inputText, int rot, String direction = "encryption")
{
    inputText.ToUpper();
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    String rotText = _base.Substring(rot) + _base.Substring(0, rot);
    if (direction == "decryption")
    {
        (_base, rotText) = (rotText, _base);
    }
    StringBuilder retText = new StringBuilder();
    for (int i = 0; i < inputText.Length; ++i)
    {
        retText.Append(rotText[_base.IndexOf(inputText[i])]);
    }
    return retText.ToString();
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="caesar-cipher.rs"
fn  shift_cipher_encryption(input_text:String, rot:u8) -> String {
    let input_text_upper = input_text.to_uppercase();
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rot_text = (&base[rot..]).to_string() + &base[..rot].to_string();
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(rot_text.chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}

fn  shift_cipher_decryption(input_text:String, rot:u8) -> String {
    let input_text_upper = input_text.to_uppercase();
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

```js title="shift-cipher.js"
function shiftCipher(inputText, rot, direction = "encryption") {
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rotText = base.substring(rot) + base.substring(0, rot);
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
