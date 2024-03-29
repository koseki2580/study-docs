---
title: グラフ
sidebar_label: グラフ
draft: false
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## グラフとは

頂点(ノード)と頂点間を結ぶ辺(エッジ)で構成されるデータ構造をグラフという。

また、グラフの特別な状態を木構造と言ったりもする。

### 用語

各 ○ を`頂点`と呼び、頂点と頂点を結んでいる線を`辺`と呼ぶ。
この図のように辺で結んでいる両頂点を行ったり来たりすることができるグラフのことを`無向グラフ`という。

図ではよく線が用いられる。

![イメージ図](/img/svg/Data-structure/graph/graph-1.drawio.svg "無向グラフ")

無向グラフとは違い、片方の頂点からは向かうことができるが、反対からは向かうことができない一方通行なグラフを`有向グラフ`という。

図ではよく矢印が用いられる。

![イメージ図](/img/svg/Data-structure/graph/graph-2.drawio.svg "有向グラフ")

頂点間を移動できる 1 つの辺のことを`路`と呼び、路を通り同じ頂点に訪れない経路を`パス`といい、始点と終点が同じパスを`サイクル(閉路)`という。

![イメージ図](/img/svg/Data-structure/graph/graph-3.drawio.svg "パスとサイクル")

グラフにおいて任意の頂点から全ての頂点へ訪れることが可能な時そのグラフは`連結である`という。連結でない時連携していないグラフを`連携成分`といい、連結である場合は連結成分が`1`となる。

![イメージ図](/img/svg/Data-structure/graph/graph-4.drawio.svg "連結")

有向グラフにおいて任意の頂点から全ての頂点へ訪れることが可能な時そのグラフは`強連結である`という。強連結ではないがサイクルができているものを`強連結成分`という。

![イメージ図](/img/svg/Data-structure/graph/graph-5.drawio.svg "強連結")

グラフにおいて始点と終点が同じ辺を`ループ(自己ループ)`と呼び、2 頂点間に複数の辺が存在するとき`多重辺`と呼ぶ。

![イメージ図](/img/svg/Data-structure/graph/graph-6.drawio.svg "ループと多重辺")

無向グラフにおいて頂点に接続している辺の個数を`次数`と呼び、有向グラフにおいては入ってくる辺を`入次数`、出て行く辺を`出次数`と呼ぶ。

![イメージ図](/img/svg/Data-structure/graph/graph-7.drawio.svg "次数")

閉路のない有向グラフのことを `DAG`(Directed Acyclic Graph)という。

![DAG](/img/svg/Data-structure/graph/graph-10.drawio.svg "DAG")

## データの持ち方

データの持ち方は以下の 2 種類が存在する

- 隣接リスト表現
- 隣接行列表現

### 隣接行列表現

行列でデータを管理する表現方法である。

#### メリット

- O(1)で特定の辺が存在するか知ること
- 行列の掛け算や固有値が意味を持つことがある

#### デメリット

- メモリが`頂点数*頂点数`程度必要
- 次数を求めるのが O(頂点数)

#### 表現方法

頂点数\*頂点数の配列を用意し、`i`頂点と`j`頂点の間に辺が存在している場合は[i][j]に辺が存在しているフラグを保持する。

以下の図では`[i][j] = 1`の時、`i`頂点と`j`頂点の間に辺が存在し,`[i][j] = 0`の時、辺が存在しないことを表している。

※` = 1`ではなく、重み(辺ごとに異なる)が入る場合もある。
![イメージ図](/img/svg/Data-structure/graph/graph-8.drawio.svg "隣接行列表現")

#### プログラム

