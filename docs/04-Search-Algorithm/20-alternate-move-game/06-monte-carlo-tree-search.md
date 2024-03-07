---
title: モンテカルロ木探索
sidebar_label: モンテカルロ木探索
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## モンテカルロ木探索とは

原始モンテカルロ法では完全にランダムに手を選択していた。そのため、自分にとって良い手も相手にとって良い手も等しい確率で選択されるため、勝率をあげることができなかった。
この問題を改善したものが`モンテカルロ木探索`である。モンテカルロ木探索では、評価関数に基づいて探索する手を選択し、その後はランダムで手を選択する。これにより、強い手はより探索が行われ、弱い手はあまり探索を行わないようになり、より良い手を選択できる様になる。

### アルゴリズム

モンテカルロ木探索の評価関数としてよく用いられるのがUCT(Upper Confidence Bound for Trees)と呼ばれる評価関数で、探索された各ノードの価値と探索回数の組み合わせに基づいて、ノードの選好度を計算する関数である。

$$

\begin{align*}
  UCT(n) &= \frac{Q(n)}{N(n)} + C \sqrt{\frac{\ln{N(p)}}{N(n)}} \\

  Q(n) &\text{:ノード $n$ の合計報酬（例: 勝利の回数）} \\
  N(n) &\text{:ノード $n$ が訪れられた回数} \\
  N(p) &\text{:全試行回数} \\
  C &\text{:調整パラメータで、探索と活用のバランスを調整する} \\
\end{align*}

$$

$+$記号で分けると左側は勝率を表し、勝利することが多い場合はこちらの値が大きくなる。右側は試行回数で決める値になっており、試行回数が多いほど小さく、少ないほど大きな値を取るようになる。勝率が高いかあまり探索されていないノードがより優先的に選択される評価関数となっている。また、Cは慣習的に$\sqrt{2}$とすることが多い。

以下の盤面を考える。次に白が置ける場所は6箇所ある。

![モンテカルロ木探索](/img/svg/Search-Algorithm/monte-carlo-tree-search/monte-carlo-tree-search-1.drawio.svg)

一番初めは訪れた回数($N_{(n)}$)が0なので評価値を最大にする。ここでは最大値を$10^9$とする。

|             番号              | 訪れた回数 | 勝利数 | UCT値  |
| :---------------------------: | :--------: | :----: | :----: |
| $\textcircled{\scriptsize 1}$ |     0      |   0    | $10^9$ |
| $\textcircled{\scriptsize 2}$ |     0      |   0    | $10^9$ |
| $\textcircled{\scriptsize 3}$ |     0      |   0    | $10^9$ |
| $\textcircled{\scriptsize 4}$ |     0      |   0    | $10^9$ |
| $\textcircled{\scriptsize 5}$ |     0      |   0    | $10^9$ |
| $\textcircled{\scriptsize 6}$ |     0      |   0    | $10^9$ |

この中で一番大きいUCT値を持つのは$\textcircled{\scriptsize 1}$なので、1番の手を選択する。その後ゲームが終了するまでお互いにランダムな手を選択してゲームを終了させる。

![モンテカルロ木探索2](/img/svg/Search-Algorithm/monte-carlo-tree-search/monte-carlo-tree-search-2.drawio.svg)

今回はゲーム終了までシミュレーションすると計算時間がかかるので20手打ち合い、その時点での勝敗を記録する。

白を置いた手番での自分のコマの数が多い場合は勝利とみなし、$Q_{(n)}$に加算する。今回の場合は$\textcircled{\scriptsize 1}$を選択した後に白が勝利したとすると、木のUCT値は以下の様に変化する。

