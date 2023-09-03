---
title: 累積和
sidebar_label: 累積和
draft: true
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 累積和とは

累積和とは文字の通りで、配列の前・後ろから順に配列の値を足し合わせていくことをいう。
累積和を取ることで配列の区間和を高速で求めることが可能となる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-1.drawio.svg "累積和イメージ図")

上記の図において配列番号 3 $\sim$ 7 の和が知りたい場合を考えると

赤色の配列で考えると配列番号 3 $\sim$ 7 を足し合わせるので`23 + 7 + 1 + 7 + 12 = 50`のように合計 5 回配列にアクセスする必要がある。

しかし、青色の配列であれば 7 番目の配列までを足し合わせた`78`、2 番目の配列までを足しわせた`28`を取り出し、`78 - 28 = 50`とすることで
配列番号 3 $\sim$ 7 までの和を求めることができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-2.drawio.svg "累積和イメージ図2")

上記の下図のように、長い線から短い線を引くことで緑の線を求めることができる。

### いもす法

累積和は他にも使い方がある。それが`いもす法`と呼ばれるイベントを管理する方法である。

例えば、店に来店した時刻と退店した時刻が分かっていた際に店内に人が一番いた時間帯を求めたといった場合に、いもす法を用いることで求めることができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-3.drawio.svg "いもす法イメージ図")

店内にいた時間を横線で表すと上記の図のようになる。線が一番重なっている時間帯が一番店内に人がいた時間帯であると言える。上記の図では 13 分の時に 4 人おり、一番人がいたと言える。
これをいもす法(累積和)を使うと求めることができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-4.drawio.svg "いもす法イメージ図2")

上記の赤色四角のように入店した時間に+1、退店した時間+1 分の時間に-1 を入れ、前から(1 から)順に累積和をとることで青色四角のように線表されたものを表現することができる。

### 2 次元

累積和は 2 次元に拡張することができる。2 次元の場合は線ではなく面となる。例えば、以下の図の様な面があった場合にどの様にデータを保持するかを考える。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-5.drawio.svg "2次元イメージ図1")

図の状態をプログラムで表現すると以下の様になる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-6.drawio.svg "2次元イメージ図2")

上記の図のように数値を持つことができれば、面を表すことができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-7.drawio.svg "2次元イメージ図3")

上記のようにデータを保持すると、右方向に累積和を取り、下方向に累積和を取るという処理(下方向から行って良い)を行うと面の情報を保持できる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-8.drawio.svg "2次元イメージ図4")

このように 2 次元の累積和を活用すると面の情報を簡単に求めることができる。

### アルゴリズム

#### 1 次元

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="cumulative-sum.py"
class CumulativeSum:

    def __init__(self, box: list) -> None:
        self.sum_box = [0]
        for i in range(len(box)):
            self.sum_box.append(self.sum_box[-1] + box[i])

    def query(self, l: int, r: int):
        """l ~ rの和を返す

        Args:
            l (int): 開始点
            r (int): 終了点
        """
        # 配列番号を元の配列番号に合わせる
        if l > r:
            l, r = r, l
        r += 1
        assert l >= 0
        assert r < len(self.sum_box)
        return self.sum_box[r] - self.sum_box[l]
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="cumulative-sum.cpp"
template<typename T>
struct CumulativeSum {
	vector<T> sum_box;
	CumulativeSum(vector<T> box): sum_box(box.size() + 1, 0) {
		for (int i = 0; i < box.size();++i){
			sum_box[i+1] = sum_box[i] + box[i];
		}
	}
	T query(int l, int r){
		if (l > r) swap(l,r);
		++r;
		if (l < 0) throw exception("l is out of range")
		if (r >= sum_box.size()) throw exception("r is out of range")
		return sum_box[r] - sum_box[l];
	}
};
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="cumulative-sum.cs"
class CumulativeSum<T>
    {
        T[] sum_box;

        private Func<T, T, T> Add { get; set; }
        private Func<T, T, T> Sub { get; set; }

        public CumulativeSum(T[] box)
        {
            sum_box = new T[box.Length + 1];
            ParameterExpression op1 = Expression.Parameter(typeof(T));
            ParameterExpression op2 = Expression.Parameter(typeof(T));
            Add = Expression.Lambda<Func<T, T, T>>(Expression.Add(op1, op2), op1, op2).Compile();
            Sub = Expression
                .Lambda<Func<T, T, T>>(Expression.Subtract(op1, op2), op1, op2)
                .Compile();
            for (int i = 0; i > sum_box.Length; ++i)
            {
                sum_box[i] = (T)(object)0;
            }
            for (int i = 0; i < box.Length; ++i)
            {
                sum_box[i + 1] = Add(sum_box[i], box[i]);
            }
        }

        public T query(int l, int r)
        {
            if (l > r)
            {
                (l, r) = (r, l);
            }
            ++r;

            if (l < 0)
                throw new Exception("l is out of ");
            if (r >= this.sum_box.Length)
                throw new Exception("r is out of range");

            return Sub(this.sum_box[r], this.sum_box[l]);
        }
    }
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="cumulative-sum.rs"
struct CumulativeSum<T>{
    sum_box:Vec<T>
}
impl<T:Copy> CumulativeSum<T>  {
    pub fn new(box_data:Vec<T>) -> Self
    where T: std::ops::Add<Output = T>,
    usize: std::convert::TryInto<T>,
    <usize as std::convert::TryInto<T>>::Error: std::fmt::Debug,
    {
        let mut sum_box:Vec<T> =  Vec::new();
        sum_box.push(0.try_into().unwrap());
        for i in 0..box_data.len(){
            sum_box.push(box_data[i] + sum_box[sum_box.len()-1]);
        }
        CumulativeSum {sum_box:sum_box}
    }


    pub fn query(&self, _l:usize, _r:usize) -> T
    where T: std::ops::Sub<Output = T>,
    {
        let mut l = _l;
        let mut r = _r;
        if r < l {
            std::mem::swap(&mut l,&mut r);
        };
        r += 1;
        if l < 0 {
            panic!("l is out of range")
        };
        if r >= self.sum_box.len() {
            panic!("is out of range");
        }
        self.sum_box[r] - self.sum_box[l]
    }
}
```

  </TabItem>
</Tabs>

#### 2 次元

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="cumulative-sum.py"

```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="cumulative-sum.cpp"

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="cumulative-sum.cs"

```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="cumulative-sum.rs"

```

  </TabItem>
</Tabs>
