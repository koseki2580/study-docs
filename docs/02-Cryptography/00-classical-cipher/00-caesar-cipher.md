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
import FontColor from "@site/src/components/Custom/FontColor"
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
def caesar_cipher(input_text: str, to_direction: str = "cipher"):
    input_text = input_text.upper()
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    rot = 3
    rot_text = base[rot:] + base[:rot]
    ret_text = []
    if to_direction == "plain":
        rot_text, base = base, rot_text
    for i in range(len(input_text)):
        ret_text.append(rot_text[base.index(input_text[i])])
    return "".join(ret_text)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="caesar-cipher.cpp"
string caesar_cipher(string input_text, string to_direction = "cipher")
{
  transform(input_text.begin(), input_text.end(), input_text.begin(), ::toupper);
  string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  int rot = 3;
  string rot_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  rotate(rot_text.begin(), rot_text.begin() + rot, rot_text.end());
  if (to_direction == "plain")
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
private static String caesar_cipher(String input_text, String to_direction = "cipher")
{
    input_text.ToUpper();
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int rot = 3;
    String rot_text = _base.Substring(rot) + _base.Substring(0, rot);
    if (to_direction == "plain")
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
fn  caesar_cipher_to_cipher(input_text:String) -> String {
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

fn  caesar_cipher_to_plain(input_text:String) -> String {
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
</Tabs>
