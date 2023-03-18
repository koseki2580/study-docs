---
title: 座標圧縮
sidebar_label: 座標圧縮
draft: false
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 座標圧縮とは

要素の前後で変化起きないのであれば、取り除いて圧縮する操作を座標圧縮という。

例えば、

```
[100, 2, 10, 550, 4, 93]
```

のような配列があった場合に、配列の値そのものではなく大小関係のみが必要である場合に`100`, `550`のような大きな数字は不必要であると言える。
この配列を

```
[4, 0, 2, 5, 1, 3]
```

のように変換することで小さな数として扱うことができる。

![座標圧縮](/img/svg/Algorithm/coordinate-compression/coordinate-compression-1.drawio.svg "座標圧縮")

### アルゴリズム

アルゴリズムはシンプルで、

1. 圧縮した配列をコピーし、配列の重複を削除
2. 重複を削除した配列をソート
3. 二分探索を用いて位置を求める

だけである。

### プログラム

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="coordinate-compression.py"
def compress(input):
    vals = []
    for i in range(len(input)):
        vals.append(input[i])
    return sorted(set(vals))


a = [100, 2, 10, 550, 4, 93]
compress_a = {v: i for i, v in enumerate(compress(a))}
compressed_a = [compress_a[i] for i in a]
```

:::info
Python の場合は辞書型で O(1)で求めることができるので 2 分探索を使用せずに圧縮を行なっている。
C++では map 型が Python の辞書型に相当するが、O(log n)となっているので 2 分探索と変わらない。
:::

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="coordinate-compression.cpp"
vector<int> compress(vector<int> input){
	vector<int> vals
	for(int i = 0; i< input.size(); ++i){
		vals.push_back(input[i]);
	}
    sort(vals.begin(), vals.end());
	vals.erase(unique(vals.begin(), vals.end()), vals.end());
	return vals;
}
int main() {
	vector<int> a = {100, 2, 10, 550, 4, 93};
	vector<int> compress_a = compress(a);
	vector<int> compressed_a;
	for (int i = 0; i < a.size();++i){
		compressed_a.push_back(lower_bound(compress_a.begin(),compress_a.end(), a[i]) - compress_a.begin());
	}
	return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="coordinate-compression.cs"
public static void Main(string[] args)
{
    List<int> a = new List<int> { 100, 2, 10, 550, 4, 93 };
    List<int> compress_a = compress(a);
    List<int> compressed_a = new List<int>();
    for (int i = 0; i < a.Count; ++i)
    {
        compressed_a.Add(BinarySearch(compress_a, a[i]));
        // BinarySearchは2分探索の記事の処理を少しだけ修正したものを使用しています。
    }
}

private static List<int> compress(List<int> input)
{
    List<int> vals = new List<int>();
    for (int i = 0; i < input.Count; i++)
    {
        vals.Add(input[i]);
    }
    vals.Sort();
    return vals.Distinct().ToList();
}
private static int BinarySearch(List<int> box, int index)
{
    int l = 0;
    int r = box.Count;
    while (r - l > 1)
    {
        int mid = (r + l) / 2;
        if (box[mid] <= index)
        {
            l = mid;
        }
        else
        {
            r = mid;
        }
    }
    return l;
}
```

  </TabItem>
</Tabs>

## 2 次元

2 次元の場合にも座標圧縮を使用することができる。

![座標圧縮 2次元](/img/svg/Algorithm/coordinate-compression/coordinate-compression-2.drawio.svg "座標圧縮 2次元")

形を変えずに、圧縮するのでデータ量を減らすことができる。

<FontColor color="red">注意点</FontColor>として座標情報の隣を圧縮時に追加しないと間に存在する空白を削除してしまう可能性がある。

隣の座標を挿入しないでうまくいくケースも存在する。そのため、どういった問題を解決するために使用しているかを考えて、隣の座標を追加するかを考える必要がある。

### プログラム

今回題材にした図は両隣に空白として要素を代入する必要があったのであまり圧縮されていないように見えるが、これがもっと大きな図であればかなり圧縮される。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="coordinate-compression-2.py"
import bisect


def compress(a, b):
    vals = []
    dx = [-1, 0, 1]
    for i in range(len(a)):
        for j in dx:
            vals.append(a[i] + j)
            vals.append(b[i] + j)
    return sorted(set(vals))


