---
title: 多表式暗号
sidebar_label: 多表式暗号
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 多表式暗号とは

`多表式暗号`では、平文を n 文字ごとにブロック化し、各ブロック内の文字に対して異なる換字キーを適用する。
これにより、同じ文字が異なるブロック内で異なる方法で暗号化され、解読が難しくなります。

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="polyalphabetic-substitution-cipher.py"
import random
def generate_polyalphabetic_substitution_table(size: int):
    base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = []
    table = [i for i in base]
    for i in range(size):
        random.shuffle(table)
        result.append("".join(table))
    return result


def polyalphabetic_substitution_cipher(input_text: str, transposition_table: list[str], direction: str = "encryption"):
    input_text = input_text.upper()
    mod = len(transposition_table)
    base = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"] * mod

    result = []
    if direction == "decryption":
        transposition_table, base = base, transposition_table
    for i in range(len(input_text)):
        result.append(transposition_table[i % mod]
                      [base[i % mod].index(input_text[i])])
    return "".join(result)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="polyalphabetic-substitution-cipher.cpp"

vector<string> generatePolyalphabeticSubstitutionTable(int size)
{
    string base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    vector<char> table(base.begin(), base.end());
    vector<string> result;
    random_device getRandDev;

    std::mt19937_64 getRandMt(getRandDev());
    for (int i = 0; i < size; ++i)
    {

        std::shuffle(table.begin(), table.end(), getRandMt);
        string tempResult(table.begin(), table.end());
        result.push_back(tempResult);
    }

    return result;
}
string polyalphabeticSubstitutionCipher(string inputText, vector<string> transpositionTable, string direction = "encryption")
{
    transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);
    int mod = transpositionTable.size();
    vector<string> base(mod, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (direction == "decryption")
        swap(base, transpositionTable);
    string retText;
    for (int i = 0; i < inputText.size(); ++i)
    {
        retText += transpositionTable[i % mod][base[i % mod].find(inputText[i])];
    }
    return retText;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="polyalphabetic-substitution-cipher.cs"
private static String[] GeneratePolyalphabeticSubstitutionTable(int size)
{
    String _base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    char[] chars = _base.ToCharArray();
    String[] result = new String[size];
    for (int i = 0; i < size; ++i)
    {
        result[i] = new String(chars.OrderBy(i => Guid.NewGuid()).ToArray());
    }
    return result;
}

private static String PolyalphabeticSubstitutionCipher(
    String inputText,
    String[] transpositionTable,
    String direction = "encryption"
)
{
    inputText.ToUpper();
    int mod = transpositionTable.Length;
    String[] _base = new string[mod];
    for (int i = 0; i < mod; ++i)
    {
        _base[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (direction == "decryption")
    {
        (_base, transpositionTable) = (transpositionTable, _base);
    }
    StringBuilder retText = new StringBuilder();
    for (int i = 0; i < inputText.Length; ++i)
    {
        retText.Append(transpositionTable[i % mod][_base[i % mod].IndexOf(inputText[i])]);
    }
    return retText.ToString();
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

:::note
rand クレートを使用しています。
:::

```rust title="polyalphabetic-substitution-cipher.rs"
fn generate_polyalphabetic_substitution_table(size:usize) -> Vec<String>{
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mut chars: Vec<char> = base.chars().collect();
    let mut result: Vec<String> = vec![];
    for i in 0..size{
        chars.shuffle(&mut rand::thread_rng());
        result.push(chars.iter().collect());
    }
    result
}

fn  polyalphabetic_substitution_cipher_to_encryption(input_text:String, transposition_table: Vec<String> ) -> String {
    let input_text_upper = input_text.to_uppercase();
    let _mod = transposition_table.len();
    let base = vec!["ABCDEFGHIJKLMNOPQRSTUVWXYZ"; _mod];
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  base[i % _mod].find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(transposition_table[i % _mod].chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}

fn  polyalphabetic_substitution_cipher_to_decryption(input_text:String, transposition_table: Vec<String>) -> String {
    let input_text_upper = input_text.to_uppercase();
    let _mod = transposition_table.len();
    let base = vec!["ABCDEFGHIJKLMNOPQRSTUVWXYZ"; _mod];
    let mut ret_text = String::new();
    for i in 0..input_text_upper.len(){
        let pos =  transposition_table[i % _mod].find(input_text_upper.chars().nth(i).unwrap()).unwrap();
        ret_text.push(base[i % _mod].chars().nth(pos).unwrap());
    }
    ret_text.to_string()
}
```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="polyalphabetic-substitution-cipher.js"
//Fisher-Yatesシャッフルアルゴリズム
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    // 要素の交換
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generatePolyalphabeticSubstitutionTable(size) {
  let result = [];
  for (let i = 0; i < size; ++i) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    shuffleArray(chars);
    result.push(chars);
  }
  return result;
}
function polyalphabeticSubstitutionCipher(
  inputText,
  transpositionTable,
  direction = "encryption"
) {
  inputText = inputText.toUpperCase();
  const mod = transpositionTable.length;
  let retText = "";
  let _base = new Array(mod).fill("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let _transpositionTable = transpositionTable;
  if (direction == "decryption") {
    _transpositionTable = new Array(mod).fill("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    _base = transpositionTable;
  }

  for (let i = 0; i < inputText.length; ++i) {
    retText +=
      _transpositionTable[i % mod][_base[i % mod].indexOf(inputText[i])];
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

  // 変換テーブルの個数
  const size = 3;

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

  function generatePolyalphabeticSubstitutionTable(size) {
    let result = [];
    for (let i = 0; i < size; ++i) {
      const chars = base.split("");
      shuffleArray(chars);
      result.push(chars);
    }
    return result;
  }
  function polyalphabeticSubstitutionCipher(
    inputText,
    transpositionTable,
    direction = "encryption"
  ) {
    inputText = inputText.toUpperCase();
    const mod = transpositionTable.length;
    let retText = "";
    let _base = new Array(mod).fill(base);
    let _transpositionTable = transpositionTable;
    if (direction == "decryption") {
      _transpositionTable = new Array(mod).fill(base);
      _base = transpositionTable;
    }

    for (let i = 0; i < inputText.length; ++i) {
      retText +=
        _transpositionTable[i % mod][_base[i % mod].indexOf(inputText[i])];
    }
    return retText;
  }

  // React
  const [table, setTable] = useState(undefined);
  const [cipher, setCipher] = useState(undefined);

  // tableが生成された後に暗号化を行う
  useEffect(() => {
    if (!table) return;
    const cipher = polyalphabeticSubstitutionCipher(
      inputText,
      table,
      "encryption"
    );
    setCipher(cipher);
  }, [table]);
  // 読み込み時に一度だけ呼び出す
  useEffect(() => {
    // 読み込みできてから呼びだす
    setTable(generatePolyalphabeticSubstitutionTable(size));
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
                {polyalphabeticSubstitutionCipher(cipher, table, "decryption")}
              </p>
            </div>
          </>
        )}
      </div>
      <h3>変換テーブル</h3>
      {table === undefined || cipher === undefined ? (
        /* 変換テーブルを生成してるかつ暗号化済みであれば表示 */ <></>
      ) : (
        table.map((val) => {
          return <p>{val}</p>;
        })
      )}
    </>
  );
}
```
