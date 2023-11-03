---
title: MiniMax法
sidebar_label: MiniMax法
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## MiniMax 法とは

ゲームの進行中に各プレイヤーが最適な手を選ぶために、相手プレイヤーが最悪の手(選ばれたくない手)を選ぶと仮定して、その中で自分にとって最良な手を選択していくアルゴリズムである。
探索する際にはゲーム木を構築し、ノードを何らかの評価しように基づいて評価することでその行動がいい行動であるかどうかを判断していく。

### アルゴリズム

オセロで以下のような盤面を考える。

![オセロ1](/img/svg/Search-Algorithm/mini-max/mini-max-1.drawio.svg)

白が次に置くことができるマスには色をつけている。
MiniMax 法では次に置く位置決めるためにゲーム木を用いる。ゲーム木とはゲームの進行状況や可能なアクションを視覚的に表現するデータ構造である。

今回の場合は次のようなゲーム木となる。

![オセロ2](/img/svg/Search-Algorithm/mini-max/mini-max-2.drawio.svg)

今回は置くことができるマスが 6 個あるため子ノードが 6 本できる。この 6 本が白が取ることができる行動である。
続けて黒が行動する手番となるので、それぞれノードに黒が取れる手を示すと以下の様になる。

![オセロ3](/img/svg/Search-Algorithm/mini-max/mini-max-3.drawio.svg)

黒の手番もゲーム木として表現すると以下になる。(1 つにまとめると図が小さくなり見づらくなるため、子ノードを別々に木として表現する。)
また、今回は評価関数としてコマの数で勝敗が決定するので、駒の数で評価する。

白側の評価関数

$$
白のマスの数 - 黒のマスの数
$$

値が大きいほど自分に有利な手であり、値が小さいほど相手に有利な手であると判断する。
黒の手番終了後の評価関数の結果も合わせて書いている。

![オセロ4](/img/svg/Search-Algorithm/mini-max/mini-max-4.drawio.svg)

![オセロ5](/img/svg/Search-Algorithm/mini-max/mini-max-5.drawio.svg)

![オセロ6](/img/svg/Search-Algorithm/mini-max/mini-max-6.drawio.svg)

![オセロ7](/img/svg/Search-Algorithm/mini-max/mini-max-7.drawio.svg)

![オセロ8](/img/svg/Search-Algorithm/mini-max/mini-max-8.drawio.svg)

![オセロ9](/img/svg/Search-Algorithm/mini-max/mini-max-9.drawio.svg)

各黒の手番後の最大値と最小値は以下となる。深さ 1 にあるノードを左から 1 番とする。

|             番号              | 最大値 | 最小値 |
| :---------------------------: | :----: | :----: |
| $\textcircled{\scriptsize 1}$ |   0    |   -2   |
| $\textcircled{\scriptsize 2}$ |   0    |   -2   |
| $\textcircled{\scriptsize 3}$ |   0    |   -2   |
| $\textcircled{\scriptsize 4}$ |   0    |   -2   |
| $\textcircled{\scriptsize 5}$ |   2    |   0    |
| $\textcircled{\scriptsize 6}$ |   0    |   -2   |

となる。MiniMax 法では相手は自分にとって最悪の手を打ってくると仮定しているので、深さ 1 のノードの各子ノードの最低値となる手を打ってくると想定する。
つまり、深さ 2 でいくつかの子ノードが存在するがその中で最小の値を取る選択を相手がしてくると考えるのでゲーム木が以下のように表すことができる。

![オセロ10](/img/svg/Search-Algorithm/mini-max/mini-max-10.drawio.svg)

次に深さ 1 にある子ノードからどれか一手決める必要がある。深さ 1 の決定するのは自分(白)であるため、自分にとって最適となる手を選択する。ここでいう最適というは評価関数の値が一番大きい値である。そのため$5 - 5 = 0$となっているのが評価関数が最大となっているので、左から 4 番目の手を選択する判断になる。

![オセロ11](/img/svg/Search-Algorithm/mini-max/mini-max-11.drawio.svg)

この様に相手は自分にとって最悪の手(評価関数が一番低くなる)を選択してくると仮定して、自分の手を最適(評価関数が一番高くなる)になるように探索していくアルゴリズムが`MiniMax`法である。

評価関数次第で取る手が変わってくるため、評価関数の設定がとても大切になってくる。

今回は上記の様に駒の数を評価関数にするものとオセロは角を取ることが一般的に強いと言われているため、角に駒を配置したり、辺に配置したりといった様々な要素から評価するカスタム評価関数を用意している。

MiniMax 法のそれぞれの評価関数とランダム選択の 3 つの戦略でランダム選択の相手と 1000 回対戦した勝利率は以下であった。

