---
title: ダブリング
sidebar_label: ダブリング
draft: false
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## ダブリングとは

ある要素の K 個先の移動先を高速で求めることができるアルゴリズムである。
前処理で移動先のテーブルを作成し、テーブルを用いて高速でクエリを処理する。

前処理には全要素を N とし、K 個先の要素を求める場合は O(N $log(K)$)で求めることができ、
クエリに対しては O($log(K)$)で求めることができる。

![ダブリング](/img/svg/Algorithm/doubling/doubling-1.drawio.svg "ダブリング")

### アルゴリズム

#### 流れ

前処理として、ある要素の$2^{n}$先の要素を計算しておく必要がある。
これは 2 進数の性質をうまく活用することで綺麗に記述することができる。

ダブリングを使った例として LCA(Lowest Common Ancestor)を考える。
LCA はある 2 つの要素の共通の親(深さが小さい)の中で一番近い(深さが大きい)親を探すものである。

以下のような木を考える。

![ダブリング例1](/img/svg/Algorithm/doubling/doubling-2.drawio.svg "ダブリング例1")

このような木の k 個前(親)の木を求める。初めに 1 個前の親を求める。
親が存在しないものには-1 を代入し、存在しないことを表す。
1 個前の親は深さ優先探索や幅優先探索を用いることで簡単に求めることができる。

![1個前の親](/img/svg/Algorithm/doubling/doubling-4.drawio.svg "1つ目前の親")

1 個前の親の 1 個前の親は 2 個前の親であるため、2 個前の親も上の表を活用することで簡単に求めることができる。

![2個前の親について](/img/svg/Algorithm/doubling/doubling-3.drawio.svg "2個前の親について")

そのため、2 個前の親は次のようになる。

![2個前の親](/img/svg/Algorithm/doubling/doubling-5.drawio.svg "2個前の親")

同様な考え方で 4 個前の親を求めることができる。

![4個前の親について](/img/svg/Algorithm/doubling/doubling-6.drawio.svg "4個前の親について")

4 個前の親を求めると次のようになる。

![4個前の親](/img/svg/Algorithm/doubling/doubling-7.drawio.svg "4個前の親")

同様に 8,16 個前の親を求めると次のようになる。

![16個前の親](/img/svg/Algorithm/doubling/doubling-8.drawio.svg "16個前の親")

これ全ての要素の$2^n$個前の親要素を求めることができる。

ここまでが前処理の部分である。

次はこの表を活用して、2 つの要素の LCA を求めることを考える前にこの表を使用して、5 番目の要素の 3 つ前の親が何かを考えてみる。

3 つ前の親要素については求めていないが作成した表から導出が可能である。
3 は`2 + 1 = 3`と分解することができるので、2 つ前の親の 1 つ前の親が 3 つ前の親であることがわかる。
そのため、5 番の 2 つ前の親は表から 2 番の要素であることがわかる。さらに 2 番の 1 つ目の親は 0 番であることもわかるので 5 番目の 3 つ前の親は 0 番であるということが分かる。
これは 3 を 2 進数で表すと$11_{(2)}$となるので、1 となっている部分で要素を移動させる良い。

:::info
LCA では要素の深さ番号を使用する。これは前処理の 1 つ前の親を求める際の幅優先探索等をする際に一緒に深さを求めておく。
今回の場合は次のようになる。
![深さ](/img/svg/Algorithm/doubling/doubling-9.drawio.svg "深さ")
:::

LCA の求めるには以下の順番で処理を行う。

1. 対象要素の深さを揃える
2. 前処理で作成した表を用いて共通の親を探す。

2 つの要素の LCA を求める例題として、3 番と 7 番の LCA を求めてみる。
まずは手順 1 の要素の深さを揃えることを考える。
これはともに深さが 2 なので、行う必要がない。

次に手順 2 を考える。
前処理で作成したテーブルを使用し、それぞれの N 個前の親要素を調べる。

初めに 16 個前の親を比較すると、ともに`-1`となり、2 つの要素で一致している。これは 16 個前までのどこかで共通要素を持っていることがわかるので、戻り過ぎだと分かる。
同様に 8,4,2 個前の要素も一致しているので戻り過ぎていることがわかる。

