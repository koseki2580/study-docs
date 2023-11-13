---
title: Alpha-Beta法
sidebar_label: Alpha-Beta法
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Alpha-Beta 法とは

MiniMax 法ではゲーム木を構築し、最良手を選択した。しかし、ゲーム木は探索する深さを深くするほど、計算時間が膨大になっていく。計算時間膨大になるのを防ぐために、枝刈りを導入し、計算時間を短くしたものが`Alpha-Beta法`である。

### アルゴリズム

基本的には同じで枝刈りが行われる。MiniMax 法と同じようゲーム木を深さ 3 まで考える。以下の盤面で次が白の手番だとする。

![Alpha-Beta法1](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-1.drawio.svg)

この盤面のゲーム木は次の様になる。

![Alpha-Beta法2](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-2.drawio.svg)

深さ 2 までのゲーム木は以下の様になる。

1 番 (2-1 番と以後呼ぶ)

![Alpha-Beta法3](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-3.drawio.svg)

2 番 (2-2 番と以後呼ぶ)

![Alpha-Beta法4](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-4.drawio.svg)

3 番 (2-3 番と以後呼ぶ)

![Alpha-Beta法5](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-5.drawio.svg)

4 番 (2-4 番と以後呼ぶ)

![Alpha-Beta法6](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-6.drawio.svg)

ここまでで深さ 2 のゲーム木が完成した。(一つにまとめると小さくなるのでまとめない)

次に深さ 2-1 番の深さのゲーム木を求める。

ここで評価関数は MiniMax 法と同じで

$$
白のマスの数 - 黒のマスの数
$$

として、それぞれのゲーム木の評価も加えて表示する。

![Alpha-Beta法7](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-7.drawio.svg)

深さの評価は白の手番であるため、評価関数が最大となる手を選ぶと仮定するので深さ 2 のノードを左から 1 $\sim$ 4 番とすると。

| 番号 | 最大値 |
| :--: | :----: |
|  1   |   10   |
|  2   |   10   |
|  3   |   14   |
|  4   |   10   |

となる。深さ 2 は相手の手番となるので、この中で最小となる手を選ぶと仮定するので、1 番が選択される。

まとめると、深さ 1 の 1 番の評価が 10 となる。

![Alpha-Beta法8](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-8.drawio.svg)

続けて 2-2 番の深さ 3 のゲーム木を求めると以下になる。

![Alpha-Beta法9](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-9.drawio.svg)

ここで枝刈りを行うことができる(薄く膜があるのが枝刈りによって狩ることができるゲーム木)。
2-2 の深さ 3 なので評価関数が最大となる値を選択するそのため、図を少しまとめると以下の様になる。また、説明しやすいように番号をつけていく。

![Alpha-Beta法10](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-10.drawio.svg)

深さ 2 の手番は評価関数が最小となるように選択する手を選択する。$\textcircled{\scriptsize 1}$, $\textcircled{\scriptsize 2}$の評価値は 4 となる。
$\textcircled{\scriptsize 3}$の評価値を求めるために、$\textcircled{\scriptsize 5}$を計算すると評価値が 10 となった。
$\textcircled{\scriptsize 3}$の評価値は$\textcircled{\scriptsize 5}$, $\textcircled{\scriptsize 6}$の大きい方の値が選択される。

ここで、$\textcircled{\scriptsize 5}$の評価値が 10 であるということは$\textcircled{\scriptsize 3}$の評価値は最低でも 10 となることが分かる。
しかし、$\textcircled{\scriptsize 10}$の評価値は$\textcircled{\scriptsize 1}$, $\textcircled{\scriptsize 2}$, $\textcircled{\scriptsize 3}$, $\textcircled{\scriptsize 4}$の最小値となる。つまり$\textcircled{\scriptsize 1}$, $\textcircled{\scriptsize 2}$の評価値が 4 であることから$\textcircled{\scriptsize 3}$の結果は最低でも 10 なので選ばれることがない。そのため、$\textcircled{\scriptsize 6}$の計算はする必要がないため、カットすることができる。同様の理由から$\textcircled{\scriptsize 8}$も計算する必要がないため、カットすることができ、計算量を削減することができる。

