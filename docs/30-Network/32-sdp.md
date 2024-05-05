---
title: SDP
sidebar_label: SDP
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

## SDP とは

SDP(Session Description Protocol)はセッションの記述方法を規定したものであり、
[RFC8866](https://tex2e.github.io/rfc-translater/html/rfc8866.html)で規定されている。
例えば、

- セッション時間
- 通信先の IP アドレス
- データ転送に使用するポート番号
- データ(音声・映像等)の種別

等を規定している。

SDP は`<type>=<value>`の形で記述されている。RFC8866 では以下のパラメータが記述されている。**\***がついてるパラメータについてはオプションとなっている。

```txt
Session description
v=  (protocol version)
o=  (originator and session identifier)
s=  (session name)
i=* (session information)
u=* (URI of description)
e=* (email address)
p=* (phone number)
c=* (connection information -- not required if included in
    all media descriptions)
b=* (zero or more bandwidth information lines)
One or more time descriptions:
  ("t=", "r=" and "z=" lines; see below)
k=* (obsolete)
a=* (zero or more session attribute lines)
Zero or more media descriptions

Time description
t=  (time the session is active)
r=* (zero or more repeat times)
z=* (optional time zone offset line)

Media description, if present
m=  (media name and transport address)
i=* (media title)
c=* (connection information -- optional if included at
    session level)
b=* (zero or more bandwidth information lines)
k=* (obsolete)
a=* (zero or more media attribute lines)
```

<FontColor color="red">英語が苦手なので間違っている可能性あり</FontColor>

- `v`

プロトコルバージョンの表し、必ず 0 になる。(マイナーバージョンが存在しない)

- `o`

  オリジンを表し、以下のような形式でデータを取る。

  ```
  o=<username> <sess-id> <sess-version> <nettype> <addrtype> <unicast-address>
  ```

  - `<username>`

    発信元ホスト上のユーザーのログインまたは`-`となる。`<username>`にはスペースを入れることはできない。

  - `<sess-id>`

    グローバルに一意になる数字であり、UNIX 時間を用いることが推奨されている。

  - `<sess-version>`

    このセッションを説明するセッション番号

  - `<nettype>`

    ネットワークの種類であり、`IN`はインターネットを意味している。

  - `<addrtype>`

    IPv4, IPv6 が記載されている。

  - `<unicast-address>`

    セッションが生成されたマシンの IP アドレスか FQDN が記載されている。

- `s`

  本セッションの名前となる。`s=`としてはならず、必ず値を入れる必要がある。意味のある名前が存在しない場合は`s= `, `s=-`のような形式を推奨している。
  後ほど登場する Session description の`a=`に`a=charset:~~~`で設定する文字セットで表現する必要があり、`a=charset:~~~`を省略した場合は、
  UTF-8 でエンコードした ISO 10646 を使用する必要がある。

- `i`

  セッションについてのテキスト情報である。こちらも`s`と同様に`a=charset:~~~`で設定する文字セットで表現する必要があり、`a=charset:~~~`を省略した場合は、
  UTF-8 でエンコードした ISO 10646 となる。メディアタイプが複数存在する際に特に役に立つパラメータである。

- `u`

  URI（Uniform Resource Identifier）である。

- `e`

  セッション相手のメールアドレスである。

  [RFC5322](https://tex2e.github.io/rfc-translater/html/rfc5322.html)の形式をとる。例えば`j.doe@example.com (Jane Doe)` or `Jane Doe <j.doe@example.com>`のような形式

- `p`

  セッション相手の電話番号である。ITU-T 勧告（E.164）に基づいた電話番号の形式で記述する。

- `c`

  接続情報であり、以下のような形式を取る。

  ```
  c=<nettype> <addrtype> <connection-address>
  ```

  Media description 領域にも記述することができ、Session description 領域とそれぞれの領域に記述がある場合は、Media description 領域が優先される。

  `<nettype>`, `<addrtype>`は上記と同じである。

  - `<connection-address>`

    セッションがマルチキャストの場合は IP マルチキャストグループアドレスが格納され、マルチキャストではない場合はユニキャスト IP アドレスが格納される。

    IP アドレスが IPv4 の場合は TTL を決める必要があり、0~255 の範囲で決め、`c=IN IP4 233.252.0.1/127`のように`/`で IP アドレスの隣記述する。
    IPv6 の場合は TTL は必要ない。

    複数のマルチキャストグループが必要な場合は`<base multicast address>[/<ttl>]/<number of addresses>`の方式に従い設定する。
    最後の`<number of addresses>`を省略することができ、省略した場合は`/1`と同義になる。

    つまり、`c=IN IP4 233.252.0.1/127/3`は以下と同じである。

    ```
    c=IN IP4 233.252.0.1/127
    c=IN IP4 233.252.0.2/127
    c=IN IP4 233.252.0.3/127
    ```

    IPv6 でも同様であり、`c=IN IP6 ff00::db8:0:101/3`は以下と同じである。

    ```
    c=IN IP6 ff00::db8:0:101
    c=IN IP6 ff00::db8:0:102
    c=IN IP6 ff00::db8:0:103
    ```

- `b`

  帯域幅情報であり、以下の形式をとる。

  ```
  b=<bwtype>:<bandwidth>
  ```

  - `<bwtype>`

    `CT`, `AS`, `X-`が存在する。

    | 記号 |                                                                                 意味                                                                                 |
    | :--: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |  CT  |                                            暗黙の了解で決定している帯域幅と異なる場合に使用し、設定した帯域幅を上限とする                                            |
    |  AS  | アプリケーション固有であると解釈する(RTP の場合[RFC3550](https://tex2e.github.io/rfc-translater/html/rfc3550.html)の Section 6.2 で定義されている`セッション帯域幅`) |
    |  X-  |                                               実験的に定義された。現在は使うべきではなく、新しいものを IANA に登録申請                                               |

  - `<bandwidth>`

    1 秒あたりのキロビットとして解釈する。

- `t`

  アクティブ時間であり、以下の形式をとる。

  ```
  t=<start-time> <stop-time>
  ```

  セッション開始時間と終了時間をそれぞれ意味している。例は以下である。

  ```
  t=3724394400 3724398000 ; (Mon 8-Jan-2018 10:00-11:00 UTC)
  t=3724484400 3724488000 ; (Tue 9-Jan-2018 11:00-12:00 UTC)
  ```

  この時間は 1900 年 1 月 1 日からの秒数となっているので、2208988800 を引くことで Unix time (UTC)に変換することができる。

  `<stop-time>`が`0`の場合はセッションが作成されず、`<start-time>`, `<stop-time>`ともに`0`の場合はセッションが永続的であると解釈される。
  また、複数記述することができる。

- `r`

  繰り返し時間であり、以下の形式をとる。

  ```
  r=<repeat interval> <active duration> <offsets from start-time>
  ```

  - `<repeat interval>`

    繰り返す時間間隔

  - `<active duration>`

    セッションの時間

  - `<offsets from start-time>`

    開始時間からのずれ

  RFC に書かれている例である以下は

  ```
  t=3724394400 3730536000 ; (Mon 8-Jan-2018 10:00-11:00 UTC)
                          ; (Tues 20-Mar-2018 12:00 UTC)
  r=604800 3600 0 90000   ; (1 week, 1 hour, zero, 25 hours)
  ```

  `604800`が`<repeat interval>`に当てはまり、`3600`が`<active duration>`に当てはまる。
  `0 90000`が`<offsets from start-time>`に当てはまる。
  これが意味することは`Mon 8-Jan-2018 10:00` ~ `Tues 20-Mar-2018 12:00 UTC`の期間を
  開始時間から`zero, 25 hours`の時点から`1 hour`時間セッションを接続するのを`1 week`間隔行う。

- `z`

  タイムゾーン調整であり、以下の形式をとる。

  ```
  z=<adjustment time> <offset> <adjustment time> <offset> ....
  ```

  例は以下である。

  ```
  t=3724394400 3754123200       ; (Mon 8-Jan-2018 10:00 UTC)
                                ; (Tues 18-Dec-2018 12:00 UTC)
  r=604800 3600 0 90000         ; (1 week, 1 hour, zero, 25 hours)
  z=3730928400 -1h 3749680800 0 ; (Sun 25-Mar-2018 1:00 UTC,)
                                ; (offset 1 hour,)
                                ; (Sun 28-Oct-2018 2:00 UTC,)
                                ; (no offset)
  ```

  サマータイムが存在する国があり、その影響によるずれを許容するためのものである。
  上記の例ではイギリスのサマータイムは`Sun 25-Mar-2018年1:00 UTC`に開始されるため、セッション開始時間を 1 時間戻すして設定し、
  サマータイムが終了する`Sun 28-Oct-2018 2:00 UTC`からはセッション開始時間のずれを元に戻すという形を取っている。

- `k`

  暗号化キーであり、以下の形式をとる。

  ```
  k=<method>
  k=<method>:<encryption key>
  ```

  現在は使用を禁止している。

- `a`

  属性を表し、以下の形式をとる。

  ```
  a=<attribute-name>
  a=<attribute-name>:<attribute-value>
  ```

  SDP の拡張するための手段であり、`Session description`と`Media description`に書くことができる。
  属性名は ISO-10646/UTF-8 の US-ASCII を使う必要がある。

- `m`

  メディア情報であり、以下の形式をとる。

  ```
  m=<media> <port> <proto> <fmt> ...
  ```

  - `<media>`

    メディアタイプで、`audio`, `video`, `text`, `application`, `message`をとる。

  - `<port>`

    送信する port 番号を意味している。

    複数のポート番号を指定する場合は

    ```
    m=<media> <port>/<number of ports> <proto> <fmt> ...
    ```

    のような形式で表記し、例は以下である。

    ```
    m=video 49170/2 RTP/AVP 31
    ```

    この場合は、49170, 49171 の 2 つの port 番号を意味する。

  - `<proto>`

    プロトコルを意味している。

    |   表記    |                                            意味                                             |
    | :-------: | :-----------------------------------------------------------------------------------------: |
    |    UDP    |                                         UDP を使用                                          |
    |  RTP/AVP  |     RTP を使用<br/>[RFC3550](https://tex2e.github.io/rfc-translater/html/rfc3550.html)      |
    | RTP/SAVP  |  Secure RTP を使用<br/>[RFC3711](https://tex2e.github.io/rfc-translater/html/rfc3711.html)  |
    | RTP/SAVPF | SRTP の拡張版を使用<br/>[RFC5124](https://tex2e.github.io/rfc-translater/html/rfc5124.html) |

  - `<fmt>`

    メディアのフォーマットを意味している。
