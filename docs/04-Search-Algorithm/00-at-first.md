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

<!-- TODO Reactのコンポーネントでオセロができる様にする -->
<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python
import random
from enum import Enum
import copy
from abc import ABC, abstractmethod


class GameState(Enum):
    BLACK_WIN = "Black Win"
    WHITE_WIN = "White Win"
    DRAW = "Draw"
    IN_PROGRESS = "In Progress"


class Othello():

    map_size = 8
    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),            (0, 1),
        (1, -1), (1, 0), (1, 1)
    ]

    def __init__(self) -> None:
        self.board = [[-1] * self.map_size for _ in range(self.map_size)]
        half = self.map_size // 2
        # 0がwhite
        # 1がblackとする
        self.board[half][half] = 0
        self.board[half-1][half] = 1
        self.board[half][half-1] = 1
        self.board[half-1][half-1] = 0

    def is_done(self):
        for i in range(self.map_size):
            for j in range(self.map_size):
                if self.board[i][j] == -1:
                    return False
        return True

    def is_done(self):
        for i in range(self.map_size):
            for j in range(self.map_size):
                # おけるマスが存在するか
                # どちらかのプレイヤーが駒を置くことができるか
                if self.board[i][j] == -1 and len(self.legal_actions(0)) + len(self.legal_actions(1)) != 0:
                    return False
        return True

    def is_valid_action(self, player, y, x):
        # すでに置かれている
        if self.board[y][x] >= 0:
            return False

        for dy, dx in self.directions:
            ny = y + dy
            nx = x + dx
            # 盤面外
            if not (0 <= ny < self.map_size and 0 <= nx < self.map_size):
                continue

            # 隣が相手のマスでない
            if player ^ self.board[ny][nx] != 1:
                continue

            # 延長線上に自分のマスが存在するか
            ny += dy
            nx += dx
            while 0 <= ny < self.map_size and 0 <= nx < self.map_size:
                # 延長線上に自分のマスが存在する
                if self.board[ny][nx] ^ player == 0:
                    return True
                elif self.board[ny][nx] ^ player == 1:
                    ny += dy
                    nx += dx
                    continue
                # 自分のマスが登場する前に何も置かれていないマスが登場するか
                break

        return False

    def get_winner(self):
        if (self.is_done()):
            black = 0
            for i in range(self.map_size):
                black += sum(self.board[i])
            white = self.map_size * self.map_size - black
            if black < white:
                return GameState.WHITE_WIN.value
            elif black == white:
                return GameState.DRAW.value
            return GameState.BLACK_WIN.value
        else:
            return GameState.IN_PROGRESS.value

    def put(self, player, pos: tuple):
        self.board[pos[0]][pos[1]] = player

        for dy, dx in self.directions:
            ny = pos[0] + dy
            nx = pos[1] + dx
            turn_over = []
            while 0 <= ny < self.map_size and 0 <= nx < self.map_size:
                # ひっくり返すものを入れる
                if player ^ self.board[ny][nx] == 1:
                    turn_over.append((ny, nx))
                    ny += dy
                    nx += dx
                    continue
                break
            # ひっくり返す対象の最後が自分のマスであるか
            if not ((0 <= ny < self.map_size and 0 <= nx < self.map_size)
                    and self.board[ny][nx] == player):
                continue
            # ひっくり返す
            for y, x in turn_over:
                self.board[y][x] = player

    def copy_board(self):
        # 現在の盤面をディープコピーして新しい盤面を作成
        return copy.deepcopy(self)

    def get_count(self):
        # 現在の白と黒のマスを返す
        black = 0
        white = 0
        for i in range(self.map_size):
            for j in range(self.map_size):
                if self.board[i][j] == 1:
                    black += 1
                elif self.board[i][j] == 0:
                    white += 1
        return (white, black)

    def __str__(self):
        ret = []
        ret.append("Player Information")
        white, black = self.get_count()
        ret.append(f"Black: {black}")
        ret.append(f"White: {white}")
        ret.append("----------------------------")
        ret.append("Board Information")
        board = [""]
        for i in range(self.map_size):
            tmp = [""]
            bar = [""]
            for j in range(self.map_size):
                if self.board[i][j] == 1:
                    tmp.append("⚫️")
                elif self.board[i][j] == 0:
                    tmp.append("⚪️")
                else:
                    tmp.append("　")
                bar.append("ー")
            tmp.append("\n")
            board.append("|".join(tmp))
            bar.append("\n")
        bar = " ".join(bar)
        board.append("")
        ret.append(bar.join(board))
        return "\n".join(ret)


class Action(ABC):

    def __init__(self, _id: int) -> None:
        self.id = _id

    @abstractmethod
    def action(self, othello: Othello) -> tuple[int, int]:
        raise NotImplementedError("")


class RandomAction(Action):

    def __init__(self, id: int) -> None:
        super().__init__(id)

    def action(self,  othello: Othello):
        actions = othello.legal_actions(self.id)
        if len(actions) == 0:
            return None
        num = random.randint(0, len(actions)-1)
        return actions[num]



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

    def random_action(self, actions: list, *args, **keyword):
        num = random.randint(0, len(actions)-1)
        return num


def play_game(player1_strategy, player2_strategy):
    # 対戦マップ作成
    othello = Othello()

    # playerを作成
    player1 = Player(0, othello, player1_strategy)
    player2 = Player(1, othello, player2_strategy)

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
    win = play_game("random", "random")
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