|             番号              | 訪れた回数 | 勝利数 |                        UCT値                        |
| :---------------------------: | :--------: | :----: | :-------------------------------------------------: |
| $\textcircled{\scriptsize 1}$ |     1      |   1    | $1/1 + \sqrt{2} \times \sqrt{\frac{\ln{1}}{1}} = 1$ |
| $\textcircled{\scriptsize 2}$ |     0      |   0    |                       $10^9$                        |
| $\textcircled{\scriptsize 3}$ |     0      |   0    |                       $10^9$                        |
| $\textcircled{\scriptsize 4}$ |     0      |   0    |                       $10^9$                        |
| $\textcircled{\scriptsize 5}$ |     0      |   0    |                       $10^9$                        |
| $\textcircled{\scriptsize 6}$ |     0      |   0    |                       $10^9$                        |

この流れを1回として繰り返していく。閾値を設定し、閾値を超えた回数探索した木から子ノードの拡張を行っていく。今回は閾値を10回とし、上記の選択+シミュレーションを繰り返していくと閾値を超える手が登場する。

|             番号              | 訪れた回数 | 勝利数 |                                  UCT値                                  |
| :---------------------------: | :--------: | :----: | :---------------------------------------------------------------------: |
| $\textcircled{\scriptsize 1}$ |     10     |   9    | $9/10 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{10}} \thickapprox 1.7646 $ |
| $\textcircled{\scriptsize 2}$ |     4      |   1    |  $1/4 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{4}} \thickapprox 1.6170$   |
| $\textcircled{\scriptsize 3}$ |     5      |   1    |  $1/5 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{5}} \thickapprox 1.4227$   |
| $\textcircled{\scriptsize 4}$ |     9      |   6    |  $6/9 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{9}} \thickapprox 1.5780$   |
| $\textcircled{\scriptsize 5}$ |     7      |   4    |  $4/7 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{7}} \thickapprox 1.6048$   |
| $\textcircled{\scriptsize 6}$ |     7      |   4    |  $4/7 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{7}} \thickapprox 1.6048$   |

$\textcircled{\scriptsize 1}$が10回を超えたので木を展開する。展開すると次のような木を構成する。木を展開すると次の局面の開始が変わるので、評価する際の勝ち, 負けの判断が反転することになる。

|          1番目の番号          |          2番目の番号          | 訪れた回数 | 勝利数 |                                UCT値                                 |
| :---------------------------: | :---------------------------: | :--------: | :----: | :------------------------------------------------------------------: |
| $\textcircled{\scriptsize 1}$ |                               |     10     |   9    |                                $10^9$                                |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 1}$ |     0      |   0    |                                $10^9$                                |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 2}$ |     0      |   0    |                                $10^9$                                |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 3}$ |     0      |   0    |                                $10^9$                                |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 4}$ |     0      |   0    |                                $10^9$                                |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 5}$ |     0      |   0    |                                $10^9$                                |
| $\textcircled{\scriptsize 2}$ |                               |     4      |   1    | $1/4 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{4}} \thickapprox 1.6170$ |
| $\textcircled{\scriptsize 3}$ |                               |     5      |   1    | $1/5 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{5}} \thickapprox 1.4227$ |
| $\textcircled{\scriptsize 4}$ |                               |     9      |   6    | $6/9 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{9}} \thickapprox 1.5780$ |
| $\textcircled{\scriptsize 5}$ |                               |     7      |   4    | $4/7 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{7}} \thickapprox 1.6048$ |
| $\textcircled{\scriptsize 6}$ |                               |     7      |   4    | $4/7 + \sqrt{2} \times \sqrt{\frac{\ln{42}}{7}} \thickapprox 1.6048$ |

![モンテカルロ木探索3](/img/svg/Search-Algorithm/monte-carlo-tree-search/monte-carlo-tree-search-3.drawio.svg)

1番目の$\textcircled{\scriptsize 1}$のUCT値は展開した2番目の番号の中の最大の値を採用する。そのため1番目の$\textcircled{\scriptsize 1}$のUCT値は$10^9$となる。そのため、5回分は$\textcircled{\scriptsize 1}$ - $\textcircled{\scriptsize 1}$ $\sim$ $\textcircled{\scriptsize 5}$ が選択される。

