---
title: トポロジカルソート
sidebar_label: トポロジカルソート
draft: true
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## トポロジカルソートとは

トポロジカルソートとは、閉路のない有向グラフである DAG をソートするアルゴリズムである。

![トポロジカルソート](/img/svg/Algorithm/topological-sort/topological-sort-1.drawio.svg "トポロジカルソート")

トポロジカルソートされた配列を順に処理を行うことで、有向グラフを順番に処理することができる。

例えば、処理 A の後に処理 B を行うことを A $\rightarrow$ B の様に有向グラフで表すことができ、このような処理 $\circ \rightarrow \circ$のような依存関係が複数あった場合に、
トポロジカルソートを行うと、トポロジカルソートされた配列を左から順に処理することで、依存関係に違反しない順序で処理を行うことができる。

`トポロジカルソートが行える = グラフは閉路のない有向グラフ(DAG)である`
と言うことが言えるので、トポロジカルソートが行えない場合は DAG ではないので、閉路検出にもトポロジカルソートは用いることができる。

### アルゴリズム

### 流れ

トポロジカルソートの求め方は次の 2 通りの方法がある。

- 深さ優先探索を用いる
- 幅優先探索を用いる

#### 幅優先探索を用いる方法

トポロジカルソート後の配列の左側にあるとはどういった状態なのかを以下の図を例にして考えてみる。

トポロジカルソート順に並んだ配列は配列順に処理を行うと矛盾が生じない状態であるので、[入次数](/docs/Data-structure/graph)が 0 である頂点から処理を行うことで矛盾が生じない。
以下の図で言うと入次数が`0`となるのは、4, 5 番の頂点である。

![幅優先探索を用いたトポロジカルソート](/img/svg/Algorithm/topological-sort/topological-sort-2.drawio.svg "幅優先探索を用いたトポロジカルソート")

4, 5 番はいつでも処理できる頂点番号なので、これをトポロジカルソート後の配列の 0,1 番に格納し、図から取り除く。

![幅優先探索を用いたトポロジカルソート2](/img/svg/Algorithm/topological-sort/topological-sort-3.drawio.svg "幅優先探索を用いたトポロジカルソート2")

4,5 番が取り除かれたことにより、次に頂点番号 `3`番が入次数が 0 となっているので、次取り除く頂点番号は`3`番となる。

![幅優先探索を用いたトポロジカルソート3](/img/svg/Algorithm/topological-sort/topological-sort-4.drawio.svg "幅優先探索を用いたトポロジカルソート3")

3 番が取り除かれたことにより、次に頂点番号 `1`番が入次数が 0 となっているので、次取り除く頂点番号は`1`番となる。

![幅優先探索を用いたトポロジカルソート4](/img/svg/Algorithm/topological-sort/topological-sort-5.drawio.svg "幅優先探索を用いたトポロジカルソート4")

1 番が取り除かれたことにより、次に頂点番号 `2`番が入次数が 0 となっているので、次取り除く頂点番号は`2`番となる。

![幅優先探索を用いたトポロジカルソート5](/img/svg/Algorithm/topological-sort/topological-sort-6.drawio.svg "幅優先探索を用いたトポロジカルソート5")

2 番が取り除かれたことにより、次に頂点番号 `6, 7`番が入次数が 0 となっているので、次取り除く頂点番号は`6, 7`番となる。

![幅優先探索を用いたトポロジカルソート6](/img/svg/Algorithm/topological-sort/topological-sort-7.drawio.svg "幅優先探索を用いたトポロジカルソート6")

全ての頂点がなくなり、配列に格納した順がトポロジカルソートとなっている。

入次数が`0`となる頂点から取り除き、配列に格納していくことでトポロジカルソートができる。
入次数が`0`となる頂点が複数でた場合は取り除く順番は自由に定めることができるので、複数通りのトポロジカルソートが存在する。
以下のプログラムでは幅優先探索を用いているが深さ優先探索を用いても配列順は異なるが、トポロジカルソート順になっている。

格納した配列の値の数がグラフ頂点数と一致していなければ閉路が存在することを意味するので閉路検出が行える。

##### プログラム

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="topological-sort-breadth.py"
from collections import deque
def bfs():
    Q = deque()
    for i in range(N):
        if deg[i] == 0:
            Q.append(i)
    while len(Q) > 0:
        pos = Q.popleft()
        # 表示を1-indexedにするため+1している
        ans.append(pos+1)
        for to in box[pos]:
            deg[to] -= 1
            if deg[to] == 0:
                Q.append(to)


N = 7
# 上の図を表現
graph = [[5, 3], [3, 1], [1, 2], [4, 2], [2, 6], [2, 7]]
box = [[] for _ in range(N)]

# トポロジカルソート後の配列
ans = []

# 入次数を記録
deg = [0] * N
for i in range(len(graph)):
    # 配列に収まるように1-indexedから
    x = graph[i][0]-1
    y = graph[i][1]-1
    box[x].append(y)
    deg[y] += 1