##### 無向グラフ

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
box = [[1,5],[3,1],[1,4],[4,3],[4,6],[6,2]]
graph = [[0] * 6 for _ in range(6)]
for i in range(len(box)):
    graph[box[i][0]-1][box[i][1]-1] = 1
    graph[box[i][1]-1][box[i][0]-1] = 1
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int main() {
    vector<pair<int,int>> box = {{1,5},{3,1},{1,4},{4,3},{4,6},{6,2}};
    vector<vector<int>> graph(6,vector<int>(6,0));
    for(int i = 0; i < box.size();++i){
        graph[box[i].first-1][box[i].second-1] = 1;
        graph[box[i].second-1][box[i].first-1] = 1;
    }
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 5 }, { 3, 1 }, { 1, 4 }, { 4, 3 }, { 4, 6 }, { 6, 2 } };
    int[,] graph = new int[6, 6];
    for (int i = 0; i < box.Length/2; ++i)
    {
        graph[box[i, 0] - 1, box[i, 1] - 1] = 1;
        graph[box[i, 1] - 1, box[i, 0] - 1] = 1;
    }
}
```

  </TabItem>
</Tabs>

##### 有向グラフ

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
box = [[1,5],[3,1],[1,4],[4,3],[4,6],[6,2]]
graph = [[0] * 6 for _ in range(6)]
for i in range(len(box)):
    graph[box[i][0]-1][box[i][1]-1] = 1
    # graph[box[i][1]-1][box[i][0]-1] = 1
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int main() {
    vector<pair<int,int>> box = {{1,5},{3,1},{1,4},{4,3},{4,6},{6,2}};
    vector<vector<int>> graph(6,vector<int>(6,0));
    for(int i = 0; i < box.size();++i){
        graph[box[i].first-1][box[i].second-1] = 1;
        // graph[box[i].second-1][box[i].first-1] = 1;
    }
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 5 }, { 3, 1 }, { 1, 4 }, { 4, 3 }, { 4, 6 }, { 6, 2 } };
    int[,] graph = new int[6, 6];
    for (int i = 0; i < box.Length/2; ++i)
    {
        graph[box[i, 0] - 1, box[i, 1] - 1] = 1;
        //graph[box[i, 1] - 1, box[i, 0] - 1] = 1;
    }
}
```

  </TabItem>
</Tabs>

### 隣接リスト表現

頂点数分の配列を用意し、存在する辺のみを管理する表現方法である。

#### メリット

- メモリが`辺の数`で済む
- 次数を求めるのが速い

#### デメリット

- 特定の辺が存在するかの判定に最悪 O(頂点数)かかる

#### 表現方法

頂点数分の配列を用意し、存在する辺と繋がっている反対の頂点番号を保持する。

![イメージ図](/img/svg/Data-structure/graph/graph-9.drawio.svg "隣接リスト表現")

#### プログラム

##### 無向グラフ

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
box = [[1,5],[3,1],[1,4],[4,3],[4,6],[6,2]]
graph = [[] for _ in range(6)]
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)
    graph[box[i][1]-1].append(box[i][0]-1)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int main() {
    vector<pair<int,int>> box = {{1,5},{3,1},{1,4},{4,3},{4,6},{6,2}};
    vector<vector<int>> graph(6);
    for(int i = 0; i < box.size();++i){
        graph[box[i].first-1].push_back(box[i].second-1);
        graph[box[i].second-1].push_back(box[i].first-1);
    }
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 5 }, { 3, 1 }, { 1, 4 }, { 4, 3 }, { 4, 6 }, { 6, 2 } };
    List<List<int>> graph = new List<List<int>>();
    for (int i = 0;i < 6; ++i)
    {
        graph.Add(new List<int>());
    }
    for (int i = 0; i < box.Length/2; ++i)
    {
        graph[box[i, 0] - 1].Add(box[i, 1] - 1);
        graph[box[i, 1] - 1].Add(box[i, 0] - 1);
    }
}
```

  </TabItem>
</Tabs>

##### 有向グラフ

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
box = [[1,5],[3,1],[1,4],[4,3],[4,6],[6,2]]
graph = [[] for _ in range(6)]
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)
    # graph[box[i][1]-1].append(box[i][0]-1)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int main() {
    vector<pair<int,int>> box = {{1,5},{3,1},{1,4},{4,3},{4,6},{6,2}};
    vector<vector<int>> graph(6);
    for(int i = 0; i < box.size();++i){
        graph[box[i].first-1].push_back(box[i].second-1);
        // graph[box[i].second-1].push_back(box[i].first-1);
    }
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 5 }, { 3, 1 }, { 1, 4 }, { 4, 3 }, { 4, 6 }, { 6, 2 } };
    List<List<int>> graph = new List<List<int>>();
    for (int i = 0;i < 6; ++i)
    {
        graph.Add(new List<int>());
    }
    for (int i = 0; i < box.Length/2; ++i)
    {
        graph[box[i, 0] - 1].Add(box[i, 1] - 1);
        // graph[box[i, 1] - 1].Add(box[i, 0] - 1);
    }
}
```

  </TabItem>
</Tabs>
