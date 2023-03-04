---
title: Diffie-Hellman鍵交換方式
sidebar_label: Diffie-Hellman鍵交換方式
draft: false
toc_max_heading_level: 5
tags: [ネットワーク]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
import SplitParagraph from "@site/src/components/Custom/SplitParagraph"
import Paragraph from "@site/src/components/Custom/Paragraph"

```

## Diffie-Hellman 鍵交換方式

Diffie-Hellman 鍵交換方式とは送受信者間で乱数を安全に交換する方法である。IPsec の共通鍵生成部分でも使用されており、
[基本情報技術者試験平成 25 年度秋][kihon-25-4] 問 4 でも出題されている。

Diffie-Hellman 鍵交換方式では、以下のような手順が取られている。

1. 通信を行う機器それぞれが共通鍵用の乱数を生成する
2. その乱数を公開値(第三者にバレても良い)を使用し、暗号化する
3. その暗号化したデータを互いに送信する
4. 自分の乱数と相手からもらったデータから共通鍵を生成する

このような手順を踏んでおり、通信相手が誰なのかまでは認証していないため、何らかの手段で通信相手を認証しないと**中間者攻撃**(なりすまし)を受けやすくなっている。

上記の手順を数式でみると以下のようなる。

公開値として 2 種類の数を使用する。

`p` : 大きな素数

`g` : 0 $\leq$ g $<$ p

公開値なので通信をする M, N の両方は知っているものとする。

1.ではそれぞれが乱数を生成するので、M, N はそれぞれ X, Y の値を生成したとする。

2.では 1.で生成した乱数を公開値 p,g を用いて暗号化を行う。暗号化は以下のように行う。

<SplitParagraph border="false">

  <Paragraph>

**M**

$$
\begin{align}
  x = g^{X} \% p
\end{align}
$$

  </Paragraph>

  <Paragraph>

**N**

$$
\begin{align}
  y = g^{Y} \% p
\end{align}
$$

  </Paragraph>
</SplitParagraph>

3.でそれぞれ暗号化した`x`, `y`を交換し合う。

4.で受け取ったデータをそれぞれ以下のような計算を行う。

<SplitParagraph border="false">

  <Paragraph>

$$
\begin{align}
  Km = y^{X} \% p
\end{align}
$$

(2)より

$$
\begin{align}
  Km = g^{XY} \% p
\end{align}
$$

  </Paragraph>

  <Paragraph>

$$
\begin{align}
  Kn = x^{Y} \% p
\end{align}
$$

(1)より

$$
\begin{align}
  Kn = g^{XY} \% p
\end{align}
$$

  </Paragraph>
</SplitParagraph>

(4), (6)より

$$
\begin{align}
  Km = Kn = g^{XY} \% p
\end{align}
$$

となり、同じ共通鍵を生成できていることがわかる。x,y,g,p 全てが傍受される危険性は存在するが p が十分大きければ共通鍵を推測するのは多項式時間内で解く手法は見つかっていないため
安全であると言える。

[kihon-25-4]: https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2013h25_2/2013h25a_fe_pm_qs.pdf