|          1番目の番号          |          2番目の番号          | 訪れた回数 | 勝利数 |                                UCT値                                 |
| :---------------------------: | :---------------------------: | :--------: | :----: | :------------------------------------------------------------------: |
| $\textcircled{\scriptsize 1}$ |                               |     15     |   11   | 3.7749 ($\textcircled{\scriptsize 1}$-$\textcircled{\scriptsize 2}$) |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 1}$ |     1      |   0    | $0/1 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{1}} \thickapprox 2.7749$ |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 2}$ |     1      |   1    | $1/1 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{1}} \thickapprox 3.7749$ |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 3}$ |     1      |   1    | $1/1 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{1}} \thickapprox 3.7749$ |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 4}$ |     1      |   0    | $0/1 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{1}} \thickapprox 2.7749$ |
| $\textcircled{\scriptsize 1}$ | $\textcircled{\scriptsize 5}$ |     1      |   0    | $0/1 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{1}} \thickapprox 2.7749$ |
| $\textcircled{\scriptsize 2}$ |                               |     4      |   1    | $1/4 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{4}} \thickapprox 1.6374$ |
| $\textcircled{\scriptsize 3}$ |                               |     5      |   1    | $1/5 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{5}} \thickapprox 1.4409$ |
| $\textcircled{\scriptsize 4}$ |                               |     9      |   6    | $6/9 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{9}} \thickapprox 1.5916$ |
| $\textcircled{\scriptsize 5}$ |                               |     7      |   4    | $4/7 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{7}} \thickapprox 1.6202$ |
| $\textcircled{\scriptsize 6}$ |                               |     7      |   4    | $4/7 + \sqrt{2} \times \sqrt{\frac{\ln{47}}{7}} \thickapprox 1.6202$ |

このように閾値を超えた木は展開させ、木を深くしていく。これにより、有効な手の調査回数を増加させ、不利な手の調査回数を下げることができる。
この様にシミュレーション, バックプロパゲーション, 拡張, 選択の4つステップが存在し、これを繰り返し行っていく。

- 選択 (Selection): 現在の木構造を使用して、各ノードに対して適切な評価値を計算し、最も有望な手を選択する。
- 拡張 (Expansion): 選択したノードに子ノードを生成し、新しい手を追加する。これにより、未知の領域を探索する機会が増える。
- シミュレーション (Simulation): 新しく追加された子ノードや既存のノードに対して、ランダムな手を選択してゲームをシミュレートする。
- バックプロパゲーション (Backpropagation): シミュレーションの結果を使用して、選択されたノードの評価値（勝率など）を更新する。これは、親ノードからルートノードまで逆向きに行う。(今回の例では勝利数・訪れた回数を変化させている)

探索を終了する条件は様々であり、一定回数探索が行われた場合に終了する場合や一定時間が経過したら終了とする等存在する。
探索を終了した後に、最終的に自分が選択する手は深さ1にあるノードの中で一番訪れた回数が多いもの=一番探索が行われた=一番有利だろう手を選択する。

ランダム 選択とモンテカルロ木探索(深さ20, 最大探索時間100ms, 最大探索回数200回, 閾値20, $\sqrt{2}$の調整パラメータ)で 100 回の対戦結果は以下のとなった

|    アルゴリズム    | 勝利数 |
| :----------------: | :----: |
| モンテカルロ木探索 |   94   |
|      ランダム      |   5    |

でランダム選択に勝率94%であったが、探索時間と回数を

ランダム 選択とモンテカルロ木探索(深さ20, 最大探索増やすと時間1000ms, 最大探索回数2000回, 閾値20, $\sqrt{2}$の調整パラメータ)で 100 回の対戦結果は

|    アルゴリズム    | 勝利数 |
| :----------------: | :----: |
| モンテカルロ木探索 |  100   |
|      ランダム      |   0    |

