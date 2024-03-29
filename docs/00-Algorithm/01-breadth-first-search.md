---
title: 幅優先探索
sidebar_label: 幅優先探索
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 幅優先探索とは

幅優先探索(BFS : Breadth First Search)とは[グラフ](/docs/Data-structure/graph)や[木構造](/docs/Data-structure/tree)を探索するためのアルゴリズムであり、探索を開始する位置から近いものから探索していく探索手法。

## アルゴリズム

### 流れ

次の図のような木構造があったとする。

![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-1.drawio.svg "最初の木構造")

頂点`1`を始点として、幅優先探索を行うと次のような流れになる。

1. 始点は探索済みとして記録する。

![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-2.drawio.svg "手順1後の木構造")

頂点`1`と繋がっている頂点`2,4`を次の探索点に追加する。

2. 頂点`2`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-3.drawio.svg "手順2後の木構造")
   頂点`2`と繋がっている頂点`3`を次の探索点に追加する

3. 頂点`4`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-4.drawio.svg "手順3後の木構造")
   頂点`4`と繋がっている頂点`7,6`を次の探索点に追加する

4. 頂点`3`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-5.drawio.svg "手順4後の木構造")
   頂点`3`と繋がっている頂点`5`を次の探索点に追加する

5. 頂点`7`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-6.drawio.svg "手順5後の木構造")
   頂点`7`と繋がっている頂点は存在しないので何も追加しない

6. 頂点`6`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-7.drawio.svg "手順6後の木構造")
   頂点`6`と繋がっている頂点`8`を次の探索点に追加する

7. 頂点`5`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-8.drawio.svg "手順7後の木構造")
   頂点`5`と繋がっている頂点は存在しないので何も追加しない

8. 頂点`8`探索済みとして記録する。
   ![イメージ図](/img/svg/Algorithm/breadth-first-search/breadth-9.drawio.svg "手順8後の木構造")
   頂点`8`と繋がっている頂点は存在しないので何も追加しない

### 使用するデータ構造

流れの次の探索点の配列の順番を見ると配列の一番左端、要素番号`0`の要素が順に取り出され、新たに要素を追加する際には一番右側、要素番号の一番後ろに追加されている。

つまり、FIFO の動作が行われている。この FIFO を表すのに適したデータ構造が**[Queue](/docs/Data-structure/queue)**である。

- 次の探索点の配列から一番前の要素を取り出し、探索を行う
- 探索した際に新たな未探索要素が見つかったら、次の探索点の配列の後ろに要素の追加する

以上の 2 つの処理を行えれば幅優先探索を行うことができる。
そのため、それぞれ Queue を用いると

- 次の探索点の配列から一番前の要素を`dequeue`し（取り出し）、探索を行う
- 探索した際に新たな未探索要素が見つかったら、次の探索点の配列の後ろに`enqueue`（要素の追加）する

と言えるので Queue を用いてることができることがわかる。

### プログラム

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="breadth-first-search.py"
from collections import deque
box = [[1,2],[1,4],[2,3],[3,5],[4,7],[4,6],[6,8]]
graph = [[] for _ in range(8)]

# 有向グラフを作成
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)

# queueを作成
q = deque()

# 頂点1番を追加
q.append(0)

# 頂点1からの距離を記録する配列
dist = [-1] * 8
dist[0] = 0
while (len(q) > 0):

    # dequeue
    pos = q.popleft()
    for to in graph[pos]:

        # 未探索チェック
        if dist[to] == -1:
            dist[to] = dist[pos] + 1

            # enqueue
            q.append(to)


```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="breadth-first-search.cpp"
int main() {
    vector<pair<int,int>> box = {{1,2},{1,4},{2,3},{3,5},{4,7},{4,6},{6,8}};
    vector<vector<int>> graph(8);
    // 有向グラフを作成
    for(int i = 0; i < box.size();++i){
        graph[box[i].first-1].push_back(box[i].second-1);
    }

    // queueを作成
    queue<int> q;

    // 頂点1番を追加
    q.push(0);

    // 頂点1からの距離を記録する配列
    vector<int> dist(8,-1);
    dist[0] = 0;

    while (!q.empty())
    {
        // dequeue
        int pos = q.front();q.pop();
        for (auto to: graph[pos]){
            if (dist[to] == -1){
                dist[to] = dist[pos] + 1;

                // enqueue
                q.push(to);
            }
        }
    }

    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="breadth-first-search.cs"
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

    // queueを作成
    Queue<int> q = new Queue<int>();

    // 頂点1番を追加
    q.Enqueue(0);

    // 頂点1からの距離を記録する配列
    int[] dist = new int[8];
    for (int i = 0; i < dist.Length; ++i) dist[i] = -1;
    dist[0] = 0;

    while (q.Count > 0)
    {
        // dequeue
        int pos = q.Dequeue();
        foreach (int to in graph[pos])
        {
            if (dist[to] == -1)
            {
                dist[to] = dist[pos] + 1;

                // enqueue
                q.Enqueue(to);
            }
        }
    }
}
```

  </TabItem>
</Tabs>
