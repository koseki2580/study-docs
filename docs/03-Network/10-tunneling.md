---
title: トンネリング
sidebar_label: トンネリング
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

## トンネリング

トンネリングとは共用ネットワークの 2 点間で仮想の専用線を構築する技術のことをいう。
トンネリングはトンネリング用のプロトコルを用いてパケットをカプセル化させることで実現させている。

トンネリングプロトコルにはいくつか種類が存在する。([Wikipedia](https://en.wikipedia.org/wiki/Tunneling_protocol)より)

- [IP in IP][rfc1853]
- [SIT/IPv6][sit]
- [GRE][rfc2784] ([RFC1701][rfc1701])
- [OpenVPN][openvpn] (参考 [RFC8922 3.4.3](https://www.rfc-editor.org/rfc/rfc8922.html#name-openvpn))
- [SSTP][sstp] (Secure Socket Tunneling Protocol)
- [IPSec][rfc4301] (Internet Protocol Security)
- [VXLAN][rfc7348] (Virtual Extensible Local Area Network)

### IP in IP

IP in IP のカプセル化の方法は単純であり、IP パケットに別の IP パケットでカプセル化を行う。

![IP in IP](/img/svg/Network/tunneling/tunneling-1.drawio.svg "IP in IP")

([RFC1853][rfc1853]より)

外側の IP ヘッダについて以下のようになる。

- `Type Of Service`

  元の IP ヘッダの内容をコピーする。また、必要に応じて変更されることもある。

- `Identification`

  新しく作成する。

- `Don't Fragment`

  元の IP ヘッダの内容をコピーする。

- `More Fragments`

  フラグメンテーションが発生する場合は必要である。

- `Time To Live`

  [RFC3232][rfc3232] ([RFC1700][rfc1700])で決められたデフォルト値を使用

- `Protocol`

  次のヘッダ。トンネルヘッダが存在しない場合であれば、内部 IPv4 となる。

- `Source address`

  データグラムの送信に使用されるインターフェースに関連付けられた IP アドレス。

- `Destination address`

  カプセル化を解除する宛先 IP アドレス

- `Options`

  元の IP ヘッダからコピーしない。新しいものが追加されることがある。

### SIT/IPv6

IPv6 同士で通信を行う際に途中で IPv4 で通信を行わないといけない場面が生じた際に、IPv4 でやりとりするためにカプセル化を行う。
カプセル化を行うことで IPv4 としてデータをやりとりができるようになる。

![SIT/IPv6](/img/svg/Network/tunneling/tunneling-2.drawio.svg "SIT/IPv6")

### GRE

GRE は Generic Routing Encapsulation の略であり、以下のような形式をとる。

![GRE](/img/svg/Network/tunneling/tunneling-3.drawio.svg "GRE")

GRE ヘッダは以下の構造をしている([RFC2784][rfc2784]はまだ(2023 年 1 月現在)Proposed Standard なので[RFC1701][rfc1071]で記述されている構造)。

![GRE Header](/img/svg/Network/tunneling/tunneling-4.drawio.svg "GRE Header")

- `C` (1bits)

  `Checksum Present`の略であり、1 となっていれば`Checksum`が存在することを意味する。

- `R` (1bits)

  `Routing Present`の略であり、1 となっていれば`Offset`と`Routing`が存在することを意味する。

- `K` (1bits)

  `Key Present`の略であり、1 となっていれば`Key`が存在することを意味する。

- `S` (1bits)

  `Sequence Number Present`の略であり、1 となっていれば`Sequence Number`が存在することを意味する。

- `s` (1bits)

  `Strict Source Route`の略であり、1 となっていれば`Strict Source route`であることを意味する。
  Strict Source route とは送信者がパケットが通過する経路を指定することを意味している。

- `Recur` (3bits)

  `Recursion Control`の略であり、再帰制御で許容される追加のカプセル化の数を格納する(<FontColor color="red">間違っているかも</FontColor>)。基本的には 0 が入る

  <details>
    <summary>原文</summary>
    Recursion control contains a three bit unsigned integer which contains the number
    of additional encapsulations which are permissible. This SHOULD default to zero.
  </details>

- `Flags` (5bits)

  予約されたものであり、現在は全て 0 が入る。

- `Ver` (3bits)

  `Version Number`の略であり、必ず 0 を入れる必要がある。

- `Protocol Type` (16bits)

  ペイロードパケットのプロトコルタイプが格納されている。一般的にはイーサネットプロトコルタイプが格納される。
  定義されているプロトコルタイプは以下である。

  |        Protocol Family        | PTYPE |
  | :---------------------------: | :---: |
  |           Reserved            | 0000  |
  |              SNA              | 0004  |
  |       OSI network layer       | 00FE  |
  |              PUP              | 0200  |
  |              XNS              | 0600  |
  |              IP               | 0800  |
  |             Chaos             | 0804  |
  |          RFC 826 ARP          | 0806  |
  |        Frame Relay ARP        | 0808  |
  |             VINES             | 0BAD  |
  |          VINES Echo           | 0BAE  |
  |        VINES Loopback         | 0BAF  |
  |       DECnet (Phase IV)       | 6003  |
  | Transparent Ethernet Bridging | 6558  |
  |        Raw Frame Relay        | 6559  |
  |         Apollo Domain         | 8019  |
  |     Ethertalk (Appletalk)     | 809B  |
  |          Novell IPX           | 8137  |
  |  RFC 1144 TCP/IP compression  | 876B  |
  |     IP Autonomous Systems     | 876C  |
  |          Secure Data          | 876D  |
  |           Reserved            | FFFF  |

- `Offset` (16bits)

  Routing フィールドの先頭から、検査されるアクティブ Source Route Entry の最初のバイト(8bit)までのバイトオフセットを示す(<FontColor color="red">間違っているかも</FontColor>)。

  <details>
    <summary>原文</summary>
    The offset field indicates the octet offset from the start of the Routing field
    to the first octet of the active Source Route Entry to be examined. This field
    is present if the Routing Present or the Checksum Present bit is set to 1, and
    contains valid information only if the Routing Present bit is set to 1.
  </details>

- `Checksum` (16bits)

  GRE ヘッダとペイロードのチェックサムが入っている(1 の補数)

- `Key` (32bits)

  カプセル化により挿入されるものであり、受信者が送信元を確認することが可能。

- `Sequence Number` (32bits)

  カプセル化で挿入され、符号なし 32bit 数値である。パケットの送信順序を確立するために受信者が使用する可能性がある。

- `Routing` (可変)

  SRE(Source Route Entries)のリストが格納され、それぞれの SRE は次の形式をとる。

  ![Routing Header](/img/svg/Network/tunneling/tunneling-5.drawio.svg "Routing Header")

  Routing は、0x0000 タイプの address family と長さ 0 とする「NULL」SRE で終了する。

  - `Address Family` (16bits)

    `Routing Information`のシンタックスとセマンティクスを示す。詳細については別ドキュメントに記載されいる(別ドキュメントのリンクは RFC に貼られていなかった)。

  - `SRE Offset` (8bits)

    `Routing Information`の先頭から、検査する Source Route Entry のアクティブエントリーの最初のオクテットまでのオクテットオフセットを示す。(<FontColor color="red">間違っているかも</FontColor>)

    <details>
      <summary>原文</summary>
      The SRE Offset field indicates the octet offset from the start of the Routing
      Information field to the first octet of the active entry in Source Route Entry
      to be examined.
    </details>

  - `SRE Length` (8bits)

    SRE のオクテット数が格納されている。これが 0 であるということは最後の SRE であることを意味する。

  - `Routing Information` (可変)

    パケットのルーティングに使用できるデータが含まれている。

  平成 28 年 午後 2 問 2 に GRE に関する問題が登場している。

  ![H28 2-2-4](/img/png/Network/tunneling/H28-2-2-4.png "H28 2-2-4")

  この図に送信元 IP・宛先 IP を図示すると以下のようになる。

  ![H28 2-2-4++](/img/svg/Network/tunneling/tunneling-6.drawio.svg "H28 2-2-4++")

  PC とサーバが専用線で直接接続されているように見える。

GRE は IP マルチキャストパケットもカプセル化することができるため、IPsec のようにマルチキャストパケットでカプセル化できないプロトコルと合わせて使用されることがある。

### OpenVPN

OpenVPN は、サーバ間に暗号化されたトンネルを作成するためのオープンソースの Virtual Private Network（VPN）ソフトウェアである。
([Wikipedia](https://ja.wikipedia.org/wiki/OpenVPN)より)

OpenVPN は 2 つのモードを持っている。

- Static Key
- TLS

`Static Key`では事前共有静的キーを使用し、`TLS`では認証と鍵交換に SSL/TLS $+$ 証明書を使用する。

#### Static Key

トンネリングが開始する前に事前共有キーが生成され、OpenVPN で接続する PC 同士で共有される。このキーには 4 つの独立したキーが含まれている。

- HMAC 送信
- HMAC 受信
- 暗号化
- 復号化

[HMAC][rfc2104] は Hash-based Message Authentication Code の略で、メッセージ認証の暗号化技術の 1 つである。

<details>
  <summary>原文</summary>
  In static key mode, a pre-shared key is generated and shared between both OpenVPN
  peers before the tunnel is started. This static key contains 4 independent keys:
  HMAC send, HMAC receive, encrypt, and decrypt. By default in static key mode, both
  hosts will use the same HMAC key and the same encrypt/decrypt key.
</details>

#### TLS

SSL セッションは双方向認証で確立される。つまり、接続する両方で証明書を提示する必要がある。
SSL/TLS 認証に成功すると、暗号化・復号化・HMAC キーのソースマテリアルを OpenSSL's RAND_bytes 関数を用いて生成し、
SSL/TLS コネクションを通して共有される。キーが双方向に使用されることはないため、各ピアには個別の送信 HMAC、受信 HMAC、パケット暗号化、およびパケット復号化キーがある。

<details>
  <summary>原文</summary>
  In SSL/TLS mode, an SSL session is established with bidirectional authentication
  (i.e. each side of the connection must present its own certificate). If the SSL/TLS
  authentication succeeds, encryption/decryption and HMAC key source material is
  then randomly generated by OpenSSL's RAND_bytes function and exchanged over the
  SSL/TLS connection. Both sides of the connection contribute random source material.
  This mode never uses any key bidirectionally, so each peer has a distinct send
  HMAC, receive HMAC, packet encrypt, and packet decrypt key.
</details>

:::info
原文は[OpenVPN][openvpn]から引用している。
:::

OpenVPN は次のような形式をしている。

![OpenVPN](/img/svg/Network/tunneling/tunneling-7.drawio.svg "OpenVPN")

初期化ベクトルとは暗号化の際に使用するランダムに生成されたビット列である。
または、HMAC は初期化ベクトルと暗号化した範囲から算出している。

### SSTP

SSTP は Secure Socket Tunneling Protocol の略であり、[Microsoft][sstp]が開発したプロトコルであり、
HTTPS プロトコルを介して Point-to-Point Protocol (PPP) トラフィックをカプセル化するものである。

SSTP により、HTTPS を介した PPP トラフィックのカプセル化できるため、次の図のような関係になる([Microsoft][sstp]でダウンロードできる PDF の図 1 より)。

![SSTP関係図](/img/svg/Network/tunneling/tunneling-8.drawio.svg "SSTP関係図")

SSTP パケットは次の図のような構成をとる。

![SSTP パケット](/img/svg/Network/tunneling/tunneling-9.drawio.svg "SSTP パケット")

- `Version` (8bits)

  使⽤される SSTP のバージョンの通信とネゴシエーションに使⽤されるものである。

  上位 4bit がメジャーバージョンを表し、下位 4bit がマイナーバージョンを表している。

- `Reserved` (7bits)

  将来の使⽤のために予約されている。0 をセットする。

- `C` (1bit)

  パケットが SSTP 制御パケットであるかを判断するものである。

  | bit |      説明      |
  | :-: | :------------: |
  |  1  |  制御パケット  |
  |  0  | データパケット |

- `LengthPacket` (16bits)

  次のような形式をとる。

  ![LengthPacket](/img/svg/Network/tunneling/tunneling-10.drawio.svg "LengthPacket")

  - `R` (4bits)

    将来の使⽤のために予約されている。0 をセットする。

  - `Length` (12bits)

    バイトサイズであり、4bytes の SSTP ヘッダも含まれる。

- `Data` (可変)

  `C`が 1 であれば制御メッセージが格納され、0 であれば上位プロトコルからのペイロードが格納されている。
  SSTP データ パケットは、PPP フレームをペイロードとして通信する。

#### SSTP 制御パケット

制御パケットはクライアントとサーバーの両⽅が制御メッセージを相互に送信するために使⽤するパケットであり、以下の形式を取る。

![SSTP 制御パケット](/img/svg/Network/tunneling/tunneling-11.drawio.svg "SSTP 制御パケット")

上位 4bytes は上記で説明したものと全く同じであるので割愛する。

- `Message Type` (16bits)

  メッセージのタイプを指定指定しており、次のどれかを指定する必要がある。

  |             Name              |   値   |
  | :---------------------------: | :----: |
  | SSTP_MSG_CALL_CONNECT_REQUEST | 0x0001 |
  |   SSTP_MSG_CALL_CONNECT_ACK   | 0x0002 |
  |   SSTP_MSG_CALL_CONNECT_NAK   | 0x0003 |
  |    SSTP_MSG_CALL_CONNECTED    | 0x0004 |
  |      SSTP_MSG_CALL_ABORT      | 0x0005 |
  |   SSTP_MSG_CALL_DISCONNECT    | 0x0006 |
  | SSTP_MSG_CALL_DISCONNECT_ACK  | 0x0007 |
  |     SSTP_MSG_ECHO_REQUEST     | 0x0008 |
  |    SSTP_MSG_ECHO_RESPONSE     | 0x0009 |

- `Num Attributes` (16bits)

  メッセージ内の属性(Attributes)の数を指定するものである。

- `Attributes` (可変)

  SSTP コントロール メッセージを構成する可変サイズの属性である。
  全てを書くと長いので[Microsoft][sstp]の 2.2.4 章からこの属性についての説明がされている(2023/2/4 現在)。

#### SSTP データパケット

SSTP データパケットは、SSTP クライアントと SSTP サーバーの両⽅が上位層のペイロード(つまり、PPP フレーム)を相互に送信するために使⽤する SSTP パケットであり、以下の形式を取る。

![SSTP データパケット](/img/svg/Network/tunneling/tunneling-9.drawio.svg "SSTP データパケット")

- `Data` (可変)

  上位層の可変長のペイロードである。

### IPsec

IPsec は IP Security の略であり、IP パケットをカプセル化するプロトコルである。IP v4, v6 のどちらでも使用できるプロトコルであり、
カプセル化セキュリティペイロード(ESP)[rfc4303]または認証ヘッダー(AH)[rfc4302]の 2 つのヘッダに対応している。

IP 認証ヘッダ(AH)は、IP データグラムのための完全性と認証を確認し、リプレイ攻撃の対策として使用される。

AH は次のような構成をとる。

![認証ヘッダ(AH)](/img/svg/Network/tunneling/tunneling-18.drawio.svg "認証ヘッダ(AH)")

- `Next Header` (8 bits)

  認証ヘッダの後の次のペイロードのタイプを識別する 8 ビットのフィールドである。[IANA][iana]で定義された IP プロトコル番号のセットが使用される。

- `Payload Length` (8 bits)

  4 バイト単位であり、最終結果から-2 する必要がある。例えば、整合性チェック値が 96bit のアルゴリズムで決められた値が設定される場合
  整合性チェック値以外の 12bytes (3)と整合性チェックの 96bits (12bytes)を足し合わせた`6`から`-2`した`4`が入る。

  なぜ-2 されるのかは謎。

  <details>
    <summary>原文</summary>
    This 8-bit field specifies the length of AH in 32-bit words (4-byte units), minus
    "2". Thus, for example, if an integrity algorithm yields a 96-bit authentication
    value, this length field will be "4" (3 32-bit word fixed fields plus 3 32-bit
    words for the ICV, minus 2). For IPv6, the total length of the header must be
    a multiple of 8-octet units. (Note that although IPv6 [DH98] characterizes AH
    as an extension header, its length is measured in 32-bit words, not the 64-bit
    words used by other IPv6 extension headers.) See Section 2.6, "Integrity Check
    Value (ICV)", for comments on padding of this field, and Section 3.3.3.2.1, "ICV
    Padding".
  </details>

- `Reserved` (16 bits)

  将来の使用のために予約されている。

- `Security Parameters Index (SPI)` (32 bits)

  受信側が受信するパケットを決定する SA を識別するために使用する任意の 32 ビット値である。
  1$\sim$255 までの範囲の SPI 値は、将来の使用のため Internet Assigned Numbers Authority（IANA）によって予約されている。

- `Sequence Number Field` (32 bits)

  パケットを送り合うたびに+1 されるシーケンス番号である。SA が確立した時は送信側・受信側は 0 から開始する。
  デフォルトではリプレイ攻撃のためシーケンス番号はループしないようになっているので$2^{32}$まで増加すると新しい SA を確立する必要がある。

- `Integrity Check Value-ICV` (可変)

  整合性チェック値であり、このパケットの整合性を確認するために用いられる。また、必ず 32bit(IPv4)または 64bit(IPv6)である必要があるため、パディングされる場合もある。
  この値は SA によって定められ、対称鍵暗号化アルゴリズム・SHA-1, SHA-256, MD5 のようなハッシュ関数が用いられる。

カプセル化セキュリティペイロード(ESP)は、IP ヘッダの後の次の層のプロトコルのヘッダの間またはカプセル化された IP ヘッダの前に挿入される。
ESP を使用することで、機密性・送信元認証・コネクションレス完全性・リプレイ攻撃防止・トラフィックの機密性を保つことができる。

ESP は次のような構造をとる。

![カプセル化セキュリティペイロード(ESP)](/img/svg/Network/tunneling/tunneling-19.drawio.svg "カプセル化セキュリティペイロード(ESP)")

ペイロードの詳細は次のようになる。

![ペイロード詳細)](/img/svg/Network/tunneling/tunneling-20.drawio.svg "ペイロード詳細")

TFC は Traffic Flow Confidentiality の略であり、IPsec のトンネルモードの時に挿入される場合がある。

- `Security Parameters Index (SPI)` (32 bits)

  受信側で SA を判別するために使用され、必須のフィールドである。

- `Sequence Number` (32 bits)

  AH と同じであり、パケットを送り合うたびに+1 されるシーケンス番号である。SA が確立した時は送信側・受信側は 0 から開始する。

- `Payload Data` (可変)

  次のヘッダフィールドによって記述されるデータを含む可変長フィールドである。

- `Padding` (0 ~ 255 bits)

  暗号化を行った際に bit の幅を合わせるために使用される。

- `Pad Lengt` (8 bits)

  padding の長さを表し、必須フィールドである。

- `Next Header` (8 bits)

  ペイロードデータフィールドに含まれるデータのタイプを識別する必須の 8 ビットのフィールドで、IANA で定義されている。

- `Traffic Flow Confidentiality` (可変)

  データの長さを隠蔽するために使用されるパディングである。

- `Integrity Check Value (ICV)` (可変)

  整合性を確認するために使用する値。ESP ヘッダ・ペイロード・ESP トレーラフィールドの値から算出される。

また、IPsec には 2 種類の接続方法が存在する。

- トランスポートモード
- トンネルモード

トランスポートモードでは IP ヘッダは変更せず、ペイロード部分のみ暗号化するものであり、トンネルモードでは IP ヘッダも暗号化を行い、別の IP ヘッダを付与する。

![トランスポートモード・トンネルモード](/img/svg/Network/tunneling/tunneling-12.drawio.svg "トランスポートモード・トンネルモード")

トランポートモードでは IP ヘッダがそのままなので、送信元から宛先までの全区間で IPsec が行われている状態であるため、送信元・宛先両方が IPsec に対応している必要がある。

トンネルモードでは別の IP ヘッダを付与しているため、オリジナル IP ヘッダ(暗号化された IP ヘッダ)はそのままである。そのため、送信元と宛先の途中の一部だけ IPsec を行うということが
可能となる。

![トランスポートモード・トンネルモード通信](/img/svg/Network/tunneling/tunneling-13.drawio.svg "トランスポートモード・トンネルモード通信")

トランスポートモード・AH ヘッダの場合の IP ヘッダは次のような形式になる。

![トランスポートモード・AH](/img/svg/Network/tunneling/tunneling-21.drawio.svg "トランスポートモード・AH")

トンネルモード・AH ヘッダの場合の IP ヘッダは次のような形式になる。

![トンネルモード・AH](/img/svg/Network/tunneling/tunneling-22.drawio.svg "トンネルモード・AH")

トランスポートモード・ESP ヘッダの場合の IP ヘッダは次のような形式になる。

![トランスポートモード・ESP](/img/svg/Network/tunneling/tunneling-23.drawio.svg "トランスポートモード・ESP")

トンネルモード・ESP ヘッダの場合の IP ヘッダは次のような形式になる。

![トンネルモード・ESP](/img/svg/Network/tunneling/tunneling-24.drawio.svg "トンネルモード・ESP")

#### IKEv2 (Internet Key Exchange Protocol Version 2)

IPsec の鍵交換にためのプロトコルであり、[RFC7296][rfc7296]で定義されている。

IKE はそれぞれの通信間で相互認証を実行し、カプセル化セキュリティペイロード(ESP)または認証ヘッダー(AH)の SA を効率的に確立するために
使用できる共有秘密鍵を含む IKE Security Association(SA)を確立する。

IKE メッセージを送信する側を`イニシエータ`と呼び、応答を返す側を`レスポンダ`と呼ぶ。

IKE を使用した通信は、常に IKE_SA_INIT および IKE_AUTH 交換（IKEv1 ではフェーズ 1 として知られている）で始まり、
最初の交換は通常 4 つのメッセージで構成されるが、シナリオ(AH なのか ESP なのかトンネルモードなのかトランスポートモードなのか)によって増える場合がある。

メッセージの初めは IKE_SA_INIT であり、暗号アルゴリズムやノンスを[Diffie-Hellman 鍵交換方式](/docs/Network/diffie-hellman)で交換する。

2 番目のメッセージは IKE_AUTH であり、前のメッセージの認証, 身元・証明書の交換を行い、IKE SA を確立する。

最初の交換に続くすべてのメッセージは IKE_SA_INIT で決定された暗号化アルゴリズムとキーを使用して暗号化されて保護される。

すべての IKE メッセージには、固定ヘッダーの一部としてメッセージ ID が含まれている。
このメッセージ ID は、リクエストとレスポンスを照合し、メッセージの再送信を識別するために使用される。

| Notation |           Payload            |
| :------: | :--------------------------: |
|   AUTH   |        Authentication        |
|   CERT   |         Certificate          |
| CERTREQ  |     Certificate Request      |
|    CP    |        Configuration         |
|    D     |            Delete            |
|   EAP    |  Extensible Authentication   |
|   HDR    |  IKE header (not a payload)  |
|   IDi    |  Identification - Initiator  |
|   IDr    |  Identification - Responder  |
|    KE    |         Key Exchange         |
|  Ni, Nr  |            Nonce             |
|    N     |            Notify            |
|    SA    |     Security Association     |
|    SK    | Encrypted and Authenticated  |
|   TSi    | Traffic Selector - Initiator |
|   TSr    | Traffic Selector - Responder |
|    V     |          Vendor ID           |

イニシエータの初めのメッセージは次のような形式をしている。

![IKE Request 1](/img/svg/Network/tunneling/tunneling-14.drawio.svg "IKE Request 1")

このパケットの Security Association - Initiator 1 ではイニシエータが IKE SA に対してサポートしている暗号化アルゴリズムを示している。
Key Exchange - Initiator では Diffie-Hellman 値を送信している。

これに対するレスポンダの応答は次のような形式を取る。(IPsec の章において)以降の図で灰色のデータはオプションを意味している。

![IKE Response 1](/img/svg/Network/tunneling/tunneling-15.drawio.svg "IKE Response 1")

Security Association - Responder 1 で選択した暗号スイートを表し、
Key Exchange - Responder で Diffie-Hellman 交換を終了させる。

この時点で SKEYSEED と呼ばれる値を生成することができ、IKE SA 用の鍵が全て導出することができる。
今後のメッセージはヘッダを除いて、暗号化が行われ、完全性が担保される。

イニシエータの次のメッセージは次のような形式をとる。

![IKE Request 2](/img/svg/Network/tunneling/tunneling-16.drawio.svg "IKE Request 2")

Identification - Initiator でイニシエータの身元を主張し、整合性は Authentication ペイロードを使用する。
証明書を Certificate ペイロードで送信し、トラストアンカーのリストを Certificate Request ペイロードで送信する場合がある。

Traffic Selector は、アドレス範囲（IPv4 または IPv6）、ポート範囲、および IP プロトコル ID で構成される。

Security Association - Initiator 2 ペイロードを使用して子 SA(IPsec SA) のネゴシエーションを開始する。

このメッセージに対するレスポンダの応答は次のような形式を取る。

![IKE Response 2](/img/svg/Network/tunneling/tunneling-17.drawio.svg "IKE Response 2")

レスポンダは Identification - Responder で自身身元を証明する。オプションで証明書を 1 枚以上送信し、身元認証を行うことで 2 番目のメッセージの完全性を証明する。
これにより子 SA(IPsec SA) のネゴシエーションを完了し、
IKE_AUTH の通信を行ったもの同士がすべての署名とメッセージ認証コード(MAC)が正しく計算されていることを確認する必要がある。

CREATE_CHILD_SA exchange を使用して新しい SA の作成や IKE SA や Child SA のリキーを行う。
CREATE_CHILD_SA exchange は IKE v1 ではフェーズ 2 と呼ばれている。
SA は新しい SA を生成してから古い SA を削除することでリキーが行われる。
[RFC7296][rfc7296]セクション 2.8 は、古い SA から新しい SA へのトラフィックの移動や古い SA の削除など、リキーの仕組みを説明している。

### VXLAN

VXLAN は Virtual eXtensible Local Area Network の略である。
仮想 LAN（VLAN）の現在の制限は 4094 であり、現在の VM(Virtual Machine)のグループ分けには不十分である。そのため、この問題を解決として VXLAN が登場した。
同じ VXLAN セグメント内の VM のみが相互に通信でき、各 VXLAN セグメントは、`VXLAN Network Identifier (VNI)`と呼ばれる 24 ビットのセグメント ID によって識別される。
VNI は、VM から発信された内部 MAC フレームをカプセル化する外部ヘッダーにある。

VXLAN は次のような形でカプセル化を行う。

![VXLANカプセル化](/img/svg/Network/tunneling/tunneling-25.drawio.svg "VXLANカプセル化")

VXLAN ヘッダは次のような形式を取る

![VXLANヘッダ](/img/svg/Network/tunneling/tunneling-26.drawio.svg "VXLANヘッダ")

- `I, R` (8 bits)

  フラグであり、有効な VXLAN であれば I は 1 である必要がある。R は予約領域であり、送信時は 0 にし、受信時には無視する。

- `Reserved` (24 bits, 8 bits)

  予約領域であり、送信時は 0 にし、受信時には無視する。

- `VXLAN Network Identifier (VNI)` (24 bits)

  セグメント ID である。

## 参考

- [Strict Source Route](https://dictionary.goo.ne.jp/word/%E3%82%B9%E3%83%88%E3%83%AA%E3%82%AF%E3%83%88%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0/)
- [https://www.okta.com/jp/identity-101/hmac/](https://www.okta.com/jp/identity-101/hmac/)
- [https://it-trend.jp/encryption/article/64-0091](https://it-trend.jp/encryption/article/64-0091)
- [https://en.wikipedia.org/wiki/Secure_Socket_Tunneling_Protocol](https://en.wikipedia.org/wiki/Secure_Socket_Tunneling_Protocol)
- [https://amnimo.com/column/037/](https://amnimo.com/column/037/)
- [https://www.infraexpert.com/study/ipsec6.html](https://www.infraexpert.com/study/ipsec6.html)

[rfc1853]: https://www.rfc-editor.org/rfc/rfc1853.html
[sit]: https://datatracker.ietf.org/doc/html/draft-gilligan-ipv6-sit-overview-01
[rfc2784]: https://www.rfc-editor.org/rfc/rfc2784.html
[openvpn]: https://openvpn.net/community-resources/openvpn-cryptographic-layer/
[sstp]: https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-sstp/c50ed240-56f3-4309-8e0c-1644898f0ea8
[rfc4301]: https://www.rfc-editor.org/rfc/rfc4301.html
[rfc7348]: https://www.rfc-editor.org/rfc/rfc7348.html
[rfc3232]: https://www.rfc-editor.org/rfc/rfc3232.html
[rfc1700]: https://www.rfc-editor.org/rfc/rfc1700.html
[rfc1701]: https://www.rfc-editor.org/rfc/rfc1701
[rfc2104]: https://www.rfc-editor.org/rfc/rfc2104
[rfc2405]: https://www.rfc-editor.org/rfc/rfc2405.html
[rfc7296]: https://www.rfc-editor.org/rfc/rfc7296.html
[rfc4302]: https://www.rfc-editor.org/rfc/rfc4302.html
[rfc4303]: https://www.rfc-editor.org/rfc/rfc4303.html
[iana]: https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml
