---
title: ダイクストラ法
sidebar_label: ダイクストラ法
draft: false
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## ダイクストラ法とは

ダイクストラ法は単一始点最短経路問題を解くためアルゴリズムであり、OSPF(Open Shortest Path First)で使用されている。

### アルゴリズム

#### 流れ

以下のような無向グラフを考える。0 番から 7 番への最短経路を求めたいとする。
以下の図の辺(パス)についてる数字はその辺の重みである。今回の図で 0 番からの最短経路だと確定したものは赤色をつけ、変更される可能性があるものには緑色をつける。この色付けはあくまで答えがわかっている上で行っている。

![ダイクストラ法](/img/svg/Algorithm/dijkstra/dijkstra-1.drawio.svg "ダイクストラ法")

初めに、それぞれの番号への最小のコストを求める経路テーブルを作成する。初期は何も決まっていないので INF を代入する。

![ダイクストラ法 2](/img/svg/Algorithm/dijkstra/dijkstra-2.drawio.svg "ダイクストラ法 2")

開始点である 0 $\rightarrow$ 0 のコストを 0 とし、探索予定の配列に番号を追加する。

![ダイクストラ法 3](/img/svg/Algorithm/dijkstra/dijkstra-3.drawio.svg "ダイクストラ法 3")

探索対象番号から 1 つ番号を取り出す。取り出した番号に隣接する番号へのパスコストを比較し、経路テーブルが更新される場合はコスト更新を行い、探索対象番号に番号を追加する。
この操作を探索対象番号がなくなるまで行う。コストを比較する際は取り出し番号へのコスト $+$ 取り出し番号から隣接番号へのコストを比較する。

今回の場合は 0 番を取り出し、隣接する 1,2 番のコストを比較する。
0 番から 0 番へのコストは 0 であり、0 番から 1,2 番へのコストはそれぞれ,`10`, `5`となり、経路テーブルのコストを比較すると INF よりもコストが低いので更新となる。

![ダイクストラ法 4](/img/svg/Algorithm/dijkstra/dijkstra-4.drawio.svg "ダイクストラ法 4")

探索対象番号 1 を取り出す。隣接番号は 0 3,4 番であり、それぞれのコストは

- `0`: 10 $+$ 10 $=$ 20
- `3`: 10 $+$ 4 $=$ 14
- `4`: 10 $+$ 20 $=$ 30

となる。0 番は経路テーブルの更新は行われない。
3,4 番は経路テーブルの INF よりもコストが低いので経路テーブルの更新が行われる。

![ダイクストラ法 5](/img/svg/Algorithm/dijkstra/dijkstra-5.drawio.svg "ダイクストラ法 5")

探索対象番号 2 を取り出す。隣接番号は 0,3,6 番であり、それぞれのコストは

- `0`: 5 $+$ 5 $=$ 10
- `3`: 5 $+$ 6 $=$ 11
- `6`: 5 $+$ 8 $=$ 13

となる。0 番は経路テーブルの更新は行われない。3,6 番ともに経路テーブルの更新が発生するので、探索対象番号に追加する。

![ダイクストラ法 6](/img/svg/Algorithm/dijkstra/dijkstra-6.drawio.svg "ダイクストラ法 6")

探索対象番号 3 を取り出す。隣接番号は 1,2,5 であり、

- `1`: 11 $+$ 4 $=$ 15
- `2`: 11 $+$ 6 $=$ 17
- `5`: 11 $+$ 1 $=$ 12

となり、1,2 番の経路テーブルの更新は行われない。5 番は経路テーブルの更新が発生するので探索対象番号に追加する。

![ダイクストラ法 7](/img/svg/Algorithm/dijkstra/dijkstra-7.drawio.svg "ダイクストラ法 7")

探索対象番号 4 を取り出す。隣接番号は 1,5,7 番であり、それぞれのコストは

- `1`: 30 $+$ 20 $=$ 50
- `5`: 30 $+$ 4 $=$ 34
- `7`: 30 $+$ 7 $=$ 37

となり、1,5 番の経路テーブルの更新は行われない。7 番の経路テーブルは更新が発生するので探索対象番に追加する。この時点で 1 番への経路は全て確認したが後ほど 4 番への経路テーブルが更新されるため、確定ではない。

![ダイクストラ法 8](/img/svg/Algorithm/dijkstra/dijkstra-8.drawio.svg "ダイクストラ法 8")

