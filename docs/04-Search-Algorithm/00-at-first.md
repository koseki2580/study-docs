---
title: 探索アルゴリズム
sidebar_label: 探索アルゴリズム
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 探索アルゴリズム

探索アルゴリズムは、与えられた問題またはデータセットから目標、解、または特定の条件を見つけるための計算手法である。
ゲームなどの分野で使用されている。

### オセロ

探索アルゴリズムを実装してどのように勝率が変化するのかを確認するためにオセロを題材にして見ていこうと思う。

そのため、各言語のオセロを行うコードを以下に示す。今後は Player クラスにで新しい戦略を追加し、他のアルゴリズムと対決させていくことを考える。
取れる手の中からランダムで手を選択する戦略を基準戦略として実装している。

:::note
もっといい実装方法やおかしな点があれば、教えていただければ幸いです。
:::

#### それぞれの言語のディレクトリ構造

`actions`ディレクトリに探索アルゴリズムを追加していく。また、アルゴリズムによっては評価関数が存在する。評価関数は同様のもを使用できるように`evaluation`ファイルにまとめる。
`evaluation`コードは必要になった際に記述する。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```bash
.
├── __init__.py
├── lib
│   ├── actions
│   │   ├── __init__.py
│   │   ├── action.py
│   │   └── random_action.py
│   ├── evaluation.py
│   ├── othello.py
│   └── player.py
└── main.py
```

  </TabItem>
  <TabItem value="C++" label="C++">

コンパイルのコマンドは以下である。

```bash
g++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/player.cpp -o ./othello
```

makefile だと以下の様な形式

```makefile
# コンパイラとコンパイラオプション
CXX = g++
CXXFLAGS =

OUT_PATH = ./out

# ターゲット: 依存ファイル
othello: $(OUT_PATH)/main.o $(OUT_PATH)/othello.o $(OUT_PATH)/evaluation.o $(OUT_PATH)/action.o $(OUT_PATH)/random_action.o  $(OUT_PATH)/player.o
	$(CXX) $(CXXFLAGS) $^ -o othello

# ソースファイルからオブジェクトファイルを生成
$(OUT_PATH)/othello.o: lib/othello.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/evaluation.o: lib/evaluation.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/action.o: lib/action/action.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/random_action.o: lib/action/random_action.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/player.o: lib/player.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/main.o: main.cpp $(OUT_PATH)
	$(CXX) $(CXXFLAGS) -c $< -o $@

# OUT_PATHディレクトリが存在しない場合に作成する
$(OUT_PATH):
	mkdir -p $(OUT_PATH)


.PHONY: clean

clean:
	rm -f $(OUT_PATH)/*.o

run:
	./othello

g++:
	g++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/player.cpp -o ./othello
```

```bash
.
├── lib
│   ├── action
│   │   ├── action.cpp
│   │   ├── action.hpp
│   │   ├── random_action.cpp
│   │   └── random_action.hpp
│   ├── evaluation.cpp
│   ├── evaluation.hpp
│   ├── othello.cpp
│   ├── othello.hpp
│   ├── player.cpp
│   └── player.hpp
├── main.cpp
└── makefile
```

  </TabItem>
  <!-- <TabItem value="C#" label="C#">

```csharp

```

</TabItem> -->
</Tabs>

#### othell ファイル

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="othello.py"
import time

from lib.othello import Othello, GameState
from lib.player import Player


def play_game(player1_strategy, player2_strategy):
    # 対戦マップ作成
    othello = Othello()

    # playerを作成
    player1 = Player(1, othello, player1_strategy)
    player2 = Player(0, othello, player2_strategy)

    # print(othello)
    while (not othello.is_done()):
        # player1のアクション
        player1.put()
        # player2のアクション
        player2.put()
    return othello.get_winner()


n = 100
white = 0
black = 0
draw = 0
start = time.time()
for i in range(n):
    win: GameState = play_game("random", "random")
    print(f"{i}回目: {win.value}")
    if win == GameState.WHITE_WIN:
        white += 1
    elif win == GameState.BLACK_WIN:
        black += 1
    else:
        draw += 1

