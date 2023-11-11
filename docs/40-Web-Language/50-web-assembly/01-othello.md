---
title: オセロを行う
sidebar_label: オセロを行う
draft: false
toc_max_heading_level: 4
tags: [WebAssembly, emscripten]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## オセロ

[探索アルゴリズム](/docs/Search-Algorithm/at-first)で作成したオセロを行うためのコードを Web WebAssembly に変化して、JavaScript から呼び出してオセロが行える様にする。

### 準備

探索アルゴリズムのコードを拡張しやすいようにファイルに分割する。

```bash
.
├── lib
│   ├── action
│   │   ├── action.cpp
│   │   ├── action.hpp
│   │   ├── mini_max_action.cpp
│   │   ├── mini_max_action.hpp
│   │   ├── random_action.cpp
│   │   └── random_action.hpp
│   ├── evaluation.cpp
│   ├── evaluation.hpp
│   ├── othello.cpp
│   ├── othello.hpp
│   ├── player.cpp
│   └── player.hpp
├── main.cpp
```

上記の様に分割した場合のコンパイルコマンドは以下となる。(2023/11/4 現在)

```bash
em++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/action/mini_max_action.cpp lib/player.cpp -o ./output/index.html
```

評価関数を増やす場合は`evaluation`に探索アルゴリズムを増やす場合は`action/`配下に配置することでコードがまとまる。

JavaScript から操作しやすいように PlayOthello クラスを作成する。

```cpp
class PlayOthello
{
public:
    PlayOthello(bool isFirstPlayer, string strategy)
    {
        Strategy player_strategy;

        if (strategy == "random")
        {
            player_strategy = Strategy::RANDOM;
        }
        else if (strategy == "minimax")
        {
            player_strategy = Strategy::MINIMAX;
        }
        else
        {
            player_strategy = Strategy::RANDOM;
        }
        // オセロボードを作成する
        othello = Othello();
        playerId = isFirstPlayer ? 0 : 1;
        cpu = Player(playerId ^ 1, othello, player_strategy, 2, Evaluation::CUSTOM);
    }

    std::vector<pair<int, int>> getLegalActions()
    {
        return this->othello.legalActions(this->playerId);
    }

    std::vector<std::vector<int>> getBoardInfo()
    {
        return this->othello.getBoard();
    }

    void put(pair<int, int> action)
    {
        this->othello.put(playerId, action);
    }
    void cpuPut()
    {
        this->cpu.put();
    }

private:
    Othello othello;
    Player cpu = Player(0, othello, Strategy::RANDOM, 2, Evaluation::CUSTOM);
    int playerId;
};
```

作成した class を JavaScript から操作するために、`emscripten`の流儀で以下のようなものを作成する。

```cpp
extern "C"
{
    struct PlayOthelloWrapper
    {
        PlayOthello *instance;
    };

    PlayOthelloWrapper *createPlayOthello(bool isFirstPlayer, const char *strategy)
    {
        PlayOthelloWrapper *wrapper = new PlayOthelloWrapper;
        wrapper->instance = new PlayOthello(isFirstPlayer, strategy);
        return wrapper;
    }

    void deletePlayOthello(PlayOthelloWrapper *wrapper)
    {
        delete wrapper->instance;
        delete wrapper;
    }

    void getLegalActions(PlayOthelloWrapper *wrapper, int **outArray, int *outSize)
    {
        PlayOthello *playOthello = wrapper->instance;
        std::vector<std::pair<int, int>> legalActions = playOthello->getLegalActions();
        printf("%d\n", *outSize);
        *outSize = legalActions.size();
        printf("%d\n", *outSize);
        *outArray = new int[2 * legalActions.size()];
        for (int i = 0; i < 2 * legalActions.size(); ++i)
        {
            printf("outArray[%d]: %d\n", i, (*outArray)[i]);
        }
        for (int i = 0; i < legalActions.size(); ++i)
        {
            printf("%d %d\n", legalActions[i].first, legalActions[i].second);
        }

        for (size_t i = 0; i < legalActions.size(); i++)
        {
            (*outArray)[2 * i] = legalActions[i].first;
            (*outArray)[2 * i + 1] = legalActions[i].second;
            printf("outArray: %d %d\n", (*outArray)[2 * i], (*outArray)[2 * i + 1]);
        }
        printf("%d\n", *outSize);
        int size = *outSize;
        printf("size: %d\n", size);
        for (int i = 0; i < legalActions.size(); ++i)
        {
            printf("outArray: %d %d\n", (*outArray)[2 * i], (*outArray)[2 * i + 1]);
        }
    }

    void getBoardInfo(PlayOthelloWrapper *wrapper, int ***outBoard, int *outRows, int *outCols)
    {
        PlayOthello *playOthello = wrapper->instance;
        std::vector<std::vector<int>> board = playOthello->getBoardInfo();
        *outRows = board.size();
        if (*outRows > 0)
        {
            *outCols = board[0].size();
        }
        else
        {
            *outCols = 0;
        }

        *outBoard = new int *[*outRows];
        for (int i = 0; i < *outRows; i++)
        {
            (*outBoard)[i] = new int[*outCols];
            for (int j = 0; j < *outCols; j++)
            {
                (*outBoard)[i][j] = board[i][j];
            }
        }
    }

    void put(PlayOthelloWrapper *wrapper, int x, int y)
    {
        PlayOthello *playOthello = wrapper->instance;
        playOthello->put(std::make_pair(x, y));
    }

    void cpuPut(PlayOthelloWrapper *wrapper)
    {
        PlayOthello *playOthello = wrapper->instance;
        playOthello->cpuPut();
    }
}
```

