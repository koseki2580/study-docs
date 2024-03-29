---
title: IP パケット
sidebar_label: IP パケット
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

## IP アドレス

IP アドレスとは情報機器を識別するためのネットワーク層の識別番号である。([Wikipedia](https://ja.wikipedia.org/wiki/IP%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9))

### IPv4 パケット

IP ヘッダー(v4)は[RFC791][rfc791]で定義されている。

![IPv4 ヘッダー](/img/svg/Network/ip-packet/ip-packet-1.drawio.svg "IPv4 ヘッダー")

- `Version` (4bits)

  IP アドレスのバージョン。[RFC791][rfc791]では versin 4 の説明を行っている。

- `IHL` (4bits)

  Internet Header Length の略であり、オプションがなければ 20 バイトとなる。

- `Type of Service` (8bits)

  IPv4 においてパケットの優先度を表すパラメータである。

  ![Type of Service](/img/svg/Network/ip-packet/ip-packet-2.drawio.svg "Type of Service")

  - `Precedence`

    | bit |        説明        |
    | :-: | :----------------: |
    | 111 |  ネットワーク制御  |
    | 110 | ネットワーク間制御 |
    | 101 |     CRITIC/ECP     |
    | 100 |  瞬時オーバライド  |
    | 011 |        瞬時        |
    | 010 |        即時        |
    | 001 |        優先        |
    | 000 |        通常        |

  - `D`

    Delay の略である。

    | bit |  説明  |
    | :-: | :----: |
    |  1  | 低遅延 |
    |  0  |  普通  |

  - `T`

    Throughput の略である。

    | bit |      説明      |
    | :-: | :------------: |
    |  1  | 高スループット |
    |  0  |      普通      |

  - `R`

    Relibility の略である。

    | bit |   説明   |
    | :-: | :------: |
    |  1  | 高信用性 |
    |  0  |   普通   |

  `T`, `D`, `R`は`Precedence`が同じ場合に用いられる。
  [RFC2474][rfc2474]でこの部分は更新され、IPv4 の`Type of Service`と後述する IPv6 の`Traffic Class`は以下のように変更された。

  ![differentiated services codepoint](/img/svg/Network/ip-packet/ip-packet-3.drawio.svg "differentiated services codepoint")

  `DSCP`は differentiated services codepoint の略であり、優先度を 64 通りに再定義された。

  `CU`は currently unused の略であり、現在は使用していません。

- `Total Length` (16bits)

  ヘッダーとデータグラムのサイズであり、4 バイト単位である。

- `Identification`

  送信者により割り当てられる識別値である。

- `Flags` (3bits)

  ルータごとに転送できる IP データグラムのサイズが決まっており、このサイズのことを MTU (Max Transfer Unit)と呼ぶ。
  ルータは IP データグラムがこの MTU を超えていた場合はデータを分割し MTU に収まるようしてからデータを転送する。
  複数の IP データグラム分け、それぞれに IP ヘッダを付与することで複数の IP パケットに分割する処理のことを`フラグメンテーション`と呼ぶ。

  ![フラグメンテーション](/img/svg/Network/ip-packet/ip-packet-4.drawio.svg "フラグメンテーション")

  `Flags`はこのフラグメンテーションに関する情報をもち、以下の形式をとる。

  ![Flags](/img/svg/Network/ip-packet/ip-packet-5.drawio.svg "Flags")

  0bit 目は必ず 0 となる。

  - `DF`

    Don't Fragment flag の略であり、フラグメント化を禁止するかどうかを表している。

    | bit |              説明              |
    | :-: | :----------------------------: |
    |  1  |       フラグメント化 NG        |
    |  0  | フラグメント化 OK (デフォルト) |

    フラグメント化 NG の場合に MTU をデータグラムが超えていた場合はルータによって破棄される。

  - `MF`

    More Fragments flag の略であり、最後のパケットかどうかを表している。

    | bit |         説明         |
    | :-: | :------------------: |
    |  1  | 最後のパケットでない |
    |  0  | 最後のパケットである |

- `Fragment Offset` (13 bits)

  そのフラグメントがデータグラムのどこに位置するかを表す値である。値は 8 バイト単位となっている。
  これはフラグメントが 8 バイト単位で区切られるため、13bit で`Total Length`の 16bit を表現するために 8 バイト単位となっている。
  フラグメントが実際のデータのどこに位置するか記録されているので、データが順番に届かなくてもデータを復元することができる。

- `Time to Live` (8bits)

  ルータを経由するたびに-1 される。つまり、データの生存期間を表している。0 になると送信元ホストに ICMP パケット(時間経過)が送信される。

- `Protocol` (8bits)

  上位層のプロコトルを識別する番号である。[こちら(ICANN)](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)にプロトコル番号が定義されている。

- `Header Checksum` (16bits)

  ヘッダーだけのチェックサムである。Time to Live で値が減るので毎回計算が行われている。

  アルゴリズムはシンプルであり、

  送信側:

  1. `Header Checksum`には 0 を入れる。
  1. 16 bit ごとの 1 の補数和をとる。(補数和はオーバーフロした値を一番小さい部分に足し合わせること)
  1. 総和の 1 の補数をとる。
  1. 3.で求めた値を`Header Checksum`に入れる。
  1. 送信する

  受信側:

  1. 16 bit ごとの 1 の補数和をとる。
  1. 16 bit 全てが 1 となっていれば正常(1 の補数の世界で-0)

  送信側は計算時には Checksum を 0 として計算を行っている。しかし、送信時には計算行った値の 1 の補数を Checksum に代入している。

  ```
  計算時
  A + B + C + ... + 0 (Checksum) = X
  補数和
  X → x

  送信時
  A, B, C , ... , ~x

  受信時
  A + B + C + ... ~x
  A + B + C + ... = X なので
  X + ~x
  Xの補数和はxなので
  x + ~x = 0xFFF
  ```

  詳しくは[RFC1071][rfc1071]で記述されている。

- `Source address` (32bits)

  送信元 IP アドレス

- `Destination address` (32bits)

  宛先 IP アドレス

- `Options` (可変)

  [RFC791][rfc791]の 15 ページに詳細が記載されている。

- `Padding` (可変)

  IP ヘッダを 32bits で終わるように 0 を入れて帳尻合わせを行う。

### IPv6 パケット

IPv6 は[RFC8200][rfc8200]に記載されおり、以下のような形式をとる。

![IPv6](/img/svg/Network/ip-packet/ip-packet-6.drawio.svg "IPv6")

- `Version` (4bits)

  IP アドレスのバージョンを表す。常に 6 となる。

- `Traffic Class` (8bits)

  IPv4 の Type of Service と同じ、パケットの優先度を表す。

- `Flow Label` (20bits)

  IPv6 ルータにリアルタイムトラフィックのような特別な処理を行う際に付与するラベル。詳しくは[RFC6437][rfc6437]に記載されている。

- `Payload Length` (16bits)

  ペイロードの長さであり、ペイロードとはヘッダーに続く部分である。IPv4 の Total Length にはヘッダの長さが含まれていたが、IPv6 では含まれないので注意が必要である。

- `Next Header` (8bits)

  IPv6 ヘッダのに続くヘッダの種類が格納され、IPv4 の Protocol と同じものが格納される。

- `Hop Limit` (8bits)

  ルータを経由するごとに-1 される。0 になるとパケットは破棄される。IPv4 の Time to Live と同じである。

- `Source address` (128bits)

  送信元 IP アドレス

- `Destination address` (128bits)

  宛先 IP アドレス

IPv6 に拡張ヘッダが存在する。

- Hop-by-Hop Options header

  パケットの経路上すべてのノードで検査および処理されるオプションの情報が格納されている。

  ![Hop-by-Hop Options header](/img/svg/Network/ip-packet/ip-packet-7.drawio.svg "Hop-by-Hop Options header")

  - `Next Header` (8btis)

    IPv6 の`Next Header`と同じで次に続くヘッダの種類が格納されている。

  - `Hdr Ext Len` (8btis)

    Header Extension Length の略で、8 バイト単位となっており、一番初めの 8 バイトは含まれない。(0 となる。)

  - `Options` (8 バイトの倍数)

    詳細は[RFC8200 Sections 4.2][rfc8200-4.2]に記載されている。

- Destination Options header

  パケットの宛先ノードだけが検査する必要があるオプションの情報が格納されている。

  ![Destination Options header](/img/svg/Network/ip-packet/ip-packet-7.drawio.svg "Destination Options header")

  - `Next Header`
  - `Hdr Ext Len`
  - `Options`

    上記と同じ

    詳細は[RFC8200 Sections 4.2][rfc8200-4.2]に記載されている。

- Routing header

  経由する必要がある中間ノードのリストが格納されている。

  ![Routing header](/img/svg/Network/ip-packet/ip-packet-8.drawio.svg "Routing header")

  - `Next Header`
  - `Hdr Ext Len`

    上記と同じ

  - `Routing Type` (8bits)

    特定のルーティングヘッダバリアントの識別子 (意味が理解できませんでした。)

    <details>
      <summary>原文</summary>
      8-bit identifier of a particular Routing header variant.
    </details>

  - `Segments Left` (8bits)

    宛先ノードに到達までに到達すべき中間ノードの残り個数が格納されている。

  - `type-specific data` (可変)

    ルーティングタイプによって決定される。

- Fragment header

  MTU より大きい場合に使用し、IPv4 のフラグメンテーションとは挙動が異なる。
  IPv4 の場合は途中のルータでもフラグメンテーションが発生していたが、IPv6 では送信元のみがフラグメンテーションを行う。

  ![Fragment header](/img/svg/Network/ip-packet/ip-packet-9.drawio.svg "Fragment header")

  - `Next Header`

    上記と同じ

  - `Reserved` (8bits)

    予約されたもので送信の際は 0 となる。

  - `Fragment Offset` (13bits)

    元のパケットのフラグメンテーションのオフセットであり、8 バイト単位となっている。

  - `Res` (2bits)

    予約されたもので送信の際は 0 となる。

  - `M` (1bits)

    IPv4 の Flags の MF と同じであり、最終パケットかを表している。

    | bit |         説明         |
    | :-: | :------------------: |
    |  1  | 最後のパケットでない |
    |  0  | 最後のパケットである |

  - `Identification` (32bits)

    識別子であり、詳細は[RFC8200 Section 4.5][rfc8200-4.5]に記載されている。

- Authentication header
- Encapsulating Security Payload header

  Authentication header と Encapsulating Security Payload header はセキュリティペイロードであり、詳細は[RFC4303][rfc4303]に書かれている。

があり、

```
IPv6 header
Hop-by-Hop Options header
Destination Options header
Routing header
Fragment header
Authentication header
Encapsulating Security Payload header
Destination Options header
Upper-Layer header
```

の順に拡張ヘッダの順番が推奨されている。それぞれの拡張ヘッダについては[rfc8200][rfc8200]の Section4 に記載されている。

### 参考

[rfc791]: https://www.rfc-editor.org/rfc/rfc791.html
[rfc2474]: https://www.rfc-editor.org/rfc/rfc2474.html
[rfc8200]: https://www.rfc-editor.org/rfc/rfc8200.html
[rfc8200-4.2]: https://www.rfc-editor.org/rfc/rfc8200.html#section-4.2
[rfc8200-4.5]: https://www.rfc-editor.org/rfc/rfc8200.html#section-4.5
[rfc1071]: https://www.rfc-editor.org/rfc/rfc1071.html
[rfc6437]: https://www.rfc-editor.org/rfc/rfc6437.html
[rfc4303]: https://www.rfc-editor.org/rfc/rfc4303.html

- [https://atmarkit.itmedia.co.jp/ait/articles/0304/04/news001_3.html](https://atmarkit.itmedia.co.jp/ait/articles/0304/04/news001_3.html)
