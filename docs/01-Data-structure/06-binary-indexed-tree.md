---
title: Binary Indexed Tree
sidebarlabel: Binary Indexed Tree
draft: true
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## Binary Indexed Tree とは

Binary Indexed Tree（BIT またはフェニック木）とは次の 2 つを O($\log n$)で行うことができるデータ構造である。

- $a_0 + a_1 + a_2 + \dots + a_{n-1} + a_n$の和を求める
- $a_n$に N を足す

仮に python の list を用いて実装すると$a_n$に N を足すのは O(1)で可能であるが、区間の和を求めるのに O(n)かかってしまう。
また、[累積和](/docs/Algorithm/cumulative-sum)を用いて実装すると区間の和を求めるのは O(1)で可能であるが、$a_n$に N を足すのに O(N)かかってしまう。
なので、BIT を用いることで区間和と要素の値を変更する際には高速で動作させることが可能となる。

BIT は[セグメント木](/docs/Data-structure/segment-tree)の機能を制限したものであり、機能を制限することで

- 実装の簡素化
- 定数倍の高速化

を実現する。

### 構造

木構造で累積和とることを考えてみる。下図のように根の部分に全ての配列の和を持つと都合がいい。

![木構造](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-1.drawio.svg "木構造")

この木構造を棒グラフのようにブロックで表すと

![ブロック](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-2.drawio.svg "ブロック")

のようになる。この木構造をそのままデータとして保持すると本来の配列の個数である 8 個よりも多くデータを保持しなければならないので、不必要なデータを削除していくことを考える。
削除できそうな候補としては例えば<FontColor color="green">緑ブロック</FontColor>の`13`と<FontColor color="blue">青ブロック</FontColor>の`5`
が分かっていれば<FontColor color="blue">青ブロック</FontColor>の`8`(左から 2 番目)が分かる(`13 - 5 = 8`)。

このように特定の要素から求めることができる要素は下図のように木構造をしたから見た際に、色が連続しないように設定することで全ての要素が導出できる。

![ブロック 下から見た図](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-3.drawio.svg "ブロック 下から見た図")

ブロックが設定されていないノードは他のブロックから導出することが可能となるので、保持する必要がなく、元の配列と同じ数だけデータを保持するだけで済むようになる。
配列のインデックス番号と色が対応しており、配列を次のように保持すれば良いと分かる。

![配列保持](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-4.drawio.svg "配列保持")

#### 特定要素の加算

ここで、元の配列の特定の要素に加算が行われる場合を考えてみる。例として一番初めの要素の 5 に 5 を加算することを考えてみると、
区間和の配列で元の配列の一番左に加算した場合に影響の受けるブロックは

![加算影響ブロック](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-5.drawio.svg "加算影響ブロック")

図のように 5 のブロックを含んでいる`5, 13, 20, 34`が変更により値を変更する必要があることが分かる。

※配列番号は計算を楽にするために 1 番から始めている。

影響のある配列番号は`1, 2, 4, 8`となる。この数列は綺麗に 2 倍ずつ増えていっているので、2 進数で表して見ると

$0001_{(2)}$, $0010_{(2)}$, $0100_{(2)}$, $1000_{(2)}$

となる。

また、配列番号 3 番の 2(元の配列の 2 番)に値を加算することを考えると

![加算影響ブロック2](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-6.drawio.svg "加算影響ブロック2")

`2, 20, 34`の配列が変更の影響を受ける。この配列番号`3, 4, 8`となり、2 進数で表すと

$0011_{(2)}$, $0100_{(2)}$, $1000_{(2)}$

となる。

さらに、配列番号 6 番の 2(元の配列の 5 番)に値を加算することを考えると

![加算影響ブロック3](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-7.drawio.svg "加算影響ブロック3")

`3, 34`の配列が変更の影響を受ける。この配列番号`6, 8`となり、2 進数で表すと

$0110_{(2)}$, $1000_{(2)}$

となる。

この 3 パターンをまとめると

$0001_{(2)}$ $\rightarrow$ $0010_{(2)}$ $\rightarrow$ $0100_{(2)}$ $\rightarrow$ $1000_{(2)}$ (1 $\rightarrow$ 2 $\rightarrow$ 4 $\rightarrow$ 8 )