```cpp
#include <iostream>
#include <vector>
#include <random>
#include <bits/stdc++.h>

enum class Strategy
{
    RANDOM,
}
class Othello
{
public:
    static const int mapSize = 8;
    inline static const int directions[8][2] = {
        {-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 1}, {1, -1}, {1, 0}, {1, 1}};

    Othello()
    {
        board = std::vector<std::vector<int>>(mapSize, std::vector<int>(mapSize, -1));
        // 0がwhite
        // 1がblackとする
        int half = mapSize / 2;
        board[half][half] = 0;
        board[half - 1][half] = 1;
        board[half][half - 1] = 1;
        board[half - 1][half - 1] = 0;
    }

    bool isDone()
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

    std::vector<std::pair<int, int>> legalActions(int player)
    {
        std::vector<std::pair<int, int>> actions;
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

    bool isValidAction(int player, int y, int x)
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

    std::string getWinner()
    {
        if (isDone())
        {
            int black = 0;
            for (int i = 0; i < mapSize; ++i)
            {
                black += std::accumulate(board[i].begin(), board[i].end(), 0);
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

    void put(int player, std::pair<int, int> pos)
    {
        board[pos.first][pos.second] = player;

        for (int dir = 0; dir < 8; ++dir)
        {
            int dy = directions[dir][0];
            int dx = directions[dir][1];
            int ny = pos.first + dy;
            int nx = pos.second + dx;
            std::vector<std::pair<int, int>> turn_over;

            while (ny >= 0 && ny < mapSize && nx >= 0 && nx < mapSize)
            {
                // ひっくり返すものを入れる
                if ((player ^ board[ny][nx]) == 1)
                {
                    turn_over.push_back(std::make_pair(ny, nx));
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

    Othello copyBoard()
    {
        // 現在の盤面をディープコピーして新しい盤面を作成
        Othello copy = *this;
        return copy;
    }

    std::pair<int, int> getCount()
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
        return std::make_pair(white, black);
    }

    std::string toString()
    {
        std::stringstream os("");
        os << "Player Information" << std::endl;

        std::pair<int, int> mass = getCount();
        int black = mass.second;
        int white = mass.first;

        os << "Black: " << black << std::endl;
        os << "White: " << white << std::endl;

        os << "----------------------------" << std::endl;
        os << "Board Information" << std::endl;

        auto addSidebar = []() -> std::string
        {
            std::stringstream bar("");
            for (int i = 0; i < mapSize; ++i)
            {
                bar << " ";
                bar << "ー";
            }
            return bar.str();
        };
        os << addSidebar() << std::endl;
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
            os << std::endl;
            os << addSidebar() << std::endl;
        }
        return os.str();
    }

    std::vector<std::vector<int>> getBoard()
    {
        return board;
    }

    // コピー代入演算子
    Othello &
    operator=(const Othello &other)
    {
        if (this != &other)
        { // 自己代入をチェック
            // メンバ変数をディープコピーする
            this->board = other.board;
        }
        return *this;
    }

private:
    std::vector<std::vector<int>> board;
};

class Action
{

public:
    Action(int value) : id(value)
    {
    }
    // 純粋仮想関数を宣言
    virtual std::optional<std::pair<int, int>> action(Othello othello) = 0;

protected:
    int id;
};

class RandomAction : public Action
{

public:
    RandomAction(int value) : Action(value)
    {
    }
    std::optional<std::pair<int, int>> action(Othello othello) override
    {
        // ここに実装を追加
        std::vector<std::pair<int, int>> actions = othello.legalActions(this->id);
        if (actions.empty())
        {
            return std::nullopt;
        }
        int index = calc(actions);
        return actions[index];
    }

    int calc(const std::vector<std::pair<int, int>> &actions)
    {
        std::random_device rd;
        std::mt19937 gen(rd());
        std::uniform_int_distribution<int> dist(0, actions.size() - 1);
        return dist(gen);
    }
};


class Player
{

public:
    Player(int _id, Othello &_othello, const Strategy strategy, int depth = 2, Evaluation evaluation = Evaluation::MASS_COUNT) : id(_id), othello(_othello)
    {
        id = _id;
        switch (strategy)
        {
        case Strategy::RANDOM:
            this->strategy = std::make_unique<RandomAction>(_id);
            break;
        default:
            this->strategy = std::make_unique<RandomAction>(_id);
            break;
        }
    }

    void put()
    {
        std::optional<std::pair<int, int>> action = strategy->action(othello.copyBoard());
        if (!action.has_value())
        {
            return;
        }
        othello.put(id, action.value());
    }

private:
    int id;
    Othello &othello;
    std::unique_ptr<Action> strategy = nullptr;
    int (Player::*action)(const std::vector<std::pair<int, int>> &);
};

std::string playGame(const Strategy player1_strategy, const Strategy player2_strategy)
{
    Othello othello;

    Player player1(0, othello, player1_strategy);
    Player player2(1, othello, player2_strategy);


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
        std::string win = playGame(Strategy::RANDOM, Strategy::RANDOM);
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
    printf("引き分け: %0.5f", (double)draw / n);
    return 0;
}
```

  </TabItem>
  <!-- <TabItem value="C#" label="C#">

```csharp

```

</TabItem> -->
</Tabs>
