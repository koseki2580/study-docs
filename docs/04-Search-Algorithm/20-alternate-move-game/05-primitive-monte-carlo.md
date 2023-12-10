---
title: 原始モンテカルロ法
sidebar_label: 原始モンテカルロ法
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 原始モンテカルロ法とは

統計的な手法を用いて問題やシミュレーションに対する近似解を求めるアルゴリズムであるモンテカルロ法を用いたアルゴリズムであり、
与えられたゲームの状態において最適な行動を推定するためにランダムなシミュレーションを多数回実行する手法である。

### アルゴリズム

ある盤面から次の手を選択するために、自分と相手の手をランダムに選択し、ゲーム終了または特定の回数の手を選択するまでゲームを進め、その時点での勝敗を記録する。
これを何度も行い、次の選択できる手の中で一番勝率のいい手を選択していく。

例えば、この盤面で試行が 600 回であったとする。(各手を 100 回ずつ)

![原始モンテカルロ法1](/img/svg/Search-Algorithm/primitive-monte-carlo/primitive-monte-carlo-1.drawio.svg)

600 回勝敗がつくまで繰り返した後、以下のような結果になったとする。

|             盤面              | 勝ち数 |
| :---------------------------: | :----: |
| $\textcircled{\scriptsize 1}$ |   40   |
| $\textcircled{\scriptsize 2}$ |   33   |
| $\textcircled{\scriptsize 3}$ |   56   |
| $\textcircled{\scriptsize 4}$ |   65   |
| $\textcircled{\scriptsize 5}$ |   12   |
| $\textcircled{\scriptsize 6}$ |   32   |

この場合は全て同じ回数試しているので、一番勝利数が大きい$\textcircled{\scriptsize 4}$の手を次の手として選択する。

このように次に取れる手から、お互いにランダムな手を選択するとしてシミュレーションを行い、一番勝率の高い手を選択していく。

勝ち 1, 引き分け 0.5, 負け 0 として評価する方法や勝ち 1, 引き分け 0, 負け -1 としたりと様々な値の取り方も存在する。

MiniMax 法(深さ 2 まで)と原始モンテカルロ法(各試行回数 20 回)で 100 回の対戦結果は以下のとなった

|             アルゴリズム             | 勝利数 |
| :----------------------------------: | :----: |
| 原始モンテカルロ法(各試行回数 20 回) |   25   |
|          MiniMax 法(深さ 2)          |   74   |

MiniMax 法(深さ 2 まで)と原始モンテカルロ法(各試行回数 200 回)で 100 回の対戦結果は以下のとなった。

|             アルゴリズム              | 勝利数 |
| :-----------------------------------: | :----: |
| 原始モンテカルロ法(各試行回数 200 回) |   28   |
|          MiniMax 法(深さ 2)           |   69   |

少しだけ勝率は上がったが、ランダムな手を選択しているので劇的に勝率が上昇していないことがわかる。

### コード

#### primitive_monte_carlo_action

反復深化を導入し、一定時間が経過した場合は探索を停止し、時間内で一番良い手を選択する様にしている。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="primitive_monte_carlo_action.py"
from lib.evaluation import *
from .action import Action
from lib.othello import Othello, GameState
import sys
from pathlib import Path
import random
import time
sys.path.append(str(Path(__file__).parent.parent.parent))


class PrimitiveMonteCarloAction(Action):

    def __init__(self, id: int, max_count: int, max_time: float, depth: int = -1) -> None:
        super().__init__(id)
        self.max_count = max_count
        self.max_time = max_time
        self.max_depth = depth

    def action(self, othello: Othello):
        next_action = self.primitive_monte_carlo(othello)
        if next_action == ():
            return None
        return next_action

    def primitive_monte_carlo(self, othello: Othello):
        actions = othello.legal_actions(self.id)
        if len(actions) == 0:
            return ()
        end_time = time.time() + self.max_time
        count = 0
        # 勝利 1 引き分け 0.5, 負け 0
        # [ポイント数, 回数] でデータを保管
        action_result = [[0, 0] for _ in range(len(actions))]
        max_count = max(self.max_count, len(actions))
        win_id = GameState.WHITE_WIN.name if self.id == 0 else GameState.BLACK_WIN.name
        while count < max_count and time.time() < end_time:
            next_board = othello.copy_board()
            next_board.put(self.id, actions[count % len(actions)])
            result: str = self.simulate(next_board)
            if result == win_id:
                action_result[count % len(action_result)][0] += 1
            elif result == GameState.DRAW:
                action_result[count % len(action_result)][0] += 0.5
            action_result[count % len(action_result)][1] += 1
            count += 1
        idx = 0
        max_ = action_result[0][0] / action_result[0][1]
        for i in range(1, len(action_result)):
            if action_result[i][1] == 0:
                continue
            evl = action_result[i][0] / action_result[i][1]
            if max_ < evl:
                idx = i
                max_ = evl
        return actions[idx]

    def simulate(self, othello: Othello):
        play_id = self.id ^ 1
        # 最大の深さが0以下の場合はゲーム終了まで行う
        if self.max_depth <= 0:
            while not othello.is_done():
                actions = othello.legal_actions(play_id)
                if len(actions) == 0:
                    play_id ^= 1
                    continue
                action = random.choice(actions)
                othello.put(play_id, action)
                play_id ^= 1
            return othello.get_winner().name
        else:
            depth = 0
            while not othello.is_done() and depth <= self.max_depth:
                actions = othello.legal_actions(play_id)
                if len(actions) == 0:
                    play_id ^= 1
                    continue
                action = random.choice(actions)
                othello.put(play_id, action)
                play_id ^= 1
                depth += 1
            result = othello.get_count()
            if result[0] < result[1]:
                return GameState.BLACK_WIN.name
            elif result[0] > result[1]:
                return GameState.WHITE_WIN.name
            return GameState.DRAW.name

