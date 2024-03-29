---
title: 平成31年
sidebar_label: 平成31年
draft: true
toc_max_heading_level: 5
tags: [データベース, 資格, データベーススペシャリスト, 午後1, 午後2]
---

```mdx-code-block
import UnderLine from "@site/src/components/Custom/UnderLine"
import FontColor from "@site/src/components/Custom/FontColor"

```

:::caution 注意事項
一個人の解答からここが根拠だろうという部分を取り出してまとめたものになります。
:::
以下の写真は全て実際の問題よりスクリーンショットで取得したものを表示させています。
また、「」内の文字は問題からそのまま引用しています。

## 午後 1

出典 : 平成 31 年度 春期 データベーススペシャリスト試験　午後 1

[問題](https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2019h31_1/2019h31h_db_pm1_qs.pdf)

[解答](https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2019h31_1/2019h31h_db_pm1_ans.pdf)

問題と解答は上記からダウンロードすることができます。

解答作成中

## 午後 2

出典 : 平成 31 年度 春期 データベーススペシャリスト試験　午後 2

[問題](https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2019h31_1/2019h31h_db_pm2_qs.pdf)

[解答](https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2019h31_1/2019h31h_db_pm2_ans.pdf)

問題と解答は上記からダウンロードすることができます。

### 大問 1

#### 設問 1

##### (1)

![午後2 問1 表4](/img/png/Database/database-specialist/H31/2-1-chart-4.png "午後2 問1 表4")

![午後2 問1 表2](/img/png/Database/database-specialist/H31/2-1-chart-2.png "午後2 問1 表2")

表 4 で使用されているテーブルについては図 1 に乗っている。

![午後2 問1 図1](/img/png/Database/database-specialist/H31/2-1-figure-1.png "午後2 問1 図1")

- 処理 5

  処理 5 は「店番、端末種別コードごとに明細件数を集計して、店番、店名、端末種別コード、端末種別名、合計明細件数を出力する。」とあるので
  出力される`店番`, `店名`, `端末種別コード`, `端末種別名`, `合計明細件数`が必要であることが分かる。

  この中で`店番`, `合計明細件数`はログ基本テーブルから導出することができ、残りの`店名`, `端末種別コード`, `端末種別名`をどのテーブルから持ってくるかを検討する。

  端末種別名は図 1 を見ると端末種別テーブルにしかないので、こちらを使用することが分かる。しかし、端末種別名は`端末種別コード`を主キーとしており、ログ基本テーブルには端末種別コードは存在しない。
  図 1 を見ると窓口端末テーブルには端末種別コードが外部キーとして設定されており、主キーがログ基本テーブルの外部キーとして設定されている`店番`, `機番`となっている。

  つまり、`ログ基本テーブル` $\rightarrow$ `窓口端末テーブル` $\rightarrow$ `端末種別テーブル`の順に探索することで`端末種別コード`, `端末種別名`を取得できる。

  店名は図 1 を見ると支店テーブルに存在し、主キーが店番となっている。ログ基本テーブルの外部キーに店番が存在するので

  `ログ基本テーブル` $\rightarrow$ `支店テーブル`で探索でき、`店名`を取得できる。

  処理 5 で使用するテーブルは`支店テーブル`, `端末種別テーブル`, `窓口端末テーブル`, `ログ基本テーブル`となる。

- 処理 6

  処理 6 は「店名、取引種別名ごとに、明細件数を集計して、画面番号、タイトル、店名、取引種別名、合計明細件数を出力する。」とあるので、
  出力される`画面番号`, `タイトル`, `店名`, `取引種別名`, `合計明細件数`が必要であることが分かる。

  この中で`画面番号`, `合計明細件数`はログ基本テーブルから導出することができ、残りの`タイトル`, `店名`, `取引種別名`をどのテーブルから持ってくるかを検討する。

  店名は処理 5 と同様に`支店テーブル`を用いることで導出できる。

  タイトルは図 1 を見ると画面テーブルに存在し、主キーが画面番号となっている。ログ基本テーブルの外部キーに画面番号が存在するので

  `ログ基本テーブル` $\rightarrow$ `画面テーブル`で探索でき、`タイトル`を取得できる。

  取引種別名は図 1 を見ると取引種別テーブルにしかないので、こちらを使用することが分かる。しかし、取引種別名は`取引種別コード`を主キーとしており、ログ基本テーブルには取引種別コードは存在しない。
  図 1 を見ると取引テーブルには取引種別コードが外部キーとして設定されており、主キーがログ基本テーブルの外部キーとして設定されている`取引番号`となっている。

  つまり、`ログ基本テーブル` $\rightarrow$ `取引テーブル` $\rightarrow$ `取引種別テーブル`の順に探索することで`取引種別コード`, `取引種別名`を取得できる。

  処理 6 で使用するテーブルは`支店テーブル`, `取引種別テーブル`, `取引テーブル`, `画面テーブル`, `ログ基本テーブル`となる。

##### (2)

![午後2 問1 表5](/img/png/Database/database-specialist/H31/2-1-chart-5.png "午後2 問1 表5")

テーブルの主キーには索引が定義されている(図 1 下部の注記に記載)。索引については、ページ 10 $>$ 5. テーブルの物理分割　に記述されている。

表は 2 つ空欄が存在するので、2 つテーブル名と列名を定義する必要がある。

表 2 の処理内容を見てみると、

- 処理 4

  処理 4 に「 $\sim$ 年月、行員番号、取引種別コードごとに伝票金額を集計して $\sim$ 」とあり、取引種別コードが

  取引種別コードを導出するには(1)でも記述したように取引テーブルの外部キーを使用しないと取得することができない。
  外部キーは索引の対象外なので取引種別コードはバラバラに物理的に格納されてしまうので、探索に時間がかかってしまう。
  そのため、取引テーブルの取引種別コードに索引を定義することでこの時間の短縮することが可能となる。

- 処理 5

  処理 5 に「 $\sim$ 店番、端末種別コードごとに明細件数を集計して　$\sim$ 」とあり、端末種別コードで結果をまとめているが分かる。

  端末種別コードを導出するには(1)でも記述したように窓口端末テーブルの外部キーを使用しないと取得することができない。
  外部キーは索引の対象外なので端末種別コードはバラバラに物理的に格納されてしまうので、探索に時間がかかってしまう。
  そのため、窓口端末テーブルの端末種別コードに索引を定義することでこの時間の短縮することが可能となる。