$0011_{(2)}$ $\rightarrow$ $0100_{(2)}$ $\rightarrow$ $1000_{(2)}$ (3 $\rightarrow$ 4 $\rightarrow$ 8)

$0110_{(2)}$ $\rightarrow$ $1000_{(2)}$ (6 $\rightarrow$ 8)

となる。
これらを見ると最下位 bit を足し合わせることで次の配列番号となっていることが分かる。

> $0001_{(2)}$(1)の最下位 bit は $0001_{(2)}$ なので 1 を足すと$0001_{(2)}$ + $0001_{(2)}$ = $0010_{(2)}$(1 + 1 = 2)となる
>
> $0110_{(2)}$(6)の最下位 bit は $0010_{(2)}$なので 2 を足すと$0110_{(2)}$ + $0010_{(2)}$ = $1000_{(2)}$(6 + 2 = 8)となる

まとめると特定の要素の加算する場合は加算する要素番号の最下位 bit を足していくことで影響のある配列全てに関与することができる。

#### 区間和の導出

ここで、元の配列の区間和を求める場合を考えてみる。例として 0 $\sim$ 5 番の和を求めることを考える。

![和ブロック](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-8.drawio.svg "和ブロック")

図の元の配列の 0 $\sim$ 5 番の和を求めるのには<FontColor color="rgb(220,220,0)">黄色</FontColor>のエリアを覆うようにブロックを選択する必要があり、
今回の場合だと、<FontColor color="orange">オレンジブロック</FontColor>の 20 と<FontColor color="green">緑ブロック</FontColor>の 3 を選択すると
黄色エリアを覆うことができる。計算すると`20 + 3 = 5 + 8 + 2 + 5 + 2 + 1`となっている。使用した配列番号は`4, 6`である。また、これを 2 進数で表記すると

$0100_{(2)}$, $0110_{(2)}$

となる。

また、元の配列番号の 0 $\sim$ 3 番までの和を考えてみると

![和ブロック2](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-9.drawio.svg "和ブロック2")

使用した配列番号`4`だけとなる。これを 2 進数で表記すると

$0100_{(2)}$

となる。

さらに、元の配列番号の 0 $\sim$ 6 番までの和を考えてみると

![和ブロック3](/img/svg/Data-structure/binary-indexed-tree/binary-indexed-tree-10.drawio.svg "和ブロック3")

使用した配列番号`4, 6, 7`となる。これを 2 進数で表記すると

$0100_{(2)}$, $0110_{(2)}$, $0111_{(2)}$

となる。

この 3 パターンを数が大きい順にまとめると

$0110_{(2)}$ $\rightarrow$ $0100_{(2)}$ (6 $\rightarrow$ 4)

$0100_{(2)}$ (4)

$0111_{(2)}$ $\rightarrow$ $0110_{(2)}$ $\rightarrow$ $0100_{(2)}$ (7 $\rightarrow$ 6 $\rightarrow$ 4)

となる。
これらをみると先程の特定要素の加算とは反対に最下位 bit を引けば次の要素番号となっていることが分かる。

> $0110_{(2)}$(6)の最下位 bit は $0010_{(2)}$なので 2 を引くと$0110_{(2)}$ - $0010_{(2)}$ = $0100_{(2)}$(6 - 2 = 4)となる
>
> $0111_{(2)}$(7)の最下位 bit は $0001_{(2)}$なので 1 を引くと$0111_{(2)}$ - $0001_{(2)}$ = $0110_{(2)}$(7 - 1 = 6)となる

:::info
$a_0 + a_1 + a_2 + \dots + a_{n-1} + a_n$の和は求めれるけど
$a_5 + a_6 + a_7 + \dots + a_{m-1} + a_m$のような間の区間を求めたい場合は[累積和](/docs/Algorithm/cumulative-sum)と同じ様に引き算をすることで求めることができる。

> 全部 10 個の要素があった場合に$a_7 + a_8 + a_9$の和を知りたいとすると
> $(a_0 + a_1 + a_2 + \dots + a_8 + a_9) - (a_0 + a_1 + a_2 + \dots + a_5 + a_6)$ = $a_7 + a_8 + a_9$

:::

