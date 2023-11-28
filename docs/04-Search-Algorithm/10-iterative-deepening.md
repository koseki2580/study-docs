---
title: 反復深化
sidebar_label: 反復深化
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 反復深化とは

木探索アルゴリズムで使用される手法であり、探索の深さに制限を掛け、深さ 1 で探索を行い、解が見つからなかった場合は深さ 2 まで探索を行う。これを繰り返し、解が見つかるか、全てを探索し終えるまで探索を続ける手法である。

利点はメモリ効率が良くなることである。

### プログラム例

徐々に探索範囲を広げるので、dfs の引数に`limit_depth`のような一定の深さを計算した計算を終了するようにする。
後は欲しい解が見つかるまで深さを深くしながら(`limit_depth`を上げながら)探索を行う。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python
from collections import deque

def dfs(pos, limit_depth, data, con):
    q = deque()
    data[pos] = 0
    q.append((pos, 0, 0))
    while len(q) > 0:
        pos, weight, depth = q.pop()
        if depth > limit_depth:
            continue
        for next_pos, next_weight in con[pos]:
            if next_weight + weight < data[next_pos]:
                data[next_pos] = next_weight + weight
                q.append((next_pos, data[next_pos], depth + 1))

def iterative_deepening_search(pos, con):
    n = 0
    data = [float('inf')] * len(con)
    while data[pos] == float('inf'):
        data = [float('inf')] * len(con)
        dfs(pos, n, data, con)
        n += 1
    return data

# ユーザーからの入力
input_data = [
    (0, 1, 1),
    (1, 2, 2),
    (2, 3, 3),
    (1, 4, 2),
    (4, 3, 1),
]

con = [[] for _ in range(5)]
for x, y, c in input_data:
    con[x].append((y, c))

start_position = 4
result_data = iterative_deepening_search(start_position, con)

print(result_data)
```

  </TabItem>
</Tabs>

上のコードだと毎回はじめから計算を行っている。そのため、ほんの少しだけ無駄生じる。
今までの計算結果キャッシュすることで少しだけ計算が早くなる。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python
from collections import deque
import random


def dfs(pos, limit_depth, data, con, cache):
    q = deque()
    for p in pos:
        q.append((p, data[p], limit_depth - 1))
    next_pos_list = set()
    while len(q) > 0:
        pos, weight, depth = q.pop()
        if depth > limit_depth:
            next_pos_list.add(pos)
            continue
        for next_pos, next_weight in con[pos]:
            if next_weight + weight < data[next_pos]:
                data[next_pos] = next_weight + weight
                q.append((next_pos, data[next_pos], depth + 1))
                # 直前の深さのキャッシュのみ保持
                cache[next_pos] = data[next_pos]
    return next_pos_list


def iterative_deepening_search(pos, con):
    n = 0
    data = [float('inf')] * len(con)
    cache = {}
    search_pos = set([0])
    data[0] = 0
    while data[pos] == float('inf') and n < 100:
        # 直前の深さのキャッシュから前回の計算結果を復元
        search_pos = dfs(search_pos, n, data, con, cache)

        n += 1
    return data


input_data = [
    (0, 1, 1),
    (1, 2, 2),
    (2, 3, 3),
    (1, 4, 2),
    (4, 3, 1),
    (0, 5, 5),
    (5, 6, 1),
    (6, 3, 2),
    (4, 7, 4),
    (7, 3, 1),
]
con = [[] for _ in range(8)]
for x, y, c in input_data:
    con[x].append((y, c))

end_pos = 3
result_data = iterative_deepening_search(end_pos, con)

print(result_data)

```

  </TabItem>
</Tabs>

注意が必要で、今回の問題の場合は最短距離を求めているのではなく、指定したノードに到達できた時点で計算を打ち切っている。
そのため、最短距離を求めたいといった場合は[ダイクストラ法](/docs/Algorithm/dijkstra)等のアルゴリズムを使用する必要がある。

すべての計算を行うと時間が足りないので一定時間でもっともらしい解を求めるのに使用したりすることに注意する必要がある。

ゲームだと一手に掛けられる時間が決められていることがあるので、その時間内に回答を出す必要がある。
ゲーム木から一定時間内に回答を出すために使用することで時間内にもっともらしい回答を出すことができる。