まとめると

| テーブル名 | 索引を定義する列名 |
| :--------: | :----------------: |
|  窓口端末  |   端末種別コード   |
|    取引    |   取引種別コード   |

##### (3)

![午後2 問1 図2](/img/png/Database/database-specialist/H31/2-1-figure-2.png "午後2 問1 図2")

表 2 の処理 1 をまとめると

| 番号 | 所属する支店 | 当該利用者 |            説明            |
| :--: | :----------: | :--------: | :------------------------: |
|  1   |   $\circ$    |  $\circ$   | 所属する支店かつ本人のログ |
|  2   |   $\circ$    |            |    　所属する支店のログ    |
|  3   |              |            |           全ログ           |

となっている。
図 2 の最後をみると

```sql
...
WHERE A.年月 = :hv2
  AND A.店番 = B.店番
  AND A.行員番号 = C.行員番号
  AND A.取引番号 = D.取引番号
  AND (E.検索店番 c OR E.検索店番 = A.店番)
  AND (E.検索行員番号 c OR E.検索行員番号 = A.行員番号)
```

となっており、where 句を用いて対象を絞っている。上記の最後の部分をみると`E.検索店番`と`E.検索行員番号`が`c`の時か番号が一致した場合に true となることがわかる。

これを踏まえて、a について見てみると

```sql
CASE WHEN 権限レベル a THEN 所属店番 ELSE NULL END AS 検索店番
```

となっており、a の条件を満たすとき所属番号を持ち、満たさないときは NULL となる。

店番で検索する条件は上の表を見ると権限レベルが 1,2 の時に店番で検索する必要があるので、a は

`IN ('1', '2')`となる。

b も同じように考えると検索行員番号を必要とするのは権限レベルが 1 の時であるので、

`= '1'`となる。

権限レベル 3 の時は`E.検索店番`と`E.検索行員番号`が NULL となっており、NULL の時にも true となる条件が必要になる。

そのため、c は`IS NULL`となる。

d は、図 3-5 で共通で使われる SQL 文を考える必要がある。

![午後2 問1 図3](/img/png/Database/database-specialist/H31/2-1-figure-3.png "午後2 問1 図3")

処理 2 を見ると「 $\sim$ 平均経過時間の降順で出力する。 $\sim$ 」とあるので、

`ORDER BY 平均経過時間 DESC`となることが分かる。

##### (4)

![午後2 問1 図5](/img/png/Database/database-specialist/H31/2-1-figure-5.png "午後2 問1 図5")

処理 2 は後画面番号 - 前画面番号の TS 時間の平均を求める処理であり、一つ先 or 一つ前のデータ引いた絶対値の平均を求めている。
図 5 を見ると A(基準)を用いて B(一つ前)を探索していることが SQL 文を見るとわかる。

つまり、TS 順に並んだ番号が存在すれば、1 つ目の番号は基準の-1 となるので、TS 順に並んだ番号が必要であることが分かる。

処理 2 自体が店番と機番ごとに集計しているので、`店番, 機番, TS順の順に連続する整数`となる。

#### 設問 2

##### (1)

![午後2 問1 表10](/img/png/Database/database-specialist/H31/2-1-chart-10.png "午後2 問1 表10")

![午後2 問1 表6-9](/img/png/Database/database-specialist/H31/2-1-chart-6-9.png "午後2 問1 表6-9")

- e,f について考える。

案 1 は自身の親となるログ ID を外部キーとして持つ方法である。

問い合わせ[B]は「ログ ID='105'及びその上位の全ての ID を抽出する」である。
表 10 の案 1 の問い合わせ B をみるとログ ID が`105`であるという条件での絞り込みが行われていない。

そのため、e は`ログID = '105'`となる。

表 10 の案 1 の問い合わせ B は`WITH RECURSIVE`を使用している。`RECURSIVE`についてはページ 10 $>$ 3. 再帰的な問合せの構文のサポートに記述されている。

f の SQL 文は以下であり、

```sql
SELECT A.ログID, A.親ログID
FROM ログ関連 A, TEMP B
WHERE A.ログID = f
```

TEMP で自分自身を参照している。問い合わせ B ではログ ID が 105 と上位(105 の親)を全て抽出するので、TEMP 属性の親属性を使えば親要素を抽出できるので、
f は`B.親ログID`となる。

`UNION ALL`で検索結果を結合しているが、e 側の結果は 105 の時(一番初め)だけ結果があり、f 側の結果はそれ以外(105 よりも上位の結果のみ)を抽出するようになっている。

- g,h について考える

案 3 は木構造の行きかけ順(左端番号)と帰りがけ順(右端番号)に番号を付与していく方法である。

この番号付けを行うと左端番号と右端番号の間に左端番号と右端番号(左端番号 $<$ x.左端番号 , x.右端番号 $<$ 右端番号)が存在する時は、その番号(x)を持つ要素は子要素であるという性質がある。

そのため、ログ ID が 105 の親要素を全て抽出するには基準(ログ ID 105)となる番号の左端番号より小さく、右端番号が大きい番号を持つ要素は 105 よりも上位に位置する要素であると言えるので、

g,h はそれぞれ`A.左端番号 >= B.左端番号`と`A.右端番号 <= B.右端番号`となる。

`=`がついているのはログ ID が 105 も抽出するからである。

