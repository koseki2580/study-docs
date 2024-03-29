---
title: SIP
sidebar_label: SIP
draft: false
toc_max_heading_level: 5
tags: [ネットワーク, アプリケーション層]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
import SplitParagraph from "@site/src/components/Custom/SplitParagraph"
import Paragraph from "@site/src/components/Custom/Paragraph"

```

## SIP とは

SIP(Session Initiation Protocol)は端末間のセッションの生成・変更・転送・切断等を行うプロトコルのことである。

SIP では端末のことをユーザエージェント(UA: User Agent)と呼び、次の 2 通りの UA が存在する。

- ユーザーエージェント・クライアント (UAC : User Agent Client): SIP リクエストを生成・送信し、応答を受信・処理する UA
- ユーザーエージェント・サーバ (UAS : User Agent Server): SIP リクエストを受信・処理し、応答を生成・送信する UA

SIP で規定されているのはセッションを制御する機構であり、やりとりするデータについては規定されていない。
例えば、セッションを生成した後にリアルタイムデータ(音声・映像)の転送には、RTP(Real-time Transport Protocol)を用いる。

SIP はデータ自体は定義されていないので、音声データであれば IP 電話, 音声+映像であればテレビ電話, テキストであればチャットといったさまざまな形で用いられる。

SIP がセッションを生成している間にセッション情報交換を行う。[SDP](/docs/Network/sdp)を用いてやりとりを行なっている。

SIP のメッセージには 2 種類存在し、クライアントからサーバへ送信するリクエストとサーバからクライアントへ送信するレスポンスが存在する。
それぞれについて[こちら](http://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)で定義されている。

- **リクエスト**

  | メッセージ |         説明         |
  | :--------: | :------------------: |
  |   INVITE   | セッション開始を要求 |
  |    ACK     | セッション生成の確認 |
  |    BYE     |    セッション終了    |
  |  REGISTER  |     URI 登録要求     |

- **レスポンス**

  | 番号 |         |               説明               |
  | :--: | :-----: | :------------------------------: |
  | 100  | Trying  |              処理中              |
  | 180  | Ringing | 呼び出し中(電話であれば音がなる) |
  | 200  |   OK    |               成功               |

  ステータスコードの分類は以下のように定義されている

  | コード |      説明       |
  | :----: | :-------------: |
  |  1xx   |   Provisional   |
  |  2xx   |   Successful    |
  |  3xx   |   Redirection   |
  |  4xx   | Request Failure |
  |  5xx   | Server Failure  |
  |  6xx   | Global Failures |

SIP のシーケンスは次のようになる。

- UA が相手の IP アドレスを知っている場合

  ![SIPシーケンス IPアドレス既知](/img/svg/Network/sip/sip-1.drawio.svg "SIPシーケンス IPアドレス既知")

  IP アドレスを知っているの相手の UA と直接やりとりを行う。

- UA が相手の IP アドレスを知らない場合

  ![SIPシーケンス IPアドレス未知](/img/svg/Network/sip/sip-2.drawio.svg "SIPシーケンス IPアドレス未知")

  IP アドレスを知らないため、SIP サーバを介してセッション情報を交換する。
  そのため、初めに各 UA は REGISTER リクエストを使用して、SIP URI と IP アドレスの対応付けを **SIP サーバに登録する**必要がある。

  着呼側の UA は INVITE リクエストの SIP メッセージから発信元 IP アドレスを取得し、発呼側は 200 OK レスポンスの SIP メッセージから発信先 IP アドレスを取得する。

平成 26 年のネットワークスペシャリストの午後 2 問 2 では SIP の INVITE リクエストの内容についての図が書かれている。
![平成26年 午後2 図3](/img/png/Network/sip/H26-2-2-figure-3.png "平成26年 午後2 図3")

この図の Via フィールドはリクエストを経由したパスを表しており、SIP サーバ A $\rightarrow$ SIP サーバ B への INVITE では Via フィールドは 2 つになっている。
また、SIP サーバ B $\rightarrow$ サーバ UA への INVITE では Via フィールドは 3 つとなる。Via フィールドに追記する際には既存 Via フィールドの上位に追記するようになっている。
サーバ UA から 200 OK レスポンスを SIP サーバ B へ送る際には Via フィールドをそのままにして送り出す。
それぞれの SIP サーバでは最上位の位置する Via フィールド(自分が付与したもの)を削除し、次に最上位となった場所へレスポンスを送信する仕組みなっている。
[RFC3261 page-14](https://www.rfc-editor.org/rfc/rfc3261.html#page-14)にその説明が書かれている。
![SIPシーケンス Viaフィールド](/img/svg/Network/sip/sip-3.drawio.svg "SIPシーケンス Viaフィールド")

RFC3261 に記載されているデータの流れは以下である。(SDP の body は表示しない(「〇〇 SDP not shown」と書かれている))

:::caution
図の番号とヘッダーの数字が一致しないので合うように変更して記載している。
(図の番号に合わせてヘッダーメッセージを選択している。)
:::

$\textcircled{\scriptsize 1}$ **INVITE** Alice $\rightarrow$ atlanta.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き1](/img/svg/Network/sip/sip-4-1.drawio.svg "SIPシーケンス ヘッダーメッセージ付き1")

  </Paragraph>
  <Paragraph>

```txt
INVITE sip:bob@biloxi.com SIP/2.0
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
Max-Forwards: 70
To: Bob <sip:bob@biloxi.com>
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Contact: <sip:alice@pc33.atlanta.com>
Content-Type: application/sdp
Content-Length: 142
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 2}$ **INVITE** atlanta.com proxy $\rightarrow$ biloxi.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き2](/img/svg/Network/sip/sip-4-2.drawio.svg "SIPシーケンス ヘッダーメッセージ付き2")

  </Paragraph>
  <Paragraph>

