---
title: WAN高速化装置
sidebar_label: WAN高速化装置
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

## WAN 高速化装置 とは

WAN 高速化装置(WAN Acceleration System, WAS)は拠点とデータセンター等に機器を配置し、データのやりとりを高速化仕組みのことをいう。

![WASの構成](/img/svg/Network/was/was-1.drawio.svg "WASの構成")

[ネットワークスペシャリスト平成 26 年午後 1](https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2014h26_2/2014h26a_nw_pm1_qs.pdf)問 1 では
CIFS(Common Internet File System)を例に扱っている。

CIFS は SMB(Server Message Block)の方言であると[Microsoft](https://learn.microsoft.com/ja-jp/windows/win32/fileio/microsoft-smb-protocol-and-cifs-protocol-overview)は述べています。

<details>
  <summary>Microsoftの定義</summary>

- [[MS-CIFS]: Common Internet File System (CIFS) Protocol](https://learn.microsoft.com/ja-jp/openspecs/windows_protocols/ms-cifs/d416ff7c-c536-406e-a951-4f04b2fd1d2b)

- [[MS-SMB]: Server Message Block (SMB) Protocol](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-smb/f210069c-7086-4dc2-885e-861d837df688)

- [[MS-SMB2]: Server Message Block (SMB) Protocol Versions 2 and 3](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-smb2/5606ad47-5ee0-437a-817e-70c366052962)

</details>

CIFS は[こちら](https://atmarkit.itmedia.co.jp/ait/articles/1501/19/news092.html)の記事にもあるように`CIFS = SMB 1.0`と言えるので、以後は CIFS = SMB 1.0 として考える。

SMB 1.0 はリクエスト・レスポンスがセットとしてやりとりが行われる。
SMB 1.0 の 1 回のやり取りサイズは[Wikipedia](https://en.wikipedia.org/wiki/Server_Message_Block)でも紹介されているように 64K となっている。

:::info 全文
Microsoft has explained that performance issues come about primarily because
SMB 1.0 is a block-level rather than a streaming protocol, that was originally designed for small LANs;
**it has a block size that is limited to 64K**, SMB signing creates an additional overhead and the TCP window size is not optimized for WAN links.
Solutions to this problem include the updated SMB 2.0 protocol,
Offline Files, TCP window scaling and WAN optimization devices from various network vendors that cache and optimize SMB 1.0 and 2.0.
:::

つまり、この制限されたサイズ以上のデータを読み出す場合には何度もリクエスト・レスポンスのやりとりを行う必要がある。

WAS はリクエスト・レスポンスの代理応答と一括転送の仕組みを用いて WAN 経由のファイル転送を高速化することができ、
図の本社側の WAS はデータセンターに存在する File Server のように振る舞い、データセンターの WAS は PC のように振る舞う。

![WASの通信の流れ](/img/svg/Network/was/was-2.drawio.svg "WASの通信の流れ")

### WAS による応答時間の違い

1 往復(リクエスト $\rightarrow$ レスポンスを受け取るまで)あたりの所要時間は次の式で求めることができる。

$$
{1往復あたりの所要時間}_{[秒]} = {RTT}_{[秒]} + {遅延}_{[秒]}
$$

ここで、RTT (Round Trip Time)は TCP のパケットを送信し、
そのレスポンスを受け取るまでの時間を意味している。

また、遅延はいくつか種類が存在するが、遅延が小さく無視できる、また RTT に含まれるため、シリアル化遅延時間のみを考える。
シリアル化遅延時間は次の式で求めることができる。

$$
{シリアル化遅延時間}_{[秒]} = \frac{{パケットサイズ}_{[ビット]}}{{帯域幅}_{[\frac{ビット}{秒}]}}
$$

**計算条件**

|      項目      |                       値                        |
| :------------: | :---------------------------------------------: |
|     帯域幅     | $1.0 \times {10}^{8} { }_{[\frac{ビット}{秒}]}$ |
|      RTT       |        $5.0 \times {10}^{-2} { }_{[秒]}$        |
| ファイルサイズ |      $1.0 \times {10}^{8} { }_{[バイト]}$       |

<SplitParagraph>

  <Paragraph>

#### WAS なし

|       項目       |                                         値                                         |
| :--------------: | :--------------------------------------------------------------------------------: |
| 転送データサイズ |                        $5.0 \times {10}^{3} { }_{[バイト]}$                        |
|      往復数      | $\frac{1.0 \times {10}^{8}}{5.0 \times {10}^{3}} = 2.0 \times {10}^{4} { }_{[回]}$ |

<br />

$$
\begin{align*}
シリアル化遅延時間 &= \frac{5.0 \times {10}^{3} \times 8}{1.0 \times {10}^{8}}   \\
        &= 4 \times {10}^{-4} \\
\end{align*}
$$

$$
\begin{align*}
1往復あたりの所要時間 &= 5.0 \times {10}^{-2} + 0.04 \times {10}^{-2}   \\
        &= 5.04 \times {10}^{-2} \\
\end{align*}
$$

$$
\begin{align*}
転送の所要時間 &= 5.04 \times {10}^{-2} \times 2.0 \times {10}^{4}    \\
        &= 1008\\
\end{align*}
$$

  </Paragraph>

  <Paragraph>

#### WAS あり

|            項目            |                                         値                                         |
| :------------------------: | :--------------------------------------------------------------------------------: |
| 1 往復での転送データサイズ |                        $1.0 \times {10}^{4} { }_{[バイト]}$                        |
|           往復数           | $\frac{1.0 \times {10}^{8}}{1.0 \times {10}^{4}} = 1.0 \times {10}^{4} { }_{[回]}$ |

WAS での一括転送のサイズをなしの時の 2 倍として計算する。

$$
\begin{align*}
シリアル化遅延時間 &= \frac{1.0 \times {10}^{4} \times 8}{1.0 \times {10}^{8}}   \\
        &= 8 \times {10}^{-4} \\
\end{align*}
$$

$$
\begin{align*}
1往復あたりの所要時間 &= 5.0 \times {10}^{-2} + 0.08 \times {10}^{-2}   \\
        &= 5.08 \times {10}^{-2} \\
\end{align*}
$$

$$
\begin{align*}
転送の所要時間 &= 5.08 \times {10}^{-2} \times 1.0 \times {10}^{4}     \\
        &= 508\\
\end{align*}
$$

  </Paragraph>

</SplitParagraph>

となり、WAS を使った方が転送にかかる時間が短くなっている。WAS とやりとりする際は WAN ではなく LAN を使ってやりとりを行うため RTT が小さくなる。
そのため、RTT が大きい場合に WAS を使うとより恩恵を受けることができる。

## 参考

- [https://www.oresamalabo.net/entry/2020/01/18/111216](https://www.oresamalabo.net/entry/2020/01/18/111216)
- [RTT](<https://developer.mozilla.org/ja/docs/Glossary/Round_Trip_Time_(RTT)>)
- [遅延](https://www.n-study.com/qos-fundamentals/endtoend-delay/)