でランダム選択に勝率100%を記録した。

原始モンテカルロと同じ条件でMiniMax 法(深さ 2 まで)とモンテカルロ木探索(深さ20, 最大探索時間100ms, 最大探索回数200回, 閾値20, $\sqrt{2}$の調整パラメータ)で 100 回の対戦結果は以下のとなった

|    アルゴリズム    | 勝利数 |
| :----------------: | :----: |
| モンテカルロ木探索 |   32   |
|      MiniMax       |   67   |

となり、原始モンテカルロ法の時よりも勝率が上昇していることがわかる。

原始モンテカルロ(深さ20, 探索回数200回)とモンテカルロ木探索(深さ20, 最大探索時間100ms, 最大探索回数200回, 閾値20, $\sqrt{2}$の調整パラメータ)で 100 回の対戦結果は以下のとなった

|    アルゴリズム    | 勝利数 |
| :----------------: | :----: |
| モンテカルロ木探索 |   63   |
|  原始モンテカルロ  |   34   |

### コード

#### monte_carlo_tree_search_action

反復深化を導入し、一定時間が経過した場合は探索を停止し、時間内で一番良い手を選択する様にしている。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="monte_carlo_tree_search_action.py"
from lib.evaluation import *
from .action import Action
from lib.othello import Othello, GameState
import sys
from pathlib import Path
import random
import time
import math
sys.path.append(str(Path(__file__).parent.parent.parent))


class Node:
    # モンテカルロ木を構築するためのClass
    def __init__(self, othello: Othello, _id: int, action: tuple[int, int] | None = None, parent=None):
        # この木の行動結果
        self.othello = othello
        # この木の行動
        self.action = action
        # この木で行動したPlayer
        self.id = _id
        # 親ノード
        self.parent = parent
        # 子ノード
        self.children = []
        # この木を選択した回数
        self.visits = 0
        # この木の価値 (勝利: 1, 引き分け: 0.5, 負け: 0)
        self.value = 0

    def build_tree(self):
        # 木に子ノードを展開する
        # 木にはNode.idが行動した後の盤面が記録されている
        for action in self.othello.legal_actions(self.id ^ 1):
            next_othello = self.othello.copy_board()
            next_othello.put(self.id ^ 1, action)
            # 取れるアクション子ノードを作成
            child = Node(next_othello, self.id ^ 1, action, self)
            self.children.append(child)


class MonteCarloTreeSearchAction(Action):

    def __init__(self, id: int, threshold: int = 10, max_time: float = 10000, exploration_weight: float = 1.41421356237, max_count: int = 300, depth: int = -1) -> None:
        super().__init__(id)
        # 計算する最大時間 (反復深化)
        self.max_time = max_time
        # ハイパーパラメータ c
        # (理論的には)√2が良いとされている
        self.exploration_weight = exploration_weight
        # 探索する深さ
        self.max_depth = depth
        # 木を展開する閾値
        self.threshold = threshold
        # 最大試行回数
        self.max_count = max_count

    def action(self, othello: Othello):
        # 何もできない場合は何もせずに次へ
        if len(othello.legal_actions(self.id)) == 0:
            return None
        # 根を作成
        # 根は相手が盤面を選択して終了しているのでplayer idを変更する
        root = Node(othello, self.id ^ 1, None, None)
        # 初めの子ノードを展開
        root.build_tree()

        end_time = time.time() + self.max_time
        count = 0
        while time.time() < end_time and count < self.max_count:
            node = self.select(root, count)
            result = self.simulate(node.othello.copy_board(), node.id)
            self.back_propagate(node, result)
            if node.visits > self.threshold:
                node.build_tree()
            count += 1
        best_child = self.best_child(root)
        return best_child.action

    def select(self, node: Node, cum_time: int):
        # 子が存在する場合は子ノードのなかで最大のNodeを選定する
        while len(node.children) > 0:
            node = self.best_uct(node, cum_time)
        return node

    def best_uct(self, node: Node, cum_time: int):
        # UCT(Upper Confidence Bound for Trees)による行動選択を行う
        def uct_value(child):
            if child.visits == 0:
                return float('inf')
            # UCT
            # c * sqrt(ln(N) / n) + v / n
            # c : ペナルティ項目
            # N : 累計試行回数
            # n : このNodeの試行回数
            # v : 価値
            return (child.value / child.visits) + self.exploration_weight * (math.sqrt(math.log(cum_time) / child.visits))

        return max(node.children, key=uct_value)

    def simulate(self, othello: Othello, _id: int):
        play_id = _id ^ 1
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
            return 0 if self.id == 0 else 1
        elif result[0] > result[1]:
            return 1 if self.id == 0 else 0
        return 0.5

    def back_propagate(self, node, result):
        while node is not None:
            node.visits += 1
            node.value += result if node.action is not None else 0  # 盤面が存在するものだけ更新
            node = node.parent

    def best_child(self, node: Node) -> Node:
        return max(node.children, key=lambda child: child.visits)