※行きがけ順と帰りがけ順については[深さ優先探索](/docs/Algorithm/depth-first-search#行きがけ順)を参考にしていください

##### (2)

- i

  案 2 では自身と自身までの経路を保持している。そのため、103 の上位にログ ID を挿入するので、経路に 103 が含まれているログ ID が全て変更される。

  そのため、`4`となる。

- j

  案 3 では木構造を取り、行きがけ順と帰りがけ順で番号を記録しているため、間にデータが挿入されてしまうと挿入位置以降の番号が全てずれてしまう。

  つまり、

  ![午後2 問1 図6](/img/png/Database/database-specialist/H31/2-1-figure-6.png "午後2 問1 図6")

  を参考にして考えると、103 の左端番号である 4 より大きい番号をもつログ ID は全て番号がずれるので変更する必要がある。

  番号が変更されるログ ID は`101, 103, 104, 105, 106, 107, 108, 109`となるので、`8`となる。

- k

  | 案  | 変更数 |
  | :-: | :----: |
  |  1  |   1    |
  |  2  |   4    |
  |  3  |   8    |

  なので、`3`となる。

- l

  案 3 は更新を行うとコストが高いがページ 8 $>$ 3. ログ分析システムのテーブル $>$ (1)に
  「新たに発生したログを追加するだけで更新は行わない。」とあるので、

  `更新を行わない`となる。

- m

  案 1 はページ 10 $>$ 3. 再帰的な問合せの構文のサポート に案 1 で使用されている構文が書かれているので
  `再起的な問い合せ`となる。

- n

  複数のデータを出力することがあり、選択(横方向の取り出し)、射影(縦方向の取り出し)を行なっているので、後はそれらをまとめる必要があるので
  `結合`となる。

##### (3)

案 2 の問合せ[B]の SQL 文は

```sql
SELECT B.ログID
FROM ログ関連　A, ログ関連 b
WHERE A.ログID = '105'
  AND POSITION(B.経路 IN A.経路) = 1
```

となっており、案 3 は

```sql
SELECT B.ログID
FROM ログ関連 A, ログ関連 B
WHERE A.ログID = '105'
  AND A.左端番号 >= B.左端番号
  AND A.右端番号 <= B.右端番号
```

となっている。

ページ 10 $>$ 2. オプティマイザの仕様 $>$ (2)に
「WHERE 句の述語が関数を含む場合、表探索を選択する。」と書かれている。
つまり、案 2 は`POSITION`関数を使用しているため、探索が表探索となってしまう。
そのため、案 3 よりも劣るだろうと考えられるので、
`WHERE句の述語が関数を含む場合、表探索になるから`となる。

#### 設問 3

##### (1)

![午後2 問1 表11](/img/png/Database/database-specialist/H31/2-1-chart-11.png "午後2 問1 表11")

- $\textcircled{\scriptsize 1}$

  案 C の区分方法が「TS の年月ごとに 60 区分に分割」と書かれており、区分については
  ページ 10 $>$ 5. テーブルの物理分割 $>$ (1)に
  「テーブルごとに一つ又は複数の列を区分キーとし、区分キーの値に基づいて物理的な格納領域を分ける。これを物理分割という。」と書かれている。
  つまり、区分を分けることで物理的に格納領域を分けることができる。

  そのため、TS の年月ごとに区分してしまうと書き込み先である物理的な格納領域が同じ場所にばかり書き込んでいってしまう。
  だから、`一つの区分に行追加が集中し、待ちが発生するから`となる。

- $\textcircled{\scriptsize 2}$

  ローカル検索についてはページ 10 $>$ 5. テーブルの物理分割 $>$ (3), (4)に書かれており、ローカル索引を行うにはローカル索引のキーを指定する必要がある。

  - 案 A $\sim$ C でローカル索引が`店番`, `機番`, `TS`と限定されているのでこれらでしかローカル索引を行うことができない

  そのため、`検索キーが店番, 機番, TSに限られるから`となる。

##### (2)

![午後2 問1 表13](/img/png/Database/database-specialist/H31/2-1-chart-13.png "午後2 問1 表13")

![午後2 問1 表12](/img/png/Database/database-specialist/H31/2-1-chart-12.png "午後2 問1 表12")

- o

  処理 5 は「利用者が指定した前月以前の年月に一致する 1 か月分のログを対象に、店番、端末種別コードごとに明細件数を集計して、店番, 店名, 端末種別コード, 端末種別名, 合計明細件数を出力する。」
  と書かれているので、一番必要な情報は年月についてである。

  しかし、案 D ではログ ID でハッシュ値を取り、区分しているので、索引探索を行うことができない。さらに、
  ページ 17 $>$ 2. "ログ基本"テーブルの物理分割 $>$ (2) $>$ $\textcircled{\scriptsize 4}$ に
  「バッファヒット率は、索引のページでは 100$\%$, テーブルのページでは 0$\%$とする。」とあるので、
  全てのページを探索する必要があるので、探索区分数は`60`となる。

- p

  o でも述べたように全てのページ数を探索する必要がある。

  表 13 の上部に前提条件として「テーブルのページ数 60M」と書かれているので、探索ページ数は`60M`となる。

- q

  処理 5 は「利用者が指定した一つの画面番号について、年月が前々年 4 月から前年 3 月までの 12 か月のログを対象に、
  店名, 取引種別ごとに、明細件数を集計して、画面番号, タイトル, 店名, 取引種別名, 合計明細件数を出力する。」と書かれており、年月情報が必要となる。

  案 F は年月の範囲で区分キーを設定しているのでローカル検索を用いて検索を行うことが可能であるので、1 ヶ月で 1 つの区分を使用しているので、12 ヶ月分のデータを取得するのに必要な
  探索区分数は`12`となる。

- r

  表 13 の上部の前提条件をみると「1 区分当たりのページ数 1M」とあるので`1 * 12 = 12`となり、`12M`となる。

- 案 E のローカル検索を構成する列名

  処理 4,5 共に年月の情報が必要であることが分かるので、`年月`でローカル索引を行うのが良さそうであることが分かる。
  また、区分キーが店番となっているため、店番も含める必要があり、処理 4,5 で共通で店番が使用されている。

  まとめると、年月と店番をローカル索引の構成列名にするのが良さそうであると考えられる。

  順をどのように設定するかは処理 4,5 共に年月での絞り込みを行なっているので、年月を優先して構成させる方が有意であることが分かるので、
  `年月, 店番`となる。

##### (3)

- $\textcircled{\scriptsize 1}$

  ぺージ 18 $>$ 3. クラスタ構成の検討に
  「 $\sim$ クラス構成への変更に当たり、各テーブルのデータ配置方法に分散を指定し、主キー列を分散キーとして設定することにした。」とある。
  データ配置方法の分散についてはページ 11 $>$ 6. クラスタ構成のサポート $>$ (2)に
  「分散による配置方法は、一つ又は複数の列を分散キーとして指定し、分散キーの値に基づいて RDBMS 内部で生成するハッシュ値によって各ノードにデータを分散する。」とあり、
  また、ページ 11 $>$ 6. クラスタ構成のサポート $>$ (3)に「 $\sim$ テーブル間の結合では、他ノードに処理を依頼するので、自ノード内で処理する場合と比べて、ノード間通信のオーバーヘッドが発生する。」
  と書かれている。

  処理 4 で行われる結合処理が様々なノードに分散しているので、ノード間通信が発生してしまう。そのため、`結合対象のデータが各ノードに分散しており、テーブル結合を行うごとにノード間通信が必要となるから`となる。

- $\textcircled{\scriptsize 2}$

  ノード間通信が原因なので、それを取り除くことが対応であることが分かるので、
  `データの配置方法を複製を指定する`となる。

- $\textcircled{\scriptsize 3}$

  $\textcircled{\scriptsize 1}$でも述べたように主キーが分散キーとして設定されている。そのため、現状だとログ ID と明細番号を用いて配置場所を決めている。
  しかし、処理 4 では明細番号を使用する処理がないので、明細番号を分散キーに設定していることで、無駄にデータをバラバラにさせてしまっている。
  分散キーは主キーの一部でも良いと本文で述べられているので、`分散キーをログID列だけに変更する`となる。

### 大問 2

#### 設問 1

先に(3)の関係スキーマを解答してから(1), (2)のデータモデル図を解答する。

##### (3)

- a
  21 ページ $>$ 1. 自社組織, 食材業者, 品目 $>$ $\textcircled{\scriptsize 8}$に
  「 $\sim$ 要求元部門には、要求先の焼成部門を設定する」とあるので、

  > <UnderLine style="dashed">要求先焼成部門コード</UnderLine>

  となる。

- b

  22 ページ $>$ (3) $>$ $\textcircled{\scriptsize 2}$に
  「品目は品目コードで識別し、品目名、軽量単位及び次を設定する。

  - 原材料、生地材料、成形材料及び製品のいずれかを表す品目分類
  - 調達又は内製のいずれかを表す調達内製区分
  - 貯蔵対象かどうかを表す貯蔵区分

  」とあるので、

  > 調達内製区分, 貯蔵区分

  となる。

- c

  22 ページ $>$ (3) $>$ $\textcircled{\scriptsize 3}$に
  「 $\sim$ 内製成型材料には、対応する代替外注成型材料を一つ決めて設定する $\sim$ 」とあるので、

  > <UnderLine style="dashed">代替外注成型材料品目コード</UnderLine>

となる。

- d

  23 ページ $>$ $\textcircled{\scriptsize 10}$に
  「製品には 1 回の製造単位としての焼成ロットサイズ、及び焼成に用いる内製成型材料を設定する。」とあるので

  > <UnderLine style="dashed">内製成型材料品目コード</UnderLine>

  となる。

- e

  23 ページ $>$ $\textcircled{\scriptsize 12}$に
  「生地材料には、そのレシピとして、1 回の製造に使用する、幾つかの原材料とその使用量を設定する。」とある。
  生地材料レシピは生地材料と紐づいてることが`生地材料には、そのレシピとして`の部分から分かる。
  また、`幾つかの原材料とその使用量を設定する`とあるので、使用品目コードとその使用量についての属性値を持つことが分かる。
  生地材料は複数の原材料を使用するので\{生地材料\} $\rightarrow$ \{原材料\}の関係になる。さらに、原材料は複数の生地材料に用いられるので生地材料と原材料には多対多の関係が成り立つ。
  これを 1 対多と多対 1 の関係に分ける中間の関係を作成する必要がある。中間テーブルはそれぞれの主キーを合わせた複合キーを主キーとすることで 1 対多と多対 1 の関係に分離ができるので、

  > <UnderLine>生地材料品目コード</UnderLine>, <UnderLine>使用品目コード</UnderLine>, 使用量

  となる。

- f

  23 ページ $>$ $\textcircled{\scriptsize 13}$に
  「内製成型材料には、そのレシピとして、1 回の製造に使用する、幾つかの品目(生地材料又は原材料)とその使用量を設定する。」とある。
  こちらも e と同じように内製成型材料品目コードと使用品目コード(生地材料と原材料)が多対多関係となるので、

  > <UnderLine>内製成型材料品目コード</UnderLine>, <UnderLine>使用品目コード</UnderLine>, 使用量

- g

  24 ページ $>$ (2) $>$ $\textcircled{\scriptsize 2}$に
  「製品は焼成ロット単位に製造するので、実際の供給数量は要求数量と異なることがある。供給明細に対して、どの焼成実績から幾つ引き当てたかを記録する。」と書かれている。
  また、25 ページ $>$ $\textcircled{\scriptsize 3}$に「焼成ロットごとの焼成実績を記録する伝票で、製造番号で識別する。」と書かれている。

  この 2 つの文から、製品は A という単位で製造されるが、要求される量が A の倍数ではなく B という場合あり、A の中の C 個は引き当てたといったようなケースが存在するということが分かる。
  つまり、焼成実績は複数の供給明細に紐づくこと(A のうち C だけ引き当てた場合)があり、また、
  供給明細も複数の焼成実績に紐づくこと(\{A-C\}個で足りないので次の A から補給する場合)があるということになり、多対多の関係となってしまっている。
  27 ページ $>$ 1. 概念データモデル及び関係スキーマの設計方針 $>$ (2) に
  「概念データモデルでは多対多のリレーションシップは用いない」とあるので、それぞれを 1 対多, 多対 1 となるような中間テーブルを用意する必要がある。

  中間テーブルはそれぞれを外部キーとして持つように設計すれば良いので

  > <UnderLine>製造番号</UnderLine>, <UnderLine>供給番号</UnderLine>, <UnderLine> 供給明細番号</UnderLine>
  > , 引当数量

  となる。

- h

  25 ページ $>$ $\textcircled{\scriptsize 6}$に
  「後述する生地材料補充要求について、その生地材料の製造に必要な原材料の払出しを依頼する。」と書かれており、`その生地材料の製造に`とあるので、
  生地材料要求と払出依頼が 1 対 1 の関係であると分かる。また、図 2 の E-R 図に成型材料製造依頼と 1 対 1 の関係を持っているので、

  > <UnderLine style="dotted"> 成型材料製造依頼番号</UnderLine>, <UnderLine style="dotted">補充要求番号</UnderLine>

  となる。

- i

  25 ページ $>$ $\textcircled{\scriptsize 8}$に
  「発行した補充要求書を、調達品目の要求(調達品目補充要求)と生地材料の要求(生地材料補充要求)に分類する。」とあるので、
  生地材料補充要求テーブルは補充要求テーブルのサブタイプであることが分かる。

  また、25 ページ $>$ $\textcircled{\scriptsize 8}$に「貯蔵庫では $\sim$ 生地材料は毎時間帯終了後に、在庫確認を行う。」, 26 ページの 1 行目に
  「生地材料補充要求は、在庫確認の都度、Mix 部門に送る。Mix 部門では、生地材料補充要求を、1 ロット分の Mix 指示として受け取る。」とあるので、
  在庫確認を行なった時間帯の情報と対応する Mix 部門先についての属性が必要であることが分かるので、

  > <UnderLine>補充要求番号</UnderLine>, <UnderLine style="dotted">要求先 Mix 部門コード</UnderLine>, 在庫確認時間帯

  となる。

- j

  i と同じで補充要求のサブタイプとなっている。また、25 ページ $>$ $\textcircled{\scriptsize 8}$に
  「調達品目補充要求は、食材業者ごとにくくって注文を発行する。調達品目補充要求は、注文に対する注文明細に位置付ける。」と書かれている。かつ、図 2 に
  注文と調達品目補充要求が 1 対多であることが書かれているので、

  > <UnderLine>補充要求番号</UnderLine>, <UnderLine style="dotted">注文番号</UnderLine>,

  となる。

- k

  25 ページ $>$ $\textcircled{\scriptsize 10}$に
  「食材業者からの納品の際に受領する伝票で、納品番号で識別する。注文に対する納品は、ものによって複数回に分かれることがあるが、
  明細の単位は維持される。各貯蔵庫が検品し、納品数量を記録して入庫実績とする。」と書かれており、調達品目補充要求と関係があることが分かる。
  また、`明細の単位は維持される`とあるので、調達品目補充要求と 1 対 1 の関係であることが分かるので、

  > <UnderLine>補充要求番号</UnderLine>

  となる。

##### (1)

![午後2 問2 図2](/img/png/Database/database-specialist/H31/2-2-figure-1.png "午後2 問2 図1")

- ロケーション

  外部キーは存在しないので、特になし

- 部門

  `ロケーションコード`が外部キーとして存在する。ページ 21 $>$ 1. 自社組織, 食材業者, 品目 $>$ (1) $>$ $\textcircled{\scriptsize 1}$に
  「ホテルには本館と新館があり、この二つをロケーションという。」とある。また、ページ 21 $>$ 1. 自社組織, 食材業者, 品目 $>$ (1) $>$ $\textcircled{\scriptsize 6}$に
  「部門には、製造部門、貯蔵庫、要求元部門の種類があり、部門種別で分類する。本館と新館には、それぞれ製造部門、貯蔵庫、要求元が存在する。」と書かれているので、部門が 3 つに対してロケーションは 2 つ
  なので、部門とロケーションの関係は多対 1 となる。さらに、部門は製造部門, 貯蔵庫, 要求元部門のスーパタイプとなっている。

  ```mermaid
  flowchart TD
    B[ロケーション] ---> A[部門]
    A --- C{ }
    C --- D[製造部門]
    C --- E[貯蔵庫]
    C --- F[要求元部門]
  ```

  となる。

- 製造部門

  ページ 21 $>$ 1. 自社組織, 食材業者, 品目 $>$ (1) $>$ $\textcircled{\scriptsize 7}$ に
  「製造部門は製パンの 3 工程に対応した次の 3 部門の総称である。これら 3 部門は、で分類する。」とあるので 3 部門のスーパタイプとなっていることが分かるので、

  ```mermaid
  flowchart TD
    A[品目] --- B{ }
    B --- E[焼成部門]
    B --- F[成型部門]
    B --- G[Mix部門]
  ```

  となる。

- 焼成部門, 成型部門, Mix 部門

  製造部門のサブタイプとなっている。

- 貯蔵庫

  部門のサブタイプとなっている。

- 要求元部門

  `要求先焼成部門コード`が外部キーとして存在する。21 ページ $>$ 1. 自社組織, 食材業者, 品目 $>$ $\textcircled{\scriptsize 8}$に
  「要求元部門は、パンの製造を要求する部門であり、MD, CD, CF 及び BQ である。 $\sim$ 」とあり、4 つ存在することが分かる。また、
  21 ページ $>$ 1. 自社組織, 食材業者, 品目 $>$ $\textcircled{\scriptsize 6}$に
  「 $\sim$ 本館と新館には、それぞれ製造部門, 貯蔵庫, 要求元が存在する。」とあるので、焼成部門が本館と新館に存在することが分かる。焼成部門が 2、要求元部門は 4 つとなるので、
  要求元部門と焼成部門は多対 1 の関係となるので、

  ```mermaid
    flowchart TD
      A[焼成部門] ---> B[要求元部門]
  ```

  となる。

- 食材業者

  外部キーが存在しないので特になし。

- 品目分類

  外部キーが存在しないので特になし。

- 原材料分類

  外部キーが存在しないので特になし。

- 品目

  22 ページ $>$ (3) $>$ $\textcircled{\scriptsize 2}$に
  「品目は品目コードで識別し、品目名、軽量単位及び次を設定する。

  - 原材料、生地材料、成形材料及び製品のいずれかを表す品目分類
  - 調達又は内製のいずれかを表す調達内製区分
  - 貯蔵対象かどうかを表す貯蔵区分

  」とあるので、

  ```mermaid
  flowchart TD
    A[品目] --- B{ }
    A --- C{ }
    B --- D[調達品目]
    B --- E[内製品目]
    C --- F[貯蔵品目]
  ```

  となる。

- 調達品目

  `調達先食材業者コード`が外部キーとして存在し、1 対多で E-R 図が書かれている。ページ 22 $>$ (3) $>$ $\textcircled{\scriptsize 5}$に　
  「品目のうちの調達品目には、原材料及び外注成型材料が含まれる。 $\sim$ 」とあるので、

  ```mermaid
  flowchart TD
    A[食材業者] ---> B[調達品目]
    B --- C{ }
    C --- D[原材料]
    C --- E[外注成型材料]
  ```

  となる。

- 内製品目

  ページ 22 $>$ (3) $>$ $\textcircled{\scriptsize 6}$に　
  「品目のうちの内製品目には、生地材料、内製成型材料及び製品が含まれる。 $\sim$ 」とあるので、

  ```mermaid
  flowchart TD
      A[内製品目] --- B{ }
      B --- C[生地材料]
      B --- D[内製成型材料]
      B --- E[製品]
  ```

  となる。

- 貯蔵品目

  ページ 22 $>$ (3) $>$ $\textcircled{\scriptsize 4}$に　
  「品目のうちの貯蔵品目には、原材料、生地材料及び外注成型材料が含まれる。 $\sim$ 」とあるので、

  ```mermaid
  flowchart TD
      A[貯蔵品目] --- B{ }
      B --- C[原材料]
      B --- D[生地材料]
      B --- E[外注成型材料]
  ```

  となる。

- 原材料

  `原材料分類コード`が外部キーとして存在し、これは 1 対多の関係をもつので、

  ```mermaid
  flowchart TD
    A[原材料分類] ---> B[原材料]
  ```

  となる。

- 生地材料

  外部キーは存在しないので、特になし。

- 成型材料

  ページ 22 $>$ (3) $>$ $\textcircled{\scriptsize 3}$に　
  「成型材料には、成型部門が成型する内製成型材料と、食材業者から調達する外注成型材料がある。 $\sim$ 」とあるので、

  ```mermaid
  flowchart TD
    A[成型材料] --- B{ }
    B --- C[内製成型材料]
    B --- D[外注成型材料]
  ```

  となる。

- 内製成型材料

  `代替外注成型材料品目コード`が外部キーとして存在し、ページ 22 $>$ (3) $>$ $\textcircled{\scriptsize 3}$に　
  「 $\sim$ 内製成型材料には、対応する代替外注成型材料を一つ決めて設定する。外注成型材料が代替できる内製成型材料は、一つだけである」とあり、1 対 1 の関係になっているのが分かるので、

  ```mermaid
  flowchart TD
    A[内製成型材料] --- B[外注成型材料]
  ```

  となる。

- 外注成型材料

  外部キーは存在しないので、特になし。

- 製品

  `内製成型材料品目コード`が外部キーとして存在し、ページ 23 $>$ $\textcircled{\scriptsize 10}$に　
  「製品には、1 回の製造単位としての焼成ロットサイズ、及び焼成に用いる内製成型材料を設定する。一つの内製成型材料からは、一つの製品だけ製造する。」とあり、1 対 1 の関係になっているのが分かるので、

  ```mermaid
  flowchart TD
    A[内製成型材料] --- B[製品]
  ```

  となる。

- 生地材料レシピ

  `生地材料品目コード`と`使用品目コード(原材料品目コード)`が外部キーとして存在し、複合キーとなっているので、それぞれの対応する関係と 1 対多の関係になるので、

  ```mermaid
  flowchart TD
    A[生地材料] ---> C[生地材料レシピ]
    B[原材料] ---> C
  ```

  となる。

- 成型材料レシピ

  `内製成型材料品目コード`と`使用品目コード(原材料品目コードと生地材料品目コード)`が外部キーとして存在し、複合キーとなっているので(多対多の関係を解消するため)、それぞれの対応する関係と 1 対多の関係になる。
  また、原材料と生地材料品目は貯蔵品目のサブタイプとなっており、貯蔵品目と 1 対多の関係となるので、

  ```mermaid
  flowchart TD
    A[貯蔵品目] ---> C[成型材料レシピ]
    B[内製成型材料品目コード] ---> C
  ```

  となる。

- 貯蔵品目在庫

  `貯蔵庫部門コード`と`貯蔵品目コード`が外部キーとして存在し、複合キーとなっているので(多対多の関係を解消するため)、それぞれの対応する関係と 1 対多の関係になるので、

  ```mermaid
  flowchart TD
  A[貯蔵庫] ---> C[貯蔵品目在庫]
  B[貯蔵品目] ---> C
  ```

##### (2)

![午後2 問2 図2](/img/png/Database/database-specialist/H31/2-2-figure-2.png "午後2 問2 図2")

- 要求

  `要求元部門コード`が外部キーとして存在するが、今回の E-R 図には関係を書く必要がない。

- 要求明細

  `要求番号`と`製品品目コード`が外部キーとして存在し、要求明細番号も主キーとしているので、要求と要求明細は 1 対多の関係であることが分かるので、

  ```mermaid
  flowchart TD
    A[要求] ---> B[要求明細]
  ```

  となる。

- 供給

  供給元部門コードと供給先部門コードが外部キーとして存在するが、今回の E-R 図には関係を書く必要がない。

- 供給明細

  供給番号と要求番号と要求明細番号を外部キーとして存在し、供給番号は供給明細番号が主キーとして存在することから供給と供給明細は 1 対多の関係となることが分かる。
  また、ページ 24 $>$ (2) $>$ $\textcircled{\scriptsize 2}$に「 $\sim$ 要求明細に対応させて供給明細を起こし、実際の供給数量を記録する。 $\sim$ 」　
  とあるので、要求明細と供給明細は 1 対 1 の関係となるので、

  ```mermaid
  flowchart TD
    A[供給] ---> B[供給明細]
    C[要求明細] --- B
  ```

  となる。

- 製造実績

  $\circ$$\circ$実績票についてページ 25 $>$ $\textcircled{\scriptsize 3}$, $\textcircled{\scriptsize 5}$とページ 26 $>$ $\textcircled{\scriptsize 9}$に書かれている。
  それぞれ製造番号で識別しているのでスーパタイプとサブタイプに分けることができる。スーパタイプとサブタイプに分けずに、サブタイプにスーパタイプの情報を全て持たせるパターンも存在するため、どちらかに決めることは
  できません。しかし、これは既に関係スキーマ表に書かれているので、

  ```mermaid
  flowchart TD
    A[製造実績] --- B{ }
    B --- C[焼成実績]
    B --- D[成型実績]
    B --- E[Mix実績]
  ```

  となる。

- 焼成実績

  `焼成部門コード`が外部キーとして存在するが、今回の E-R 図には書かなくて良い。

- 成型実績

  `成型材料品目コード`と`成型部門コード`と`成型材料製造依頼番号`が外部キーとして存在し、成型材料品目コードと成型部門コードは今回の E-R 図には書かなくて良い。
  また、ページ 25 $>$ $\textcircled{\scriptsize 5}$に「成型材料製造依頼に対して製造可否が可となった分について、成型ロット単位の成型実績を記録する伝票で、製造番号で識別する。」
  と書かれているので、成型材料依頼と 1 対 1 の関係であることが分かるので、

  ```mermaid
  flowchart TD
    A[成型材料製造依頼] --- B[成型実績]
  ```

  となる。

- Mix 実績

  `Mix部門コード`と`補充要求番号`が外部キーとして存在し、Mix 部門コードは今回の E-R 図には書かなくて良い。
  また、ページ 26 $>$ $\textcircled{\scriptsize 9}$に「生地材料補充要求に対する Mix の実績で、製造番号で識別する。 $\sim$ 」と書かれているので、
  生地材料補充要求と 1 対 1 の関係となるので、

  ```mermaid
  flowchart TD
    A[生地材料補充要求] --- B[Mix実績]
  ```

  となる。

- 焼成実績供給引当

  多対多の関係を解消するため用意された中間テーブルなので、対応する外部キーと 1 対多, 多対 1 の関係になるので、

  ```mermaid
  flowchart TD
    A[供給明細] ---> C[焼成実績供給引当]
    B[焼成実績] ---> C
  ```

  となる。

- 成型材料製造依頼

  `依頼元部門コード`と`内製成型材料品目コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。

- 払出依頼

  `払出依頼元製造部門コード`と`依頼先貯蔵庫部門コード`と`成型材料製造依頼番号`と`補充要求番号`が外部キーとして存在しているが、払出依頼元製造部門コードと依頼先貯蔵庫部門コードは今回の E-R 図には書かなくて良い。
  ページ 25 $>$ $\textcircled{\scriptsize 6}$に「成型材料製造依頼に対して製造可否が可となった分については、 $\sim$ 」と書かれているので、
  成型材料製造依頼と 1 対 1 の関係であることが分かる。また、「後述する生地材料補充要求について、その生地材料の製造に必要な原材料の払出しを依頼する。」と書かれており、
  1 回の払出しで必要な原材料(複数もありうる)を依頼するので、生地材料補充要求と 1 対 1 の関係となることが分かるので、

  ```mermaid
  flowchart TD
    A[成型材料製造依頼] --- C[払出依頼]
    B[生地材料補充要求] --- C
  ```

  となる。

- 払出依頼明細

  `払出番号`と`貯蔵品目コード`が外部キーとして存在しているが、貯蔵品目コードは今回の E-R 図には書かなくて良い。
  払出番号と払出明細番号が主キーとなっているので、同じ払出番号に違う払出明細番号が振られることがあることが分かるので、

  ```mermaid
  flowchart TD
    A[払出番号] ---> B[払出依頼明細]
  ```

  となる。

- 払出実績明細

  主キーが外部キーとなっているので、複数の値をとることがない。だから、払出依頼明細と 1 対 1 の関係となるので

  ```mermaid
  flowchart TD
    A[払出依頼明細] --- B[払出実績明細]
  ```

  となる。

- 注文

  `注文貯蔵庫部門コード`と`食材業者コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。

- 補充要求

  `要求元貯蔵庫部門コード`と`貯蔵品目コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。
  ページ 25 $>$ $\textcircled{\scriptsize 8}$に
  「 $\sim$ 発行した補充要求書を、調達品目の要求(調達品目補充要求)と生地材料の要求(生地材料補充要求)に分類する。 $\sim$ 」とあるので、　
  補充要求は調達品目補充要求と生地材料補充要求のスーパタイプとなっていることが分かるので、

  ```mermaid
  flowchart TD
    A[補充要求] --- B{ }
    B --- C[調達品目補充要求]
    B --- D[生地材料補充要求]
  ```

  となる。

- 生地材料補充要求

  `要求先Mix部門コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。

- 調達品目補充要求

  `注文番号`が外部キーとして存在している。
  ページ 25 $>$ $\textcircled{\scriptsize 8}$に
  「 $\sim$ 調達品目補充要求は、食材業者ごとにくくって注文を発行する。調達品目補充要求は、注文に対する注文明細に位置付ける。」とあるので、
  注文と 1 対多の関係になることが分かるので、

  ```mermaid
  flowchart TD
    A[注文番号] ---> B[調達品目補充要求]
  ```

  となる。

- 納品

  `納品貯蔵庫部門コード`と`食材業者コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。

- 納品明細

  `納品番号`と`補充番号`が外部キーとして存在している。
  納品番号と納品明細番号が主キーとなっているので、複数の納品番号に違う納品明細番号が振られることがあるので納品と 1 対多の関係であることが分かる。
  ページ 26 $>$ $\textcircled{\scriptsize 10}$に
  「食材業者からの納品の際に受領する伝票で、納品番号で識別する。注文に対する納品は、ものによって複数回に分かれることがあるが明細の単位は維持される。 $\sim$ 」とあるので、
  調達品目補充要求と 1 対 1 の関係であることが分かるので、

  ```mermaid
  flowchart TD
    A[納品明細] --- B[調達品目補充要求]
  ```

  となる。

#### 設問２

##### (1)

![午後2 問2 表1](/img/png/Database/database-specialist/H31/2-2-chart-1.png "午後2 問2 表1")

- $\textcircled{\scriptsize 1}$

  ページ 26 $>$ 2. 業務改革策に基づく業務 $>$ (1)に
  「新館 Mix 部門と新館成型部門を廃止し、それぞれ本館 Mix 部門、本館成型部門に集約する。それ以外の部門は現状のままとする。」とあるので
  新館 Mix 部門と新館成型部門の物流はいらなくなるので、`9`, `10`, `12`, `14`となる。また、新館 Mix 部門がなくなるので貯蔵庫に原材料を送る必要もないので
  `3`行目の物流も不必要となる。

  合わせると`3, 9, 10, 12, 14`行目がなくなる。

- $\textcircled{\scriptsize 2}$

  ページ 26 $>$ 1. 業務改革策とその背景 $>$ (2)に
  「 $\sim$ 焼成指示に基づいて焼成を実施する。」とあるので、15,17 ともに`焼成指示`となる。

- $\textcircled{\scriptsize 3}$

  ![午後2 問2 表2](/img/png/Database/database-specialist/H31/2-2-chart-2.png "午後2 問2 表2")

  新館 Mix 部門と新館成型部門を廃止する前は

  ```mermaid
  flowchart TD
    A[新館Mix部門] ---> B[新館成型部門]
    B ---> C[新館焼成部門]
    D[本館Mix部門] ---> E[本館成型部門]
    E ---> F[本館焼成部門]
  ```

  という流れで行なっていたが、廃止後は

  ```mermaid
  flowchart TD
    D[本館Mix部門] ---> E[本館成型部門]
    E ---> F[本館焼成部門]
    E ---> C[新館焼成部門]
  ```

  の流れで物流が流れている。しかし、現在の表 1 では本館成型部門から新館焼成部門への物流がない。
  そのため、この本館成型部門から新館焼成部門への物流が答えとなる。

##### (3)

先に関係スキーマを埋める。
![午後2 問2 図6](/img/png/Database/database-specialist/H31/2-2-figure-6.png "午後2 問2 図6")

- l

  ページ 26 $>$ 1. 業務改革策とその背景 $>$ (2)に
  「要求から、製品ごとに必要な焼成ロット数を求め、焼成指示を作成する。 $\sim$ 」と書かれているので、一つの要求から複数の焼成指示が作成されることが分かる。
  また、「 $\sim$ 焼成ロットの端数の無駄と、内製限定となる焼成ロットを最小にする。焼成指示に基づいて焼成を実施する。」とあり、焼成ロットの端数が生じてしまうことが分かる。
  つまり、1 つの焼成指示で複数の要求物を作成する可能性もあるため、焼成指示と要求は 1 対多となるので、合わせると要求と焼成指示は多対多の関係となる。
  そのため、中間の関係を作成し、1 対多、多対 1 の関係になるようにする必要がある。
  焼成指示要求引当テーブルはこの中間テーブルとなっており、主キーはそれぞれの主キー合わせた複合キーとなる。
  また、幾つ引き当てたのかという情報を保持する必要があるので(A の焼成指示で B の要求に C 個引き当てた)、引当数量も属性として持たせる必要がある。

  > <UnderLine>対象年月日</UnderLine>, <UnderLine>対象時間帯</UnderLine>, <UnderLine>焼成部門コード</UnderLine>
  > , <UnderLine>焼成番号</UnderLine>, <UnderLine>要求番号</UnderLine>, <UnderLine>要求番号明細</UnderLine>
  > , 引当数量

  となる。

- m

  ページ 27 $>$ $\textcircled{\scriptsize 4}$に
  「内製限定にした焼成指示を先に、成型部門に対して成型材料製造依頼をかける。」とあるので、
  どの焼成指示に対しての成型材料製造依頼なのかという情報が必要となるので、

  > <UnderLine style="dotted">対象年月日</UnderLine>, <UnderLine style="dotted">対象時間帯</UnderLine>, <UnderLine style="dotted">焼成部門コード</UnderLine>, <UnderLine style="dotted">焼成番号</UnderLine>

  となる。

- n

  [設問 2 (1) $\textcircled{\scriptsize 2}$](#1-4)(表の 15, 17 行目)より焼成指示に対して 1 つの焼成実績を作成することが分かる。
  そのため、焼成実績には対応する焼成指示の情報を持つ必要があるので、抜け落ちている`対象年月日`, `対象時間帯`, `焼成番号`を書く必要があるが、
  ページ 27 $>$ 1. 概念データモデル及び関係スキーマの設計方針 $>$ (7)に　
  「サブタイプに継承するスーパタイプの属性は、サブタイプにおいて外部キーの役割を持つことができる。この場合、継承した属性は、サブタイプの関係スキーマ上で、前後を"\["と"]"で挟んで明示する。」
  とあるので、対象年月日と対象時間帯は焼成実績のスーパタイプである製造実績に存在するので、

  > [<UnderLine style="dotted">対象年月日</UnderLine>], [<UnderLine style="dotted">対象時間帯</UnderLine>], <UnderLine style="dotted">焼成番号</UnderLine>

  となる。

##### (2)

- 要求

  `要求元部門コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。

- 要求明細

  `要求番号`と`製品品目コード`が外部キーとして存在している。製品品目コードは今回の E-R 図には書かなくて良い。
  要求番号と要求明細番号の複合キーが主キーとなっているので、要求と 1 対多の関係であることが分かるので、

  ```mermaid
  flowchart TD
    A[要求] ---> B[要求明細]
  ```

  となる。

- 焼成指示

  `製品品目コード`が外部キーとして存在しているが、今回の E-R 図には書かなくて良い。

- 焼成指示要求引当

  焼成指示と要求明細が多対多の関係となっているのを解消するための中間の関係であるので、それぞれと 1 対多、多対 1 の関係になっている。
  そんため、

  ```mermaid
  flowchart TD
    A[要求明細] ---> C[焼成指示要求引当]
    B[焼成指示] ---> C
  ```

  となる。

- 成型材料製造依頼

  焼成指示の主キーを外部キーとして持っている。
  ページ 27 $>$ $\textcircled{\scriptsize 4}$に　
  「 $\sim$ 成型部門は、成型能力がある限り製造可否を'可'と回答し、成型能力が不足する分については製造可否を'否'と回答する。
  成型部門が製造可否を'否'と回答した分は、焼成部門が、同じロケーション内の貯蔵庫に対して、代替の外注成型材料の払出依頼をかける」とあるので、
  成型可能であるか判定し、可能であればそのまま生産、不可能であれば、外注するといった形を取っているので、内部生産か外注かを判定しているだけなので、
  焼成指示と 1 対 1 の関係であることが分かるので、

  ```mermaid
  flowchart TD
    A[焼成指示] --- B[成型材料製造依頼]
  ```

  となる。

- 製造実績

  前の(図 4)情報と同じなので焼成実績のスーパタイプとなっているので、

  ```mermaid
  flowchart TD
    A[製造実績] --- B{ }
    B --- C[焼成実績]
  ```

  となる。

- 焼成実績

  焼成指示と 1 対 1 となるのは変更後の表 1 から分かるので、

  ```mermaid
  flowchart TD
    A[焼成指示] --- B[焼成実績]
  ```

  となる。