特定要素に加算・区間和の導出に最終 bit を用いてる。最終 bit の位置を 1 つずつ探索する方法もあるが、2 の補数をうまく活用することで簡単に求めるできる。

2 の補数とはコンピュータの世界では負の数として用いられるものであり、例えば`6 (0110)`の補数は`-6 (1010)`と表現され、元の bit を反転させて 1 足すことで求めることができる。
($0110_{(2)}$ $\rightarrow$ $1001_{(2)}$ $\rightarrow$ $1010_{(2)}$)

この`0110`と`1010`を AND 演算を行うと最下位 bit を取得することができる。
(2 の補数は 0 となる数字を求めており、全ての bit が 0 とするためには最下位 bit を足し合わせて`1 + 1 = 0`となる様に繰り上げを行う必要があるので、
補数と元の数字は最下位 bit だけともに 1 となっている)

:::info
基数の補数とは`足すと桁が1つ上がる数のうち最も小さい数`のことである。
2 進数の場合は、n bit で数字を表現していた場合に n+1 bit が 1 となっていた場合は無視されるので、0 となる数字を求めているのと同義である。
:::

### プログラム

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="binary-indexed-tree.py"
class BinaryIndexedTree:

    def __init__(self, n):
        self._n = n + 1
        self._data = [0] * self._n

    def add(self, x, num):
        """要素に加算

        Args:
            x (int): 要素の位置
            n (int): 加算する値
        """
        x += 1
        while(x < self._n):
            self._data[x] += num
            x += x & -x

    def sum(self, x):
        """区間の和

        Args:
            x (int): 区間の最後の要素番号

        Returns:
            int, float: 0 ~ nまでの区間和
        """
        num = 0
        x += 1
        while (x != 0):
            num += self._data[x]
            x -= x & -x
        return num
```

  </TabItem>

  <TabItem value="C++" label="C++">

```cpp title="binary-indexed-tree.cpp"
template <typename T>
struct BinaryIndexedTree
{
    int n;
    vector<T> data;
    BinaryIndexedTree(int n_ = 0) :n(n_+1), data(n,0){}

    /**
     * @brief
     * 要素に加算
     * @param x 要素の位置
     * @param num 加算する値
     */
    void add(int x, T num){
        x += 1;
        for (int i = x; i < n; i += (i & -i)){
            data[i] += num;
        }
    }

    /**
     * @brief
     * 区間の和
     * @param x 区間の最後の要素番号
     * @return T 0 ~ nまでの区間和
     */
    T sum(int x){
        T num = 0;
        x += 1;
        while (x != 0){
            num += data[x];
            x -= (x & -x);
        }
        return num;
    }
};
```

  </TabItem>

  <TabItem value="C#" label="C#">

```csharp title="binary-indexed-tree.cs"
public class BinaryIndexedTree<T>
{
    private int n;
    private readonly T[] data;
    private Func<T, T, T> Add { get; set; }

    public BinaryIndexedTree(int n_)
    {

        ParameterExpression op1 = Expression.Parameter(typeof(T));
        ParameterExpression op2 = Expression.Parameter(typeof(T));
        Add = Expression.Lambda<Func<T, T, T>>(Expression.Add(op1, op2), op1, op2).Compile();

        n = n_;
        data = new T[n];
    }

    /// <summary>
    /// 要素に加算
    /// </summary>
    /// <param name="x">要素の位置</param>
    /// <param name="num">加算する値</param>
    public void add(int x, T num)
    {
        x += 1;
        for (int i = x; i < n; i += (i & -i))
        {
            data[i] = Add(data[i], num);
        }
    }

    /// <summary>
    /// 区間の和
    /// </summary>
    /// <param name="x">区間の最後の要素番号</param>
    /// <returns>0 ~ nまでの区間和</returns>
    public T sum(int x)
    {
        x += 1;
        T num = default(T);
        while (x != 0)
        {
            num = Add(num, data[x]);
            x -= (x & -x);
        }
        return num;
    }
}
```

</TabItem>

</Tabs>

[こちら](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=DSL_2_B&lang=jp)で動作確認を行い、3 コードともに AC でした。

## 応用

勉強中

## 参考

[Binary Indexed Tree (BIT) 総まとめ！区間加算や二次元 BIT まで](https://algo-logic.info/binary-indexed-tree/)