**白の場合**

|         選択戦略         | 勝率(対ランダム選択) |
| :----------------------: | :------------------: |
|       ランダム選択       |         51%          |
| MiniMax 法(駒の個数評価) |         73%          |
| MiniMax 法(カスタム評価) |         95%          |

**黒の場合**

|         選択戦略         | 勝率(対ランダム選択) |
| :----------------------: | :------------------: |
|       ランダム選択       |         45%          |
| MiniMax 法(駒の個数評価) |         62%          |
| MiniMax 法(カスタム評価) |         92%          |

:::note
MiniMax 法同士を対決するとお互いに同じ選択をしないため、何回繰り返しても同じに結果になってしまうため(勝利率 100% or 0%)、表記しておりません。
:::

### コード

:::note
[探索アルゴリズム](/docs/Search-Algorithm/at-first)の節で書いたコードに追加・変更する部分のみを以下のコードに記載しています。
(変更がある場合は関数・クラス単位で載せているので丸ごと変更していただければと思います。)
:::

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="mini-max.py"
class EvaluationFunction:
    @staticmethod
    def mass_count(othello: Othello, _id: int):
        if _id == 0:
            # 自分が白なのでwhite - blackで
            # 評価する
            _base = 1
        else:
            # 自分が黒なのでblack - whiteで
            # 評価する
            _base = -1
        white, black = othello.get_count()
        return (white - black) * _base

    @staticmethod
    def custom_evaluation(othello: Othello, _id: int):
        # ゲームボードの状態を取得
        board = othello.board

        # 各要素の重み付け
        corner_weight = 10
        edge_weight = 5
        mobility_weight = 2
        parity_weight = 1

        # 評価値の初期化
        evaluation = 0

        # コーナーの評価
        corner_value = 0
        for i in [0, othello.map_size - 1]:
            for j in [0, othello.map_size - 1]:
                if board[i][j] == _id:
                    corner_value += 1
                elif board[i][j] == _id ^ 1:
                    corner_value -= 1
        evaluation += corner_weight * corner_value

        # 辺の評価
        edge_value = 0
        for i in range(othello.map_size):
            for j in [0, othello.map_size - 1]:
                # 縦の辺
                if board[i][j] == _id:
                    edge_value += 1
                elif board[i][j] == _id ^ 1:
                    edge_value -= 1

                # 横の辺
                if board[j][i] == _id:
                    edge_value += 1
                elif board[j][i] == _id ^ 1:
                    edge_value -= 1
        evaluation += edge_weight * edge_value

        # モビリティの評価
        mobility_value = len(othello.legal_actions(_id)) - \
            len(othello.legal_actions(_id ^ 1))
        evaluation += mobility_weight * mobility_value

        # パリティの評価
        # プレイヤーの石の数を取得
        white, black = othello.get_count()
        if _id == 1:
            _base = -1
        else:
            _base = 1
        parity_value = 0
        if white > black:
            parity_value = 1
        elif white < black:
            parity_value = -1
        evaluation += parity_weight * parity_value * _base

        return evaluation


class MiniMaxAction(Action):

    def __init__(self, id: int, depth: int, evaluation: str) -> None:
        super().__init__(id)
        self.depth = depth
        match evaluation:
            case "mass_count":
                self.evaluation = EvaluationFunction.mass_count
            case "custom":
                self.evaluation = EvaluationFunction.custom_evaluation
            case _:
                self.evaluation = EvaluationFunction.mass_count

    def action(self, othello: Othello):
        _, next_action = self.mini_max(self.id, othello, 0)
        if next_action == ():
            return None
        return next_action

    def mini_max(self, _id: int, othello: Othello, now_depth: int):
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
        count = 10**10 * _base * -1
        if len(actions) == 0:
            # スキップさせる手は最大の評価にする
            return count * -1, ()
        for action in actions:
            next_board = othello.copy_board()
            next_board.put(_id, action)
            value, _ = self.mini_max(_id ^ 1, next_board, now_depth + 1)
            if _base * count <= _base * value:
                next_put = action
                count = value

        return count, next_put

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
            case _:
                self.strategy = RandomAction(_id)

    def put(self):
        action = self.strategy.action(self.othello.copy_board())
        # 置くところがなかった場合
        if action is None:
            return
        self.othello.put(self.id, action)

def play_game(player1_strategy, player2_strategy):
    # 対戦マップ作成
    othello = Othello()

    # playerを作成
    player1 = Player(0, othello, player1_strategy, 2, "custom")
    player2 = Player(1, othello, player2_strategy)

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
    win = play_game("minimax", "random")
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