次の探索対象番号は 3 番であるが、隣接する 1,2,5 番の経路テーブルの変更が行われない。そのため、その次の 6 番を取り出す。隣接番号は 2,5,7 であり、それぞれのコストは

- `2`: 13 $+$ 8 $=$ 21
- `5`: 13 $+$ 2 $=$ 15
- `7`: 13 $+$ 9 $=$ 22

となり、2,5 番の経路テーブルの更新は行われない。7 番の経路テーブルは更新が発生するので探索対象番号に追加する。この時点で 2 番への経路は全て確認したので現在のコストが最小となることがわかる。

![ダイクストラ法 9](/img/svg/Algorithm/dijkstra/dijkstra-9.drawio.svg "ダイクストラ法 9")

探索対象番号 5 番を取り出す。隣接番号は 3,4,6,7 番であり、それぞれのコストは

- `3`: 12 $+$ 1 $=$ 13
- `4`: 12 $+$ 4 $=$ 16
- `6`: 12 $+$ 2 $=$ 14
- `7`: 12 $+$ 4 $=$ 16

となり、3,6 番の経路テーブルの更新は行われない。4,7 番の経路テーブルは更新が発生するので探索対象番号に追加する。この時点で 3 番への経路は全て確認したので現在のコストが最小となることがわかる。

![ダイクストラ法 10](/img/svg/Algorithm/dijkstra/dijkstra-10.drawio.svg "ダイクストラ法 10")

次の探索対象番号は 7 番であるが、隣接する 4,5,6 番の経路テーブルの変更が行われない。そのため、その次の 4 番を取り出す。隣接番号は 1,5,7 であり、それぞれのコストは

- `1`: 16 $+$ 20 $=$ 36
- `5`: 16 $+$ 4 $=$ 20
- `7`: 16 $+$ 7 $=$ 23

となり、1,5,7 番の経路テーブルの更新は行われない。この時点で 1 番への確認がすべて完了したので経路のコストが確定する。

![ダイクストラ法 11](/img/svg/Algorithm/dijkstra/dijkstra-11.drawio.svg "ダイクストラ法 11")

残っている探索対象番号では経路テーブルの更新は行われないので経路テーブルの完成である。

![ダイクストラ法 12](/img/svg/Algorithm/dijkstra/dijkstra-12.drawio.svg "ダイクストラ法 12")

0 番から 7 番への最短経路は 16 のコストがかかることが分かる。

#### プログラム

探索対象番号の入れ物を[優先度付きキュー](/docs/Data-Structure/priority-queue)を用いることでコストが小さい順に取り出すことができ、処理を高速化させることができる。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="dijkstra.py"
import heapq


def dijkstra(start):
    q = []
    dist[start] = 0
    for to, cost in box[start]:
        q.append((cost, to))
    heapq.heapify(q)

    while len(q) > 0:
        cost, pos = heapq.heappop(q)
        if dist[pos] < cost:
            continue
        dist[pos] = cost
        for to2, cost2 in box[pos]:
            heapq.heappush(q, (dist[pos] + cost2, to2))


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
box = [[] for _ in range(8)]
for i in range(len(example)):
    # index番号に接続されている番号とコストを格納する。
    box[example[i][0]].append([example[i][1], example[i][2]])
    box[example[i][1]].append([example[i][0], example[i][2]])
dist = [10**9] * (8)
dijkstra(0)
print(dist)