```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="primitive_monte_carlo_action.hpp"
#ifndef PRIMITIVEMONTECARLOACTION_H
#define PRIMITIVEMONTECARLOACTION_H

#include <utility> // pairを使用するためのヘッダーファイル
#include "../othello.hpp"
#include "action.hpp"
#include <string>
using namespace std;

class PrimitiveMonteCarloAction : public Action
{
public:
    PrimitiveMonteCarloAction(int id, int maxCount, int maxTimeInMilliseconds, int depth = -1);

    optional<pair<int, int>> action(Othello othello);

private:
    int maxCount;
    int maxTimeInMilliseconds;
    int maxDepth;

    pair<int, int> primitiveMonteCarlo(Othello othello);
    string simulate(Othello othello);
    int randCalc(const vector<pair<int, int>> &actions);
};
#endif // PRIMITIVEMONTECARLOACTION_H

```

```cpp title="primitive_monte_carlo_action.cpp"
#include "../othello.hpp" // othello.h のインクルードが必要
#include "action.hpp"     // action.h のインクルードが必要
#include "primitive_monte_carlo_action.hpp"
#include <chrono>
#include <random>
#include <optional>
#include <vector> // vectorを使用するためのヘッダーファイル
#include <string>
#include <iostream>

using namespace std;

PrimitiveMonteCarloAction::PrimitiveMonteCarloAction(int id, int maxCount, int maxTimeInMilliseconds, int depth)
    : Action(id), maxCount(maxCount), maxTimeInMilliseconds(maxTimeInMilliseconds), maxDepth(depth)
{
}

optional<pair<int, int>> PrimitiveMonteCarloAction::action(Othello othello)
{
    pair<int, int> next_action = primitiveMonteCarlo(othello);
    if (next_action == make_pair(-1, -1))
    {
        return nullopt;
    }
    return next_action;
}

pair<int, int> PrimitiveMonteCarloAction::primitiveMonteCarlo(Othello othello)
{
    std::vector<std::pair<int, int>> actions = othello.legalActions(this->id);
    if (actions.empty())
    {
        return make_pair(-1, -1);
    }
    auto startTime = chrono::high_resolution_clock::now();
    auto endTime = startTime + chrono::milliseconds(maxTimeInMilliseconds);
    int count = 0;

    vector<pair<double, int>> actionResult(actions.size(), {0, 0});

    string win_id = this->id == 0 ? "White Win" : "Black Win";

    while (count < maxCount && chrono::high_resolution_clock::now() < endTime)
    {
        Othello next_board = othello;
        next_board.put(this->id, actions[count % actions.size()]);
        string result = simulate(next_board);
        if (result == win_id)
        {
            actionResult[count % actionResult.size()].first += 1;
        }
        else if (result == "Draw")
        {
            actionResult[count % actionResult.size()].first += 0.5;
        }

        actionResult[count % actionResult.size()].second += 1;
        count += 1;
    }

    int idx = 0;
    double max_ = actionResult[0].first / actionResult[0].second;

    for (int i = 1; i < actionResult.size(); ++i)
    {
        if (actionResult[i].second == 0)
        {
            continue;
        }

        double evl = actionResult[i].first / actionResult[i].second;

        if (max_ < evl)
        {
            idx = i;
            max_ = evl;
        }
    }
    return actions[idx];
}

string PrimitiveMonteCarloAction::simulate(Othello othello)
{
    int play_id = this->id ^ 1;

    if (maxDepth <= 0)
    {
        while (!othello.isDone())
        {
            vector<pair<int, int>> actions = othello.legalActions(play_id);

            if (actions.empty())
            {
                play_id ^= 1;
                continue;
            }

            int random_index = randCalc(actions);
            othello.put(play_id, actions[random_index]);
            play_id ^= 1;
        }

        return othello.getWinner();
    }
    else
    {
        int depth = 0;

        while (!othello.isDone() && depth < maxDepth)
        {
            std::vector<std::pair<int, int>> actions = othello.legalActions(play_id);

            if (actions.empty())
            {
                play_id ^= 1;
                continue;
            }

            int random_index = randCalc(actions);
            othello.put(play_id, actions[random_index]);
            play_id ^= 1;
            depth += 1;
        }

        std::pair<int, int> result = othello.getCount();

        if (result.first < result.second)
        {
            return "Black Win";
        }
        else if (result.first > result.second)
        {
            return "White Win";
        }

        return "Draw";
    }
}

int PrimitiveMonteCarloAction::randCalc(const vector<pair<int, int>> &actions)
{
    random_device rd;
    mt19937 gen(rd());
    uniform_int_distribution<int> dist(0, actions.size() - 1);
    return dist(gen);
}
```

  </TabItem>
