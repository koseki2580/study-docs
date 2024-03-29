---
title: 木構造
sidebar_label: 木構造
draft: false
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 木構造とは

[グラフ構造](/docs/Data-structure/graph)の中でも特に`閉路を持たない連結なグラフ`を木構造と呼ぶ。

`閉路を持たない`とは、どういうことを指しているかというと

`同じ頂点を通らずに始点と終点が同じになることはない`

ということである。

![イメージ図](/img/svg/Data-structure/tree/tree-1.drawio.svg "閉路")

`連結である`とは全ての頂点が繋がっていることをいう。

![イメージ図](/img/svg/Data-structure/tree/tree-2.drawio.svg "連結")

つまり、`閉路を持たない連結なグラフ`とは次のような状態である。

![イメージ図](/img/svg/Data-structure/tree/tree-3.drawio.svg "木構造")

木構造には平衡 2 分探索木・AVL 木・トライ木・3 文探索木・赤黒木・スキュー木・スプレー木・B ＋木・パトリシア木などが存在する。

### 用語

開始となる頂点(ノード)を`根`と呼び、根と繋がっている辺のことを`枝`と言い、根と枝で繋がっている頂点を`子ノード`と呼ぶ。また、根が存在する木のことを`根付き木`と呼ぶ。

![イメージ図](/img/svg/Data-structure/tree/tree-4.drawio.svg "根と枝と子")

根から枝を通った個数をその頂点の`深さ`と呼び、同じ根に属しているかつ同じ深さの頂点同士を`兄弟ノード`と呼ぶ。枝で接続しているかつ深さが`-1`である頂点を`親ノード`と呼ぶ。

![イメージ図](/img/svg/Data-structure/tree/tree-5.drawio.svg "兄弟と親と深さ")

根付き木において最大の深さにある頂点のことを`葉(リーフ)`と呼び、子ノードが存在するノードを根と見ることができ、この見方をした根付き木のことを`部分木`と呼ぶ。

![イメージ図](/img/svg/Data-structure/tree/tree-6.drawio.svg "リーフ")

木構造の条件である`閉路を持たない連結なグラフ`の`連結な`を取り除いた`閉路を持たないグラフ`のことを`森`と呼ぶ。

![イメージ図](/img/svg/Data-structure/tree/tree-7.drawio.svg "森")

### プログラム

グラフ構造の特別な条件が木構造となる。
そのため、グラフ構造と全く作成するプログラムは同じになる。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
box = [[1,5],[1,3],[1,4],[4,6],[6,2]]
graph = [[] for _ in range(6)]
for i in range(len(box)):
    graph[box[i][0]-1].append(box[i][1]-1)
    graph[box[i][1]-1].append(box[i][0]-1)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int main() {
    vector<pair<int,int>> box = {{1,5},{1,3},{1,4},{4,6},{6,2}};
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
    int[,] box = new int[,] { { 1, 5 }, { 1, 3 }, { 1, 4 }, { 4, 6 }, { 6, 2 } };
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
