---
title: 深さ優先探索
sidebar_label: 深さ優先探索
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 深さ優先探索とは

深さ優先探索(DFS : Depth First Search)とは[グラフ](/docs/Data-structure/graph)や[木構造](/docs/Data-structure/tree)を探索するためのアルゴリズムであり、探索を開始する位置から近いものから探索していく探索手法。

## アルゴリズム

### 流れ

次の図のような木構造があったとする。

![イメージ図](/img/svg/Algorithm/depth-first-search/depth-1.drawio.svg "最初の木構造")

頂点`1`を始点として、幅優先探索を行うと次のような流れになる。

1. 始点は探索済みとして記録する。

![イメージ図](/img/svg/Algorithm/depth-first-search/depth-2.drawio.svg "手順1後の木構造")

頂点`1`と繋がっている頂点`2,4`を次の探索点に追加する。

2. 頂点`4`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-3.drawio.svg "手順2後の木構造")
   頂点`4`と繋がっている頂点`7,6`を次の探索点に追加する

3. 頂点`6`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-4.drawio.svg "手順3後の木構造")
   頂点`6`と繋がっている頂点`8`を次の探索点に追加する

4. 頂点`8`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-5.drawio.svg "手順4後の木構造")
   頂点`8`と繋がっている頂点は存在しないので何も追加しない

5. 頂点`7`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-6.drawio.svg "手順5後の木構造")
   頂点`7`と繋がっている頂点は存在しないので何も追加しない

6. 頂点`2`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-7.drawio.svg "手順6後の木構造")
   頂点`2`と繋がっている頂点`3`を次の探索点に追加する

7. 頂点`3`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-8.drawio.svg "手順7後の木構造")
   頂点`3`と繋がっている頂点`5`を次の探索点に追加する

8. 頂点`5`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/depth-first-search/depth-9.drawio.svg "手順8後の木構造")
   頂点`5`と繋がっている頂点は存在しないので何も追加しない

### 使用するデータ構造

流れの次の探索点の配列の順番を見ると配列新たに要素を追加する際も配列から要素を取り出す際も一番右側、要素番号の一番後ろの要素に処理を行っている。

つまり、FILO の動作が行われている。この FILO を表すのに適したデータ構造が**[Stack](/docs/Data-structure/stack)**である。

- 次の探索点の配列の一番後ろの要素を取り出し、探索を行う
- 探索した際に新たな未探索要素が見つかったら、次の探索点の配列の後ろに要素の追加する

以上の 2 つの処理を行えれば深さ優先探索を行うことができる。
そのため、それぞれ Stack を用いると

- 次の探索点の配列の一番後ろの要素を`pop`し（取り出し）、探索を行う
- 探索した際に新たな未探索要素が見つかったら、次の探索点の配列の後ろに`push`（要素の追加）する

と言えるので Stack を用いてることができることがわかる。

### 走査順

深さ優先探索には 3 種類の走査順が存在する。走査順とは簡単にいうとどのタイミングで訪れたことを記録するかということである。
探索する順番は同じであり(根から木構造の左に沿う形)、訪れた番号の記録順が異なる。

- 行きがけ順(頂点に到達時)
- 通りがけ順(左部分木を走査終了時)
- 帰りがけ順(部分木を走査終了時)

それぞれの走査順序は次のようになる。(上の流れの記録(探索済み点の並び)は行きがけ順である)

それぞれの走査順の違いを次の図をベースに確認する。赤点線に沿って頂点を訪れるとする。

![イメージ図](/img/svg/Algorithm/depth-first-search/depth-10.drawio.svg "木構造ベース")

記録する順番は頂点についてる青色の丸を通ったタイミングで頂点を記録する。

#### 行きがけ順

頂点に訪れたタイミングで探索済みとする走査順

![イメージ図](/img/svg/Algorithm/depth-first-search/depth-11.drawio.svg "行きがけ順")

`1 → 3 → 6 → 5 → 7 → 2 → 4`の順に記録される。

#### 通りがけ順

左部分木を走査し終えたタイミングで探索済みとする走査順(多分木では定義されていない)

![イメージ図](/img/svg/Algorithm/depth-first-search/depth-12.drawio.svg "通りがけ順")

`6 → 3 → 7 → 5 → 1 → 2 → 4`の順に記録される。

#### 帰りがけ順

全ての子ノードを訪れたタイミングで探索済みとする走査順

![イメージ図](/img/svg/Algorithm/depth-first-search/depth-13.drawio.svg "帰りがけ順")

`6 → 7 → 5 → 3 → 4 → 2 → 1`の順に記録される。

### プログラム

探索済みを記録するには再帰処理を用いると楽に記述することができる。

#### 行きがけ順

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="depth-first-search-pre-order.py"
from collections import deque

def DFS(s ,p = -1):
    # 探索対象に入った時に記録する
    record.append(s)
    check[s] = True
    for to in graph[s]:
        # 一度探索したものは探索しない
        if check[to] == True:
            continue
        DFS(to,s)
box = [[1,3],[1,2],[3,6],[3,5],[5,7],[2,4]]
graph = [[] for _ in range(7)]

