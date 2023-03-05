---
title: 座標圧縮
sidebar_label: 座標圧縮
draft: true
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
	rep(i,0,input.size()){
		vals.push_back(input[i]);
	}
	vals.erase(unique(vals.begin(), vals.end()), vals.end());
	sort(vals.begin(), vals.end());
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

### 応用