1 個前の要素は別々の要素なので、次の検索する基準要素を 1 個前の親要素に変更する。
そうするとそれぞれ、1,2 となる。

全ての前処理で作成したテーブルの要素を確認し終えた時点で検索対象としている基準の要素 2 つの 1 個前の親要素が共通親の中で一番近いものとなっている。
そのため、1 番,2 番の要素の親要素である 0 番が LCA となる。

![要素変更](/img/svg/Algorithm/doubling/doubling-10.drawio.svg "要素変更")

次に 10 番の要素と 16 番の要素の LCA を考える。

10 番の要素は深さが 5 であり、16 番の要素は 6 であり、異なっているので深さを合わせる手順 1 を行う必要がある。
深さを合わせるため、`6 - 5 = 1`で 16 番の要素を 1 個前の親要素にする必要がある。
前処理作成したテーブルを使用すると 16 番の 1 個前の親は 14 番の要素となる。

手順 2 では 10 番の要素と 14 番の要素の共通の親要素を持たないギリギリの親要素を求める。

先ほどと同様に 16 個前の親要素から見ていくと次のようになる。

![要素変更2](/img/svg/Algorithm/doubling/doubling-11.drawio.svg "要素変更2")

同様に 1 番の親要素である 0 番が LCA となる。

#### プログラム

##### 前処理

1 つ前の要素を求める部分は幅優先探索等を使用することで簡単に求めることができるので割愛し、2,4,8,16 個前の要素を求める処理は
以下のように書くことで求めることができる。

ここでは`lca_box[i][j]`の`i`は$2^{i}$個前の要素かを表し、`j`は要素番号であり、値は遷移先の要素番号である。
つまり、`lca_box[i][j]`に N が格納されているとすると、j 番目の要素の$2^{i}$個前の要素は N となる。
`lca_box[0][j]`に値を格納する部分が深さ優先探索・幅優先探索を用いて埋める必要がある。

count は$2^{i}$で求めたい乗数の値であり、n は要素数となる。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python
# 前処理で求めておく2^Nを求める
m = 1
count = 0
while m < len(tree):
    m <<= 1
    count += 1

lca_box = [[-1] * (len(tree) + 1) for _ in range(count+1)]

# 幅優先探索で深さを求める
depth = [-1] * len(tree)
q = deque()
q.append(0)
depth[0] = 0
while len(q) != 0:
    pos = q.popleft()
    for to in tree[pos]:
        if depth != -1:
            lca_box[0][to] = pos
            depth[to] = depth[pos] + 1
            q.append(to)


for i in range(1, count+1):
    for j in range(len(tree)):
        lca_box[i][j] = lca_box[i-1][lca_box[i-1][j]]
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp
// 前処理で求めておく2^Nを求める
  int m = 1;
  int count = 0;
  while (m < tree.size()){
    m <<= 1;
    ++count;
  }
  vector<vector<int>> lca_box(count+1, vector<int>(tree.size()+1, -1));

  // 幅優先探索で深さを求める
  vector<int> depth(tree.size(), -1);
  queue<int> q;
  q.push(0);
  depth[0] = 0;
  while (!q.empty()){
    int pos = q.front();q.pop();
    for (int to: tree[pos]){
      if (depth[to] == -1){
        lca_box[0][to] = pos;
        depth[to] = depth[pos] + 1;
        q.push(to);
      }
    }
  }

  for (int i = 1; i < count + 1;++i){
    for (int j = 0; j < tree.size(); ++j){
      lca_box[i][j] = lca_box[i-1][lca_box[i-1][j]];
    }
  }
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
// 前処理で求めておく2^Nを求める
int m = 1;
int count = 0;
while (m < tree.Count)
{
    m <<= 1;
    ++count;
}
int[,] lca_box = new int[count + 1, tree.Count + 1];

// 幅優先探索で深さを求める
int[] depth = new int[tree.Count];
for (int i = 0; i < tree.Count; ++i)
{
    depth[i] = -1;
}
Queue<int> q = new Queue<int>();
q.Enqueue(0);
depth[0] = 0;
while (q.Count != 0)
{
    int pos = q.Dequeue();
    foreach (int to in tree[pos])
    {
        if (depth[to] == -1)
        {
            lca_box[0, to] = pos;
            depth[to] = depth[pos] + 1;
            q.Enqueue(to);
        }
    }
}