```cpp title="mini-max.cpp"
enum class Strategy
{
    RANDOM,
    MINIMAX
};
enum class Evaluation
{
    MASS_COUNT,
    CUSTOM
};
class EvaluationFunction
{
public:
    // 静的メソッド：マスカウント評価
    static int massCount(Othello &othello, int _id)
    {
        // プレイヤーの ID に基づいてベース値を決定
        int _base = (_id == 0) ? 1 : -1;
        // 白と黒のカウントを取得
        std::pair<int, int> count = othello.getCount();
        // 評価を計算して返す
        return (count.first - count.second) * _base;
    }

    // 静的メソッド：カスタム評価
    static int customEvaluation(Othello &othello, int _id)
    {
        // ゲームボードの状態を取得
        const std::vector<std::vector<int>> &board = othello.getBoard();

        // 各要素の重み付け
        int cornerWeight = 10;
        int edgeWeight = 5;
        int mobilityWeight = 2;
        int parityWeight = 1;

        // 評価値の初期化
        int evaluation = 0;

        // コーナーの評価
        int cornerValue = 0;
        for (int i : {0, othello.mapSize - 1})
        {
            for (int j : {0, othello.mapSize - 1})
            {
                if (board[i][j] == _id)
                {
                    cornerValue += 1;
                }
                else if (board[i][j] == (_id ^ 1))
                {
                    cornerValue -= 1;
                }
            }
        }
        evaluation += cornerWeight * cornerValue;

        // 辺の評価
        int edgeValue = 0;
        for (int i = 0; i < othello.mapSize; i++)
        {
            for (int j : {0, othello.mapSize - 1})
            {
                // 縦の辺
                if (board[i][j] == _id)
                {
                    edgeValue += 1;
                }
                else if (board[i][j] == (_id ^ 1))
                {
                    edgeValue -= 1;
                }

                // 横の辺
                if (board[j][i] == _id)
                {
                    edgeValue += 1;
                }
                else if (board[j][i] == (_id ^ 1))
                {
                    edgeValue -= 1;
                }
            }
        }
        evaluation += edgeWeight * edgeValue;

        // モビリティの評価
        int mobilityValue = othello.legalActions(_id).size() - othello.legalActions(_id ^ 1).size();
        evaluation += mobilityWeight * mobilityValue;

        // パリティの評価
        // プレイヤーの石の数を取得
        std::pair<int, int> count = othello.getCount();
        int _base = (_id == 1) ? -1 : 1;
        int parityValue = 0;
        if (count.first > count.second)
        {
            parityValue = 1;
        }
        else if (count.first < count.second)
        {
            parityValue = -1;
        }
        evaluation += parityWeight * parityValue * _base;

        // 最終的な評価を返す
        return evaluation;
    }
};

class MiniMaxAction : public Action
{
public:
    int depth;
    std::function<int(Othello &, int)> evaluation;

    MiniMaxAction(int id, int depth, const Evaluation evaluation) : Action(id), depth(depth)
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

    std::optional<std::pair<int, int>> action(Othello othello) override
    {
        auto result = miniMax(this->id, othello, 0);
        if (result.second == std::make_pair(-1, -1))
        {
            return std::nullopt;
        }
        return result.second;
    }

    std::pair<int, std::pair<int, int>> miniMax(int _id, Othello othello, int nowDepth)
    {
        if (nowDepth == depth)
        {
            // 自分から見た評価を計算する
            return std::make_pair(evaluation(othello, this->id), std::make_pair(-1, -1));
        }

        std::vector<std::pair<int, int>> actions = othello.legalActions(_id);

        int _base = (nowDepth & 1) == 1 ? -1 : 1;
        std::pair<int, std::pair<int, int>> nextPut = std::make_pair(10'000'000 * _base * -1, std::make_pair(-1, -1));

        if (actions.empty())
        {
            // スキップさせる手は最大の評価にする
            return nextPut;
        }

        for (const auto &action : actions)
        {
            Othello next_board = othello.copyBoard();
            next_board.put(_id, action);
            std::pair<int, std::pair<int, int>> value = miniMax(_id ^ 1, next_board, nowDepth + 1);

            if (_base * nextPut.first <= _base * value.first)
            {
                nextPut = std::make_pair(value.first, action);
            }
        }

        return nextPut;
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
        case Strategy::MINIMAX:
            this->strategy = std::make_unique<MiniMaxAction>(_id, depth, evaluation);
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

    Player player1(0, othello, player1_strategy, 2, Evaluation::MASS_COUNT);
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
        std::string win = playGame(Strategy::MINIMAX, Strategy::RANDOM);
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

  <!-- <TabItem value="rust" label="Rust">

```rust

```

</TabItem> -->
  <!-- <TabItem value="javascript" label="JavaScript">

```javascript

```

</TabItem> -->
</Tabs>
