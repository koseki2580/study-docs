---
title: ワーシャル-フロイド法
sidebar_label: ワーシャル-フロイド法
draft: false
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## ワーシャル-フロイド法とは

ワーシャル-フロイド法は、[ダイクストラ法](/docs/Algorithm/dijkstra)のように単一始点最短経路問題を解くアルゴリズムではなく、全点間最短経路問題を解くアルゴリズムである。

### アルゴリズム

プログラム自体はものすごくシンプルである。

#### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="warshall-floyd.py"



```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="warshall-floyd.cpp"

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="warshall-floyd.cs"

```

  </TabItem>
</Tabs>

#### 流れ

始点・中継点・終点の全てのパターンを確認することで全点間の最短経路を求めている。

ダイクストラ法で使用したものを同じグラフを考える。

![ワーシャル-フロイド法](/img/svg/Algorithm/warshall-floyd/warshall-floyd-1.drawio.svg "ワーシャル-フロイド法")

初めに、与えられたパスから各頂点への最短経路を記録した表を作成する。与えられてたパス以外の最短経路は無限(図では INF として表現する)とする。また、始点と終点が一致している場合は 0 とする。

![ワーシャル-フロイド法2](/img/svg/Algorithm/warshall-floyd/warshall-floyd-2.drawio.svg "ワーシャル-フロイド法2")

初めに、中継点を 0 とし、全ての頂点の始点・終点の組み合わせを考えていく。
