---
title: 転置式暗号
sidebar_label: 転置式暗号
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム, 古典暗号]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 転置式暗号とは

平文の順番を入れ替える暗号方式を`転置式暗号`という。
平文を一定のブロックに分けて、順番を入れ替えていく。ブロックの長さを n とすると平文の文字の数が n の場合数出ない場合は綺麗にブロック分けができない。余ったブロックには何らかの文字を入れパディングする方法やそのままにして順番を入れ替えない方法等がある。
パディングする場合は単純にパティングしてしまうとパティング文字以外の移動位置がバレてしまう可能性があるので注意が必要である。

### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="transposition-cipher.py"
import random
def generate_transposition_table(size: int):
    table = [i for i in range(size)]
    random.shuffle(table)
    return table


def transposition_cipher(input_text: str, transposition_table: list[int], direction: str = "encryption"):
    input_text = input_text.upper()
    result = []
    size = len(transposition_table)
    if direction == "decryption":
        temp_table = [0] * size
        for i in range(size):
            temp_table[transposition_table[i]] = i
        transposition_table = temp_table

    for i in range(0, len(input_text) - size+1, size):
        temp_text = ""
        for j in range(size):
            temp_text += input_text[i + transposition_table[j]]
        result.append(temp_text)
    if len(input_text) % size != 0:
        result.append(
            input_text[-(len(input_text) % size):]
        )
    return "".join(result)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="transposition-cipher.cpp"
vector<int> generateTranspositionTable(int size)
{
    vector<int> table;
    for (int i = 0; i < size; ++i)
        table.push_back(i);
    std::random_device get_rand_dev;

    std::mt19937_64 get_rand_mt(get_rand_dev());
    std::shuffle(table.begin(), table.end(), get_rand_mt);
    return table;
}