</Tabs>

#### 変更

##### player

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="player.py"  {20-21}
from lib.othello import Othello
from lib.actions import *


class Player():

    def __init__(self, _id: int, board: Othello, strategy: str, depth=2, evaluation: str = "mass_count", max_time: int = 1, max_count=100) -> None:
        self.id = _id
        self.othello = board
        # 次の手を選択する手法を返る
        match strategy:
            case "random":
                self.strategy = RandomAction(_id)
            case "minimax":
                self.strategy = MiniMaxAction(_id, depth, evaluation)
            case "alpha_beta":
                self.strategy = AlphaBetaAction(_id, depth, evaluation)
            case "iterative_deepening_alpha_beta":
                self.strategy = IterativeDeepeningAlphaBetaAction(_id, depth, evaluation, max_time)
            case "primitive_monte_carlo":
                self.strategy = PrimitiveMonteCarloAction(_id, max_count, max_time, depth)
            case _:
                self.strategy = RandomAction(_id)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="player.cpp"  {8,36-37}
#include "othello.hpp"
#include "evaluation.hpp"
#include "action/action.hpp"
#include "action/random_action.hpp"
#include "action/mini_max_action.hpp"
#include "action/alpha_beta_action.hpp"
#include "action/iterative_deepening_alpha_beta_action.hpp"
#include "action/primitive_monte_carlo_action.hpp"

#include <memory>  // unique_ptrを使用するためのヘッダーファイル
#include <vector>  // vectorを使用するためのヘッダーファイル
#include <utility> // pairを使用するためのヘッダーファイル
#include <iostream>
#include <typeinfo>

#include "player.hpp"
using namespace std;
Player::Player(int _id, Othello &_othello, const Strategy strategy, int depth, int maxTime, int maxCount, Evaluation evaluation) : id(_id), othello(_othello)
{
    id = _id;

    switch (strategy)
    {
    case Strategy::RANDOM:
        this->strategy = make_unique<RandomAction>(_id);
        break;
    case Strategy::MINIMAX:
        this->strategy = make_unique<MiniMaxAction>(_id, depth, evaluation);
        break;
    case Strategy::ALPHABETA:
        this->strategy = make_unique<AlphaBetaAction>(_id, depth, evaluation);
        break;
    case Strategy::ITERATIVE_DEEPENING_ALPHA_BETA:
        this->strategy = make_unique<IterativeDeepeningAlphaBetaAction>(_id, depth, maxTime, evaluation);
        break;
    case Strategy::PRIMITIVE_MONTE_CARLO:
        this->strategy = make_unique<PrimitiveMonteCarloAction>(_id, maxCount, maxTime, depth);
        break;
    default:
        this->strategy = make_unique<RandomAction>(_id);
        break;
    }
}
```

  </TabItem>
</Tabs>

##### c++だけ

**makefile**

```makefile
# コンパイラとコンパイラオプション
CXX = g++
CXXFLAGS =

OUT_PATH = ./out

# ターゲット: 依存ファイル
othello: $(OUT_PATH)/main.o $(OUT_PATH)/othello.o $(OUT_PATH)/evaluation.o $(OUT_PATH)/action.o $(OUT_PATH)/random_action.o $(OUT_PATH)/mini_max_action.o $(OUT_PATH)/alpha_beta_action.o $(OUT_PATH)/iterative_deepening_alpha_beta_action.o $(OUT_PATH)/primitive_monte_carlo_action.o $(OUT_PATH)/player.o
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

$(OUT_PATH)/mini_max_action.o: lib/action/mini_max_action.cpp
    $(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/alpha_beta_action.o: lib/action/alpha_beta_action.cpp
    $(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/iterative_deepening_alpha_beta_action.o: lib/action/iterative_deepening_alpha_beta_action.cpp
    $(CXX) $(CXXFLAGS) -c $< -o $@

$(OUT_PATH)/primitive_monte_carlo_action.o: lib/action/primitive_monte_carlo_action.cpp
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
    g++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/action/mini_max_action.cpp lib/action/alpha_beta_action.cpp lib/action/iterative_deepening_alpha_beta_action.cpp lib/action/primitive_monte_carlo_action.cpp lib/player.cpp -o ./othello
```

**action.hpp**

```cpp
enum class Strategy
{
    RANDOM,
    MINIMAX,
    ALPHABETA,
    ITERATIVE_DEEPENING_ALPHA_BETA,
    PRIMITIVE_MONTE_CARLO
};
```