print(f"白の勝率: {white/n}")
print(f"黒の勝率: {black/n}")
print(f"引き分け: {draw/n}")
print(f"実行時間: {time.time() - start}")

```

  </TabItem>
  <TabItem value="C++" label="C++">
```cpp title="othello.hpp"
#ifndef OTHELLO_HPP
#define OTHELLO_HPP

#include <bits/stdc++.h>

#include "othello.hpp"

class Othello
{
public:
static const int mapSize = 8;
inline static const int directions[8][2] = {
{-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 1}, {1, -1}, {1, 0}, {1, 1}};

    Othello();
    bool isDone();
    std::vector<std::pair<int, int>> legalActions(int player);
    bool isValidAction(int player, int y, int x);
    std::string getWinner();
    void put(int player, std::pair<int, int> pos);
    Othello copyBoard();
    std::pair<int, int> getCount();
    std::string toString();
    std::vector<std::vector<int>> getBoard();
    // コピー代入演算子
    Othello &operator=(const Othello &other);

private:
std::vector<std::vector<int>> board;
};

#endif // OTHELLO_HPP

````
```cpp title="othello.cpp"
#include <bits/stdc++.h>
#include "othello.hpp"
using namespace std;
Othello::Othello()
{
    board = vector<vector<int>>(mapSize, vector<int>(mapSize, -1));
    // 0がwhite
    // 1がblackとする
    int half = mapSize / 2;
    board[half][half] = 0;
    board[half - 1][half] = 1;
    board[half][half - 1] = 1;
    board[half - 1][half - 1] = 0;
}

bool Othello::isDone()
{
    for (int i = 0; i < mapSize; ++i)
    {
        for (int j = 0; j < mapSize; ++j)
        {
            if (board[i][j] == -1 && legalActions(0).size() + legalActions(1).size() != 0)
            {
                return false;
            }
        }
    }
    return true;
}

vector<pair<int, int>> Othello::legalActions(int player)
{
    vector<pair<int, int>> actions;
    for (int i = 0; i < mapSize; ++i)
    {
        for (int j = 0; j < mapSize; ++j)
        {
            if (isValidAction(player, i, j))
            {
                actions.push_back({i, j});
            }
        }
    }
    return actions;
}

bool Othello::isValidAction(int player, int y, int x)
{
    // すでに置かれている
    if (board[y][x] >= 0)
    {
        return false;
    }

    for (int dir = 0; dir < 8; ++dir)
    {
        int dy = directions[dir][0];
        int dx = directions[dir][1];
        int ny = y + dy;
        int nx = x + dx;
        // 盤面外
        if (!(ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize))
        {
            continue;
        }
        // 隣が相手のマスでない
        if ((player ^ board[ny][nx]) != 1)
        {
            continue;
        }
        // 延長線上に自分のマスが存在するか
        ny += dy;
        nx += dx;
        while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)
        {
            // 延長線上に自分のマスが存在する
            if ((board[ny][nx] ^ player) == 0)
            {
                return true;
            }
            else if ((board[ny][nx] ^ player) == 1)
            {
                ny += dy;
                nx += dx;
                continue;
            }
            // 自分のマスが登場する前に何も置かれていないマスが登場するか
            break;
        }
    }

    return false;
}

string Othello::getWinner()
{
    if (isDone())
    {
        int black = 0;
        for (int i = 0; i < mapSize; ++i)
        {
            black += accumulate(board[i].begin(), board[i].end(), 0);
        }
        int white = mapSize * mapSize - black;
        if (black < white)
        {
            return "White Win";
        }
        else if (black == white)
        {
            return "Draw";
        }
        return "Black Win";
    }
    else
    {
        return "In Progress";
    }
}

void Othello::put(int player, pair<int, int> pos)
{
    board[pos.first][pos.second] = player;

    for (int dir = 0; dir < 8; ++dir)
    {
        int dy = directions[dir][0];
        int dx = directions[dir][1];
        int ny = pos.first + dy;
        int nx = pos.second + dx;
        vector<pair<int, int>> turn_over;

        while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)
        {
            // ひっくり返すものを入れる
            if ((player ^ board[ny][nx]) == 1)
            {
                turn_over.push_back(make_pair(ny, nx));
                ny += dy;
                nx += dx;
                continue;
            }
            break;
        }
        // ひっくり返す対象の最後が自分のマスであるか
        if (!((ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize) && board[ny][nx] == player))
        {
            continue;
        }
        // ひっくり返す
        for (const auto &move : turn_over)
        {
            board[move.first][move.second] = player;
        }
    }
}

Othello Othello::copyBoard()
{
    // 現在の盤面をディープコピーして新しい盤面を作成
    Othello copy = *this;
    return copy;
}

pair<int, int> Othello::getCount()
{
    int white = 0;
    int black = 0;
    for (int i = 0; i < mapSize; ++i)
    {
        for (int j = 0; j < mapSize; ++j)
        {
            if (board[i][j] == 1)
            {
                black++;
            }
            else if (board[i][j] == 0)
            {
                white++;
            }
        }
    }
    return make_pair(white, black);
}

string Othello::toString()
{
    stringstream os("");
    os << "Player Information" << endl;

    pair<int, int> mass = getCount();
    int black = mass.second;
    int white = mass.first;

    os << "Black: " << black << endl;
    os << "White: " << white << endl;

    os << "----------------------------" << endl;
    os << "Board Information" << endl;

    auto addSidebar = []() -> string
    {
        stringstream bar("");
        for (int i = 0; i < mapSize; ++i)
        {
            bar << " ";
            bar << "ー";
        }
        return bar.str();
    };
    os << addSidebar() << endl;
    for (int i = 0; i < mapSize; ++i)
    {
        os << "|";
        for (int j = 0; j < mapSize; ++j)
        {
            if (board[i][j] == 1)
            {
                os << "⚫️";
            }
            else if (board[i][j] == 0)
            {
                os << "⚪️";
            }
            else
            {
                os << "　";
            }
            os << "|";
        }
        os << endl;
        os << addSidebar() << endl;
    }
    return os.str();
}

vector<vector<int>> Othello::getBoard()
{
    return board;
}

// コピー代入演算子
Othello &Othello::operator=(const Othello &other)
{
    if (this != &other)
    { // 自己代入をチェック
        // メンバ変数をディープコピーする
        this->board = other.board;
    }
    return *this;
}

````

  </TabItem>
</Tabs>

#### player ファイル

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="player.py"
from lib.othello import Othello
from lib.actions import *


class Player():

    def __init__(self, _id: int, board: Othello, strategy: str) -> None:
        self.id = _id
        self.othello = board
        # 次の手を選択する手法を返る
        match strategy:
            case "random":
                self.strategy = RandomAction(_id)
            case _:
                self.strategy = RandomAction(_id)

    def put(self):
        action = self.strategy.action(self.othello.copy_board())
        # 置くところがなかった場合
        if action is None:
            return
        self.othello.put(self.id, action)

```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="player.hpp"
#ifndef PLAYER_H
#define PLAYER_H
#include <bits/stdc++.h>

