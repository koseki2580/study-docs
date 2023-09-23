---
title: とりあえずまとめ
sidebar_label: とりあえずまとめ
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

## ループバックインターフェース とは

ループバックインターフェースは、サーバ・ルータがもつ仮想的なインターフェースのことであり、以下のような特徴がある。

- 機器がダウンしない限りダウンしない
- 任意の IP アドレスを付与できる
- 複数作成することができる

ネットワークにおいて特定のデバイスを指定する際にループバックインターフェイスが指定される。

### 参考

- [https://nozawana44.hatenablog.com/entry/2019/01/20/204557](https://nozawana44.hatenablog.com/entry/2019/01/20/204557)

## STUN

Session Traversal Utilities for NAT(STUN)は NAT トラバーサル(NAT 超え)の方法の 1 つとして標準化された通信プロトコルである。

![STUN 流れ](/img/svg/Network/other/stun/stun-2.drawio.svg "STUN 流れ")

STUN メッセージは以下のような 20 バイトの構造をしている。

![STUNメッセージ](/img/svg/Network/other/stun/stun-1.drawio.svg "STUNメッセージ")

同じポート番号を使用していた場合に STUN パケットであると識別するために使用されるため先頭の 2bit は必ず`0`である必要があると[RFC8489](https://datatracker.ietf.org/doc/html/rfc8489)
に記載されている。

- Message Type

  メッセージクラス(リクエスト・成功レスポンス・エラーレスポンス・指示)とメッセージメソッドである。

- Message Length

  20 バイトを除いたメッセージサイズを格納する。STUN メッセージは 4 の倍数になるように扱われるため、必ず最後の 2bit が 0 となる。

- Magic Cookie

  固定であり、`0x2112A442`が格納される。

- Transaction ID

  STUN トランザクションを一意に識別するため使用される。

ヘッダーの後は以下の形式の値が格納されている。[RFC5389][rfc5389]の 15 節に詳細が記述されている。

![STUNメッセージ 属性](/img/svg/Network/other/stun/stun-3.drawio.svg "STUNメッセージ 属性")

IP アドレスのやりとりをするのに必要な`MAPPED-ADDRESS`と`XOR-MAPPED-ADDRESS`だけ詳細を記述する。

- MAPPED-ADDRESS

  ![MAPPED-ADDRESS](/img/svg/Network/other/stun/stun-4.drawio.svg "MAPPED-ADDRESS")

  初めに存在する 0 が 8bit 続いているのは 32bit に合わせるために付加されている。`Family`は IPv4 であれば`0x01`、IPv6 であれば`0x02`が格納される。

- XOR-MAPPED-ADDRESS

  難読化が行われた MAPPED-ADDRESS である。

  ![XOR-MAPPED-ADDRESS](/img/svg/Network/other/stun/stun-5.drawio.svg "XOR-MAPPED-ADDRESS")

  `Family`は MAPPED-ADDRESS と同じである。`X-Port`は Port 番号をバイトで取得し、Magic Cookie の最上位 16bit と XOR した結果を格納する。
  `X-Address`は IPv4 の場合は Magic Cookie と XOR した結果を格納し、IPv6 の場合は、Magic Cookie + Transaction ID の 128bit で XOR した結果を格納する。
  最初の X の 8 バイトは MAPPED-ADDRESS と同じで 32bit にするために配置されている。(X にしているのは RFC で X と表現されているから)

### 参考

- [Wikipedia](https://ja.wikipedia.org/wiki/STUN)
- [RFC5389][rfc5389]

[rfc5389]: https://www.rfc-editor.org/rfc/rfc5389.html
