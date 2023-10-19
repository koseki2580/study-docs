---
title: ヴィジュネル暗号
sidebar_label: ヴィジュネル暗号
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## ヴィジュネル暗号とは

`ヴィジュネル暗号`は[多表式暗号](/docs/Cryptography/classical-cipher/polyalphabetic-substitution-cipher)の一種であり、ヴィジュネル表(下図)と言う表を使って暗号化を行う暗号方式。
![ヴィジュネル表](/img/svg/Cryptography/classical-cipher/vigenere-cipher/vigenere-cipher-1.drawio.svg)

赤色エリアの文字が平文を表し、青色エリアの文字が鍵に対応している。緑色エリアの文字が暗号化後の文字を表している。

例えば、`APPLE`を暗号化したいとする。`RINGO`を鍵とした場合、平文の`A`と鍵の`R`で合致する`R`が暗号化後の文字となる。

![ヴィジュネル暗号1](/img/svg/Cryptography/classical-cipher/vigenere-cipher/vigenere-cipher-2.drawio.svg)

続けて、`P`と`I`, `P`と`N`, `L`と`G`, `E`と`O`で暗号文字を導出する。

![ヴィジュネル暗号2](/img/svg/Cryptography/classical-cipher/vigenere-cipher/vigenere-cipher-3.drawio.svg)

平文`APPLE`と鍵`RINGO`で暗号化した結果、暗号文`RXCRS`が得ることができる。

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="vigenere-cipher.py"
import random
def generate_key(size: int):
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = []
    for _ in range(size):
        result.append(base[random.randint(0, 26)])
    return "".join(result)


def vigenere_cipher(input_text: str, key: str, direction: str = "encryption"):
    input_text = input_text.upper()
    key = key.upper()
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    mod = len(key)

    result = []
    dx = 1
    if direction == "decryption":
        dx = -1
    for i in range(len(input_text)):
        result.append(
            base[(dx * base.find(key[i % mod]) + base.find(input_text[i])) % 26])
    return "".join(result)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="vigenere-cipher.cpp"
string generateKey(int size)
{
    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string result = "";
    std::random_device rnd;
    std::mt19937 mt(rnd());
    uniform_int_distribution<> rand26(0, 25);
    for (int i = 0; i < size; ++i)
        result += base[rand26(mt)];

    return result;
}

string vigenereCipher(string inputText, string key, string direction = "encryption")
{
    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);
    transform(key.begin(), key.end(), key.begin(), ::toupper);

    int mod = key.size();

    string result = "";
    int dx = 1;
    if (direction == "decryption")
        dx = -1;
    for (int i = 0; i < inputText.size(); ++i)
    {
        result += base[(dx * base.find(key[i % mod]) + base.find(inputText[i]) + 26) % 26];
    }
    return result;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="vigenere-cipher.cs"
private static String GenerateKey(int size)
{
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rand = new Random();
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < size; ++i)
    {
        result.Append(_base[rand.Next(0, 26)]);
    }
    return result.ToString();
}

private static String VigenereCipher(
    String inputText,
    String key,
    String direction = "encryption"
)
{
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    inputText.ToUpper();
    key.ToUpper();
    int mod = key.Length;
    StringBuilder result = new StringBuilder();
    int dx = 1;
    if (direction == "decryption")
        dx = -1;
    for (int i = 0; i < inputText.Length; ++i)
    {
        result.Append(
            _base[
                (dx * _base.IndexOf(key[i % mod]) + _base.IndexOf(inputText[i]) + 26) % 26
            ]
        );
    }
    return result.ToString();
}

```

  </TabItem>
  <TabItem value="Rust" label="Rust">

:::note
rand クレートを使用しています。
:::

```rust title="vigenere-cipher.rs"
use rand::Rng;

fn generate_key(size:usize) -> String{
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mut result = String::new();
    let mut rng = rand::thread_rng();
    for i in 0..size{
        let  rand = rng.gen_range(0..26);
        result += &base[rand..rand+1];
    }
    result
}

fn vigenere_cipher_to_encryption(input_text:String, key:String) -> String{
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let  input_text_upper:String  = input_text.to_uppercase();
    let key_upper: String = key.to_uppercase();
    let _mod = key.len();
    let mut result = String::new();
    for i in 0..input_text.len(){
        let pos_ =  base.find(key_upper.chars().nth(i % _mod).unwrap()).unwrap();
        let pos__ = base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        let pos = (pos_ + pos__) % 26;
        result += &base[pos..pos+1];
    }
    result
}