#include "othello.hpp"
#include "evaluation.hpp"
#include "action/action.hpp"
#include "action/random_action.hpp"
#include "action/mini_max_action.hpp"
class Player
{

public:
    Player(int _id, Othello &_othello, const Strategy strategy, int depth = 2, Evaluation evaluation = Evaluation::MASS_COUNT);

    void put();

private:
    int id;
    Othello &othello;
    unique_ptr<Action> strategy = nullptr;
    int (Player::*action)(const vector<pair<int, int>> &);
};

#endif // PLAYER_H

```

```cpp title="player.cpp"
#include <bits/stdc++.h>

#include "othello.hpp"
#include "evaluation.hpp"
#include "action/action.hpp"
#include "action/random_action.hpp"
#include "action/mini_max_action.hpp"
#include "player.hpp"
using namespace std;
Player::Player(int _id, Othello &_othello, const Strategy strategy) : id(_id), othello(_othello)
{
    id = _id;
    switch (strategy)
    {
    case Strategy::RANDOM:
        this->strategy = make_unique<RandomAction>(_id);
        break;
    default:
        this->strategy = make_unique<RandomAction>(_id);
        break;
    }
}

void Player::put()
{
    optional<pair<int, int>> action = strategy->action(othello.copyBoard());
    if (!action.has_value())
    {
        return;
    }
    othello.put(id, action.value());
}

