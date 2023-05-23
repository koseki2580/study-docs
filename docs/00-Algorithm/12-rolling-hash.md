---
title: Rolling Hash
sidebar_label: Rolling Hash
draft: true
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
そのため、文字列 $\sim$ 数字への変化をする際には数字が一意になるように選択する必要がある。

そこで文字列 $\rightarrow$ 数字(ハッシュ化)への変化の式を次のように定義する。

$$
N_{n} = \begin{cases}
0 &\text{if} \,\, n = 0 \\
(文字を数値化 + N_{n-1} * m) \% mod  &\text{otherwise}
\end{cases}
$$

ここで$N_{n}$は n 文字を数値化した値である。$m$は基準値であり、$mod$は数が大きくなる防ぎ、ハッシュ値に変換した際に取りうる範囲を表している。
$mod$が小さいとハッシュ化したい際に取りうる範囲が小さいため、上記の`ab`と`ba`が同じ値をとるような衝突が起こる。
上記の式にすると$m$を 31 として考えた場合、`ab`は

1. `a = 1 + 0 * 31 = 1`
2. `ab = 2 + 1 * 31 = 33`

`ba`は

1. `b = 2 + 0 * 31 = 2`
2. `ba = 1 + 2 * 31 = 63`

となり、違う値になっていることがわかる。
また、この様に文字列 $\rightarrow$ 数値のハッシュ関数を定義すると、長い文字列 N が存在した場合の a 番目から b 番目の文字列のハッシュ値も高速で求めることが可能となっている。
