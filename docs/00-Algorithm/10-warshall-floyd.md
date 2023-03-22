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

ワーシャル-フロイド法は全点間の最短距離を保持しており、負のパスが存在した場合は、`[i][j]`として i から j までの最短距離を持つ配列でデータを管理していた場合に、i と j が一致する時は同じ頂点を移動しているので、最短距離は 0 となるが負となる。そのため、`[i][i]`が負であるかを確認することで負の経路が存在するか確認することができる。

### アルゴリズム

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
全頂点を経由したとしてもパスの個数は頂点数-1 が最大となるので、中継点として全頂点を確認しているので最短距離を求めることができる。

プログラム自体はものすごくシンプルである。

#### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="warshall-floyd.py"
# pos1, pos2, costの順に格納
example = [
    [0, 1, 10],
    [0, 2, 5],
    [1, 3, 4],
    [1, 4, 20],
    [2, 3, 6],
    [2, 6, 8],
    [3, 5, 1],
    [4, 5, 4],
    [4, 7, 7],
    [5, 6, 2],
    [5, 7, 4],
    [6, 7, 9]
]
INF = 100

# box[i][j] 始点iから終点jまでの最短経路を保持する
box = [[INF] * 8 for _ in range(8)]
for i in range(8):
    # 始点と終点が同じ場合はコストを0とする
    box[i][i] = 0
for i in range(len(example)):
    # 与えられたパスを記録する
    box[example[i][0]][example[i][1]] = example[i][2]
    box[example[i][1]][example[i][0]] = example[i][2]