fn vigenere_cipher_to_decryption(input_text:String, key:String) -> String{
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let  input_text_upper:String  = input_text.to_uppercase();
    let key_upper: String = key.to_uppercase();
    let _mod = key.len();
    let mut result = String::new();
    for i in 0..input_text.len(){
        let pos_ =  base.find(key_upper.chars().nth(i % _mod).unwrap()).unwrap();
        let pos__ = base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        let pos = ( 26 + pos__  - pos_) % 26;
        result += &base[pos..pos+1];
    }
    result
}

```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="vigenere-cipher.js"
// 指定範囲内からランダムで数字を生成 [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateKey(size) {
  let result = "";
  for (let i = 0; i < size; ++i) {
    result += base[getRandomInt(0, 26)];
  }
  return result;
}

function vigenereCipher(inputText, key, direction = "encryption") {
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  inputText = inputText.toUpperCase();
  key = key.toUpperCase();
  const mod = key.length;
  let dx = 1;
  if (direction == "decryption") dx = -1;
  result = "";
  for (let i = 0; i < inputText.length; ++i) {
    result +=
      base[
        (dx * base.indexOf(key[i % mod]) + base.indexOf(inputText[i]) + 26) % 26
      ];
  }
  return result;
}
```

  </TabItem>
</Tabs>

### 動作

```jsx live
function SimpleSubstitutionCipher(props) {
  // 暗号化 or 復号化する文字列
  const inputText = "APPLE";

  // encryption or decryption
  const direction = "encryption";

  // 手動で鍵を指定する
  const defaultKey = "RINGO";

  // defaultKeyがnullの場合に作成する鍵の長さ
  const size = 3;

  // 以下は特に変更しなくて良い
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 指定範囲内からランダムで数字を生成 [min, max]
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateKey(size) {
    let result = "";
    for (let i = 0; i < size; ++i) {
      result += base[getRandomInt(0, 26)];
    }
    return result;
  }

  function vigenereCipher(inputText, key, direction = "encryption") {
    inputText = inputText.toUpperCase();
    key = key.toUpperCase();
    const mod = key.length;
    let dx = 1;
    if (direction == "decryption") dx = -1;
    result = "";
    for (let i = 0; i < inputText.length; ++i) {
      result +=
        base[
          (dx * base.indexOf(key[i % mod]) + base.indexOf(inputText[i]) + 26) %
            26
        ];
    }
    return result;
  }

  // React
  const [key, setKey] = useState(undefined);
  const [cipher, setCipher] = useState(undefined);

  // tableが生成された後に暗号化を行う
  useEffect(() => {
    if (!key) return;
    const cipher = vigenereCipher(inputText, key, "encryption");
    setCipher(cipher);
  }, [key]);
  // 読み込み時に一度だけ呼び出す
  useEffect(() => {
    // 読み込みできてから呼びだす
    if (!defaultKey) {
      setKey(generateKey(size));
    } else {
      setKey(defaultKey);
    }
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h3>元の文字列</h3>
          <p>{inputText}</p>
        </div>
        {key === undefined || cipher === undefined ? (
          /* 変換テーブルを生成してるかつ暗号化済みであれば表示 */ <></>
        ) : (
          <>
            <span
              className="mrel"
              style={{ padding: "5px", margin: "auto 0px" }}
            >
              →
            </span>
            <div>
              <h3>暗号化</h3>
              <p>{cipher}</p>
            </div>
            <span
              className="mrel"
              style={{ padding: "5px", margin: "auto 0px" }}
            >
              →
            </span>
            <div>
              <h3>復号化</h3>
              <p style={{ padding: "1px", margin: "2px" }}>
                {vigenereCipher(cipher, key, "decryption")}
              </p>
            </div>
          </>
        )}
      </div>
      <h3>鍵</h3>
      {key === undefined || cipher === undefined ? (
        /* 変換テーブルを生成してるかつ暗号化済みであれば表示 */ <></>
      ) : (
        <p>{key}</p>
      )}
    </>
  );
}
```