```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="dijkstra.cpp"
vector<int> dijkstra(int start, vector<vector<pair<int,int>>> box){
	vector<int> dist(box.size(), 1001001001);
	priority_queue<pair<int,int>> q ;
	for (pair<int, int> val: box[start]){
		q.push({val.second, val.first});
	}
	dist[start] = 0;
	while (!q.empty()){
		pair<int, int> val = q.top();q.pop();
		int cost = val.first;
		int pos = val.second;
		if (dist[pos] < cost) continue;
		dist[pos] = cost;
		for (pair<int, int> val2: box[pos]){
			q.push({dist[pos] + val2.second, val2.first});
		}
	}
	return dist;
}

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

	vector<vector<pair<int,int>>> box(8);

	for (int i = 0; i < example.size(); ++i){
		// index番号に接続されている番号とコストを格納する
		box[get<0>(example[i])].push_back({get<1>(example[i]),get<2>(example[i])});
		box[get<1>(example[i])].push_back({get<0>(example[i]),get<2>(example[i])});
	}
	vector<int> dist = dijkstra(0, box);
	return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="dijkstra.cs"
public static void Main(string[] args)
{
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
    List<List<int[]>> box = new List<List<int[]>>();
    for (int i = 0; i < 8; ++i)
    {
        box.Add(new List<int[]>());
    }
    for (int i = 0; i < example.Count; ++i)
    {
        box[example[i][0]].Add(new int[2] { example[i][1], example[i][2] });
        box[example[i][1]].Add(new int[2] { example[i][0], example[i][2] });
    }
    int[] dist = Dijkstra(0, box);
}

private static int[] Dijkstra(int start, List<List<int[]>> box)
{
    int[] dist = (new int[box.Count]).Select(n => int.MaxValue).ToArray();
    PriorityQueue<int, int> q = new PriorityQueue<int, int>() { };
    foreach (int[] val in box[start])
    {
        q.Enqueue(val[0], val[1]);
    }
    dist[start] = 0;
    while (q.Count != 0)
    {
        int cost;
        int pos;
        q.TryDequeue(out pos, out cost);
        if (dist[pos] < cost)
            continue;
        dist[pos] = cost;
        foreach (int[] val in box[pos])
        {
            q.Enqueue(val[0], dist[pos] + val[1]);
        }
    }
    return dist;
}
```

  </TabItem>
</Tabs>

### 経路復元

上記の流れだと最小のコストを求めることができるが、その最小のコストの経路が分からない。そのため、最小のコストとなる経路を求めることを経路復元と呼ぶ。

上記の例にすると 0 ~ 7 番の最小コストは`16`であり、その経路は 0 $\rightarrow$ 2 $\rightarrow$ 3 $\rightarrow$ 5 $\rightarrow$ 7 となる。
この経路を求めるには今までの手順に加えて、経路テーブルが更新される際にその番号に訪れる前の番号を記録することで経路を復元することができる。

訪れないまたは開始番号の場合は-1 とする。図は上記のものに訪れ元番号のテーブルを追加している。
黄色塗られた番号が移動元の番号となる。後の色は上記と同じである。

![経路復元 1](/img/svg/Algorithm/dijkstra/dijkstra-13.drawio.svg "経路復元 1")

1,2 番の経路テーブルが更新されたので 1,2 番の訪れ元は 0 番となる。

![経路復元 2](/img/svg/Algorithm/dijkstra/dijkstra-14.drawio.svg "経路復元 2")

3,4 番の経路テーブルが更新されたので 3,4 番の訪れ元は 1 番となる。

![経路復元 3](/img/svg/Algorithm/dijkstra/dijkstra-15.drawio.svg "経路復元 3")

3,6 番の経路テーブルが更新されたので 3,6 番の訪れ元は 2 番となる。

![経路復元 4](/img/svg/Algorithm/dijkstra/dijkstra-16.drawio.svg "経路復元 4")

5 番の経路テーブルが更新されたので 5 番の訪れ元は 3 番となる。

![経路復元 5](/img/svg/Algorithm/dijkstra/dijkstra-17.drawio.svg "経路復元 5")

7 番の経路テーブルが更新されたので 7 番の訪れ元は 4 番となる。

![経路復元 6](/img/svg/Algorithm/dijkstra/dijkstra-18.drawio.svg "経路復元 6")

7 番の経路テーブルが更新されたので 7 番の訪れ元は 6 番となる。

![経路復元 7](/img/svg/Algorithm/dijkstra/dijkstra-19.drawio.svg "経路復元 7")

4,7 番の経路テーブルが更新されたので 4,7 番の訪れ元は 5 番となる。

![経路復元 8](/img/svg/Algorithm/dijkstra/dijkstra-20.drawio.svg "経路復元 8")

後は更新されないので最終的には以下のようになる。

![経路復元 9](/img/svg/Algorithm/dijkstra/dijkstra-21.drawio.svg "経路復元 9")

0 ~ 7 番の経路を求めるには、後ろから確認していくと良い。

1. 7 番に格納されているのは 5 番
1. 5 番に格納されているのは 3 番
1. 3 番に格納されているのは 2 番
1. 2 番に格納されているのは 0 番

その経路は 0 $\rightarrow$ 2 $\rightarrow$ 3 $\rightarrow$ 5 $\rightarrow$ 7 となる。

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="dijkstra-route-restoration.py"
import heapq