# ワーシャル-フロイド法
for k in range(8):
    for i in range(8):
        for j in range(8):
            box[i][j] = min(box[i][j], box[i][k] + box[k][j])
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="warshall-floyd.cpp"
int main() {
	// pos1, pos2, costの順に格納
	vector<tuple<int,int,int>> example = {
		{0, 1, 10},
		{0, 2, 5},
		{1, 3, 4},
		{1, 4, 20},
		{2, 3, 6},
		{2, 6, 8},
		{3, 5, 1},
		{4, 5, 4},
		{4, 7, 7},
		{5, 6, 2},
		{5, 7, 4},
		{6, 7, 9}
	};
	int INF = 100;

	// box[i][j] 始点iから終点jまでの最短経路を保持する
	vector<vector<int>> box(8, vector<int>(8,INF));
	for (int i = 0; i < 8; ++i){
		// 始点と終点が同じ場合はコストを0とする
		box[i][i] = 0;
	}

	for (int i = 0; i < example.size(); ++i)
	{
		// 与えられたパスを記録する
		box[get<0>(example[i])][get<1>(example[i])] = (get<2>(example[i]));
		box[get<1>(example[i])][get<0>(example[i])] = (get<2>(example[i]));
	}

	// ワーシャル-フロイド法
	for (int k = 0; k < 8; ++k){
		for (int i = 0; i < 8; ++i){
			for (int j = 0; j < 8; ++j){
				box[i][j] = min(box[i][j], box[i][k] + box[k][j]);
			}
		}
	}
	rep(i,0,8){
		rep(j,0,8){
			printf("%d ", box[i][j]);
		}
		printf("\n");
	}
	return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="warshall-floyd.cs"
public static void Main(string[] args)
{
    // pos1, pos2, costの順に格納
    List<List<int>> example = new List<List<int>>
    {
        new List<int>() { 0, 1, 10 },
        new List<int>() { 0, 2, 5 },
        new List<int>() { 1, 3, 4 },
        new List<int>() { 1, 4, 20 },
        new List<int>() { 2, 3, 6 },
        new List<int>() { 2, 6, 8 },
        new List<int>() { 3, 5, 1 },
        new List<int>() { 4, 5, 4 },
        new List<int>() { 4, 7, 7 },
        new List<int>() { 5, 6, 2 },
        new List<int>() { 5, 7, 4 },
        new List<int>() { 6, 7, 9 }
    };

    // box[i][j] 始点iから終点jまでの最短経路を保持する
    int[,] box = new int[8, 8];
    int INF = 100;
    for (int i = 0; i < 8; ++i)
    {
        for (int j = 0; j < 8; ++j)
        {
            box[i, j] = INF;
        }
    }

    for (int i = 0; i < 8; ++i)
    {
        // 始点と終点が同じ場合はコストを0とする
        box[i, i] = 0;
    }

    for (int i = 0; i < example.Count; ++i)
    {
        // 与えられたパスを記録する
        box[example[i][0], example[i][1]] = example[i][2];
        box[example[i][1], example[i][0]] = example[i][2];
    }

    // ワーシャル-フロイド法
    for (int k = 0; k < 8; ++k)
    {
        for (int i = 0; i < 8; ++i)
        {
            for (int j = 0; j < 8; ++j)
            {
                box[i, j] = Math.Min(box[i, j], box[i, k] + box[k, j]);
            }
        }
    }
}
```

  </TabItem>
</Tabs>

### 経路復元

経路を復元する方法はいくつか存在するが、簡単に求められるかつ経路を辿るのが簡単な方法を説明する。
ダイクストラ法では前の頂点番号を記録していた。しかし、ワーシャル-フロイド法では全点間の最短距離を求めているので、次の頂点を保持しながら経路を復元することが可能である。

上述したように最短経路を求める際に、中継点までの最短経路$+$中継点からの最短経路で最短経路を導出している。そのため、始点から中継点までの経路と始点と終点までの経路は同じ経路を通ることを意味している。つまり、0 番 $\rightarrow$ 7 番の最短経路は[ダイクストラ法](/docs/Algorithm/dijkstra)でも求めた様に、 0 $\rightarrow$ 2 $\rightarrow$ 3 $\rightarrow$ 5 $\rightarrow$ 7 である。
これは 0 $\rightarrow$ 7 の最短経路は 2 $\rightarrow$ 7 の最短経路と 0 $\rightarrow$ 2 を除いて同じ経路を通ることを意味する。

0 番の次の頂点が 2 であり、2 ということさえ分かれば、次は 2 $\rightarrow$ 7 の最短経路を考えれば良いということになる。これを繰り返していくと最終的に 7 まで行き着く。
そのため、0 $\rightarrow$ 7 において次に中継する点である 2 を保持することで経路を復元していくことができることが分かる。

#### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="warshall-floyd.py"
# pos1, pos2, costの順に格納
example = [
    [0, 1, 10],
    [0, 2, 5],
    [1, 3, 4],
    [1, 4, 20],
    [2, 3, 6],
    [2, 6, 8],
    [3, 5, 1],
    [4, 5, 4],
    [4, 7, 7],
    [5, 6, 2],
    [5, 7, 4],
    [6, 7, 9]
]
INF = 100

# box[i][j] 始点iから終点jまでの最短経路を保持する
box = [[INF] * 8 for _ in range(8)]
for i in range(8):
    # 始点と終点が同じ場合はコストを0とする
    box[i][i] = 0
for i in range(len(example)):
    # 与えられたパスを記録する
    box[example[i][0]][example[i][1]] = example[i][2]
    box[example[i][1]][example[i][0]] = example[i][2]

next = [[0]*8 for i in range(8)]
for i in range(8):
    for j in range(8):
        next[i][j] = j

# ワーシャル-フロイド法
for k in range(8):
    for i in range(8):
        for j in range(8):
            if box[i][k] + box[k][j] < box[i][j]:
                box[i][j] = box[i][k] + box[k][j]
                next[i][j] = next[i][k]

pos = 0
while (pos != 7):
    print(pos, end=" ")
    pos = next[pos][7]
print(pos)

```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="warshall-floyd.cpp"

int main() {
	// pos1, pos2, costの順に格納
	vector<tuple<int,int,int>> example = {
		{0, 1, 10},
		{0, 2, 5},
		{1, 3, 4},
		{1, 4, 20},
		{2, 3, 6},
		{2, 6, 8},
		{3, 5, 1},
		{4, 5, 4},
		{4, 7, 7},
		{5, 6, 2},
		{5, 7, 4},
		{6, 7, 9}
	};
	int INF = 100;

	// box[i][j] 始点iから終点jまでの最短経路を保持する
	vector<vector<int>> box(8, vector<int>(8,INF));
	for (int i = 0; i < 8; ++i){
		// 始点と終点が同じ場合はコストを0とする
		box[i][i] = 0;
	}

	vector<vector<int>> next(8, vector<int>(8,0));
	for (int i = 0; i < 8; ++i){
		for (int j = 0; j < 8; ++j){
			next[i][j] = j;
		}
	}

	for (int i = 0; i < example.size(); ++i)
	{
		// 与えられたパスを記録する
		box[get<0>(example[i])][get<1>(example[i])] = (get<2>(example[i]));
		box[get<1>(example[i])][get<0>(example[i])] = (get<2>(example[i]));
	}

	// ワーシャル-フロイド法
	for (int k = 0; k < 8; ++k){
		for (int i = 0; i < 8; ++i){
			for (int j = 0; j < 8; ++j){
				if (box[i][k] + box[k][j] < box[i][j]){
					box[i][j] =  box[i][k] + box[k][j];
					next[i][j] = next[i][k];
				}
			}
		}
	}
	int pos = 0;
	while (pos != 7){
		printf("%d ", pos);
		pos = next[pos][7];
	}
	printf("%d\n", pos);
	return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="warshall-floyd.cs"
public static void Main(string[] args)
{
    // pos1, pos2, costの順に格納
    List<List<int>> example = new List<List<int>>
    {
        new List<int>() { 0, 1, 10 },
        new List<int>() { 0, 2, 5 },
        new List<int>() { 1, 3, 4 },
        new List<int>() { 1, 4, 20 },
        new List<int>() { 2, 3, 6 },
        new List<int>() { 2, 6, 8 },
        new List<int>() { 3, 5, 1 },
        new List<int>() { 4, 5, 4 },
        new List<int>() { 4, 7, 7 },
        new List<int>() { 5, 6, 2 },
        new List<int>() { 5, 7, 4 },
        new List<int>() { 6, 7, 9 }
    };

    // box[i][j] 始点iから終点jまでの最短経路を保持する
    int[,] box = new int[8, 8];
    int INF = 100;
    for (int i = 0; i < 8; ++i)
    {
        for (int j = 0; j < 8; ++j)
        {
            box[i, j] = INF;
        }
    }

    for (int i = 0; i < 8; ++i)
    {
        // 始点と終点が同じ場合はコストを0とする
        box[i, i] = 0;
    }

    for (int i = 0; i < example.Count; ++i)
    {
        // 与えられたパスを記録する
        box[example[i][0], example[i][1]] = example[i][2];
        box[example[i][1], example[i][0]] = example[i][2];
    }

    int[,] next = new int[8, 8];
    for (int i = 0; i < 8; ++i)
    {
        for (int j = 0; j < 8; ++j)
        {
            next[i, j] = j;
        }
    }

    // ワーシャル-フロイド法
    for (int k = 0; k < 8; ++k)
    {
        for (int i = 0; i < 8; ++i)
        {
            for (int j = 0; j < 8; ++j)
            {
                if (box[i, k] + box[k, j] < box[i, j])
                {
                    box[i, j] = box[i, k] + box[k, j];
                    next[i, j] = next[i, k];
                }
            }
        }
    }

    int pos = 0;
    while (pos != 7)
    {
        Console.Write(pos + " ");
        pos = next[pos, 7];
    }
    Console.WriteLine(pos + " ");
}
```

  </TabItem>
</Tabs>

## 参考

- [https://zeosutt.hatenablog.com/entry/2015/05/05/045943](https://zeosutt.hatenablog.com/entry/2015/05/05/045943)