# 無向グラフを作成
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)
    graph[box[i][1]-1].append(box[i][0]-1)

check = [False] * 7
record = []
DFS(0)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="depth-first-search-pre-order.cpp"
vector<int> record;
vector<bool> check(7, false);
vector<vector<int>> graph(7);

void DFS(int s, int p = -1)
{
    // 探索対象に入った時に記録する
    record.push_back(s);
    check[s] = true;
    for (auto to : graph[s])
    {
        // 一度探索したものは探索しない
        if (check[to] == true)
            continue;
        DFS(to, s);
    }
}

int main()
{

    vector<pair<int, int>> box = {{1, 3}, {1, 2}, {3, 6}, {3, 5}, {5, 7}, {2, 4}};
    // 無向グラフを作成
    for (int i = 0; i < box.size(); ++i)
    {
        graph[box[i].first - 1].push_back(box[i].second - 1);
        graph[box[i].second - 1].push_back(box[i].first - 1);
    }

    DFS(0);
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="depth-first-search-pre-order.cs"
static List<bool> check = new List<bool>();
static List<int> record = new List<int>();
static List<List<int>> graph = new List<List<int>>();

public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 3 }, { 1, 2 }, { 3, 6 }, { 3, 5 }, { 5, 7 }, { 2, 4 } };

    for (int i = 0; i < 7; ++i)
    {
        graph.Add(new List<int>());
        check.Add(false);
    }

    //無向グラフを作成
    for (int i = 0; i < box.Length / 2; ++i)
    {
        graph[box[i, 0] - 1].Add(box[i, 1] - 1);
        graph[box[i, 1] - 1].Add(box[i, 0] - 1);
    }
    DFS(0);
    for(int i = 0; i < 7; ++i)
    {
        Console.Write(record[i] + " ");
    }
}

static void DFS(int s, int p = -1)
{
    // 探索対象に入った時に記録する
    record.Add(s);
    check[s] = true;
    foreach (int to in graph[s])
    {
        // 一度探索したものは探索しない
        if (check[to] == true) continue;
        DFS(to, s);
    }
}
```

  </TabItem>
</Tabs>

#### 通りがけ順

通りがけ順は 2 分木の場合のみ表現できる走査順である。そのため、`行きがけ順`, `帰りがけ順`とは異なるプログラムになる。

`行きがけ順`, `帰りがけ順`は多分木でも同様に動作します。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="depth-first-search-in-order.py"
class tree:
    def __init__(self,value):

        self.left :tree = None
        self.right :tree = None
        self.value = value
def DFS(s : tree):
    if s == None :return
    # 行きがけ順ならここで追加
    DFS(s.left)
    # 通りがけ順なのでここで追加
    record.append(s.value)
    DFS(s.right)
    # 帰りがけ順ならここで追加

root = tree(0)
root.left = tree(2)
root.left.left = tree(5)
root.left.right = tree(4)
root.left.right.left = tree(6)
root.right = tree(1)
root.right.right = tree(3)

record = []
DFS(root)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="depth-first-search-in-order.cpp"
vector<int> record;

struct tree
{
    tree *left, *right;
    int value;

    tree() {}
    tree(const int &val) : tree(nullptr, nullptr, val) {}
    tree(tree *left_, tree *right_, const int &val_) : left(left_), right(right_), value(val_) {}
};

void DFS(tree *s)
{
    if (s == nullptr)
        return;
    // 行きがけ順ならここで追加
    DFS(s->left);
    // 通りがけ順なのでここで追加
    record.push_back(s->value);
    DFS(s->right);
    // 帰りがけ順ならここで追加
}

int main()
{
    tree *root = new tree(0);
    root->left = new tree(2);
    root->left->left = new tree(5);
    root->left->right = new tree(4);
    root->left->right->left = new tree(6);
    root->right = new tree(1);
    root->right->right = new tree(3);

    DFS(root);

    return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="depth-first-search-in-order.cs"

class tree
{
    public tree left = null;
    public tree right = null;
    public int value;
    public tree(int x)
    {
        value = x;
    }
}
static List<int> record = new List<int>();

public static void Main(string[] args)
{
    tree root = new tree(0);
    root.left = new tree(2);
    root.left.left = new tree(5);
    root.left.right = new tree(4);
    root.left.right.left = new tree(6);
    root.right = new tree(1);
    root.right.right = new tree(3);

    DFS(root);
}

static void DFS(tree root)
{
    if (root != null)
    {
        // 行きがけ順ならここで追加
        DFS(root.left);
        // 通りがけ順なのでここで追加
        record.Add(root.value);
        // 帰りがけ順ならここで追加
        DFS(root.right);
    }
}
```

  </TabItem>
</Tabs>

`行きがけ順`, `帰りがけ順`ともに追加する位置を変えるだけできる(2 分木の場合のみ)。
ポインターや参照 ID など考えないといけないので、実装としてはやや重めだと思う。

#### 帰りがけ順

````mdx-code-block
<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="depth-first-search-post-order.py"
from collections import deque

