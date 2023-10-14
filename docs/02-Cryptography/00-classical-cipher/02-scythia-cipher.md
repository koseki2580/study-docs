---
title: スキュタレー暗号
sidebar_label: スキュタレー暗号
draft: false
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
import random

def scythia_cipher_to_encrypt(input_text: str, width: int = 3):
    input_text = input_text.upper()
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    encrypt_box = [[] for _ in range(len(input_text))]
    for i in range(len(input_text)):
        encrypt_box[i] = input_text[i]
        for _ in range(1, width):
            encrypt_box[i] += base[random.randint(0, 25)]
    rotate_count = random.randint(0, width)
    for i in range(len(encrypt_box)):
        encrypt_box[i] = encrypt_box[i][rotate_count:] + \
            encrypt_box[i][:rotate_count]
    return "".join(encrypt_box)


def scythia_cipher_to_decrypt(input_text: str, width: int = 3):
    decrypt_box = [[] for _ in range(width)]
    for i in range(len(input_text)):
        decrypt_box[i % width].append(input_text[i])
    for i in range(width):
        decrypt_box[i] = "".join(decrypt_box[i])
    return decrypt_box
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="scythia-cipher.cpp"
string ScythiaCipherToEncrypt(string inputText, int width = 3)
{
    transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);
    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    std::random_device rnd;
    std::mt19937 mt(rnd());
    uniform_int_distribution<> rand26(0, 25);
    vector<string> encryptBox(inputText.size(), "");
    for (int i = 0; i < inputText.size(); ++i)
    {
        encryptBox[i] += inputText[i];
        for (int j = 1; j < width; ++j)
        {
            encryptBox[i] += base[rand26(mt)];
        }
    }
    uniform_int_distribution<> randRotate(0, width);
    int rotateCount = randRotate(mt);
    for (int i = 0; i < encryptBox.size(); ++i)
    {
        rotate(encryptBox[i].begin(), encryptBox[i].begin() + rotateCount, encryptBox[i].end());
    }
    std::ostringstream os;
    std::copy(encryptBox.begin(), encryptBox.end(), std::ostream_iterator<std::string>(os));

    return os.str();
}

