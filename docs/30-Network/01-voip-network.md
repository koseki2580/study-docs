---
title: VoIP
sidebar_label: VoIP
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

## VoIP とは

VoIP(Voice over Internet Protocol) はネットワーク上で音声データのやりとりを行う技術の総称のことを言う。

VoIP は 2 段階に分かれており、

1. [SIP][sip] を用いてセッションを生成
2. RTP による音声通信

の手順でやり取りが行われる。

### VoIP GW

VoIP GW(VoIP GateWay)は公衆 IP 電話網と自社の内線 IP 電話網の 2 つの SIP サーバを接続するために必要となる。
そのため、VoIP GW は公衆 IP 電話網と自社の内線 IP 電話網との境界に存在し、それぞれの SIP サーバとやりとりを行う。

着呼側の SIP から VoIP GW を見ると発呼側として振る舞い、発呼側の SIP からみると VoIP GW は着呼側として振る舞う。
そのため、VoIP GW は両方の SIP ネットワークに対して UA として振る舞う特殊な UA となる。これを `B2BUA(Back-to-Back User Agent)`と呼ぶ。

B2BUA については [RFC3261, Section 6](https://www.rfc-editor.org/rfc/rfc3261#section-6) で定義されており、以下のように書かれている

<details>
  <summary>Back-to-Back User Agent</summary>A back-to-back user agent (B2BUA) is
  a logical entity that receives a request and processes it as a user agent
  server (UAS). In order to determine how the request should be answered, it
  acts as a user agent client (UAC) and generates requests. Unlike a proxy
  server, it maintains dialog state and must participate in all requests sent on
  the dialogs it has established. Since it is a concatenation of a UAC and UAS,
  no explicit definitions are needed for its behavior.
</details>

さらに、セッション生成を仲介するだけでなく、RTP パケットの中継も行う SBC(Session Border Controller)と呼ばれる機能も持つ。

VoIP GW は公衆 IP 電話網と自社の内線 IP 電話網のそれぞれの SIP ネットワークに対して、SIP URI と IP アドレスの対応付けを登録する必要がある。
そのため、それぞれの SIP サーバに対して`REGISTER`リクエストを送信する必要がある。

通信の流れは以下のようになる。

![VoIP GWの通信流れ](/img/svg/Network/voip-network/voip-network-1.drawio.svg "VoIP GWの通信流れ")

### NAT に起因する問題

自社電話機に割り当てられるのはプライベート IP アドレスであり、インターネット網を経由し、
SIP を使った通話を行う場合はプライベート IP アドレスからグローバル IP アドレスに変換する必要がある。

NAT を使用してプライベート IP アドレスをグローバル IP アドレスに変換した場合に、通話セッションを生成できない問題が発生する。

![平成26年 午後2 図3](/img/png/Network/sip/H26-2-2-figure-3.png "平成26年 午後2 図3")

ネットワークスペシャリストの平成 26 年午後 2 問 2 において、セッション生成開始時の INVITE リクエストの例が登場している。
[SIP][sip]でも説明している通り発信元・先の IP アドレスのやりとりは SIP メッセージを通して行なっている。

そのため、上記の図の発信元の IP アドレスにはプライベート IP アドレスが格納され、通話セッションを生成することができない。

![SIP NATがある場合のIP遷移](/img/svg/Network/voip-network/voip-network-2.drawio.svg "SIP NATがある場合のIP遷移")

SIP メッセージ内プライベート IP アドレスとなっているため、着呼側 UA からの RTP パケットが発呼側に届かない。

この問題は VoIP GW の NAT トラバーサル機能を使うことで解決する。
この機能を使うことで、VoIP GW は内線 IP 電話網側から受け取った SIP メッセージの発信元 IP アドレスを VoIP GW 自身のグローバル IP アドレスに変換する。

公衆 IP 電話網側(クライアント側)のプライベート IP とグローバル IP の変換の過程は省略する。道中に NAT が存在する場合でも STUN サーバ等を使用することでグローバル IP を知ることができる。

![VoIP GWのNATトラバーサル](/img/svg/Network/voip-network/voip-network-3.drawio.svg "VoIP GWのNATトラバーサル")

[sip]: /docs/Network/sip