def dijkstra(start):
    b = []
    dist[start] = 0
    b.append((0, start))
    heapq.heapify(b)

    while len(b) > 0:
        cost, pos = heapq.heappop(b)
        if dist[pos] < cost:
            continue

        for to2, cost2 in box[pos]:
            if (dist[pos] + cost2 < dist[to2]):
                dist[to2] = dist[pos] + cost2
                heapq.heappush(b, (dist[to2], to2))
                prev[to2] = pos


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
box = [[] for _ in range(8)]
for i in range(len(example)):
    # index番号に接続されている番号とコストを格納する。
    box[example[i][0]].append([example[i][1], example[i][2]])
    box[example[i][1]].append([example[i][0], example[i][2]])
dist = [10**9] * (8)
prev = [-1] * 8
dijkstra(0)
print(dist)
next = 7
while (next != -1):
    print(next, end=" ")
    next = prev[next]

```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="dijkstra-route-restoration.cpp"
pair<vector<int>, vector<int>> dijkstra(int start, vector<vector<pair<int,int>>> box){
	vector<int> dist(box.size(), 1001001001);
	vector<int> prev(box.size(), -1);
	priority_queue<pair<int,int>> q ;
	q.push({0, start});
	dist[start] = 0;
	while (!q.empty()){
		pair<int, int> val = q.top();q.pop();
		int cost = val.first;
		int pos = val.second;
		if (dist[pos] < cost) continue;

		for (pair<int, int> val2: box[pos]){
			if (dist[pos] + val2.second < dist[val2.first]){
				dist[val2.first] = dist[pos] + val2.second;
				q.push({dist[pos] + val2.second, val2.first});
				prev[val2.first] = pos;
			}
		}
	}
	pair<vector<int>, vector<int>> ret;
	ret.first = dist;
	ret.second = prev;
	return ret;
}

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

	vector<vector<pair<int,int>>> box(8);

	for (int i = 0; i < example.size(); ++i){
		// index番号に接続されている番号とコストを格納する
		box[get<0>(example[i])].push_back({get<1>(example[i]),get<2>(example[i])});
		box[get<1>(example[i])].push_back({get<0>(example[i]),get<2>(example[i])});
	}
	pair<vector<int>, vector<int>> ret = dijkstra(0, box);
	rep(i,0,8){
		printf("%d ", ret.first[i]);
	}
	printf("\n ");
	int next = 7;
	while (next != -1){
		printf("%d ", next);
		next = ret.second[next];
	}
	return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="dijkstra-route-restoration.cs"
public static void Main(string[] args)
{
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
    List<List<int[]>> box = new List<List<int[]>>();
    for (int i = 0; i < 8; ++i)
    {
        box.Add(new List<int[]>());
    }
    for (int i = 0; i < example.Count; ++i)
    {
        box[example[i][0]].Add(new int[2] { example[i][1], example[i][2] });
        box[example[i][1]].Add(new int[2] { example[i][0], example[i][2] });
    }
    Tuple<int[], int[]> ret = Dijkstra(0, box);
    foreach (var item in ret.Item1)
    {
        Console.Write(item + " ");
    }
    Console.WriteLine();
    int next = 7;
    while (next != -1)
    {
        Console.Write(next + " ");
        next = ret.Item2[next];
    }
}

private static Tuple<int[], int[]> Dijkstra(int start, List<List<int[]>> box)
{
    int[] dist = (new int[box.Count]).Select(n => int.MaxValue).ToArray();
    int[] prev = (new int[box.Count]).Select(n => -1).ToArray();

    PriorityQueue<int, int> q = new PriorityQueue<int, int>() { };

    q.Enqueue(0, start);
    dist[start] = 0;
    while (q.Count != 0)
    {
        int cost;
        int pos;
        q.TryDequeue(out pos, out cost);
        if (dist[pos] < cost)
            continue;
        foreach (int[] val in box[pos])
        {
            if (dist[pos] + val[1] < dist[val[0]])
            {
                dist[val[0]] = dist[pos] + val[1];

                q.Enqueue(val[0], dist[val[0]]);
                prev[val[0]] = pos;
            }
        }
    }
    Tuple<int[], int[]> ret = new Tuple<int[], int[]>(dist, prev);
    return ret;
}
```

  </TabItem>
</Tabs>