このようにスコアが一定値以上になったことで計算をカットできることを`βカット`という。

同様に考えるとこの 2-2 番はカットできるということが分かる。

![Alpha-Beta法11](/img/svg/Search-Algorithm/alpha-beta/alpha-beta-11.drawio.svg)

$\textcircled{\scriptsize 0}$, $\textcircled{\scriptsize 10}$番がある深さ 1 は評価値が最大のものを選択する。つまり、深さ 1 は最低でも評価値が 10 である。
$\textcircled{\scriptsize 10}$の評価は最低値を選択するので$\textcircled{\scriptsize 1}$が計算終了した時点で最大でも 4 にしかならないことが分かる。
そのため$\textcircled{\scriptsize 2}$, $\textcircled{\scriptsize 3}$, $\textcircled{\scriptsize 4}$の計算を行おうと$\textcircled{\scriptsize 10}$の枝は選択されることがない。そのため$\textcircled{\scriptsize 2}$, $\textcircled{\scriptsize 3}$, $\textcircled{\scriptsize 4}$の計算はする必要がないため、カットすることができる。

このようにスコアが一定値以下になったことで計算をカットできることを`αカット`という。

これら 2 つのカットを駆使して MiniMax 法の計算をより多く行うアルゴリズムが`Alpha-Beta法`である。

### コード

:::note
[探索アルゴリズム](/docs/Search-Algorithm/at-first)の節で書いたコードに追加・変更する部分のみを以下のコードに記載しています。
(変更がある場合は関数・クラス単位で載せているので丸ごと変更していただければと思います。)
:::

#### mini_max_alpha_beta_actionaction

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="alpha_beta_action.py"
from lib.evaluation import *
from .action import Action
from lib.othello import Othello
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent.parent))


class AlphaBetaAction(Action):

    def __init__(self, id: int, depth: int, evaluation: str) -> None:
        super().__init__(id)
        self.depth = depth
        self.max_num = 10**10
        match evaluation:
            case "mass_count":
                self.evaluation = EvaluationFunction.mass_count
            case "custom":
                self.evaluation = EvaluationFunction.custom_evaluation
            case _:
                self.evaluation = EvaluationFunction.mass_count

    def action(self, othello: Othello):
        _, next_action = self.alpha_beta(
            self.id, othello, 0, self.max_num * -1, self.max_num)
        if next_action == ():
            return None
        return next_action

    def alpha_beta(self, _id: int, othello: Othello, now_depth: int, alpha: float, beta: float):
        if now_depth == self.depth:
            # 自分から見ての評価を書く
            return self.evaluation(othello, self.id), ()

        # _idの手番
        actions = othello.legal_actions(_id)

        if now_depth & 1 == 1:
            _base = -1
        else:
            _base = 1

        next_put = ()
        count = self.max_num * _base * -1

        if len(actions) == 0:
            # スキップさせる手は最大の評価にする
            return count * -1, ()

        for action in actions:
            next_board = othello.copy_board()
            next_board.put(_id, action)
            value, _ = self.alpha_beta(
                _id ^ 1, next_board, now_depth + 1, alpha, beta)

            if _base * count <= _base * value:
                next_put = action
                count = value

            if now_depth & 1 == 1:
                alpha = max(alpha, count)
            else:
                beta = min(beta, count)

            if beta <= alpha:
                # αカット
                # βカット
                break

        return count, next_put
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="alpha_beta_action.hpp"
#ifndef ALPHABETA_ACTION_H
#define ALPHABETA_ACTION_H
#include <bits/stdc++.h>

#include "../othello.hpp"
#include "../evaluation.hpp"
#include "action.hpp"

using namespace std;
class AlphaBetaAction : public Action
{
public:
    int depth;
    function<int(Othello &, int)> evaluation;

    AlphaBetaAction(int id, int depth, const Evaluation evaluation);

    optional<pair<int, int>> action(Othello othello) override;

    pair<int, pair<int, int>> alphaBeta(int _id, Othello othello, int nowDepth, int alpha, int beta);

private:
    const int maxNum = 10'000'000;
};

