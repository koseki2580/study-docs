---
title: 2分探索
sidebar_label: 2分探索
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 2 分探索とは

探索対象がソートされている場合に限り行うことができる探索方法である。

ソートされたデータ配列の特性を活かした探索で、線形探索よりも高速に探索することができる。
計算量は O(√N)

## 考え方

2 分探索の考え方は`1~1000`までの数字の中で 1 つの値を見つけるというゲームを考えると分かりやすい。

![イメージ図](/img/svg/Algorithm/binary-search/binary-1.drawio.svg "1-1000の配列")

`320`番を探す場合を考えると、線形探索では前から順に確認するため、320 回確認する必要がある。

![イメージ図](/img/svg/Algorithm/binary-search/binary-2.drawio.svg "線形探索の例")

`1~1000`と順番に並んでいるということに着目すると真ん中の数字よりも大きいか小さいかを判定することで探索対象範囲を半分にすることができる。
対象範囲が半分半分となっていき、最終的には求めている値にたどり着く。

1. `500より大きいか` $\rightarrow$ No
1. `250より大きいか` $\rightarrow$ Yes
1. `375より大きいか` $\rightarrow$ No
1. `312より大きいか` $\rightarrow$ Yes
1. `343より大きいか` $\rightarrow$ No
1. `327より大きいか` $\rightarrow$ No
1. `319より大きいか` $\rightarrow$ Yes
1. `323より大きいか` $\rightarrow$ No
1. `321より大きいか` $\rightarrow$ No
1. `320ですか？` $\rightarrow$ Yes

このように質問することで線形探索では 320 回必要だったものが、10 回で求めたいものを求めることができた。

![イメージ図](/img/svg/Algorithm/binary-search/binary-3.drawio.svg "2分探索の例")

このようにソートされていることを用いて探索範囲を半分ずつにしていく方法を**2 分探索**という。

### 見方

2 分探索を用いるとある値を超えない最大の値を高速に求めたりすることができる。

例えば図のように配列が存在した際に`55`以下で最大の値を知りたい場合

1. `配列6(300)は55より大きいか` $\rightarrow$ Yes
1. `配列3(10)は55より大きいか` $\rightarrow$ No
1. `配列4(15)は55より大きいか` $\rightarrow$ No
1. `配列5(50)は55より大きいか` $\rightarrow$ No

と探すことで配列 5 の`50`が`55`を超えない最大の値であることがわかる。

![イメージ図](/img/svg/Algorithm/binary-search/binary-4.drawio.svg "配列")

これは OK 領域と NG 領域を分け、その境界線を見つけているとも言える。

![イメージ図](/img/svg/Algorithm/binary-search/binary-5.drawio.svg "2分探索の見方")

上記の数あてゲームも`320`を超えない最大の値を求めると言い換えると`320`以下と`321`より大きい数で領域を分けていると考えられる。

## プログラム

上の`50`を見つけるプログラムは次のようになります。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="binary-search.py"
box = [1,2,10,15,50,300,503,504,700,874,5000,5001]
l = 0
r = len(box)
while (r-l) > 1:
    mid = (r+l) // 2
    if box[mid] <= 55:
        l = mid
    else:
        r = mid
print(box[l])
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="binary-search.cpp"
int main() {

    int box[] = {1,2,10,15,50,300,503,504,700,874,5000,5001};
    int l = 0;
    int r = size(box);
    while (r-l > 1){
        int mid = (r+l)/2;
        if (box[mid] < 55){
            l = mid;
        }else{
            r = mid;
        }
    }
    cout << box[l] << endl;
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="binary-search.cs"
public static void Main(string[] args)
{
    int[] box = new int[] { 1, 2, 10, 15, 50, 300, 503, 504, 700, 874, 5000, 5001 };
    int l = 0;
    int r = box.Length;
    while (r -l > 1)
    {
        int mid = (r + l) / 2;
        if (box[mid] < 55)
        {
            l = mid;
        }
        else
        {
            r = mid;
        }
    }
    Console.WriteLine(box[l]);
}
```

  </TabItem>
</Tabs>

次の部分で検索対象（全ての）を指定している。今回の場合は`l`に OK 領域の最大の番号、`r`に NG 領域の最小の番号を入れる。
そのため、最大の OK 領域は配列の最後の要素番号になるので、NG 領域（`r`）は配列の数にしている（アクセス番号で見ると範囲外）。
(※正確にするのであれば上記のプログラムの一番初めの配列に`-無限`を挿入するべきである。理由は最小の NG 領域が配列の一番初めになる可能性があるからである。今回は省いている。)

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
l = 0
r = len(box)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int l = 0;
int r = size(box);
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
int l = 0;
int r = box.Length;
```

  </TabItem>
</Tabs>

OK 領域と NG 領域を分ける境界線を求めるにはそれぞれの領域を増やしていき、未探索領域をなくなるまで探索を行う。
そのため、それぞれの探索位置の差が`1`となった時探索が終了する。
(差が`1`であると探索領域の中心が`0.5`となり、今回は整数しか入らないため、繰り上げ、繰り下げどちらを行っても、探索済み領域にアクセスすることになる。)

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
while (r-l) > 1:
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

while (r-l > 1){
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
while (r -l > 1)
{
}
```

  </TabItem>
</Tabs>

次の探索位置は未探索領域の中心であるので、それぞれを足して 2 で割る事で簡単に求めることができる。
`if (box[mid] <= 55)`部分で未探索領域の中心の値が OK 領域か NG 領域どちらに属するかを判定している。
今回は`55`以下で一番大きな値を取得することであるため、`<= 55`が判定条件となっている。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
mid = (r+l) // 2
if box[mid] <= 55:
    l = mid
else:
    r = mid
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int mid = (r+l)/2;
if (box[mid] < 55){
    l = mid;
}else{
    r = mid;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
int mid = (r + l) / 2;
if (box[mid] < 55)
{
    l = mid;
}
else
{
    r = mid;
}
```

  </TabItem>
</Tabs>