for (int i = 1; i < count + 1; ++i)
{
    for (int j = 0; j < tree.Count; ++j)
    {
        lca_box[i, j] = lca_box[i - 1, lca_box[i - 1, j]];
    }
}
```

  </TabItem>
</Tabs>

ここでポイントとなっているのは

```
lca_box[i][j] = lca_box[i-1][lca_box[i-1][j]]
```

である。4 個前の前の要素を求める際に 2 個前の要素を活用したように`[lca_box[i-1][j]`で求めたい N 個前の要素の$\frac{N}{2}$個前の要素の遷移先要素を取得し、
その取得した要素の遷移先が N 個前の要素の遷移先となるため、`lca_box[i-1][lca_box[i-1][j]]`となっている。

#### クエリ

手順 1 の深さを揃える処理は次のようになる。

depth には前処理段階で深さを求めたものが格納されており、`depth[i]`で i 番目の要素の深さを取得することができる。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python
def ancestors(u, up):
    cnt = 0
    while up != 0:
        if up & 1 == 1:
            u = lca_box[cnt][u]
        cnt += 1
        up >>= 1
    return u


check = [
    (3, 7),
    (10, 16),
    (11, 15),
    (2, 3)
]
for u, v in check:
    # 常にu側に深さが深い方を配置
    if depth[u] < depth[v]:
        u, v = v, u

    # 手順1 深さを合わせる
    up = depth[u] - depth[v]
    u = ancestors(u, up)

    # u,v自身が共通の要素となる場合があるので確認
    if u == v:
        print(f"u: {u}, v:{v}")
        continue
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp
auto ancestors = [&](int u, int up){
    int cnt = 0;
    while (up != 0){
      if (up & 1 == 1){
        u = lca_box[cnt][u];
      }
      ++cnt;
      up >>= 1;
    }
    return u;
  };

  vector<pair<int, int>> check = {
    {3, 7},
    {10, 16},
    {11, 15},
    {2, 3}
  } ;
  for (pair<int,int> xx: check){
    int u = xx.first;
    int v = xx.second;

    // 常にu側に深さが深い方を配置
    if (depth[u] < depth[v]){
      swap(u,v);
    }

    // 手順1 深さを合わせる
    int up = depth[u] - depth[v];
    u = ancestors(u, up);

    // u,v自身が共通の要素となる場合があるので確認
    if (u == v) {
      printf("u: %d, v: %d\n", u, v);
      continue;
    }
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
int Ancestors(int u, int up)
{
    int cnt = 0;
    while (up != 0)
    {
        if ((up & 1) == 1)
        {
            u = lca_box[cnt, u];
        }
        ++cnt;
        up >>= 1;
    }
    return u;
}
List<List<int>> check = new List<List<int>>
{
    new List<int>() { 3, 7 },
    new List<int>() { 10, 16 },
    new List<int>() { 11, 15 },
    new List<int>() { 2, 3 }
};

foreach (List<int> xxx in check)
{
    int u = xxx[0];
    int v = xxx[1];

    // 常にu側に深さが深い方を配置
    if (depth[u] < depth[v])
    {
        (u, v) = (v, u);
    }

    // 手順1 深さを合わせる
    int up = depth[u] - depth[v];
    u = Ancestors(u, up);

    // u,v自身が共通の要素となる場合があるので確認
    if (u == v)
    {
        Console.WriteLine($"u: {u}, v: {v}");
        continue;
    }
```

  </TabItem>
</Tabs>

次に手順 2 は次のようになる。
count は前処理で使用したものと同じである。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python
# 手順2 親を遡る
for i in range(count, -1, -1):
    nextu = lca_box[i][u]
    nextv = lca_box[i][v]
    # 一致しない場合のみ要素を更新
    if nextu != nextv:
        u = nextu
        v = nextv

# 最終結果の1つ前がLCAとなる
print(f"u: {lca_box[0][u]}, v:{lca_box[0][v]}")
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp
// 手順2 親を遡る
for (int i = count; i > -1; --i){
  int nextu = lca_box[i][u];
  int nextv = lca_box[i][v];
  // 一致しない場合のみ要素を更新
  if (nextu != nextv){
    u = nextu;
    v = nextv;
  }
}

// 最終結果の1つ前がLCAとなる
printf("u: %d, v: %d\n", lca_box[0][u], lca_box[0][v]);
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
// 手順2 親を遡る
for (int i = count; i > -1; --i)
{
    int nextu = lca_box[i, u];
    int nextv = lca_box[i, v];
    // 一致しない場合のみ要素を更新
    if (nextu != nextv)
    {
        u = nextu;
        v = nextv;
    }
}

// 最終結果の1つ前がLCAとなる
Console.WriteLine($"u: {lca_box[0, u]}, v: {lca_box[0, v]}");
```

  </TabItem>
</Tabs>

上記の例を全コードは以下となる。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="doubling.py"
from collections import deque
tree = [
    [1, 2],
    [7],
    [3, 4],
    [5],
    [6],
    [],
    [8],
    [9],
    [10, 11],
    [12],
    [15],
    [13],
    [14],
    [],
    [16],
    [],
    []
]

# 前処理で求めておく2^Nを求める
m = 1
count = 0
while m < len(tree):
    m <<= 1
    count += 1

lca_box = [[-1] * (len(tree) + 1) for _ in range(count+1)]

# 幅優先探索で深さを求める
depth = [-1] * len(tree)
q = deque()
q.append(0)
depth[0] = 0
while len(q) != 0:
    pos = q.popleft()
    for to in tree[pos]:
        if depth != -1:
            lca_box[0][to] = pos
            depth[to] = depth[pos] + 1
            q.append(to)


for i in range(1, count+1):
    for j in range(len(tree)):
        lca_box[i][j] = lca_box[i-1][lca_box[i-1][j]]


def ancestors(u, up):
    cnt = 0
    while up != 0:
        if up & 1 == 1:
            u = lca_box[cnt][u]
        cnt += 1
        up >>= 1
    return u


check = [
    (3, 7),
    (10, 16),
    (11, 15),
    (2, 3)
]
for u, v in check:
    # 常にu側に深さが深い方を配置
    if depth[u] < depth[v]:
        u, v = v, u

    # 手順1 深さを合わせる
    up = depth[u] - depth[v]
    u = ancestors(u, up)

    # u,v自身が共通の要素となる場合があるので確認
    if u == v:
        print(f"u: {u}, v:{v}")
        continue

    # 手順2 親を遡る
    for i in range(count, -1, -1):
        nextu = lca_box[i][u]
        nextv = lca_box[i][v]
        # 一致しない場合のみ要素を更新
        if nextu != nextv:
            u = nextu
            v = nextv

    # 最終結果の1つ前がLCAとなる
    print(f"u: {lca_box[0][u]}, v:{lca_box[0][v]}")

```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="doubling.cpp"

int main() {
  vector<vector<int>> tree = {
    {1, 2},
    {7},
    {3, 4},
    {5},
    {6},
    {},
    {8},
    {9},
    {10, 11},
    {12},
    {15},
    {13},
    {14},
    {},
    {16},
    {},
    {}
  };

  // 前処理で求めておく2^Nを求める
  int m = 1;
  int count = 0;
  while (m < tree.size()){
    m <<= 1;
    ++count;
  }
  vector<vector<int>> lca_box(count+1, vector<int>(tree.size()+1, -1));

  // 幅優先探索で深さを求める
  vector<int> depth(tree.size(), -1);
  queue<int> q;
  q.push(0);
  depth[0] = 0;
  while (!q.empty()){
    int pos = q.front();q.pop();
    for (int to: tree[pos]){
      if (depth[to] == -1){
        lca_box[0][to] = pos;
        depth[to] = depth[pos] + 1;
        q.push(to);
      }
    }
  }

  for (int i = 1; i < count + 1;++i){
    for (int j = 0; j < tree.size(); ++j){
      lca_box[i][j] = lca_box[i-1][lca_box[i-1][j]];
    }
  }

  auto ancestors = [&](int u, int up){
    int cnt = 0;
    while (up != 0){
      if (up & 1 == 1){
        u = lca_box[cnt][u];
      }
      ++cnt;
      up >>= 1;
    }
    return u;
  };

  vector<pair<int, int>> check = {
    {3, 7},
    {10, 16},
    {11, 15},
    {2, 3}
  } ;
  for (pair<int,int> xx: check){
    int u = xx.first;
    int v = xx.second;

    // 常にu側に深さが深い方を配置
    if (depth[u] < depth[v]){
      swap(u,v);
    }

    // 手順1 深さを合わせる
    int up = depth[u] - depth[v];
    u = ancestors(u, up);

    // u,v自身が共通の要素となる場合があるので確認
    if (u == v) {
      printf("u: %d, v: %d\n", u, v);
      continue;
    }

    // 手順2 親を遡る
    for (int i = count; i > -1; --i){
      int nextu = lca_box[i][u];
      int nextv = lca_box[i][v];
      // 一致しない場合のみ要素を更新
      if (nextu != nextv){
        u = nextu;
        v = nextv;
      }
    }

    // 最終結果の1つ前がLCAとなる
    printf("u: %d, v: %d\n", lca_box[0][u], lca_box[0][v]);
  }

    return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="doubling.cs"
public static void Main(string[] args)
{
    List<List<int>> tree = new List<List<int>>
    {
        new List<int>() { 1, 2 },
        new List<int>() { 7 },
        new List<int>() { 3, 4 },
        new List<int>() { 5 },
        new List<int>() { 6 },
        new List<int>() { },
        new List<int>() { 8 },
        new List<int>() { 9 },
        new List<int>() { 10, 11 },
        new List<int>() { 12 },
        new List<int>() { 15 },
        new List<int>() { 13 },
        new List<int>() { 14 },
        new List<int>() { },
        new List<int>() { 16 },
        new List<int>() { },
        new List<int>() { }
    };

    // 前処理で求めておく2^Nを求める
    int m = 1;
    int count = 0;
    while (m < tree.Count)
    {
        m <<= 1;
        ++count;
    }
    int[,] lca_box = new int[count + 1, tree.Count + 1];

    // 幅優先探索で深さを求める
    int[] depth = new int[tree.Count];
    for (int i = 0; i < tree.Count; ++i)
    {
        depth[i] = -1;
    }
    Queue<int> q = new Queue<int>();
    q.Enqueue(0);
    depth[0] = 0;
    while (q.Count != 0)
    {
        int pos = q.Dequeue();
        foreach (int to in tree[pos])
        {
            if (depth[to] == -1)
            {
                lca_box[0, to] = pos;
                depth[to] = depth[pos] + 1;
                q.Enqueue(to);
            }
        }
    }

    for (int i = 1; i < count + 1; ++i)
    {
        for (int j = 0; j < tree.Count; ++j)
        {
            lca_box[i, j] = lca_box[i - 1, lca_box[i - 1, j]];
        }
    }

    int Ancestors(int u, int up)
    {
        int cnt = 0;
        while (up != 0)
        {
            if ((up & 1) == 1)
            {
                u = lca_box[cnt, u];
            }
            ++cnt;
            up >>= 1;
        }
        return u;
    }
    List<List<int>> check = new List<List<int>>
    {
        new List<int>() { 3, 7 },
        new List<int>() { 10, 16 },
        new List<int>() { 11, 15 },
        new List<int>() { 2, 3 }
    };

    foreach (List<int> xxx in check)
    {
        int u = xxx[0];
        int v = xxx[1];

        // 常にu側に深さが深い方を配置
        if (depth[u] < depth[v])
        {
            (u, v) = (v, u);
        }

        // 手順1 深さを合わせる
        int up = depth[u] - depth[v];
        u = Ancestors(u, up);

        // u,v自身が共通の要素となる場合があるので確認
        if (u == v)
        {
            Console.WriteLine($"u: {u}, v: {v}");
            continue;
        }

        // 手順2 親を遡る
        for (int i = count; i > -1; --i)
        {
            int nextu = lca_box[i, u];
            int nextv = lca_box[i, v];
            // 一致しない場合のみ要素を更新
            if (nextu != nextv)
            {
                u = nextu;
                v = nextv;
            }
        }

        // 最終結果の1つ前がLCAとなる
        Console.WriteLine($"u: {lca_box[0, u]}, v: {lca_box[0, v]}");
    }
}
```

  </TabItem>
</Tabs>

## 参考

- [https://algo-logic.info/doubling/](https://algo-logic.info/doubling/)
