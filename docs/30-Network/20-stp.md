---
title: STP
sidebar_label: STP
draft: true
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

## STP とは

[STP][stp]は Spanning Tree Protocol の略であり、レイヤー 2 ネットワークで用いられ、スイッチの冗長化を行うことで経路にループが発生し、データが転送され続けてしまう`ブロードキャストストーム`の状態が起きない様にポートを閉じてループを発生させないようにするプロトコルである。

以下の図のように ARP リクエストなどのブロードキャストを行なった際などにループが発生し、リクエストが永遠にループし続ける。これは全てのポートがデータを転送するようになっていることが原因で生じている。これを物理的にポートを抜くのではなく、論理的に抜いた状態と同じ状態にするのが STP である。

![ブロードキャストストーム](/img/svg/Network/stp/stp-1.drawio.svg "ブロードキャストストーム")

STP を有効にしているスイッチは BPDU(Bridge Protocol Data Unit)というフレームのやりとりを行い、ブロックするポートについての情報のやりとりを行う。

スパニングツリーは次の手順で決まる。

1. ルートブリッジを決定する
2. 各ポートを決定(ルートポート, 代表ポート, オルタネートポート(ブロッキングポート))
3. スパニングツリーの維持・再構成(障害発生時)

スパニングツリーを構築するためにまず、ルートブリッジを決定する。これは BPDU に含まれているブリッジ ID によって決定する。ブリッジ ID が一番小さいスイッチがルートブリッジとなる。

![ブリッジID](/img/svg/Network/stp/stp-2.drawio.svg "ブリッジID")

- ブリッジプライオリティ

  デフォルトで 0x8000 となる。

- MAC アドレス

  スイッチの MAC アドレス。

## 参考

- [https://milestone-of-se.nesuke.com/nw-basic/stp/stp-summary/](https://milestone-of-se.nesuke.com/nw-basic/stp/stp-summary/)
- [https://panasonic.co.jp/ew/pewnw/product/column/014.html](https://panasonic.co.jp/ew/pewnw/product/column/014.html)
  [stp]: https://www.ieee802.org/1/files/public/docs2009/aq-seaman-merged-spanning-tree-protocols-0509.pdf