```txt
INVITE sip:bob@biloxi.com SIP/2.0
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
Max-Forwards: 69
To: Bob <sip:bob@biloxi.com>
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Contact: <sip:alice@pc33.atlanta.com>
Content-Type: application/sdp
Content-Length: 142
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 3}$ **100 Trying** atlanta.com proxy $\rightarrow$ Alice

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き3](/img/svg/Network/sip/sip-4-3.drawio.svg "SIPシーケンス ヘッダーメッセージ付き3")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 100 Trying
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 4}$ **INVITE** biloxi.com proxy $\rightarrow$ Bob

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き4](/img/svg/Network/sip/sip-4-4.drawio.svg "SIPシーケンス ヘッダーメッセージ付き4")

  </Paragraph>
  <Paragraph>

```txt
INVITE sip:bob@192.0.2.4 SIP/2.0
Via: SIP/2.0/UDP server10.biloxi.com;branch=z9hG4bK4b43c2ff8.1
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
 ;received=192.0.2.2
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
Max-Forwards: 68
To: Bob <sip:bob@biloxi.com>
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Contact: <sip:alice@pc33.atlanta.com>
Content-Type: application/sdp
Content-Length: 142
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 5}$ **100 Trying** biloxi.com proxy $\rightarrow$ atlanta.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き5](/img/svg/Network/sip/sip-4-5.drawio.svg "SIPシーケンス ヘッダーメッセージ付き5")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 100 Trying
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
 ;received=192.0.2.2
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 6}$ **180 Ringing** Bob $\rightarrow$ biloxi.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き6](/img/svg/Network/sip/sip-4-6.drawio.svg "SIPシーケンス ヘッダーメッセージ付き6")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 180 Ringing
Via: SIP/2.0/UDP server10.biloxi.com;branch=z9hG4bK4b43c2ff8.1
 ;received=192.0.2.3
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
 ;received=192.0.2.2
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
Contact: <sip:bob@192.0.2.4>
CSeq: 314159 INVITE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 7}$ **180 Ringing** biloxi.com proxy $\rightarrow$ atlanta.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き7](/img/svg/Network/sip/sip-4-7.drawio.svg "SIPシーケンス ヘッダーメッセージ付き7")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 180 Ringing
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
 ;received=192.0.2.2
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
Contact: <sip:bob@192.0.2.4>
CSeq: 314159 INVITE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 8}$ **180 Ringing** atlanta.com proxy $\rightarrow$ Alice

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き8](/img/svg/Network/sip/sip-4-8.drawio.svg "SIPシーケンス ヘッダーメッセージ付き8")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 180 Ringing
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
Contact: <sip:bob@192.0.2.4>
CSeq: 314159 INVITE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 9}$ **200 OK** Bob $rightarrow$ biloxi.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き9](/img/svg/Network/sip/sip-4-9.drawio.svg "SIPシーケンス ヘッダーメッセージ付き9")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 200 OK
Via: SIP/2.0/UDP server10.biloxi.com;branch=z9hG4bK4b43c2ff8.1
 ;received=192.0.2.3
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
 ;received=192.0.2.2
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Contact: <sip:bob@192.0.2.4>
Content-Type: application/sdp
Content-Length: 131
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 10}$ **200 OK** biloxi.com proxy $\rightarrow$ atlanta.com proxy

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き10](/img/svg/Network/sip/sip-4-10.drawio.svg "SIPシーケンス ヘッダーメッセージ付き10")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 200 OK
Via: SIP/2.0/UDP bigbox3.site3.atlanta.com;branch=z9hG4bK77ef4c2312983.1
 ;received=192.0.2.2
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Contact: <sip:bob@192.0.2.4>
Content-Type: application/sdp
Content-Length: 131
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 11}$ **200 OK** atlanta.com proxy $\rightarrow$ Alice

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き11](/img/svg/Network/sip/sip-4-11.drawio.svg "SIPシーケンス ヘッダーメッセージ付き11")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 200 OK
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds8
 ;received=192.0.2.1
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 INVITE
Contact: <sip:bob@192.0.2.4>
Content-Type: application/sdp
Content-Length: 131
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 12}$ **ACK** Alice $\rightarrow$ Bob

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き12](/img/svg/Network/sip/sip-4-12.drawio.svg "SIPシーケンス ヘッダーメッセージ付き12")

  </Paragraph>
  <Paragraph>