```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="monte_carlo_tree_search_action.hpp"
// monte_carlo_tree_search_action.hpp

#ifndef MONTE_CARLO_TREE_SEARCH_ACTION_HPP
#define MONTE_CARLO_TREE_SEARCH_ACTION_HPP

#include "../othello.hpp"
#include "action.hpp"
#include <vector>
#include <utility> // pairを使用するためのヘッダーファイル
using namespace std;

class Node
{
public:
    Othello othello;         // このノードの盤面状態
    pair<int, int> action;   // このノードでの行動
    int id;                  // このノードでのプレイヤーID
    Node *parent;            // 親ノード
    vector<Node *> children; // 子ノード
    int visits;              // このノードが選択された回数
    double value;            // このノードの評価値

    Node(Othello oth, int _id, pair<int, int> act, Node *par)
        : othello(oth), id(_id), action(act), parent(par), visits(0), value(0) {}

    void buildTree(); // 木を構築するメソッド
};

class MonteCarloTreeSearchAction : public Action
{
public:
    int maxTimeInMilliseconds; // 最大計算時間（反復深化）
    double explorationWeight;  // ハイパーパラメータ c
    int maxDepth;              // 探索する深さ
    int threshold;             // 木を展開する閾値
    int maxCount;              // 最大試行回数

    MonteCarloTreeSearchAction(int id, int threshold = 10, int maxTimeInMilliseconds = 10000, double explorationWeight = 1.41421356237, int maxCount = 300, int depth = -1);

    optional<pair<int, int>> action(Othello othello) override;

private:
    Node *select(Node *node, int cum_time);        // ノードの選択メソッド
    Node *bestUct(Node *node, int cum_time);       // UCTに基づく最良のノードを選択するメソッド
    double uctValue(Node *child, int cum_time);    // UCT値を計算するメソッド
    double simulate(Othello othello, int _id);     // シミュレーションを行うメソッド
    void backPropagate(Node *node, double result); // 評価値を親ノードに伝播させるメソッド
    Node *bestChild(Node *node);                   // 最良の子ノードを選択するメソッド
    int randCalc(const vector<pair<int, int>> &actions);

    const int maxNum = 10'000'000;
};

#endif // MONTE_CARLO_TREE_SEARCH_ACTION_HPP
```