vector<string> ScythiaCipherToDecrypt(string inputText, int width = 3)
{
    vector<string> decryptBox(width, "");
    for (int i = 0; i < inputText.size(); ++i)
    {
        decryptBox[i % width] += inputText[i];
    }

    return decryptBox;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="scythia-cipher.cs"
static private string ScythiaCipherToEncrypt(string inputText, int width = 3)
{
    inputText.ToUpper();
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rand = new Random();
    List<StringBuilder> encryptBox = new List<StringBuilder>();
    for (int i = 0; i < inputText.Length; ++i)
    {
        StringBuilder item = new StringBuilder();
        item.Append(inputText[i]);
        encryptBox.Add(item);
        for (int j = 1; j < width; ++j)
        {
            encryptBox[i].Append(_base[rand.Next(0, 26)]);
        }
    }
    int rotateCount = rand.Next(0, width);
    StringBuilder ret_string = new StringBuilder();
    for (int i = 0; i < inputText.Length; ++i)
    {
        String beforeRotate = encryptBox[i].ToString();
        ret_string.Append(
            beforeRotate.Substring(rotateCount) + beforeRotate.Substring(0, rotateCount)
        );
    }
    return ret_string.ToString();
}

static private string[] ScythiaCipherToDecrypt(string inputText, int width = 3)
{
    StringBuilder[] decryptBox = new StringBuilder[width];
    for (int i = 0; i < width; ++i)
    {
        decryptBox[i] = new StringBuilder();
    }
    for (int i = 0; i < inputText.Length; ++i)
    {
        decryptBox[i % width].Append(inputText[i]);
    }
    string[] ret_string = new string[width];
    for (int i = 0; i < width; ++i)
    {
        ret_string[i] = decryptBox[i].ToString();
    }
    return ret_string;
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="scythia-cipher.rs"
fn scythia_cipher_to_encrypt(input_text:String, width:u8) -> String{
    let  input_text_upper: Vec<char> = input_text.to_uppercase().chars().collect();
    let base =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mut rng = rand::thread_rng();
    let mut encrypt_box: Vec<String> =  Vec::new();
    for i in 0..input_text_upper.len(){
        encrypt_box.push(input_text_upper[i].to_string());
        for _ in 1..width{
            let  rand = rng.gen_range(0..26);
            encrypt_box[i] += &base[rand..rand+1];
        }
    }
    let mut ret_string = String::new();
    let rotate_count = rng.gen_range(0..width) as usize;
    for i in 0..encrypt_box.len(){
        let before_rotate = encrypt_box.get(i as usize).unwrap();
        ret_string += &((&before_rotate[rotate_count..]).to_string() + &before_rotate[..rotate_count].to_string());
    }
    ret_string
}

fn scythia_cipher_to_decrypt(input_text:String, width:u8) -> Vec<String>{

    let mut decrypt_box: Vec<String> =  vec![String::new(); width as usize];
    for i in 0..input_text.len(){
        decrypt_box[i % width as usize] += &input_text[i..i+1];
    }
    decrypt_box
}
```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="scythia-cipher.js"
// 指定範囲内からランダムで数字を生成 [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function ScythiaCipherToEncrypt(inputText, width = 3) {
  inputText = inputText.toUpperCase();
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let encryptBox = [];
  for (let i = 0; i < inputText.length; ++i) {
    encryptBox.push(inputText[i]);
    for (let j = 1; j < width; ++j) {
      encryptBox[i] += base[getRandomInt(0, 26)];
    }
  }
  let retString = "";
  let rotateCount = getRandomInt(0, width);
  for (let i = 0; i < inputText.length; ++i) {
    retString +=
      encryptBox[i].substring(rotateCount) +
      encryptBox[i].substring(0, rotateCount);
  }
  return retString;
}
function ScythiaCipherToDecrypt(inputText, width = 3) {
  let decryptBox = new Array(width).fill("");
  for (let i = 0; i < inputText.length; ++i) {
    decryptBox[i % width] += inputText[i];
  }
  return decryptBox;
}
```

  </TabItem>
</Tabs>

### 動作

```jsx live
function ScythiaCipher(props) {
  // 暗号化 or 復号化する文字列
  const inputText = "APPLE";

  // 文字列を格納する面の個数
  const width = 3;

  // 以下は特に変更しなくて良い
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 指定範囲内からランダムで数字を生成 [min, max]
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function ScythiaCipherToEncrypt(inputText, width = 3) {
    inputText = inputText.toUpperCase();
    let encryptBox = [];
    for (let i = 0; i < inputText.length; ++i) {
      encryptBox.push(inputText[i]);
      for (let j = 1; j < width; ++j) {
        encryptBox[i] += base[getRandomInt(0, 26)];
      }
    }
    let retString = "";
    let rotateCount = getRandomInt(0, width);
    for (let i = 0; i < inputText.length; ++i) {
      retString +=
        encryptBox[i].substring(rotateCount) +
        encryptBox[i].substring(0, rotateCount);
    }
    return retString;
  }
  function ScythiaCipherToDecrypt(inputText, width = 3) {
    let decryptBox = new Array(width).fill("");
    for (let i = 0; i < inputText.length; ++i) {
      decryptBox[i % width] += inputText[i];
    }
    return decryptBox;
  }
  let cipher = ScythiaCipherToEncrypt(inputText, width);
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "align-items": "flex-start",
        "justify-content": "space-evenly",
      }}
    >
      <div>
        <h3>元の文字列</h3>
        <p>{inputText}</p>
      </div>
      <span class="mrel" style={{ padding: "5px", margin: "auto 0px" }}>
        →
      </span>
      <div style={{ "overflow-x": "scroll" }}>
        <h3>暗号化</h3>
        <p>{cipher}</p>
      </div>
      <span class="mrel" style={{ padding: "5px", margin: "auto 0px" }}>
        →
      </span>
      <div>
        <h3>復号化</h3>
        {ScythiaCipherToDecrypt(cipher, width).map((data) => (
          <p style={{ padding: "1px", margin: "2px" }}>{data}</p>
        ))}
      </div>
    </div>
  );
}
```