```txt
ACK sip:bob@192.0.2.4 SIP/2.0
Via: SIP/2.0/UDP pc33.atlanta.com;branch=z9hG4bKnashds9
Max-Forwards: 70
To: Bob <sip:bob@biloxi.com>;tag=a6c85cf
From: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 314159 ACK
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 13}$ **BYE** Bob $\rightarrow$ Alice

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き13](/img/svg/Network/sip/sip-4-13.drawio.svg "SIPシーケンス ヘッダーメッセージ付き13")

  </Paragraph>
  <Paragraph>

```txt
BYE sip:alice@pc33.atlanta.com SIP/2.0
Via: SIP/2.0/UDP 192.0.2.4;branch=z9hG4bKnashds10
Max-Forwards: 70
From: Bob <sip:bob@biloxi.com>;tag=a6c85cf
To: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 231 BYE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

$\textcircled{\scriptsize 14}$ **200 OK** Alice -> Bob

<SplitParagraph border="false">
  <Paragraph>

![SIPシーケンス ヘッダーメッセージ付き14](/img/svg/Network/sip/sip-4-14.drawio.svg "SIPシーケンス ヘッダーメッセージ付き14")

  </Paragraph>
  <Paragraph>

```txt
SIP/2.0 200 OK
Via: SIP/2.0/UDP 192.0.2.4;branch=z9hG4bKnashds10
From: Bob <sip:bob@biloxi.com>;tag=a6c85cf
To: Alice <sip:alice@atlanta.com>;tag=1928301774
Call-ID: a84b4c76e66710
CSeq: 231 BYE
Content-Length: 0
```

  </Paragraph>
</SplitParagraph>

この SIP を用いたものとして[VoIP(Voice over Internet Protocol)ネットワーク](/docs/Network/voip-network)がある。

## 用語

### URI

URI(Uniform Resource Identifier)は資源を識別する識別子であり、[RFC3986](https://tex2e.github.io/rfc-translater/html/rfc3986.html)
で定義されている。

URL(Uniform Resource Locator)は URI のサブセット(一部)である。

## 関連機能

- インスタントメッセージ機能 ([RFC3428](https://tex2e.github.io/rfc-translater/html/rfc3428.html))
- イベント通知機能 ([RFC6665](https://tex2e.github.io/rfc-translater/html/rfc6665.html))

## 参考

- [https://ja.wikipedia.org/wiki/Session_Initiation_Protocol](https://ja.wikipedia.org/wiki/Session_Initiation_Protocol)