```cpp title="monte_carlo_tree_search_action.cpp"
#include "../othello.hpp" // othello.h のインクルードが必要
#include "action.hpp"     // action.h のインクルードが必要
#include "monte_carlo_tree_search_action.hpp"
#include <chrono>
#include <random>
#include <optional>
#include <vector> // vectorを使用するためのヘッダーファイル
#include <string>
#include <algorithm> // 必要なヘッダーファイル
#include <iostream>

using namespace std;

void Node::buildTree()
{
    // 木に子ノードを展開するためのメソッド
    for (const auto &action : othello.legalActions(id ^ 1))
    {
        Othello next_othello = othello.copyBoard();
        next_othello.put(id ^ 1, action);
        // 取れるアクション毎に子ノードを作成
        Node *child = new Node(next_othello, id ^ 1, action, this);
        children.push_back(child);
    }
}

MonteCarloTreeSearchAction::MonteCarloTreeSearchAction(int id, int threshold, int maxTimeInMilliseconds, double explorationWeight, int maxCount, int depth)
    : Action(id), maxTimeInMilliseconds(maxTimeInMilliseconds), explorationWeight(explorationWeight), maxDepth(depth), threshold(threshold), maxCount(maxCount)
{
}

optional<pair<int, int>> MonteCarloTreeSearchAction::action(Othello othello)
{
    if (othello.legalActions(id).empty())
    {
        return nullopt;
    }

    Node *root = new Node(othello, id ^ 1, make_pair(-1, -1), nullptr);
    root->buildTree();

    auto endTime = std::chrono::high_resolution_clock::now() + std::chrono::milliseconds(maxTimeInMilliseconds);
    int count = 0;

    while (std::chrono::high_resolution_clock::now() < endTime && count < maxCount)
    {
        Node *node = select(root, count);
        double result = simulate(node->othello, node->id);
        backPropagate(node, result);

        if (node->visits > threshold)
        {
            node->buildTree();
        }

        count++;
    }

    Node *bestChild = this->bestChild(root);
    return bestChild->action;
}

Node *MonteCarloTreeSearchAction::select(Node *node, int cumTime)
{
    while (!node->children.empty())
    {
        node = bestUct(node, cumTime);
    }
    return node;
}

Node *MonteCarloTreeSearchAction::bestUct(Node *node, int cumTime)
{
    return *max_element(
        node->children.begin(), node->children.end(),
        [this, cumTime](Node *child1, Node *child2)
        {
            return uctValue(child1, cumTime) < uctValue(child2, cumTime);
        });
}

Node *MonteCarloTreeSearchAction::bestChild(Node *node)
{
    return *max_element(
        node->children.begin(), node->children.end(),
        [](Node *child1, Node *child2)
        {
            return child1->visits < child2->visits;
        });
}

double MonteCarloTreeSearchAction::uctValue(Node *child, int cumTime)
{
    if (child->visits == 0)
    {
        return maxNum;
    }
    // UCT
    // c *sqrt(ln(N) / n) + v / n
    // c : ペナルティ項目
    // N : 累計試行回数
    // n : このNodeの試行回数
    // v : 価値
    return (child->value / child->visits) + explorationWeight * (sqrt(log(cumTime) / child->visits));
}

double MonteCarloTreeSearchAction::simulate(Othello othello, int _id)
{
    int play_id = _id ^ 1;
    int depth = 0;

    while (!othello.isDone() && depth <= maxDepth)
    {
        vector<std::pair<int, int>> actions = othello.legalActions(play_id);
        if (actions.empty())
        {
            play_id ^= 1;
            continue;
        }
        int random_index = randCalc(actions);
        othello.put(play_id, actions[random_index]);
        play_id ^= 1;
        depth++;
    }

    pair<int, int> result = othello.getCount();

    if (result.first < result.second)
    {
        return (id == 0) ? 0 : 1;
    }
    else if (result.first > result.second)
    {
        return (id == 0) ? 1 : 0;
    }
    return 0.5;
}

void MonteCarloTreeSearchAction::backPropagate(Node *node, double result)
{
    while (node != nullptr)
    {
        node->visits++;
        node->value += (node->action != make_pair(-1, -1)) ? result : 0;
        node = node->parent;
    }
}

int MonteCarloTreeSearchAction::randCalc(const vector<pair<int, int>> &actions)
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

```python title="player.py" {2-13,32-33}
class Player():
    def __init__(
        self,
        _id: int,
        board: Othello,
        strategy: str,
        depth=2,
        evaluation: str = "mass_count",
        max_time: int = 1,
        max_count=100,
        threshold: int = 20,
        exploration_weight: float = 1.41421356237
    ) -> None:
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
                self.strategy = IterativeDeepeningAlphaBetaAction(
                    _id, depth, evaluation, max_time)
            case "primitive_monte_carlo":
                self.strategy = PrimitiveMonteCarloAction(
                    _id, max_count, max_time, depth)
            case "monte_carlo_tree_search":
                self.strategy = MonteCarloTreeSearchAction(
                    _id, threshold, max_time, exploration_weight, max_count, depth)
            case _:
                self.strategy = RandomAction(_id)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="player.cpp"  {9,19,39-41}
