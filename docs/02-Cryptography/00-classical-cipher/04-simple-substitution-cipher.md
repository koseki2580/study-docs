---
title: 単一換字式暗号
sidebar_label: 単一換字式暗号
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 単一換字式暗号とは

`換字式暗号`とは平文の 1 文字または数文字単位で別の文字に対応させて変換する暗号のことを言う。
単一とあるので変換表を 1 つだけ使用して暗号化を行う。

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="simple-substitution-cipher.py"
import random
def generate_simple_substitution_table():
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    table = [i for i in base]
    random.shuffle(table)
    return "".join(table)


def simple_substitution_cipher(input_text: str, transposition_table: str, direction: str = "encryption"):
    input_text = input_text.upper()
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    result = []
    if direction == "decryption":
        transposition_table, base = base, transposition_table
    for i in range(len(input_text)):
        result.append(transposition_table[base.index(input_text[i])])
    return "".join(result)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="simple-substitution-cipher.cpp"

string generateSimpleSubstitutionTable()
{
    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    vector<char> table(base.begin(), base.end());

    random_device get_rand_dev;

    std::mt19937_64 get_rand_mt(get_rand_dev());
    std::shuffle(table.begin(), table.end(), get_rand_mt);
    string result(table.begin(), table.end());

    return result;
}
string simpleSubstitutionCipher(string inputText, string transpositionTable, string direction = "encryption")
{
    transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);
    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (direction == "decryption")
        swap(base, transpositionTable);
    string retText;
    for (int i = 0; i < inputText.size(); ++i)
    {
        retText += transpositionTable[base.find(inputText[i])];
    }
    return retText;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="simple-substitution-cipher.cs"
private static String GenerateSimpleSubstitutionTable()
{
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    char[] chars = _base.ToCharArray();
    return new String(chars.OrderBy(i => Guid.NewGuid()).ToArray());
}

private static String SimpleSubstitutionCipher(
    String inputText,
    String transpositionTable,
    String direction = "encryption"
)
{
    inputText.ToUpper();
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (direction == "decryption")
    {
        (_base, transpositionTable) = (transpositionTable, _base);
    }
    StringBuilder retText = new StringBuilder();
    for (int i = 0; i < inputText.Length; ++i)
    {
        retText.Append(transpositionTable[_base.IndexOf(inputText[i])]);
    }
    return retText.ToString();
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

:::note
rand クレートを使用しています。
:::

```rust title="simple-substitution-cipher.rs"
fn generate_simple_substitution_table() -> String{
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mut chars: Vec<char> = base.chars().collect();
    chars.shuffle(&mut rand::thread_rng());

    chars.iter().collect()
}

fn  simple_substitution_cipher_to_encryption(input_text:String, transposition_table:String ) -> String {
    let input_text_upper = input_text.to_uppercase();
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  base.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(transposition_table.chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}

fn  simple_substitution_cipher_to_decryption(input_text:String, transposition_table:String) -> String {
    let input_text_upper = input_text.to_uppercase();
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  transposition_table.find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(base.chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}
```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="simple-substitution-cipher.js"
//Fisher-Yatesシャッフルアルゴリズム
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    // 要素の交換
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateSimpleSubstitutionTable() {
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const chars = base.split("");
  shuffleArray(chars);
  return chars;
}

function simpleSubstitutionCipher(
  inputText,
  transpositionTable,
  direction = "encryption"
) {
  inputText = inputText.toUpperCase();
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let retText = "";
  let _base = base;
  let _transpositionTable = transpositionTable;
  if (direction == "decryption") {
    _transpositionTable = base;
    _base = transpositionTable;
  }
  for (let i = 0; i < inputText.length; ++i) {
    retText += _transpositionTable[_base.indexOf(inputText[i])];
  }
  return retText;
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

  // 以下は特に変更しなくて良い
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //Fisher-Yatesシャッフルアルゴリズム
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      // 要素の交換
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function generateSimpleSubstitutionTable() {
    const chars = base.split("");
    shuffleArray(chars);
    return chars;
  }
  function simpleSubstitutionCipher(
    inputText,
    transpositionTable,
    direction = "encryption"
  ) {
    inputText = inputText.toUpperCase();
    let retText = "";
    let _base = base;
    let _transpositionTable = transpositionTable;
    if (direction == "decryption") {
      _transpositionTable = base;
      _base = transpositionTable;
    }
    for (let i = 0; i < inputText.length; ++i) {
      retText += _transpositionTable[_base.indexOf(inputText[i])];
    }
    return retText;
  }

  // React
  const [table, setTable] = useState(undefined);
  const [cipher, setCipher] = useState(undefined);

  // tableが生成された後に暗号化を行う
  useEffect(() => {
    if (!table) return;
    const cipher = simpleSubstitutionCipher(inputText, table, "encryption");
    setCipher(cipher);
  }, [table]);
  // 読み込み時に一度だけ呼び出す
  useEffect(() => {
    // 読み込みできてから呼びだす
    setTable(generateSimpleSubstitutionTable());
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
        {table === undefined || cipher === undefined ? (
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
                {simpleSubstitutionCipher(cipher, table, "decryption")}
              </p>
            </div>
          </>
        )}
      </div>
      <h3>変換テーブル</h3>
      {table === undefined || cipher === undefined ? (
        /* 変換テーブルを生成してるかつ暗号化済みであれば表示 */ <></>
      ) : (
        <p>{table}</p>
      )}
    </>
  );
}
```
