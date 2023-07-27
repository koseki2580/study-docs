---
title: 平方分割
sidebar_label: 平方分割
draft: false
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 平方分割 とは

平方分割とはデータを$\lfloor\sqrt{N}\rfloor$個の大きさの$\lceil\frac{N}{\sqrt{N}}\rceil$のグループに分割することで、データに対しての操作の計算量を落とす方法である。

### アルゴリズム

#### 流れ

例えば`[5, 62, 2, 19, 10, 23, 0, 30, 1]`の様な配列があったとする。クエリとして`l,r`が与えられ、l $\sim$ r の間で一番大きな数字を出力するということを考える。

配列は 9 個しかないので、毎回 l $\sim$ r を検索して最大値を求めることをしても良いが、配列の個数が大きくなると毎回検索すると時間がかかってしまう。
平方分割では図のように配列を 3 個の大きさの 3 つのグループに分割する。分割した後各グループの最大値を保持する別の配列を用意する。

![平方分割1](/img/svg/Algorithm/square-division/square-division-1.drawio.svg "平方分割1")

こうすることで、例えば`l = 2`, `r = 7`の最大値を求める場合に、グループ 1 の 3 $\sim$ 5 が完全に内包されている様な状況だと、3 $\sim$ 5 を探索する必要がなくグループの値を用いて最大値は`23`であるとわかる。そのため、2, 6, 7, グループ 1 の 4 つの値の最大の値を求めれば良くなり、確認する回数を少なくすることができる。

![平方分割4](/img/svg/Algorithm/square-division/square-division-4.drawio.svg "平方分割4")

検索範囲にグループが含まれない`l = 3`, `r = 4`の様な場合はそのまま 3 $\sim$ 4 の範囲を確認すれば良い。これは O($\sqrt{N}$)で済むようになっている。なぜなら、$\lfloor\sqrt{N}\rfloor$個ずつに区切っているので**グループが含まれる $=$ 検索範囲の個数が$2 \times \lfloor\sqrt{N}\rfloor$以上**ということが言え、**グループを含まない = $2 \times \lfloor\sqrt{N}\rfloor$ 以下**と言えるからである。

例えば、`l = 2`, `r = 4` の場合はグループの個数以上だが、グループを含んでいないという場合がり、

![平方分割5](/img/svg/Algorithm/square-division/square-division-5.drawio.svg "平方分割5")

必ずグループを含んでいると言える条件は以下となる。

$$
r - l > 2\times \lfloor\sqrt{N}\rfloor \\

or \\

\lfloor \frac{r}{\sqrt{N}}\rfloor - \lfloor \frac{l}{\sqrt{N}}\rfloor \geqq 2
$$

両方とも同じことを意味しており、グループ単位で見るか配列の個数で見るかによって条件が異なる。

グループ単位で見ると、差が$2 \geqq$ であれば必ず 1 以上のグループを内包していると分かるため、$\lfloor \frac{r}{\sqrt{N}}\rfloor - \lfloor \frac{l}{\sqrt{N}}\rfloor \geqq 2
$の条件となることがわかる。

配列の個数で見ると、グループ n の開始点からグループ n+1 の終了点の範囲の場合がグループ差が 1 となる最大の個数となる。そのため、それに+1 した $r - l \geqq 1 + 2\times \lfloor\sqrt{N}\rfloor$を満たす場合はグループ差が必ず 2 となる。この条件を整理すると$r - l > 2\times \lfloor\sqrt{N}\rfloor$となる。

![平方分割2](/img/svg/Algorithm/square-division/square-division-2.drawio.svg "平方分割2")

上記の必ずグループを含んでいる条件を満たさない場合は、そのまま l $\sim$ r を検索する。l $\sim$ r で検索を行っても最大の個数が$2 \times \lfloor\sqrt{N}\rfloor$個しか存在しないため、計算量は$O(\sqrt{N})$となる。

反対に条件を満たす場合は、グループを使用して検索個数を削減する。間に内包しているグループはグループで計算する。計算に用いるグループ番号は次の条件を満たしているものを使用すれば良い。

$$
\lfloor \frac{l}{\sqrt{N}}\rfloor < n < \lfloor \frac{r}{\sqrt{N}}\rfloor
$$

グループに内包されていない範囲のものはそれぞれ$l \sim (\lfloor\frac{l}{\sqrt{N}}\rfloor + 1) \times \lfloor\sqrt{N}\rfloor - 1$, $\lfloor\frac{r}{\sqrt{N}}\rfloor  \times \lfloor\sqrt{N}\rfloor \sim r$となる。(l,r が所属するグループの開始点から・終了点までを計算している)この個数は必ず$2 \times \lfloor\sqrt{N}\rfloor$個以下しか存在しない。また、完全内包されているグループの個数は必ず$\lfloor\sqrt{N}\rfloor$個以下なので、合わせて検索する個数は$2 \times \lfloor\sqrt{N}\rfloor + \lfloor\sqrt{N}\rfloor$となるので、計算量は$O(\sqrt{N})$となる。

![平方分割3](/img/svg/Algorithm/square-division/square-division-3.drawio.svg "平方分割3")

両方の条件で計算量が$O(\sqrt{N})$となるので、平方分割のアルゴリズムの計算量は前処理に$\O(N)$, 検索に$O(\sqrt{N})$となる。

#### プログラム