# X1 Y1 X2 Y2の順で格納
# X1 Y1 左上
# X2 Y2 右下
box = [
    (3, 2, 3, 6),
    (3, 11, 3, 13),
    (7, 6, 7, 8),
    (7, 10, 7, 12),
    (3, 4, 9, 4),
    (8, 11, 13, 11),
]

x1 = []
y1 = []
x2 = []
y2 = []
for i in range(len(box)):
    x1.append(box[i][0])
    y1.append(box[i][1])
    x2.append(box[i][2])
    y2.append(box[i][3])

X = compress(x1, x2)
Y = compress(y1, y2)
for i in range(len(x1)):
    x1[i] = bisect.bisect_left(X, x1[i])
    x2[i] = bisect.bisect_left(X, x2[i])
    y1[i] = bisect.bisect_left(Y, y1[i])
    y2[i] = bisect.bisect_left(Y, y2[i])
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="coordinate-compression-2.cpp"
vector<int> compress(vector<int> a,  vector<int> b){
	vector<int> vals;
	int dx[3]= {-1,0,1};
	for(int i = 0; i< a.size(); ++i){
		for(int j: dx ){
			vals.push_back(a[i] + j);
			vals.push_back(b[i] + j);
		}
	}
	sort(vals.begin(), vals.end());
	vals.erase(unique(vals.begin(), vals.end()), vals.end());

	return vals;
}

int main() {
	vector<tuple<int,int,int,int>> box = {
		{3, 2, 3, 6},
		{3, 11, 3, 13},
		{7, 6, 7, 8},
		{7, 10, 7, 12},
		{3, 4, 9, 4},
		{8, 11, 13, 11},
	};
	vector<int> x1,x2,y1,y2;
	for (int i = 0; i < box.size(); ++i){
		x1.push_back(get<0>(box[i]));
		y1.push_back(get<1>(box[i]));
		x2.push_back(get<2>(box[i]));
		y2.push_back(get<3>(box[i]));
	}
	vector<int> X = compress(x1,x2);
	vector<int> Y = compress(y1,y2);
	for (int i = 0; i < x1.size(); ++i){
		x1[i] = lower_bound(X.begin(), X.end(), x1[i]) - X.begin();
		y1[i] = lower_bound(Y.begin(), Y.end(), y1[i]) - Y.begin();
		x2[i] = lower_bound(X.begin(), X.end(), x2[i]) - X.begin();
		y2[i] = lower_bound(Y.begin(), Y.end(), y2[i]) - Y.begin();
	}

	return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="coordinate-compression-2.cs"
public static void Main(string[] args)
        {
            List<int[]> box = new List<int[]>()
            {
                new int[4] { 3, 2, 3, 6 },
                new int[4] { 3, 11, 3, 13 },
                new int[4] { 7, 6, 7, 8 },
                new int[4] { 7, 10, 7, 12 },
                new int[4] { 3, 4, 9, 4 },
                new int[4] { 8, 11, 13, 11 },
            };
            List<int> x1 = new List<int>();
            List<int> y1 = new List<int>();
            List<int> x2 = new List<int>();
            List<int> y2 = new List<int>();
            for (int i = 0; i < box.Count; ++i)
            {
                x1.Add(box[i][0]);
                y1.Add(box[i][1]);
                x2.Add(box[i][2]);
                y2.Add(box[i][3]);
            }
            List<int> X = compress(x1, x2);
            List<int> Y = compress(y1, y2);
            for (int i = 0; i < x1.Count; ++i)
            {
                x1[i] = BinarySearch(X, x1[i]);
                y1[i] = BinarySearch(Y, y1[i]);
                x2[i] = BinarySearch(X, x2[i]);
                y2[i] = BinarySearch(Y, y2[i]);
            }
        }

        private static List<int> compress(List<int> a, List<int> b)
        {
            List<int> vals = new List<int>();
            int[] dx = new int[3] { -1, 0, 1 };
            for (int i = 0; i < a.Count; i++)
            {
                foreach (int j in dx)
                {
                    vals.Add(a[i] + j);
                    vals.Add(b[i] + j);
                }
            }
            vals.Sort();
            return vals.Distinct().ToList();
        }

        private static int BinarySearch(List<int> box, int index)
        {
            int l = 0;
            int r = box.Count;
            while (r - l > 1)
            {
                int mid = (r + l) / 2;
                if (box[mid] <= index)
                {
                    l = mid;
                }
                else
                {
                    r = mid;
                }
            }
            return l;
        }
```

  </TabItem>
</Tabs>

## 参考

- [https://algo-logic.info/coordinate-compress/](https://algo-logic.info/coordinate-compress/)