string transpositionCipher(string inputText, vector<int> transpositionTable, string direction = "encryption")
{
    transform(inputText.begin(), inputText.end(), inputText.begin(), ::toupper);
    vector<string> result;
    int size = transpositionTable.size();
    if (direction == "decryption")
    {
        vector<int> tempTable(size, 0);
        for (int i = 0; i < size; ++i)
            tempTable[transpositionTable[i]] = i;
        swap(transpositionTable, tempTable);
    }
    for (int i = 0; i < inputText.size() - size + 1; i += size)
    {
        string tempText = "";
        for (int j = 0; j < size; ++j)
            tempText += inputText[i + transpositionTable[j]];
        result.push_back(tempText);
    }
    if (inputText.size() % size != 0)
    {
        result.push_back(inputText.substr(inputText.size() - (inputText.size() % size)));
    }
    std::ostringstream os;
    std::copy(result.begin(), result.end(), std::ostream_iterator<std::string>(os));
    return os.str();
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="transposition-cipher.cs"
static private int[] GenerateTranspositionTable(int size)
{
    int[] table = new int[size];
    for (int i = 0; i < size; ++i)
    {
        table[i] = i;
    }
    return table.OrderBy(i => Guid.NewGuid()).ToArray();
}

static private string TranspositionCipher(
    string inputText,
    int[] transpositionTable,
    string direction = "encryption"
)
{
    inputText.ToUpper();
    List<StringBuilder> result = new List<StringBuilder>();
    int size = transpositionTable.Length;
    if (direction == "decryption")
    {
        int[] tempTable = new int[size];
        for (int i = 0; i < size; ++i)
        {
            tempTable[transpositionTable[i]] = i;
        }
        (transpositionTable, tempTable) = (tempTable, transpositionTable);
    }
    for (int i = 0; i < inputText.Length - size + 1; i += size)
    {
        StringBuilder tempText = new StringBuilder();
        for (int j = 0; j < size; ++j)
        {
            tempText.Append(inputText[i + transpositionTable[j]]);
        }
        result.Add(tempText);
    }
    if (inputText.Length % size != 0)
    {
        result.Add(
            new StringBuilder(
                inputText.Substring(inputText.Length - (inputText.Length % size))
            )
        );
    }
    StringBuilder ret_string = new StringBuilder();
    for (int i = 0; i < result.Count; ++i)
    {
        ret_string.Append(result[i]);
    }
    return ret_string.ToString();
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

:::note
rand クレートを使用しています。
:::

```rust title="transposition-cipher.rs"
use rand::seq::SliceRandom;

fn  generate_transposition_table(size:usize) -> Vec<usize>{
    let mut table = vec![0; size];
    for i in 0..size{
        table[i] = i;
    }
    let mut rng = rand::thread_rng();
    table.shuffle(&mut rng);
    table
}
fn transposition_cipher_to_encrypt(input_text:String, transposition_table:Vec<usize>) -> String{
    let  input_text_upper = input_text.to_uppercase();
    let mut result:Vec<String> = vec!();
    let size = transposition_table.len();
    for i in (0..( input_text.len() - size + 1)).step_by(size){
        let mut temp_text = String::new();
        for j in 0..size{
            let pos = i + transposition_table[j];
            temp_text += &input_text_upper[pos..pos+1];
        }
        result.push(temp_text);
    }
    if (input_text.len() % size != 0){
        result.push((&(input_text_upper[input_text_upper.len() - (input_text_upper.len() % size)..])).to_string())
    }
    let mut ret_string = String::new();
    for i in 0..result.len(){

        ret_string += &result[i];
    }
    ret_string
}

fn transposition_cipher_to_decrypt(input_text:String, transposition_table:Vec<usize>) -> String{
    let  input_text_upper = input_text.to_uppercase();
    let mut result:Vec<String> = vec!();
    let size = transposition_table.len();
    let mut decrypt_transposition_table:Vec<usize> = vec![0; size];
    for i in 0..size{
        decrypt_transposition_table[transposition_table[i]] = i;
    }
    for i in (0..( input_text.len() - size + 1)).step_by(size){
        let mut temp_text = String::new();
        for j in 0..size{
            let pos = i + decrypt_transposition_table[j];
            temp_text += &input_text_upper[pos..pos+1];
        }
        result.push(temp_text);
    }
    if (input_text.len() % size != 0){
        result.push((&(input_text_upper[input_text_upper.len() - (input_text_upper.len() % size)..])).to_string())
    }
    let mut ret_string = String::new();
    for i in 0..result.len(){

        ret_string += &result[i];
    }
    ret_string
}
```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```js title="transposition-cipher.js"
//Fisher-Yatesシャッフルアルゴリズム
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    // 要素の交換
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateTranspositionTable(size) {
  let table = Array.from({ length: size }, (_, index) => index);
  shuffleArray(table);
  return table;
}

function transpositionCipher(
  inputText,
  transpositionTable,
  direction = "encryption"
) {
  inputText.toUpperCase();
  let result = [];
  const size = transpositionTable.length;
  if (direction === "decryption") {
    let tempTable = new Array(size).fill(0);
    for (let i = 0; i < size; ++i) {
      tempTable[transpositionTable[i]] = i;
    }
    transpositionTable = tempTable;
  }
  for (let i = 0; i < inputText.length - size + 1; i += size) {
    let tempText = "";
    for (let j = 0; j < size; ++j) {
      tempText += inputText[i + transpositionTable[j]];
    }
    result.push(tempText);
  }
  if (inputText.length % size !== 0) {
    result.push(
      inputText.substring(inputText.length - (inputText.length % size))
    );
  }
  let ret_string = "";
  for (let i = 0; i < result.length; ++i) {
    ret_string += result[i];
  }
  return ret_string;
}
```

  </TabItem>
</Tabs>

### 動作

```jsx live
function TranspositionCipher(props) {
  // 暗号化 or 復号化する文字列
  const inputText = "APPLE";

  // 文字列を格納する面の個数
  const size = 3;
  const direction = "encryption";

  //Fisher-Yatesシャッフルアルゴリズム
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      // 要素の交換
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function generateTranspositionTable(size) {
    let table = Array.from({ length: size }, (_, index) => index);
    shuffleArray(table);
    return table;
  }

  function transpositionCipher(
    inputText,
    transpositionTable,
    direction = "encryption"
  ) {
    inputText.toUpperCase();
    let result = [];
    const size = transpositionTable.length;
    if (direction === "decryption") {
      let tempTable = new Array(size).fill(0);
      for (let i = 0; i < size; ++i) {
        tempTable[transpositionTable[i]] = i;
      }
      transpositionTable = tempTable;
    }
    for (let i = 0; i < inputText.length - size + 1; i += size) {
      let tempText = "";
      for (let j = 0; j < size; ++j) {
        tempText += inputText[i + transpositionTable[j]];
      }
      result.push(tempText);
    }
    if (inputText.length % size !== 0) {
      result.push(
        inputText.substring(inputText.length - (inputText.length % size))
      );
    }
    let ret_string = "";
    for (let i = 0; i < result.length; ++i) {
      ret_string += result[i];
    }
    return ret_string;
  }

  // React
  const [table, setTable] = useState(undefined);
  const [cipher, setCipher] = useState(undefined);

  // tableが生成された後に暗号化を行う
  useEffect(() => {
    if (!table) return;
    const cipher = transpositionCipher(inputText, table, "encryption");
    setCipher(cipher);
  }, [table]);
  // 読み込み時に一度だけ呼び出す
  useEffect(() => {
    // 読み込みできてから呼びだす
    setTable(generateTranspositionTable(size));
  }, []);

  return (
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
          <span className="mrel" style={{ padding: "5px", margin: "auto 0px" }}>
            →
          </span>
          <div style={{ overflowX: "scroll" }}>
            <h3>暗号化</h3>
            <p>{cipher}</p>
          </div>
          <span className="mrel" style={{ padding: "5px", margin: "auto 0px" }}>
            →
          </span>
          <div>
            <h3>復号化</h3>
            <p style={{ padding: "1px", margin: "2px" }}>
              {transpositionCipher(cipher, table, "decryption")}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
```
