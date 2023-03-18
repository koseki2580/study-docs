---
title: ワーシャル-フロイド法
sidebar_label: ワーシャル-フロイド法
draft: true
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

初めに、中継点を 0 とし、全頂点の始点・終点の組み合わせを考えていく。例えば、1 $\rightarrow$ 2 の経路を考える際に、
1 $\rightarrow$ 2 の経路と 1 $\rightarrow$ 0 + 0 $\rightarrow$ 2 のように頂点 0 を経由して向かう経路のどちらがコストが低いかを確認する。

1 $\rightarrow$ 0 + 0 $\rightarrow$ 2 の経路方がコストが低いので最短経路表の 1 $\rightarrow$ 2 の部分のコストを更新する。

![ワーシャル-フロイド法3](/img/svg/Algorithm/warshall-floyd/warshall-floyd-3.drawio.svg "ワーシャル-フロイド法3")

全ての経路を確認すると最短経路表は次の様になる。

![ワーシャル-フロイド法4](/img/svg/Algorithm/warshall-floyd/warshall-floyd-4.drawio.svg "ワーシャル-フロイド法4")

同様に、次は頂点 1 を中継点として考えると次の様になる。

![ワーシャル-フロイド法5](/img/svg/Algorithm/warshall-floyd/warshall-floyd-5.drawio.svg "ワーシャル-フロイド法5")

同様に、次は頂点 2 を中継点として考えると次の様になる。

![ワーシャル-フロイド法6](/img/svg/Algorithm/warshall-floyd/warshall-floyd-6.drawio.svg "ワーシャル-フロイド法6")

同様に、次は頂点 3 を中継点として考えると次の様になる。

![ワーシャル-フロイド法7](/img/svg/Algorithm/warshall-floyd/warshall-floyd-7.drawio.svg "ワーシャル-フロイド法7")

同様に、次は頂点 4 を中継点として考えると次の様になる。

![ワーシャル-フロイド法8](/img/svg/Algorithm/warshall-floyd/warshall-floyd-8.drawio.svg "ワーシャル-フロイド法8")

同様に、次は頂点 5 を中継点として考えると次の様になる。

![ワーシャル-フロイド法9](/img/svg/Algorithm/warshall-floyd/warshall-floyd-9.drawio.svg "ワーシャル-フロイド法9")

同様に、次は頂点 6 を中継点として考えると次の様になる。

![ワーシャル-フロイド法10](/img/svg/Algorithm/warshall-floyd/warshall-floyd-10.drawio.svg "ワーシャル-フロイド法10")

同様に、次は頂点 7 を中継点として考えると次の様になる。

![ワーシャル-フロイド法11](/img/svg/Algorithm/warshall-floyd/warshall-floyd-10.drawio.svg "ワーシャル-フロイド法11")

全頂点を中継点として確認終えると最短経路表には全頂点間の最短経路が格納されている。

なぜ、この方法で全頂点間の最短経路を求めることができるかを考える。

問題を単純化させるために全頂点が一直線に並んだ以下の図で考えてみる。

![ワーシャル-フロイド法12](/img/svg/Algorithm/warshall-floyd/warshall-floyd-11.drawio.svg "ワーシャル-フロイド法12")

この図の 0 $\rightarrow$ 4 の経路は 28 が最短経路となる。最短経路は 0 $\rightarrow$ 1 $\rightarrow$ 3 $\rightarrow$ 5 $\rightarrow$ 7 $\rightarrow$ 6 $\rightarrow$ 2 $\rightarrow$ 4 となる。

0 $\rightarrow$ 4 に行くまでに、中継点としては 1,2,3,5,6,7 が存在する。つまり、

0 $\rightarrow$ 1 のコスト $+$ 1 $\rightarrow$ 4 のコスト, 0 $\rightarrow$ 7 のコスト $+$ 7 $\rightarrow$ 4 のコストも全て同じとなる。

複数中継点が存在した場合、どの中継点を最後としてみても結果は変わらないことを意味している。

さらに、中継点を考えると 0 $\rightarrow$ 3 の最短経路は 0 $\rightarrow$ 1 $\rightarrow$ 3 であり、中継点 1 を考える際に、0 $\rightarrow$ 3 の最短経路が求められていることになる。つまり、中継点までの最短距離 $+$ 中継点からの最短経路 $=$ ある頂点間の最短経路となる。

中継点を基準に最短経路を足し合わせることで両端の最短経路を求める処理を繰り返し行っている。