<Tabs groupId="code">
<TabItem value="python" label="Python" default>

```python title="square-division.py"
import math
class SquareDivision():

    def __init__(self, data_list, condition=max, initial=-1 << 64):
        self.data = data_list
        self.n = len(self.data)
        self.sqrt_num = math.floor(math.sqrt(self.n))

        self.condition = condition
        print(self.condition)
        self.initial = initial
        self.division_list = [self.initial] * (self.n // self.sqrt_num + 1)
        for i in range(self.n):
            idx = i // self.sqrt_num
            self.division_list[idx] = self.condition(self.division_list[idx], self.data[i])

    def change(self, idx, val):
        self.data[idx] = val
        group_idx = idx // self.sqrt_num
        self.division_list[group_idx] = self.condition(self.division_list[group_idx], val)

    def query(self, l, r):
        if r < l:
            l, r = r, l
        ret = self.initial
        group_l = l // self.sqrt_num
        group_r = r // self.sqrt_num
        if group_r - group_l >= 2:
            for i in range(group_l+1, group_r):
                ret = self.condition(ret, self.division_list[i])
            # 残り部分を比較
            # 左側
            ret = self.condition(ret, self._check(l, (group_l + 1) * self.sqrt_num - 1))
            # 右側
            ret = self.condition(ret, self._check(group_r * self.sqrt_num, r))
        else:
            ret = self._check(l, r)
        return ret

    def _check(self, l, r):
        ret = self.initial
        for i in range(l, r+1):
            ret = self.condition(ret, self.data[i])
        return ret
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp title="square-division.cpp"

template<typename T>
struct SquareDivision {
	vector<T> data;
	int n;
	int sqrt_num;
	const T&(*condition)(const T&, const T&);
	T initial;
	vector<T> division_list;
	SquareDivision(vector<T> data_list, const T&(*_condition)(const T&, const T&) , T _initial): data(data_list), n(data_list.size()), sqrt_num(sqrt(data_list.size())), initial(_initial), division_list(data_list.size() / sqrt(data_list.size()) + 1, _initial), condition(_condition){
		for (int i = 0; i < n;++i){
			int idx = i / sqrt_num;
			division_list[idx] = condition(division_list[idx], data[i]);
		}
	}
	void change(int idx, T val){
		data[idx] = val;
		int group_idx = idx / sqrt_num;
		division_list[group_idx] = condition(division_list[group_idx], val);
	}
	T query(int l, int r){
		if (r < l) swap(r,l);

		T ret = initial;
        int group_l = l / sqrt_num;
        int group_r = r / sqrt_num;
		if (group_r - group_l >= 2){
			for (int i = group_l + 1; i < group_r; ++i){
				ret = condition(ret, division_list[i]);
			}
			// 残り部分を比較
			// 左側
			ret = condition(ret, check(l, (group_l + 1) * sqrt_num - 1));
			// 右側
			ret = condition(ret, check(group_r * sqrt_num, r));
		}else{
			ret = check(l,r);
		}
		return ret;
	}
	private:
	T check(int l, int r){
		T ret = initial;
		for (int i = l; i < r+1;++i){
			ret = condition(ret, data[i]);
		}
		return ret;
	}
};
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="square-division.cs"
class SquareDivision<T>
    {
        T[] data;
        int n;
        Func<T, T, T> condition;
        int sqrt_num;
        T initial;
        T[] division_list;

        public SquareDivision(T[] data_list, Func<T, T, T> condition, T _initial)
        {
            this.data = data_list;
            this.n = this.data.Length;
            this.condition = condition;
            this.initial = _initial;
            this.sqrt_num = (int)Math.Sqrt(this.n);
            this.division_list = new T[(int)(this.n / Math.Sqrt(this.n)) + 1];
            // 初期値で初期化
            for (int i = 0; i < this.division_list.Length; ++i)
            {
                this.division_list[i] = this.initial;
            }
            for (int i = 0; i < n; ++i)
            {
                int idx = i / sqrt_num;
                this.division_list[idx] = this.condition(this.division_list[idx], this.data[i]);
            }
        }

        public void change(int idx, T val)
        {
            this.data[idx] = val;
            int group_idx = idx / this.sqrt_num;
            this.division_list[group_idx] = this.condition(this.division_list[group_idx], val);
        }

        public T query(int l, int r)
        {
            if (r < l)
                (l, r) = (r, l);
            T ret = this.initial;
            int group_l = l / this.sqrt_num;
            int group_r = r / this.sqrt_num;

            if (group_r - group_l >= 2)
            {
                for (int i = group_l + 1; i < group_r; ++i)
                {
                    ret = this.condition(ret, this.division_list[i]);
                }

                // 残り部分を比較
                // 左側
                ret = this.condition(ret, check(l, (group_l + 1) * this.sqrt_num - 1));

                // 右側
                ret = this.condition(ret, check(group_r * this.sqrt_num, r));
            }
            else
            {
                ret = check(l, r);
            }

            return ret;
        }

        private T check(int l, int r)
        {
            T ret = this.initial;
            for (int i = l; i < r + 1; ++i)
            {
                ret = this.condition(ret, this.data[i]);
            }
            return ret;
        }
    }
```

  </TabItem>
  <TabItem value="Rust" label="Rust">

```rust title="square-division.rs"

```

  </TabItem>
</Tabs>
