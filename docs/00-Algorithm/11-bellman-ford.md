---
title: ベルマン-フォード法
sidebar_label: ベルマン-フォード法
draft: true
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## ベルマン-フォード法とは

ダイクストラ法と同様で単一始点最短経路問題を解くためアルゴリズムであり、辺のコストが全て非負の場合はダイクストラ法の方が高速に動作する。

ダイクストラ法は負のコストが存在する場合には無限に処理が走ってしまうため、使用することができない。しかし、ベルマン-フォード法は負の経路を検出することができるため、負の経路が存在した場合でも正常に動作する(コストが正常に求められるわけではない)。

`d[u] = min(d[v] + vからuへのパスのコスト)`の式が根っこの考え方である。つまり v から u への最小のコストは v までの最小コスト $+$ v から u への最小コストである。
つまり、ある頂点までの最小コストはそのコストへ到達できる頂点までのコスト $+$　到達できる頂点からのコストの最小値となる。

### アルゴリズム

#### 流れ

以下の図を例にし、0 番から 7 番への最短距離を考えていく。

![ベルマン-フォード法](/img/svg/Algorithm/bellman-ford/bellman-ford-1.drawio.svg "ベルマン-フォード法")

初めに 0 を基準とする最短距離テーブルを作成する。初期は基準点 0 以外は INF を代入する。

![ベルマン-フォード法2](/img/svg/Algorithm/bellman-ford/bellman-ford-2.drawio.svg "ベルマン-フォード法2")

与えられたパスを全て確認し、最小値が最短距離テーブルの値を下回った際にテーブルを更新する。今回の場合は

- `d[1] = d[0] + 0 → 1のコスト`
- `d[2] = d[0] + 0 → 2のコスト`

の 2 点で更新が生じるので更新を行う。

![ベルマン-フォード法3](/img/svg/Algorithm/bellman-ford/bellman-ford-3.drawio.svg "ベルマン-フォード法3")

同様に同じ操作を行う。(2 回目の更新処理)

- `d[4] = d[1] + 1 → 4のコスト`
- `d[3] = d[2] + 2 → 3のコスト`
- `d[6] = d[2] + 2 → 6のコスト`

の 3 点で更新が生じるので更新を行う。

![ベルマン-フォード法4](/img/svg/Algorithm/bellman-ford/bellman-ford-4.drawio.svg "ベルマン-フォード法4")

同様に同じ操作を行う。(3 回目の更新処理)

- `d[5] = d[3] + 3 → 5のコスト`
- `d[7] = d[6] + 6 → 7のコスト`

の 2 点で更新が生じるので更新を行う。

![ベルマン-フォード法5](/img/svg/Algorithm/bellman-ford/bellman-ford-5.drawio.svg "ベルマン-フォード法5")

同様に同じ操作を行う。(4 回目の更新処理)

- `d[4] = d[5] + 5 → 4のコスト`
- `d[7] = d[5] + 5 → 7のコスト`

の 2 点で更新が生じるので更新を行う。

![ベルマン-フォード法6](/img/svg/Algorithm/bellman-ford/bellman-ford-6.drawio.svg "ベルマン-フォード法6")

これ以上同様の操作を行っても、テーブルは更新されないが更新処理を頂点数分行う(8 回)。

なぜ頂点数分更新処理を行うかというと、負の経路が存在しない場合、基準点から全頂点を訪れるのに最大で`頂点数 - 1`のパスが必要である。そのため、頂点数 - 1 回更新処理を行うだけで
基準頂点からの最短距離を求められる。しかし、負の経路が存在する場合は、頂点数回目の更新処理でも更新処理が行われる。頂点数回目に更新処理が行われる$=$負の経路が存在していると言えるため、更新処理を頂点数回分行う。

#### プログラム

<!-- TODO 他のコードと経路復元をかく -->

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="bellman-ford.py"
def bellman_ford(start):
    q = []
    dist[start] = 0
    for i in range(8):
        for pos1, pos2, cost in example:
            update = False
            if dist[pos1] + cost < dist[pos2]:
                dist[pos2] = dist[pos1] + cost
                update = True
            # 無向グラフであるため、反対のパスも考える必要がある。
            elif dist[pos2] + cost < dist[pos1]:
                dist[pos1] = dist[pos2] + cost
                update = True
            if update and i == (8-1):
                return True
    return False


# pos1, pos2, costの順に格納
example = [
    [0, 1, 10],
    [0, 2, 5],
    [1, 3, 4],
    [1, 4, 20],
    [2, 3, 6],
    [2, 6, 8],
    [3, 5, 1],
    [4, 5, 4],
    [4, 7, 7],
    [5, 6, 2],
    [5, 7, 4],
    [6, 7, 9]
]

box = [[] for _ in range(8)]
for i in range(len(example)):
    # index頂点に接続されている頂点とコストを格納する。
    box[example[i][0]].append([example[i][1], example[i][2]])
    box[example[i][1]].append([example[i][0], example[i][2]])
dist = [10**9] * (8)
is_negative_cost = bellman_ford(0)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="bellman-ford.cpp"

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="bellman-ford.cs"

```

  </TabItem>
</Tabs>