#include "othello.hpp"
#include "evaluation.hpp"
#include "action/action.hpp"
#include "action/random_action.hpp"
#include "action/mini_max_action.hpp"
#include "action/alpha_beta_action.hpp"
#include "action/iterative_deepening_alpha_beta_action.hpp"
#include "action/primitive_monte_carlo_action.hpp"
#include "action/monte_carlo_tree_search_action.hpp"

#include <memory>  // unique_ptrを使用するためのヘッダーファイル
#include <vector>  // vectorを使用するためのヘッダーファイル
#include <utility> // pairを使用するためのヘッダーファイル
#include <iostream>
#include <typeinfo>

#include "player.hpp"
using namespace std;
Player::Player(int _id, Othello &_othello, const Strategy strategy, int depth, int maxTime, int maxCount, int threshold, double explorationWeight, Evaluation evaluation) : id(_id), othello(_othello)
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
    case Strategy::MONTE_CARLO_TREE_SEARCH:
        this->strategy = make_unique<MonteCarloTreeSearchAction>(_id, threshold, maxTime, explorationWeight, maxCount, depth);
        break;
    default:
        this->strategy = make_unique<RandomAction>(_id);
        break;
    }
}
```

```cpp title="player.hpp"  {5}
class Player
{

public:
    Player(int _id, Othello &_othello, const Strategy strategy, int depth = 2, int maxTime = 1000, int maxCount = 100, int threshold = 20, double explorationWeight = 1.41421356237, Evaluation evaluation = Evaluation::MASS_COUNT);

    pair<int, int> put();
    Player &operator=(const Player &player);

private:
    int id;
    Othello &othello;
    unique_ptr<Action> strategy;

    int (Player::*action)(const vector<pair<int, int>> &);
};
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
othello: $(OUT_PATH)/main.o $(OUT_PATH)/othello.o $(OUT_PATH)/evaluation.o $(OUT_PATH)/action.o $(OUT_PATH)/random_action.o $(OUT_PATH)/mini_max_action.o $(OUT_PATH)/alpha_beta_action.o $(OUT_PATH)/iterative_deepening_alpha_beta_action.o $(OUT_PATH)/primitive_monte_carlo_action.o $(OUT_PATH)/monte_carlo_tree_search_action.o $(OUT_PATH)/player.o
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

$(OUT_PATH)/monte_carlo_tree_search_action.o: lib/action/monte_carlo_tree_search_action.cpp
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
 g++ main.cpp lib/othello.cpp lib/evaluation.cpp lib/action/action.cpp lib/action/random_action.cpp lib/action/mini_max_action.cpp lib/action/alpha_beta_action.cpp lib/action/iterative_deepening_alpha_beta_action.cpp lib/action/primitive_monte_carlo_action.cpp lib/action/monte_carlo_tree_search_action.cpp lib/player.cpp -o ./othello

```

**action.hpp**

```cpp
enum class Strategy
{
    RANDOM,
    MINIMAX,
    ALPHABETA,
    ITERATIVE_DEEPENING_ALPHA_BETA,
    PRIMITIVE_MONTE_CARLO,
    MONTE_CARLO_TREE_SEARCH,
};
```
