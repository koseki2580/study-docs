---
title: HTTP
sidebar_label: HTTP
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

## HTTPとは

HTTP(HyperText Transfer Protocol)はアプリケーション層での通信に使用されるプロトコルである。
HTTPが策定された当初はテキストファイルのダウンロードを行う簡易的なプロトコルであったが、現在は音声・動画ファイルの送受信やリアルタイムでのやり取りなど幅広く使われているプロトコルである。

HTTPには`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2`, `HTTP/3`と複数のバージョンが存在する。2024年現在では`HTTP/1.1`が主に使用されているが、大規模なサイトでは`HTTP/2`の導入が進められている。
`HTTP/3`はGoogleが開発した`QUIC (Quick UDP Internet Connections)`のプロトコルを使用し、[RFC 9114](https://datatracker.ietf.org/doc/html/rfc9114)で定義されている。
`HTTP/0.9`,`HTTP/1.0`, `HTTP/1.1`, `HTTP/2`ではトランスポート層では`TCP`が用いられていたが、`HTTP/3`では`UDP(QUIC)`が用いられ、通信速度の面で大きく進化している。
しかし、2024年現在ではあまり使用が見られず、`youtube`等のごく一部でのみ使用されている。

### HTTP/0.9

HTTP/0.9はサーバからHTML(HyperText Markup Language)ファイルをダウンロードするだけのシンプルなプロトコルであった。
初期バージョンでは`HTTP`であったが後続のバージョンが登場したことで後付け的に`HTTP/0.9`となった。

### HTTP/1.0

HTTP/1.0は[RFC 1945](https://datatracker.ietf.org/doc/html/rfc1945)で定義されている。ヘッダーを導入したことで、HTMLファイル以外のファイルもサーバからダウンロードできるようになった。

リクストごとにTCPのセッションを作成しており、30個のファイルをダウンロードする際には30個のTCPのセッションが作成されていた。

![HTTP/1.0](/img/svg/Network/http/http-1.drawio.svg "HTTP/1.0")

### HTTP/1.1

HTTP/1.1は[RFC 2068](https://datatracker.ietf.org/doc/html/rfc2068)で初めて定義され、[RFC 2616](https://datatracker.ietf.org/doc/html/rfc2616)と[RFC 7230](https://datatracker.ietf.org/doc/html/rfc7230) $\sim$ [RFC 7235](https://datatracker.ietf.org/doc/html/rfc7235)と2回改訂されている。

HTTP/1.1ではHTTP/1.0で問題であったTCPのセッションを大量に作成してしまう問題を改善するために一度確立したセッションを再利用する`Connection: keep-alive`、
リクエストを送信した後レスポンスを待たず別のリクエストを送信できる`パイプライン`機能が新しく追加され、今まで以上に使いやすいプロトコルとなり、長年使用されてきた。

#### keep-alive

一度セッションを確立したTCPのコネクションを再利用し、サーバ・クライアントの両方のリソース消費量を抑える。また、TCPの3ウェイハンドシェイクが無くなる分通信速度も早くなる。

![keep-alive](/img/svg/Network/http/http-2.drawio.svg "keep-alive")

#### パイプライン

リクエストとレスポンスはペアになっており、リクエスト送信後はレスポンスを受け取るまで次のリクエストを同じTCPのセッション内で送信することができない。
それを、リクエスト送信後、レスポンスを待つことなく次のリクエストを送信できるようにする機能である。

![パイプライン](/img/svg/Network/http/http-3.drawio.svg "パイプライン")

レスポンスを待つことないので画期的な機能だと思われていたが、HTTP/1.1の仕様でリクエストとレスポンスのペアを並列で処理することができず、リクエストが届いた順番にレスポンスを返す必要があった。
そのため、通信中に時間がかかるレスポンスが存在した場合、その後続のリクエストに対するレスポンスも時間がかかってしまう`HoL (Head of Lock)ブロッキング (Head of Line Blocking)`という問題があり、機能としては存在するが、あまり使われない機能となっている。

![Head of Line Blocking](/img/svg/Network/http/http-4.drawio.svg "Head of Line Blocking")

図では青色の領域がレスポンスを返す準備が完了しているのに、前のリクエストのレスポンスを返していないため、レスポンスを返すことができず、待機している部分を表している。

#### データの形式

HTTP通信は決められたリクエストの形式とそれに対応するレスポンスの形式が決められている。その形式に基づいてデータのやり取りが行われる。

##### リクエスト

リクエストを投げる時は次の様な形式をとる。

```
Request        = Request-Line *((general-header | request-header | entity-header) CRLF) CRLF [ message-body ]
CRLF           = CR LF
CR             = <US-ASCII CR, carriage return (13)>
LF             = <US-ASCII LF, linefeed (10)>
Request-Line   = Method SP Request-URI SP HTTP-Version CRLF
Method         = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | extension-method
extension-method = token
token          = 1*<any CHAR except CTLs or separators>
separators = "(" | ")" | "<" | ">" | "@" | "," | ";" | ":" | "\" | <"> | "/" | "[" | "]" | "?" | "=" | "{" | "}" | SP | HT
SP             = <US-ASCII SP, space (32)>
HT             = <US-ASCII HT, horizontal-tab (9)>

Request-URI    = "*" | absoluteURI | abs_path | authority

general-header = Cache-Control | Connection | Date | Pragma | Trailer | Transfer-Encoding | Upgrade | Via | Warning
request-header = Accept | Accept-Charset | Accept-Encoding | Accept-Language | Authorization | Expect | From | Host | If-Match | If-Modified-Since | If-None-Match | If-Range | If-Unmodified-Since | Max-Forwards | Proxy-Authorization | Range | Referer | TE | User-Agent
entity-header = Allow | Content-Encoding | Content-Language | Content-Length | Content-Location | Content-MD5 | Content-Range | Content-Type | Expires | Last-Modified | extension-header
extension-header = message-header
message-header = field-name ":" [ field-value ]
field-name     = token
field-value    = *( field-content | LWS(linear white space) )
LWS            = [CRLF] 1*( SP | HT )
field-content  = <the OCTETs making up the field-value and consisting of either *TEXT or combinations of token, separators, and quoted-string>
quoted-string  = ( <"> *(qdtext | quoted-pair ) <"> )
qdtext         = <any TEXT except <">>
quoted-pair    = "\" CHAR
TEXT           = <any OCTET except CTLs, but including LWS>
(headerは全てmessage-headerと同じようにkey:valueの形式で記述されているが量が多いので割愛)
message-body = entity-body | <entity-body encoded as per Transfer-Encoding>
entity-body := Content-Encoding( Content-Type( data ) )
```

リクエストはリクエストラインさえあれば、最悪リクエストを送信出来ることがわかり、リクエストラインは`Method URI Version`の3つのデータを半角スペースで繋ぐ。

###### Method

- OPTIONS
  リソースやサーバーの機能を調査するための情報要求。
- GET
  Request-URIで指定された情報を取得するためのメソッドであり、条件付きGETや部分的GETを行うことができる。また、キャッシュ可能であり、セキュリティ上の考慮事項も存在する。
- HEAD
  GETメソッドと同じくリソースのメタ情報を取得するが、メッセージボディを返さない。
- POST
  リクエストで送信されたデータをサーバーに送り、新しいリソースを作成するために使われる。例えば、フォームの送信やメッセージの投稿などがこれに当たる。
- PUT
  リクエストで送信されたデータを指定されたURIに保存する。
- DELETE
  指定されたリソースを削除する。
- TRACE
  ネットワークのトラブルシューティングやパフォーマンスの最適化、セキュリティの確認など、リクエストとレスポンスの動作を理解し、トラフィックを監視するためのツールとして使用される。
- CONNECT
  プロキシサーバーが通常のHTTPリクエストとレスポンスを介さずに、クライアントとエンドサーバー間の直接的な通信を確立するために使用される。

###### Header

代表的なものとして以下のようなヘッダーが存在する。

- Content-Type: リクエストまたはレスポンスの本文のメディアタイプを示す。
- Content-Length: リクエストまたはレスポンスの本文の長さをバイト単位で示す。
- Cache-Control: キャッシュの動作を制御する。
- User-Agent: リクエストを送信するクライアントのアプリケーションやブラウザを識別する。
- Authorization: リクエストに認証情報を含めるために使用される。
- Location: リダイレクトレスポンスで使用される。
- Accept: クライアントが受け入れ可能なメディアタイプを指定する。
- Accept-Language: クライアントが受け入れ可能な言語を指定する。
- Accept-Encoding: クライアントが受け入れ可能なエンコーディング方式を指定する。
- Connection: クライアントとサーバーの間の接続の状態を制御する。
- Host: リクエストが送信される対象のホスト名とオプションのポート番号を示す。

##### レスポンス

同様にレスポンスも以下の様に定義されている。

```txt
Response = Status-Line *((general-header | response-header | entity-header) CRLF) CRLF [ message-body ]
Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF
Status-Code = "100" (Continue) | "101" (Switching Protocols) |
              "200" (OK) | "201" (Created) | "202" (Accepted) | "203" (Non-Authoritative Information) | "204" (No Content) | "205" (Reset Content) | "206" (Partial Content) | "300" (Multiple Choices) |
              "301" (Moved Permanently) | "302" (Found) | "303" (See Other) | "304" (Not Modified) | "305" (Use Proxy) | "307" (Temporary Redirect) |
              "400" (Bad Request) | "401" (Unauthorized) | "402" (Payment Required) | "403" (Forbidden) | "404" (Not Found) | "405" (Method Not Allowed) | "406" (Not Acceptable) | "407" (Proxy Authentication Required) | "408" (Request Time-out) | "409" (Conflict) | "410" (Gone) | "411" (Length Required) | "412" (Precondition Failed) | "413" (Request Entity Too Large) | "414" (Request-URI Too Large) | "415" (Unsupported Media Type) | "416" (Requested range not satisfiable) | "417" (Expectation Failed) |
              "500" (Internal Server Error) | "501" (Not Implemented) | "502" (Bad Gateway) | "503" (Service Unavailable) | "504" (Gateway Time-out) | "505" (HTTP Version not supported) | extension-code
extension-code = 3DIGIT
Reason-Phrase  = *<TEXT, excluding CR, LF>
```

###### ステータスコード

ステータスコードは以下の様にして割り振られている。

- 1xx: 情報 - リクエストが受け取られ、処理が続行中です。
- 2xx: 成功 - アクションが正常に受け取られ、理解され、受け入れられました。
- 3xx: リダイレクション - リクエストを完了するためには追加のアクションが必要です。
- 4xx: クライアントエラー - リクエストに誤った構文が含まれているか、要求を満たせません。
- 5xx: サーバーエラー - サーバーが有効なリクエストを満たすことに失敗しました。

として定義されている。

## 参考

- [mdn](https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
