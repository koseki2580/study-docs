---
title: URI関係
sidebar_label: URI関係
draft: false
toc_max_heading_level: 4
---

## URI関係

### URL

URLは`Uniform Resource Locator`の略であり、`URI (Uniform Resource Identifier)`の一部である。URLはインターネット上のリソース(ファイル等)場所を表すものである。

### URN

URNは`Uniform Resource Name`の略であり、`URI (Uniform Resource Identifier)`の一部である。URNはインターネット上のリソース(ファイル等)名前を表すものであり、持続的で、位置に依存しない、リソース識別子としての役割を果たす目的で作成された。[RFC2141](https://datatracker.ietf.org/doc/html/rfc2141)

URNは以下の構造をとる。

`urn:<NID>:<NSS>`

- `<NID>`（Namespace Identifier）: URNがどのような名前空間に属するかを示す。例えば、ISBNやUUIDなどがある。

  構造はこの様になっている。

  ```txt
  <NID>: <let-num> [ 1,31<let-num-hyp> ]
  <let-num-hyp>: A-Z | a-z | 0-9 | "-"
  <let-num>: A-Z | a-z | 0-9
  ```

- `<NSS>`（Namespace Specific String）: 名前空間固有の文字列であり、その名前空間内でのリソースを識別するために使用される。

  構造はこの様になっている。

  ```txt
  <NSS>: 1*<URN chars>
  <URN chars>: <trans> | "%" <hex> <hex>
  <trans>: A-Z |  a-z | 0-9 | <other> | <reserved>
  <hex>: 0-9 | a-f | A-F
  <other>: "(" | ")" | "+" | "," | "-" | "." | ":" | "=" | "@" | ";" | "$" | "_" | "!" | "*" | "'"
  <reserved>: "%" | "/" | "?" | "#"
  ```

例としてこのようなものが挙げられる。

- URN:foo:a123,456
- urn:foo:a123,456
- urn:FOO:a123,456
- urn:foo:A123,456
- urn:foo:a123%2C456
- URN:FOO:a123%2c456

### URI

URI（Uniform Resource Identifier）はインターネット上のリソースを表現するための標準化された形式であり、シンプルでありながら拡張性を持っている。
そのため、リソースを表現する`URL`, `URN`を内包している。

URIの構造は以下の様になっている。

`<scheme> ":" <hier-part> [ "?" <query> ] [ "#" <fragment> ]`

```txt
hier-part   = "//" <authority> <path-abempty>, <path-absolute>, <path-rootless>, <path-empty>
```

![イメージ図](/img/svg/Other/uri/uri-1.drawio.svg "URL, URN")

#### 複数の定義で使用される構造

```txt
<ALPHA>: a-z | A-Z
<DIGIT>: 0-9
<unreserved>: <ALPHA> , <DIGIT> , "-" , "." , "_" , "~"
<reserved>      = <gen-delims> , <sub-delims>
<gen-delims>    = ":" , "/" , "?" , "#" , "[" , "]" , "@"
<sub-delims>    = "!" , "$" , "&" , "'" , "(" , ")" , "*" , "+" , "," , ";" , "="
<pct-encoded> = "%" <HEXDIG> <HEXDIG>
<HEXDIG>: 0-9a-fA-F
<pchar>: <unreserved> , <pct-encoded> , <sub-delims> , ":" , "@"
```

#### schemeの構造

```txt
<scheme>:  <ALPHA> *( <ALPHA> , <DIGIT> , "+" , "-" , "." )

```

#### authorityの構造

```txt
<authority>: [ <userinfo> "@" ] <host> [ ":" <port> ]
  <userinfo>: *( <unreserved>, <pct-encoded> , <sub-delims> , ":" )
  <host>: <IP-literal> , <IPv4address> , <reg-name>
    <IP-literal>: "[" ( <IPv6address> , <IPvFuture> ) "]"
    <IPv6address> =                            6( h16 ":" ) ls32
                      ,                       "::" 5( h16 ":" ) ls32
                      , [               h16 ] "::" 4( h16 ":" ) ls32
                      , [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
                      , [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
                      , [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
                      , [ *4( h16 ":" ) h16 ] "::"              ls32
                      , [ *5( h16 ":" ) h16 ] "::"              h16
                      , [ *6( h16 ":" ) h16 ] "::"
    <ls32>: ( h16 ":" h16 ) / <IPv4address>; least-significant 32 bits of address
    <h16>: 1*4<HEXDIG>; 16 bits of address represented in hexadecimal
    <IPv4address>: <dec-octet> "." <dec-octet> "." <dec-octet> "." <dec-octet>
    <dec-octet>: <DIGIT>                 ; 0-9
              , %x31-39 <DIGIT>         ; 10-99
              , "1" 2<DIGIT>         ; 100-199
              , "2" %x30-34 M     ; 200-249
              , "25" %x30-35          ; 250-255
    <reg-name>: *( <unreserved> , <pct-encoded> , <sub-delims> )
  <port>: *<DIGIT>
```

::: cation
[rfc3986](https://datatracker.ietf.org/doc/html/rfc3986)ではuserInfoフィールドでの「ユーザー：パスワード」のフォーマットの使用は非推奨になっている。
内部環境やテスト環境のように簡易的に確認したい場合は使用するケースが存在する。

Basic認証の場合はどちらでもセキュリティリスクが変わらないので使用するケースが多い。
:::

#### pathの構造

```txt
<path>: <path-abempty>    ; begins with "/" or is empty
      , <path-absolute>   ; begins with "/" but not "//"
      , <path-noscheme>   ; begins with a non-colon segment
      , <path-rootless>   ; begins with a segment
      , <path-empty>      ; zero characters
  <path-abempty>: *( "/" <segment> )
  <path-absolute>: "/" [ <segment-nz> *( "/" <segment> ) ]
  <path-noscheme>: <segment-nz-nc> *( "/" <segment> )
  <path-rootless>: <segment-nz> *( "/" <segment> )
  <path-empty>: 0<pchar>
    <segment>: *<pchar>
    <segment-nz>: 1*<pchar>
    <segment-nz-nc>: 1*( <unreserved> , <pct-encoded>, <sub-delims> , "@" ); non-zero-length segment without any colon ":"
```

#### queryの構造

```txt
<query>: *( <pchar> , "/" , "?" )
```

#### fragmentの構造

```txt
<fragment>: *( <pchar> , "/" , "?" )
```