def DFS(s ,p = -1):
    check[s] = True
    for to in graph[s]:
        # 一度探索したものは探索しない
        if check[to] == True:
            continue
        DFS(to,s)
    # 探索を終えた時に記録する
    record.append(s)
box = [[1,3],[1,2],[3,6],[3,5],[5,7],[2,4]]
graph = [[] for _ in range(7)]

# 無向グラフを作成
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)
    graph[box[i][1]-1].append(box[i][0]-1)

check = [False] * 7
record = []
DFS(0)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="depth-first-search-post-order.cpp"
vector<int> record;
vector<bool> check(7, false);
vector<vector<int>> graph(7);

void DFS(int s, int p = -1)
{
    check[s] = true;
    for (auto to : graph[s])
    {
        // 一度探索したものは探索しない
        if (check[to] == true)
            continue;
        DFS(to, s);
    }
    // 探索対象に入った時に記録する
    record.push_back(s);
}

int main()
{

    vector<pair<int, int>> box = {{1, 3}, {1, 2}, {3, 6}, {3, 5}, {5, 7}, {2, 4}};
    // 無向グラフを作成
    for (int i = 0; i < box.size(); ++i)
    {
        graph[box[i].first - 1].push_back(box[i].second - 1);
        graph[box[i].second - 1].push_back(box[i].first - 1);
    }

    DFS(0);
    rep(i, 0, 7) printf("%d ", record[i]);
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="depth-first-search-post-order.cs"
static List<bool> check = new List<bool>();
static List<int> record = new List<int>();
static List<List<int>> graph = new List<List<int>>();

public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 3 }, { 1, 2 }, { 3, 6 }, { 3, 5 }, { 5, 7 }, { 2, 4 } };

    for (int i = 0; i < 7; ++i)
    {
        graph.Add(new List<int>());
        check.Add(false);
    }

    //無向グラフを作成
    for (int i = 0; i < box.Length / 2; ++i)
    {
        graph[box[i, 0] - 1].Add(box[i, 1] - 1);
        graph[box[i, 1] - 1].Add(box[i, 0] - 1);
    }
    DFS(0);
    for(int i = 0; i < 7; ++i)
    {
        Console.Write(record[i] + " ");
    }
}

static void DFS(int s, int p = -1)
{
    check[s] = true;
    foreach (int to in graph[s])
    {
        // 一度探索したものは探索しない
        if (check[to] == true) continue;
        DFS(to, s);
    }
    // 探索対象に入った時に記録する
    record.Add(s);
}
```

  </TabItem>
</Tabs>

````

探索済みを記録しない場合は再帰処理を使わずに次のように書くことができる。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="depth-first-search.py"
from collections import deque
box = [[1,2],[1,4],[2,3],[3,5],[4,7],[4,6],[6,8]]
graph = [[] for _ in range(8)]

# 有向グラフを作成
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)

# stackを作成
q = deque()

# 頂点1番を追加
q.append(0)

# 頂点1からの距離を記録する配列
dist = [-1] * 8
dist[0] = 0
while (len(q) > 0):

    # pop
    pos = q.pop()
    for to in graph[pos]:

        # 未探索チェック
        if dist[to] == -1:
            dist[to] = dist[pos] + 1

            # push
            q.append(to)


```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="depth-first-search.cpp"
int main() {
    vector<pair<int,int>> box = {{1,2},{1,4},{2,3},{3,5},{4,7},{4,6},{6,8}};
    vector<vector<int>> graph(8);
    // 有向グラフを作成
    for(int i = 0; i < box.size();++i){
        graph[box[i].first-1].push_back(box[i].second-1);
    }

    // stackを作成
    stack<int> q;

    // 頂点1番を追加
    q.push(0);

    // 頂点1からの距離を記録する配列
    vector<int> dist(8,-1);
    dist[0] = 0;

    while (!q.empty())
    {
        // pop
        int pos = q.top();q.pop();
        for (auto to: graph[pos]){
            if (dist[to] == -1){
                dist[to] = dist[pos] + 1;

                // push
                q.push(to);
            }
        }
    }

    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="depth-first-search.cs"
public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 2 }, { 1, 4 }, { 2, 3 }, { 3, 5 }, { 4, 7 }, { 4, 6 }, { 6, 8 } };
    List<List<int>> graph = new List<List<int>>();
    for (int i = 0;i < 8; ++i)
    {
        graph.Add(new List<int>());
    }

    for (int i = 0; i < box.Length/2; ++i)
    {
        graph[box[i, 0] - 1].Add(box[i, 1] - 1);
    }

    // stackを作成
    Stack<int> q = new Stack<int>();

    // 頂点1番を追加
    q.Push(0);

    // 頂点1からの距離を記録する配列
    int[] dist = new int[8];
    for (int i = 0; i < dist.Length; ++i) dist[i] = -1;
    dist[0] = 0;

    while (q.Count > 0)
    {
        // pop
        int pos = q.Pop();
        foreach (int to in graph[pos])
        {
            if (dist[to] == -1)
            {
                dist[to] = dist[pos] + 1;

                // push
                q.Push(to);
            }
        }
    }

}
```

  </TabItem>
</Tabs>
