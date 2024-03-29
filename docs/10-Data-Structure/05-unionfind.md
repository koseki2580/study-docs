---
title: Union-Find木
sidebarlabel: Union-Find木
draft: false
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## UnionFind 木とは

UnionFind 木はグループ分けを木構造で管理するデータ構造のことを言う。
UnionFind 木を用いることで次の 2 点を高速で求めることが可能である。

- 要素 a の値の要素を取得する(Find)
  - 2 つの要素が同じグループ（根）に属しているか確認
- 要素 a と要素 b に属している要素を結合(Union)

### UnionFind 木のクラス

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="union-find.py"
class UnionFind:
    def __init__(self,n):
        self.n = n
        self.par = [-1] * n

    def find(self, x):
        if self.par[x] < 0:
            return x
        # 座標圧縮
        self.par[x] = self.find(self.par[x])
        return self.par[x]

    # 同じグループに属しているか
    def same(self, x, y):
        return self.find(x) == self.find(y)

    # 2つの要素が属するグループを結合
    def union(self,x,y):
        x = self.find(x)
        y = self.find(y)
        # 同じグループか
        if x == y:
            return
        # 結合する際は要素が少ないものを多いものに属するようにさせる
        if self.par[x] > self.par[y]:
            x,y = y,x
        self.par[x] += self.par[y]
        self.par[y] = x

    # 属しているグループの数
    def size(self, x):
        return -self.par[self.find(x)]
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="union-find.cpp"
struct UnionFind{
  vector<int> par;
  UnionFind(int N) : par(N,-1){}
  int find(int x){
    if (par[x] < 0) return x;
    return par[x] = find(par[x]);
  }

  bool same(int x, int y) {
    return find(x) == find(y);
  }

  void unite(int x, int y){
    x = find(x);
    y = find(y);
    if (x == y) return;
    if (par[x] > par[y]) swap(x, y);
    par[x] += par[y];
    par[y] = x;
  }

  int size(int x) {
    return -par[find(x)];
  }
};
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="union-find.cs"
class UnionFind
{
    public List<int> par;
    public UnionFind(int N)
    {
        par = new List<int>();
        for (int i = 0; i < N; ++i) par.Add(-1);
    }

    public int Find(int x)
    {
        if (par[x] < 0) return x;
        return par[x] = Find(par[x]);
    }

    public bool Same(int x, int y)
    {
        return Find(x) == Find(y);
    }

    public void Union(int x, int y)
    {
        x = Find(x);
        y = Find(y);
        if (x == y) return;
        if (par[x] > par[y]) (x, y) = (y, x);
        par[x] += par[y];
        par[y] = x;
    }

    public int Size(int x)
    {
        return -par[Find(x)];
    }
}

```

  </TabItem>
</Tabs>

### 初期化

要素 x が属してる木構造を配列で表すことができるので、グループを配列で管理する。

要素数(頂点数)の配列を作成し、初期値は`-1`とし、union つまり結合が行われた際に、結合先の要素番号を要素にもつことで要素 x の根を管理することができる。

例えば、`par[x] = 2`だとすると要素 x は要素番号 2 のグループに属している。

`-1`で初期化するのは次のような理由がある

- 負の数を用いることで根の要素かどうかを`< 0`で判定することができる
- 根の要素にグループの個数を管理させることができる（ランクの考え方ができる）

![イメージ図](/img/svg/Data-structure/unionfind/union-1.drawio.svg "配列と木構造の関係")

図のような木構造で 3 つのグループが存在するとき、配列が図のようになる。

### find

find 関数では引数にとる値が属している根の要素番号を返却する。
上の図を例にあげると
`find(1)`では戻り値は`1`
`find(4)`では戻り値は`4`
`find(5)`では戻り値は`1`

union(結合)する際に次の図のように結合してしまうと高速で属しているグループの根を取得することが高速で行えなくなる。

![イメージ図](/img/svg/Data-structure/unionfind/union-2.drawio.svg "高速でfindできない例")

このように結合してしまうと要素 n の根の値を取得するには O(n)の計算量が掛かってしまう。この問題を解決するために処理として**経路圧縮**と呼ばれる処理がある。

この処理は、根を探索した際に経路を根に接続変更することで経路を圧縮する。

以下の図の ④ で要素番号を 4 の根を検索する際には`4 → 3 → 2 → 1`と順に辿って根の要素番号が`1`であることがわかる。
この辿る処理の際に直接根の方へ経路を接続する。再起的な処理にすることで簡単に実装が可能である。

![イメージ図](/img/svg/Data-structure/unionfind/union-3.drawio.svg "経路圧縮")

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
def find(self, x):
    if self.par[x] < 0:
        return x
     # 座標圧縮
    self.par[x] = self.find(self.par[x])
    return self.par[x]
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int find(int x){
    if (par[x] < 0) return x;
    return par[x] = find(par[x]);
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public int Find(int x)
{
    if (par[x] < 0) return x;
    return par[x] = Find(par[x]);
}
```

  </TabItem>
</Tabs>

### same

same 関数は 2 つの要素が同じグループに属しているかを判定する関数である。
これは find 関数を用いることで簡単に求めることができる。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
# 同じグループに属しているか
def same(self, x, y):
    return self.find(x) == self.find(y)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
bool same(int x, int y) {
    return find(x) == find(y);
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public bool Same(int x, int y)
{
    return Find(x) == Find(y);
}
```

  </TabItem>
</Tabs>

### union

union 関数は引数にとる 2 つの要素がそれぞれ属しているグループを結合する処理である。
結合する際はグループの数が少ない方を多い方に結合することで処理量を減らすことが可能である。

イメージ図は以下である。

![イメージ図](/img/svg/Data-structure/unionfind/union-4.drawio.svg "ユニオン")

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
# 2つの要素が属するグループを結合
def union(self,x,y):
    x = self.find(x)
    y = self.find(y)
    # 同じグループか
    if x == y:
        return
    # 結合する際は要素が少ないものを多いものに属するようにさせる
    if self.par[x] > self.par[y]:
        x,y = y,x
    self.par[x] += self.par[y]
    self.par[y] = x
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
void unite(int x, int y){
    x = find(x);
    y = find(y);
    if (x == y) return;
    if (par[x] > par[y]) swap(x, y);
    par[x] += par[y];
    par[y] = x;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public void Union(int x, int y)
{
    x = Find(x);
    y = Find(y);
    if (x == y) return;
    if (par[x] > par[y]) (x, y) = (y, x);
    par[x] += par[y];
    par[y] = x;
}
```

  </TabItem>
</Tabs>

### size

size 関数は引数にとる番号が所属するグループの個数を出力する関数になります。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
# 同じグループに属しているか
def same(self, x, y):
    return self.find(x) == self.find(y)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
bool same(int x, int y) {
    return find(x) == find(y);
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public bool Same(int x, int y)
{
    return Find(x) == Find(y);
}
```

  </TabItem>
</Tabs>