#endif // ALPHABETA_ACTION_H
```

```cpp title="alpha_beta_action.cpp"
#include <bits/stdc++.h>

#include "../othello.hpp"
#include "../evaluation.hpp"
#include "action.hpp"
#include "alpha_beta_action.hpp"
using namespace std;

AlphaBetaAction::AlphaBetaAction(int id, int depth, const Evaluation evaluation) : Action(id), depth(depth)
{
    // 評価関数を選択
    switch (evaluation)
    {
    case Evaluation::MASS_COUNT:
        this->evaluation = [](Othello &othello, int id)
        {
            return EvaluationFunction::massCount(othello, id);
        };
        break;
    case Evaluation::CUSTOM:
        this->evaluation = [](Othello &othello, int id)
        {
            return EvaluationFunction::customEvaluation(othello, id);
        };
        break;

    default:
        this->evaluation = [](Othello &othello, int id)
        {
            return EvaluationFunction::massCount(othello, id);
        };
        break;
    }
}

optional<pair<int, int>> AlphaBetaAction::action(Othello othello)
{
    auto result = alphaBeta(this->id, othello, 0, maxNum * -1, maxNum);
    if (result.second == make_pair(-1, -1))
    {
        return nullopt;
    }
    return result.second;
}

pair<int, pair<int, int>> AlphaBetaAction::alphaBeta(int _id, Othello othello, int nowDepth, int alpha, int beta)
{
    if (nowDepth == depth)
    {
        // 自分から見た評価を計算する
        return make_pair(evaluation(othello, this->id), make_pair(-1, -1));
    }

    vector<pair<int, int>> actions = othello.legalActions(_id);

    int _base = (nowDepth & 1) == 1 ? -1 : 1;
    pair<int, pair<int, int>> nextPut = make_pair(maxNum * _base * -1, make_pair(-1, -1));

    if (actions.empty())
    {
        // スキップさせる手は最大の評価にする
        return nextPut;
    }

    for (const auto &action : actions)
    {
        Othello next_board = othello.copyBoard();
        next_board.put(_id, action);
        pair<int, pair<int, int>> value = alphaBeta(_id ^ 1, next_board, nowDepth + 1, alpha, beta);

        if (_base * nextPut.first <= _base * value.first)
        {
            nextPut = make_pair(value.first, action);
        }
        if (nowDepth & 1)
        {
            alpha = max(alpha, value.first);
        }
        else
        {
            beta = min(beta, value.first);
        }
    }

    return nextPut;
}
```

  </TabItem>
</Tabs>

#### 変更

##### player

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="player.py"  {16-17}
from lib.othello import Othello
from lib.actions import *


class Player():

    def __init__(self, _id: int, board: Othello, strategy: str, depth=2, evaluation: str = "mass_count") -> None:
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

```cpp title="player.cpp"  {23-24}
#include <bits/stdc++.h>

#include "othello.hpp"
#include "evaluation.hpp"
#include "action/action.hpp"
#include "action/random_action.hpp"
#include "action/mini_max_action.hpp"
#include "action/alpha_beta_action.hpp"

#include "player.hpp"
using namespace std;
Player::Player(int _id, Othello &_othello, const Strategy strategy, int depth, Evaluation evaluation) : id(_id), othello(_othello)
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

##### c++だけ

**makefile**

```makefile
# コンパイラとコンパイラオプション
CXX = g++
CXXFLAGS =

OUT_PATH = ./out

# ターゲット: 依存ファイル
othello: $(OUT_PATH)/main.o $(OUT_PATH)/othello.o $(OUT_PATH)/evaluation.o $(OUT_PATH)/action.o $(OUT_PATH)/random_action.o $(OUT_PATH)/mini_max_action.o $(OUT_PATH)/alpha_beta_action.o $(OUT_PATH)/player.o
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
    g++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/action/mini_max_action.cpp lib/action/alpha_beta_action.cpp lib/player.cpp -o ./othello
```

**action.hpp**

```cpp
enum class Strategy
{
    RANDOM,
    MINIMAX,
    ALPHABETA
};
```
