---
title: 関係モデル
sidebar_label: 関係モデル
draft: false
toc_max_heading_level: 5
tags: [データベース]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 関係モデルの考え方

関係モデルはデータもデータ間の関連も全てリレーション(関係)とタプル(行・組)で表現することが基本である。

### リレーション

リレーションには様々な集合を表す`ドメイン(定義域)`という概念がある。

例えば、

製品 \{製品 A, 製品 B\}

原料 \{原料 a, 原料 b\}

では、製品 A・製品 B のことを`属性値`と呼び、この属性値が取ることのできる範囲をドメインと言う。(製品 C,製品 D 等)

上記の製品と原料で直積を取ると以下のようになる。

(製品 A, 原料 a)

(製品 A, 原料 b)

(製品 B, 原料 a)

(製品 B, 原料 b)

これら 1 つ 1 つのことを`タプル(行, 組)`と呼び、必要なタプルだけを取り出した直積の部分集合のことを`リレーション(関係)`と呼ぶ。
また、リレーションを表形式で表したものをリレーション(関係表)と言うこともある。

列のことを`属性`と呼び、属性の 1 つ 1 つの値を属性値という。

関係表はタプルの集合であり、時間とともに変化するが、時間に対して不変であり、関係表の枠組みとして定義されたものを`関係スキーマ`と呼ぶ。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-1.drawio.svg "リレーション(関係表)")

### 関係表の詳細

関係表のタプルを一意に識別できる、必要最小限の属性(`極小`)で構成される属性名の集合のことを`候補キー`と言う。

上記の図を例にすると、`製品番号`・`製品名`・`\{製品番号・製品名\}`のどれかが分かればタプルが識別できる。
しかし、最小構成でない`\{製品番号・製品名\}`は候補キーとは呼ばず、`製品番号`・`製品名`の 2 つを候補キーと呼ぶ。

構成する属性の値に空値(NULL)を取らない候補キーの中から 1 つ選択したキーのことを`主キー`と呼ぶ。
主キーには次の 2 つの制約を持つ

- 一意性制約 : 主キーが同じ値のタプルが存在しない
- 非ナル制約 : 主キーに NULL を含むタプルが存在しない

複数の属性で構成されている主キーのことを`複合キー`と言う。

主キーは関係スキーマでは下線をつけて表現する。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-2.drawio.svg "主キー")

他の関係表を参照するための属性を`外部キー`と呼ぶ。外部キーとして設定すると以下の制約が課される。

- 関係表 B の外部キーの属性値は関係表 A の主キーの属性値として存在しなければならない
- 関係表 A からタプルを削除する場合は、関係表 B との参照関係に矛盾が生じてはならない

この制約のことを`参照制約`と言う。

外部キーは関係スキーマでは点線の下線をつけて表現する。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-3.drawio.svg "外部キー")

### 演算

2 つの関係から新たな関係を求める演算のことを`関係演算`と呼ぶ。

関係演算は 8 種類の演算が存在する。

1. 和 : 2 つの関係表のどちらかに存在するタプル集合を取り出す
2. 差 : 2 つの関係表の片方のみに存在するタプル集合を取り出す
3. 積 : 2 つの関係表の両方に存在するタプル集合を取り出す
4. 直積 : 2 つの関係表に含まれるタプルの全ての組み合わせを取り出す
5. 射影 : 関係表から条件に合うカラムを取り出す
6. 選択 : 関係表から条件に合うタプルを取り出す
7. 結合 : 2 つの関係表を組み合わせて 1 つの関係表を作成する
8. 商 : 関係表 B のタプルを全てもつ関係表 A のタプル集合を取り出し、関係表 B の属性を取り除く

結合にはいくつかの種類があるため以下の図では取り上げない。

#### 和

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-4.drawio.svg "和")

#### 差

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-5.drawio.svg "差")

#### 積

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-6.drawio.svg "積")

#### 直積

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-7.drawio.svg "直積")

#### 射影

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-8.drawio.svg "射影")

#### 選択

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-9.drawio.svg "選択")

#### 商

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-10.drawio.svg "商")

### 結合

結合には様々な種類が存在し、

- θ 結合
- 等結合
- 自然結合
- 外部結合

などがある。

#### θ 結合

結合する関係表の直積を求め、その中から 2 つの属性を選択し`X θ Y`の関係となるタプルを取り出す結合方法をいう。
θ は比較演算子のことを指し、`<, >, <=, >=, =, <>`などがある。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-11.drawio.svg "θ結合")

#### 等結合

θ 結合の θ を`=`とした時の結合方法のことをいう。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-12.drawio.svg "等結合")

#### 自然結合

等結合の重複している属性を取り除いた結合方法のことをいう。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-13.drawio.svg "自然結合")

#### 外部結合

外部結合に 3 種類存在する。

- 左外部結合
- 右外部結合
- 完全外部結合

##### 左外部結合

`左`側にある関係表は全て取り出し、`右`側にある関係表は`左`側にある関係表と一致するもののみ取り出す。その際に、`左`側には存在するが`右`側に存在しないものは`NULL`として取り出す。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-14.drawio.svg "左外部結合")

##### 右外部結合

`右`側にある関係表は全て取り出し、`左`側にある関係表は`右`側にある関係表と一致するもののみ取り出す。その際に、`右`側には存在するが`左`側に存在しないものは`NULL`として取り出す。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-15.drawio.svg "右外部結合")

##### 完全外部結合

左外部結合と右外部結合を合わせたものをいう。

![イメージ図](/img/svg/Database/relational-data-model/relational-data-model-16.drawio.svg "完全外部結合")