これを以下のコマンドを実行することでコンパイルができ、JavaScript から`EXPORTED_FUNCTIONS`で宣言したもので使用することができる。

```bash
em++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/action/mini_max_action.cpp lib/player.cpp -o ./output/othello.js -s EXPORTED_FUNCTIONS="['_createPlayOthello', '_deletePlayOthello', '_getLegalActions', '_getBoardInfo', '_put', '_cpuPut', '_isDone', '_free']" -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap', 'getValue']" -s WASM=1 -s DEFAULT_LIBRARY_FUNCS_TO_INCLUDE='$allocate'
```

コンパイルによって出力された JavaScript ファイルを html で読み込むと`Module`という c++と連携するための変数を使用することができる様になる。
以下の様にすると`onRuntimeInitialized`, `printToConsole`が動作する。

```html
<script>
  var Module = {
    onRuntimeInitialized: function () {
      // WebAssemblyが初期化された後、C++コードからデータをJavaScriptに渡すことができます
      Module._main(); // C++のmain関数を呼び出す
    },
    printToConsole: function (text) {
      // C++からの出力をJavaScriptのコンソールに表示
      console.log(text);
    },
  };
</script>
<script src="othello.js"></script>
```

`onRuntimeInitialized`内で以下の様に宣言する。
`_createPlayOthello`では上記で作成した PlayOthello がオブジェクト化する。
`_malloc`ではメモリを確保し、その番地を返している。その後、`ccall`で`getLegalActions`を呼び出し、確保したメモリ番地である`legalActionsArrayPtr`, `legalActionsSize`に実行結果が書き込まれる。

:::note
`legalActionsArrayPtr`, `legalActionsSize`に値が書き込まれるのではなく、ここで指し示しているメモリ番地に値を書き込んでいることに注意。
そのため、`console.log(legalActionsSize)`を行なっても全然見当違いの値となる。
:::

```js
const isFirstPlayer = true; // 例: true or false
const strategy = "random"; // 例: 'random' or 'minimax'
const playOthello = _createPlayOthello(isFirstPlayer ? 1 : 0, strategy);
// PlayOthelloメソッドを呼び出す例
const legalActionsArrayPtr = _malloc(50 * 4); // 50 * sizeof(int32)
const legalActionsSize = _malloc(4); //  sizeof(int32)

Module.ccall(
  "getLegalActions",
  "void",
  ["number", "number", "number"],
  [playOthello, legalActionsArrayPtr, legalActionsSize]
);
```

単体の値(int)であれば、値にアクセスするには次の様にすることでアクセスすることができる。

```js
Module.getValue(legalActionsSize, "i32");
```

次に`legalActionsArrayPtr`にアクセスするには以下の様にする。
初めに`_malloc`にアクセスする。
ここで取得する値は cpp の方で`*outArray = new int[2 * legalActions.size()];`
と書かれているようにポインタを指している。そのため、一度ポインタを取得した後に、配列の値を取得しにいく。

```js
const legalActionsArrayPtrValue = Module.getValue(legalActionsArrayPtr, "i32");

console.log(`legalActionsSizeの値: ${legalActionsSizeValue}`);
const test = new Int32Array(
  Module.HEAP32.buffer,
  legalActionsArrayPtrValue,
  legalActionsSizeValue * 2
);
```

`_free(outCols)`の様に確保したメモリは解放する様にする。

コード関係は[koseki2580/Othello](https://github.com/koseki2580/Othello)リポジトリにある。
