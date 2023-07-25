---
title: Rolling Hash
sidebar_label: Rolling Hash
draft: false
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## Rolling Hash とは

Rolling Hash とは文字列検索を高速で行うことのできるアルゴリズムであり、基本となる考え方は文字列を 1 つの値(hash 値)にすることである。

### アルゴリズム

`a`は 1, `b`は 2 の様に a $\sim$ z に 1 $\sim$ 26 の番号をつけるとする。`ab`という文字列を数字で表すことを考えると様々な形で表すことができる。

`ab` $\rightarrow$ `1 + 2 = 3`として考えると`ab`は`3`と表すことができる。

しかし、このように数値化を行うと`ba`という文字列も`2 + 1 = 3`となり、`ba`も`3`となり、`3`がどちらの文字列を表しているのか分からなくなってしまう。
そのため、文字列 $\rightarrow$ 数字への変化をする際には数字が一意になるように選択する必要がある。

そこで文字列 $\rightarrow$ 数字(ハッシュ化)への変化の式を次のように定義する。

$$
N_{n} = \begin{cases}
0 &\text{if} \,\, n = 0 \\
(文字を数値化 + N_{n-1} * m) \% mod  &\text{otherwise}
\end{cases}
$$

ここで$N_{n}$は n 文字を数値化した値である。$m$は基準値であり、$mod$は数が大きくなるのを防ぎ、ハッシュ値に変換した際に取りうる範囲を表している。
$mod$が小さいとハッシュ化したい際に取りうる範囲が小さいため、上記の`ab`と`ba`が同じ値をとるような衝突が起こる。
上記の式の$m$を 31, $mod$を$10^{9}+7$ として`ab`, `ba`を考えた場合、`ab`は

1. `a = 1 + 0 * 31 = 1`
2. `ab = 2 + 1 * 31 = 33`

`ba`は

1. `b = 2 + 0 * 31 = 2`
2. `ba = 1 + 2 * 31 = 63`

となり、違う値になっていることがわかる(数が小さいので$mod$を省略)。
また、この様に文字列 $\rightarrow$ 数値のハッシュ関数を定義すると、長い文字列 N の a 番目から b 番目の文字列のハッシュ値も高速で求めることが可能となっている。

上記のハッシュ値を求めるの式の文字を数値化部分に文字を入れて順に式を書いてみると次の様になる(以下の式の A,B,C,D,E には文字列を数値化した値が代入される)。

$$
\begin{align*}
 &N_{0} = 0 \\
 &N_{1} = A + 0 \times m = A \\
 &N_{2} = B + A \times m = B + Am \\
 &N_{3} = C + (B + Am) \times m = C + Bm + Am^{2} \\
 &N_{4} = D + (C + Bm + Am^{2}) \times m = D + Cm + Bm^{2} + Am^{3} \\
 &N_{5} = E + (D + Cm + Bm^{2} + Am^{3}) \times m = E + Dm + Cm^{2} + Bm^{3} + Am^{4}
\end{align*}
$$

$N_{5}$の時とは`abcde`のような前から 5 文字のハッシュ値が$N_{5}$となることを意味している。この時に`cde`のハッシュ値を求めることを考えた際に上記のように

$$
\begin{align*}
 &N'_{0} = 0 \\
 &N'_{1} = C + 0 \times m = C \\
 &N'_{2} = D + C \times m = D + Cm \\
 &N'_{3} = E + (D + Cm) \times m = E + Dm + Cm^{2} \\
\end{align*}
$$

前から順に計算して$N'_{3}$を求める必要はなく、$N_{n}$をうまく活用することで求めることができる。$N_{5}$には$N_{5} = E + Dm + Cm^{2} + Bm^{3} + Am^{4}$となっているので求めたい$N'_{3}$が含まれていることがわかる。そのため、余分な$Bm^{3} + Am^{4}$を引くことで

$$
N'_{3} = N_{5} - (Bm^{3} + Am^{4}) = E + Dm + Cm^{2}
$$

となる。ここで$Bm^{3} + Am^{4}$は$N_{2} \times m^{3} = (B + Am) \times m^{3} = Bm^{3} + Am^{4}$で求めることができる。
$N_{2}$はすでに求めているので問題ないが、$m^{3}$はどうすれば良いかを考えると、$N_{2}$ $\rightarrow$ $N_{5}$ まで増加させる際に掛け合わせる$m$の個数は$5 - 2 = 3$である。
この$N_{2}$ $\rightarrow$ $N_{5}$は$N_{3,4,5}$の`cde`の様な計算に使用した部分の個数であると見ることができ、その個数分$m$の累乗を取れば良い。

この様に一度$N$のハッシュ値を求めていると任意の区間のハッシュ値を O(1)で求めることが可能となる。

#### 比較

`abcabcdabcabc`の文字列の中に`abcd`が存在するか確認する場合に、ハッシュ値を使う場合と総当たりで確認する場合で検索回数に違いがあるかを比較する。
ハッシュ値を行う方法については`abcabcdabcabc`のハッシュ値$N_{13}$まではすでに求めているものとして考える。

##### 総当たり

総当たりでの確認方法は`abcabcdabcabc`の 1 文字目の`a`と`abcd`の 1 文字目が同じか判定する。ともに`a`となっているので一致していることが分かる。

一致していたので、続けて 2 文字目を比較するとともに`b`であり、一致している。同様に 3 文字目も`c`で一致しているが、4 文字で異なっている。

