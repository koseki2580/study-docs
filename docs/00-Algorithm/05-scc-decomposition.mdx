---
title: 強連結成分分解
sidebar_label: 強連結成分分解
draft: true
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 強連結成分分解とは

強連結成分(SCC : Strongly Connected Component)は、有向グラフにおいて互いに行き来が可能な頂点集合のことをいい、この強連結成分に全頂点を分解していく処理を`強連結成分分解`という。

![イメージ図](/img/svg/Algorithm/scc-decomposition/scc-decomposition-1.drawio.svg "強連結成分分解")

図の左のような頂点群から図の右にあるように強連結成分ごとに色分けしていくアルゴリズムである。

## アルゴリズム

### 流れ

1. 有向グラフ G において未探索頂点がなくなるまで[深さ優先探索](/docs/Algorithm/depth-first-search)を行う。この時、帰りがけ順で頂点を記録していく。
2. 有向グラフ G の向き反転させたグラフを作成する。
3. 1.で記録した番号が大きい順に深さ優先探索を行う。
4. 3.で探索できたものが 1 つの強連結成分となるため、3.の探索において未探索頂点がなくなるまで 3.を繰り返す

を行うことで有向グラフ G を強連結成分に分解することができる。

1. 探索開始頂点を 1 として深さ優先探索を行う。([帰りがけ順](/docs/Algorithm/depth-first-search#帰りがけ順)についてはこちらに記述しています)

![深さ優先探索](/img/svg/Algorithm/scc-decomposition/scc-decomposition-2.drawio.svg "深さ優先探索")

2. 有向グラフの向きを反転させたグラフ ${G}^{H}$を作成する

![グラフの反転](/img/svg/Algorithm/scc-decomposition/scc-decomposition-3.drawio.svg "グラフの反転")

3. 1.の帰りがけ順に再度深さ優先探索を行う。1 で探索できるところまでを探索し、探索できた頂点が 1 つの強連結成分

![反転グラフの深さ優先探索](/img/svg/Algorithm/scc-decomposition/scc-decomposition-4.drawio.svg "反転グラフの深さ優先探索")

4. 次に記録番号が大きい index 番号 4 の`6`を探索する。

![反転グラフの深さ優先探索その2](/img/svg/Algorithm/scc-decomposition/scc-decomposition-5.drawio.svg "反転グラフの深さ優先探索その2")

5. 最後に`5`を探索する。

![反転グラフの深さ優先探索その3](/img/svg/Algorithm/scc-decomposition/scc-decomposition-6.drawio.svg "反転グラフの深さ優先探索その3")

以上の流れで強連結成分ごとに分解することができる。

なぜこの方法でうまくいくのかを考えてみる。(数学的に考えるのは難しい{勉強中}の直感的な理由を考える)
まず、考えるべきことはなぜ、帰りがけ順で走査順を記録し、その後ろから処理していくのかを考える。

例として次の頂点を考える。

![走査開始頂点について](/img/svg/Algorithm/scc-decomposition/scc-decomposition-7.drawio.svg "走査開始頂点について")

上の図の頂点番号が小さい順に帰りがけ順で走査していくと以下の図の様になる。

![走査開始頂点について2](/img/svg/Algorithm/scc-decomposition/scc-decomposition-8.drawio.svg "走査開始頂点について2")

ここで注目するべき部分は走査開始頂点である。

![走査開始頂点について3](/img/svg/Algorithm/scc-decomposition/scc-decomposition-9.drawio.svg "走査開始頂点について3")

帰りがけ順は走査開始頂点の子ノード(探索できるノード)を全て探索し終えると番号が記録されるため、
帰りがけ順の走査順配列の一番最後は必ず走査開始頂点となる。また、最後の要素は木構造でいう根に相当する部分とみることもできる。

経路を反転することで、閉路が存在しない場合は走査開始頂点から訪れることが可能であった頂点は訪れることができなくなる。
しかし、閉路が存在していた場合は経路を反転しても訪れることが可能である。
以下の図では 1 番頂点から 5 番頂点へ移動することができていたが経路を反転することで移動することができなくなっている

![走査開始頂点について4](/img/svg/Algorithm/scc-decomposition/scc-decomposition-10.drawio.svg "走査開始頂点について4")

走査順の最後の要素は多くの要素を訪れることができる可能性のある要素であるため(木構造の根に相当)、経路を反転すると
多くの要素から訪れられる要素となる。上の 2 つの図を考えると頂点番号 7 番は元の経路で`1, 3, 4, 5, 8, 9`に訪れることができるが
経路を反転すると頂点番号`1, 3, 4, 5, 8, 9`から訪れることができる頂点となっている。

TODO

## プログラム

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="scc.py"
from collections import deque
# 深さ優先探索の帰りがけ順
def dfs(s, p=-1):
    check[s] = True
    for to in box[s]:
        if check[to] == True:
            continue
        dfs(to, s)
    dist.append(s)

# 強連結成分分解
def SCC(dist, rbox):
    check2 = [False] * 6
    q = deque()
    scc = []
    # 帰りがけ順に記録したものがなくなるまでループを回す
    while len(dist) > 0:
        a = dist.pop()
        tempscc = []
        # 探索済み
        if check2[a] == True:
            continue
        q.append(a)

        check2[a] = True
        # 探索開始点から探索できるだけ探索する
        while len(q) > 0:
            pos = q.pop()
            for to in rbox[pos]:
                if check2[to] == False:
                    q.append(to)
                    check2[to] = True
                    tempscc.append(to)
        # 探索開始点を入れる
        tempscc.append(a)
        scc.append(tempscc)
    return scc


hen = [[1, 5], [1, 4], [2, 6], [3, 1], [4, 3], [4, 6], [6, 2]]
box = [[] for _ in range(6)]
rbox = [[] for _ in range(6)]
# 有向グラフを作成
for i in range(len(hen)):
    box[hen[i][0]-1].append(hen[i][1]-1)
    # 反転グラフ
    rbox[hen[i][1]-1].append(hen[i][0]-1)

check = [False] * (6)
dist = []

for i in range(6):
    if check[i] == True:
        continue
    dfs(i)
scc = SCC(dist, rbox)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="scc.cpp"
stack<int> record;
vector<bool> check(6, false);
vector<vector<int>> graph(6);

// 深さ優先探索の帰りがけ順
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
    record.push(s);
}

// 強連結成分分解
vector<vector<int>> SCC(stack<int> dist, vector<vector<int>> rbox)
{
    vector<bool> check2(6, false);
    stack<int> q;
    vector<vector<int>> scc;

    // 帰りがけ順に記録したものがなくなるまでループを回す
    while (!dist.empty())
    {
        int a = dist.top();
        dist.pop();
        vector<int> tempscc;
        // 探索済み
        if (check2[a] == true)
            continue;
        q.push(a);
        check2[a] = true;
        // 探索開始点から探索できるだけ探索する
        while (!q.empty())
        {
            int pos = q.top();
            q.pop();
            for (auto to : rbox[pos])
            {
                if (check2[to] == false)
                {
                    q.push(to);
                    check2[to] = true;
                    tempscc.push_back(to);
                }
            }
        }
        // 探索開始点を入れる
        tempscc.push_back(a);
        scc.push_back(tempscc);
    }
    return scc;
}

int main()
{

    vector<pair<int, int>> box = {{1, 5}, {1, 4}, {2, 6}, {3, 1}, {4, 3}, {4, 6}, {6, 2}};
    vector<vector<int>> rgraph(6);
    // 有向グラフを作成
    for (int i = 0; i < box.size(); ++i)
    {
        graph[box[i].first - 1].push_back(box[i].second - 1);
        // 反転グラフ
        rgraph[box[i].second - 1].push_back(box[i].first - 1);
    }

    DFS(0);

    vector<vector<int>> scc = SCC(record, rgraph);
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="scc.cs"
static List<bool> check = new List<bool>();
static Stack<int> record = new Stack<int>();
static List<List<int>> graph = new List<List<int>>();

public static void Main(string[] args)
{
    int[,] box = new int[,] { { 1, 5 }, { 1, 4 }, { 2, 6 }, { 3, 1 }, { 4, 3 }, { 4, 6 }, { 6, 2 } };

    List<List<int>> rgraph = new List<List<int>>();
    for (int i = 0; i < 6; ++i)
    {
        graph.Add(new List<int>());
        rgraph.Add(new List<int>());
        check.Add(false);
    }
    // 有向グラフを作成
    for (int i = 0; i < box.Length / 2; ++i)
    {
        graph[box[i, 0] - 1].Add(box[i, 1] - 1);
        // 反転グラフ
        rgraph[box[i, 1] - 1].Add(box[i, 0] - 1);
    }

    DFS(0);
    List<List<int>> scc = SCC(record, rgraph);
    Console.WriteLine(scc.Count);
    for (int i = 0; i < scc.Count; ++i)
    {
        Console.Write(scc[i].Count + " ");
        for (int j = 0; j < scc[i].Count; ++j)
        {
            Console.Write(scc[i][j] + " ");
        }
        Console.WriteLine();
    }
}

// 深さ優先探索の帰りがけ順
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
    record.Push(s);
}

// 強連結成分分解
static List<List<int>> SCC(Stack<int> dist, List<List<int>> rbox)
{
    List<bool> check2 = new List<bool>();
    for (int i = 0; i < 6; ++i)
    {
        check2.Add(false);
    }
    List<List<int>> scc = new List<List<int>>();
    Stack<int> q = new Stack<int>();

    //帰りがけ順に記録したものがなくなるまでループを回す
    while (dist.Count > 0)
    {
        int a = dist.Peek();dist.Pop();
        if (check2[a] == true) continue;
        q.Push(a);
        check2[a] = true;
        List<int> tempscc = new List<int>();
        // 探索開始点から探索できるだけ探索する
        while (q.Count > 0)
        {
            int pos = q.Peek();q.Pop();
            foreach(int to in rbox[pos])
            {
                if (check2[to] == false)
                {
                    q.Push(to);
                    check2[to] = true;
                    tempscc.Add(to);
                }
            }
        }
        // 探索開始点を入れる
        tempscc.Add(a);
        scc.Add(tempscc);

    }
    return scc;
}
```

  </TabItem>
</Tabs>

上記のプログラムは AtCoder Library Practice Contest の[G 問題 (SCC)](https://atcoder.jp/contests/practice2/tasks/practice2_g)でそれぞれ`AC(正解)`した内容を上記の図に合うように修正しました。
計算時間は

| 計算時間 | Python | C++ |  C#  |
| :------: | :----: | :-: | :--: |
|   [ms]   |  2195  | 772 | 4287 |

でした。

**もっと効率の良い方法を知っていたら教えていただければ幸いです**。