bfs()
print(*ans)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="topological-sort-breadth.cpp"
a
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="topological-sort-breadth.cs"
a
```

  </TabItem>
</Tabs>

#### 深さ優先探索を用いる方法

深さ探索を用いる場合は深さ探索の[帰りがけ順](/docs/Algorithm/depth-first-search#帰りがけ順)に注目する。
帰りがけ順は全ての子ノードを訪れた後に探索済みとする走査順であり、子ノードが矢印の向かう先と考えると矢尻のノードを全て処理すると、
自身を探索済みとして帰りがけ順の並びに追加する。つまり、帰りがけ順に走査した後、その配列を逆順にすることでトポロジカルソート順にとなる。

![深さ優先探索を用いたトポロジカルソート](/img/svg/Algorithm/topological-sort/topological-sort-8.drawio.svg "深さ優先探索を用いたトポロジカルソート")

頂点番号 1 番から深さ優先探索を行う。

![深さ優先探索を用いたトポロジカルソート2](/img/svg/Algorithm/topological-sort/topological-sort-9.drawio.svg "深さ優先探索を用いたトポロジカルソート2")

帰りがけ順に番号を付与するので、最初に番号が付与されるのは 6 番の頂点となる。

![深さ優先探索を用いたトポロジカルソート3](/img/svg/Algorithm/topological-sort/topological-sort-10.drawio.svg "深さ優先探索を用いたトポロジカルソート3")

次に番号が付与されるのは 7 番の頂点となる。

![深さ優先探索を用いたトポロジカルソート4](/img/svg/Algorithm/topological-sort/topological-sort-11.drawio.svg "深さ優先探索を用いたトポロジカルソート4")

次に番号が付与されるのは 2 番の頂点となる。

![深さ優先探索を用いたトポロジカルソート5](/img/svg/Algorithm/topological-sort/topological-sort-12.drawio.svg "深さ優先探索を用いたトポロジカルソート5")

1 番から探索できるものがないので次に番号が付与されるのは 1 番の頂点となる。

![深さ優先探索を用いたトポロジカルソート6](/img/svg/Algorithm/topological-sort/topological-sort-13.drawio.svg "深さ優先探索を用いたトポロジカルソート6")

次に探索する頂点は番号が小さい 3 番であり、3 番から探索できる頂点である 1 番はすでに探索済みなので探索しない。
すると、3 番の頂点は探索するところがないので番号を付与する。

![深さ優先探索を用いたトポロジカルソート7](/img/svg/Algorithm/topological-sort/topological-sort-14.drawio.svg "深さ優先探索を用いたトポロジカルソート7")

4 番の頂点も同様に探索可能な頂点番号 2 番は探索済みであり、探索するところがないので番号を付与する。

![深さ優先探索を用いたトポロジカルソート8](/img/svg/Algorithm/topological-sort/topological-sort-15.drawio.svg "深さ優先探索を用いたトポロジカルソート8")

5 番の頂点も同様に探索可能な頂点番号 3 番は探索済みであり、探索するところがないので番号を付与する。

![深さ優先探索を用いたトポロジカルソート9](/img/svg/Algorithm/topological-sort/topological-sort-16.drawio.svg "深さ優先探索を用いたトポロジカルソート9")

これで深さ優先探索の帰りがけ順の配列が完成したので、これを反転させるとトポロジカルソート順となっている。

![深さ優先探索を用いたトポロジカルソート10](/img/svg/Algorithm/topological-sort/topological-sort-17.drawio.svg "深さ優先探索を用いたトポロジカルソート10")

:::caution 注意
深さ優先探索の帰りがけ順は例え閉路が存在していたとしても行うことができるので、シンプルに実装するとトポロジカルソートができる前提のコードになってしまう。
閉路が存在している状態は、探索している頂点を$v$とすると、$v$から探索できる全頂点を探索する(帰りがけ順に番号を記録する)前に、再度$v$に訪れるという状態である。
つまり、深さ優先探索を行なっている最中に一度訪れているが、まだ帰りがけ順の番号を記録されていないかを確認することで閉路が存在するということがわかるので、
深さ優先探索の訪れた際に番号を記録する[行きがけ順](/docs/Algorithm/depth-first-search#行きがけ順)と帰りがけ順を用いることで閉路検出を行うことができる。
:::

##### プログラム

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="topological-sort-depth.py"
from collections import deque


def dfs(st, p=-1):
    global pos
    # 訪れたフラグを立てる(行きがけ順)
    seen[st] = True

    for to in box[st]:
        if (to == p):
            continue

        if (finished[to]):
            continue

        # 行きがけ順では記録されているが、帰りがけ順では記録されていないので閉路が存在する
        if seen[to] and not finished[to]:
            pos = to
            return

        dfs(to, st)
        if (pos != -1):
            return
    # 全ての子ノードを探索完了(帰りがけ順)
    finished[st] = True

    # 表示を1-indexedにするため+1している
    ans.append(st+1)


N = 7

# 上の図を表現
graph = [[5, 3], [3, 1], [1, 2], [4, 2], [2, 6], [2, 7]]
box = [[] for _ in range(N)]

# トポロジカルソート後の配列
ans = []
for i in range(len(graph)):
    # 配列に収まるように1-indexedから
    x = graph[i][0] - 1
    y = graph[i][1] - 1
    box[x].append(y)
pos = -1
seen = [False] * N
finished = [False] * N
for i in range(N):
    if finished[i] == False:
        dfs(i)
ans.reverse()
print(*ans)

```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="topological-sort-depth.cpp"
a
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="topological-sort-depth.cs"
a
```

  </TabItem>
</Tabs>

## 参考

[有向非巡回グラフ](https://ja.wikipedia.org/wiki/%E6%9C%89%E5%90%91%E9%9D%9E%E5%B7%A1%E5%9B%9E%E3%82%B0%E3%83%A9%E3%83%95)

[トポロジカルソートのアルゴリズム（閉路のない有向グラフ DAG のソート）](https://algo-logic.info/topological-sort/)

[DFS (深さ優先探索) 超入門！ 〜 グラフ・アルゴリズムの世界への入口 〜【後編】](https://qiita.com/drken/items/a803d4fc4a727e02f7ba#4-6-%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E6%A4%9C%E5%87%BA)