![総当たり確認1](/img/svg/Algorithm/rolling-hash/rolling-hash-1.drawio.svg "総当たり確認1")

`abcabcdabcabc`の 1~4 文字目には`abcd`が存在していないことがわかったので、次に開始地点を 2 文字目から確認する。
`abcabcdabcabc`の 2 文字目も`b`であり、`abcd`の 1 文字目は`a`で異なっている。

![総当たり確認2](/img/svg/Algorithm/rolling-hash/rolling-hash-2.drawio.svg "総当たり確認2")

そのため、`abcabcdabcabc`の 2 文字目スタートする文字列には`abcd`が含まれていないことがわかる。
同様に 3 文字目開始も含まれていないことがわかる。

![総当たり確認3](/img/svg/Algorithm/rolling-hash/rolling-hash-3.drawio.svg "総当たり確認3")

`abcabcdabcabc`の 4 文字目から開始すると`abcd`の文字列が存在することがわかる。

![総当たり確認4](/img/svg/Algorithm/rolling-hash/rolling-hash-4.drawio.svg "総当たり確認4")

総当たりでの計算量は 0(NM)となる。

##### Rolling Hash

$N_{13}$まではすでに求められている($m=31, mod = 10^{9} + 7$, a $\sim$ z = 1 $\sim$ 26 として計算)ので、`abcd`のハッシュ値を求めると、`31810`($m=31, mod = 10^{9} + 7$, a $\sim$ z = 1 $\sim$ 26 として計算)となる。

|  N  | ハッシュ値 |
| :-: | :--------: |
|  1  |     1      |
|  2  |     33     |
|  3  |    1026    |
|  4  |   31807    |
|  5  |   986019   |
|  6  |  30566592  |
|  7  | 947564356  |
|  8  | 374494834  |
|  9  | 609339779  |
| 10  | 889533026  |
| 11  | 575523618  |
| 12  | 841232041  |
| 13  |  78193092  |

最初の文字からは一致していないことがわかる。

![Rolling Hash1](/img/svg/Algorithm/rolling-hash/rolling-hash-5.drawio.svg "Rolling Hash1")

2 文字目スタート, 3 文字目スタートも一致していないことがわかる。

![Rolling Hash2](/img/svg/Algorithm/rolling-hash/rolling-hash-6.drawio.svg "Rolling Hash2")

![Rolling Hash3](/img/svg/Algorithm/rolling-hash/rolling-hash-7.drawio.svg "Rolling Hash3")

4 文字目スタートだとハッシュ値が一致していることがわかる。

![Rolling Hash4](/img/svg/Algorithm/rolling-hash/rolling-hash-8.drawio.svg "Rolling Hash4")

Rolling Hash を用いると全体計算量が O(N + M)となる。(それぞれの文字列をハッシュ化するの時間がかかる。)

#### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="rolling-hash.py"
class RollingHash():
    def __init__(self, S, base=317, mod=1 << 61 - 1):
        self.S = S
        self.mod = mod
        self.pow_base = [1]
        self.hash = [0]
        for i in range(len(self.S)):
            self.hash.append((self.hash[-1] * base + ord(self.S[i])) % self.mod)
            self.pow_base.append((self.pow_base[-1] * base) % self.mod)

    def get(self, l, r):
        return (self.hash[r] - self.hash[l]*self.pow_base[r-l]) % self.mod
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="rolling-hash.cpp"
struct RollingHash {
  string S;
  vector<unsigned long long> pow_base;
  vector<unsigned long long> hash;
  RollingHash(string s, unsigned long long base = 317LL): pow_base(s.length() + 1,1), hash(s.length() + 1,0){
    S = s;
    for (int i = 0; i < S.length(); ++i){
      hash[i+1] = hash[i] * base + int(S[i]);
      pow_base[i+1] = pow_base[i] * base;
    }
  }
  unsigned long long get(int l, int r) {
    return hash[r] - hash[l] * pow_base[r-l];
  }
};
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="rolling-hash.cs"
class RollingHash
{
    string S;
    ulong[] pow_base;
    ulong[] hash;

    public RollingHash(string s, ulong _base = 317)
    {
        S = s;
        hash = new ulong[S.Length + 1];
        pow_base = new ulong[S.Length + 1];
        pow_base[0] = 1;
        for (int i = 0; i < S.Length; ++i)
        {
            hash[i + 1] = hash[i] * _base + (uint)S[i];
            pow_base[i + 1] = pow_base[i] * _base;
        }
    }

    public ulong get(int l, int r)
    {
        return hash[r] - hash[l] * pow_base[r - l];
    }
}
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="rolling-hash.rs"
struct RollingHash {
    S:String,
    pow_base:Vec<u64>,
    hash:Vec<u64>
}
impl RollingHash {
    pub fn new(s:&String) -> Self
    {
        let _base :u64 = 317;
        let mut _pow_base = Vec::new();
        let mut _hash = Vec::new();
        _hash.push(0);
        _pow_base.push(1);
        let mut idx = 0;
        for i in s.chars(){
            _hash.push(_hash[idx] * _base + i as u64);
            _pow_base.push(_pow_base[idx] * _base);
            idx += 1;
		}
       RollingHash {S : s.clone(),pow_base:_pow_base, hash:_hash}
    }

    pub fn get(&self, l:usize, r:usize) -> u64{
        self.hash[r] - self.hash[l] * self.pow_base[r-l]
    }
}
```

  </TabItem>
</Tabs>