```

  </TabItem>

</Tabs>

#### action ファイル

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="action.py"
import sys
from pathlib import Path
from abc import ABC, abstractmethod

sys.path.append(str(Path(__file__).parent.parent.parent))
from lib.othello import Othello


class Action(ABC):

    def __init__(self, _id: int) -> None:
        self.id = _id

    @abstractmethod
    def action(self, othello: Othello) -> tuple[int, int]:
        raise NotImplementedError("")

```

  </TabItem>
  <TabItem value="C++" label="C++">
```cpp title="action.hpp"
#ifndef OTHELLO_STRATEGY_H
#define OTHELLO_STRATEGY_H

#include <bits/stdc++.h>

#include "../othello.hpp"

using namespace std;

enum class Strategy
{
RANDOM
};

class Action
{

public:
Action(int value);
// 純粋仮想関数を宣言
virtual optional<pair<int, int>> action(Othello othello) = 0;

protected:
int id;
};
#endif // OTHELLO_STRATEGY_H

````
```cpp title="action.cpp"

#include <bits/stdc++.h>

#include "../othello.hpp"
#include "action.hpp"
using namespace std;

Action::Action(int value) : id(value)
{
}
````

  </TabItem>
</Tabs>

<!--
<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python

```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

```

  </TabItem>
</Tabs> -->

#### main ファイル

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="main.py"
from lib.othello import Othello, GameState
from lib.player import Player


def play_game(player1_strategy, player2_strategy):
    # 対戦マップ作成
    othello = Othello()

    # playerを作成
    player1 = Player(1, othello, player1_strategy, 2, "custom")
    player2 = Player(0, othello, player2_strategy, 2, "custom")

    # print(othello)
    while (not othello.is_done()):
        # player1のアクション
        player1.put()
        # player2のアクション
        player2.put()
    return othello.get_winner()


n = 100
white = 0
black = 0
draw = 0
for i in range(n):
    win: GameState = play_game("alpha_beta", "minimax")
    print(f"{i}回目: {win.value}")
    if win == GameState.WHITE_WIN:
        white += 1
    elif win == GameState.BLACK_WIN:
        black += 1
    else:
        draw += 1

print(f"白の勝率: {white/n}")
print(f"黒の勝率: {black/n}")
print(f"引き分け: {draw/n}")
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="main.cpp"
#include <bits/stdc++.h>

#include "lib/othello.hpp"
#include "lib/evaluation.hpp"
#include "lib/action/action.hpp"
#include "lib/action/random_action.hpp"
#include "lib/action/mini_max_action.hpp"
#include "lib/player.hpp"
using namespace std;

string playGame(const Strategy player1_strategy, const Strategy player2_strategy)
{
    Othello othello;

    Player player1(1, othello, player1_strategy, 2, Evaluation::CUSTOM);
    Player player2(0, othello, player2_strategy);

    while (!othello.isDone())
    {
        player1.put();
        player2.put();
    }
    return othello.getWinner();
}

int main()
{
    int n = 100;
    int white = 0;
    int black = 0;
    int draw = 0;
    for (int i = 0; i < n; ++i)
    {
        string win = playGame(Strategy::MINIMAX, Strategy::RANDOM);
        printf("%d: %s\n", i, win.c_str());

        if (win == "White Win")
            white++;
        else if (win == "Black Win")
            black++;
        else
            draw++;
    }
    printf("白の勝率: %0.5f\n", (double)white / n);
    printf("黒の勝率: %0.5f\n", (double)black / n);
    printf("引き分け: %0.5f\n", (double)draw / n);
    return 0;
}
```

  </TabItem>
</Tabs>
