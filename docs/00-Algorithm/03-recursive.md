---
title: 再帰処理
sidebar_label: 再帰処理
draft: false
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 再帰処理とは

関数・メソッド内で自分自身を呼び出し、処理を行っていくものを`再帰処理`という。(以降では関数としか記載しないがメソッドと読み替えても問題ない)

### アルゴリズム

#### 流れ

1. 関数内部で自身を呼び出す関数を作成(特定の条件で<FontColor color="red">必ず</FontColor>戻り値 or 自身の呼び出しをしない 処理を入れる)
2. 定義した関数を呼び出す

非常にシンプルになっている。

1. 関数を定義する

![イメージ図](/img/svg/Algorithm/recursive/recursive-1.drawio.svg "関数定義")

2. 関数を呼び出す

再帰処理を用いるとコードをシンプルに書くことができるが、特定の条件で自身を呼び出さないという処理を記述しないと無限ループに入り、スタックオーバーフローが起きる。
(特定の条件を入れていてもスタックが積み重なるとスタックオーバーフローを起こす)

### プログラム

ここではフィボナッチ数列を求めるコードを書く

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
def Fibonacci(n):
    if n <= 1:
        return 1
    return Fibonacci(n - 1) + Fibonacci(n - 2)
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
int Fibonacci(int n)
{
    if (n <= 1) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
public int Fibonacci(int n)
{
    if (n <= 1) return 1;
    return Fibonacci(n - 1) +Fibonacci(n - 2);
}
```

  </TabItem>
</Tabs>

## メモ化再帰とは

再帰処理では一度求めたことがある値でも再度計算を行っている。
同じ値を何度も計算するのは無駄と言えるため、一度計算したもの別の配列などに保存して計算量を削減する方法を`メモ化再帰`と呼ぶ。

上記のフィボナッチ数列を例にして、`Fibonacci (5)`を求めると

![イメージ図](/img/svg/Algorithm/recursive/recursive-2.drawio.svg "フィボナッチ")

となり、それぞれの登場回数は

|      | Fibonacci (5) | Fibonacci (4) | Fibonacci (3) | Fibonacci (2) | Fibonacci (1) | Fibonacci (0) |
| :--: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| 回数 |       1       |       1       |       2       |       3       |       5       |       3       |

である。数が大きくなると同じものが何度も登場し、さらに無駄な処理が増えていく。

### アルゴリズム

#### 流れ

1. 再帰処理と基本的には同じであり、メモした配列に値が入っていればその値を返す処理とメモする処理を追加した関数を記述
2. 関数を呼び出す

ほとんど再帰処理と変わらない

1. 再帰処理にメモする処理とメモしている値か確認する処理を追加する

![イメージ図](/img/svg/Algorithm/recursive/recursive-3.drawio.svg "メモ化")

### プログラム

`memo`配列は全て`-1`で初期化を行っている。
配列の中身が`-1`以外ならその値は計算済みを表す。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python
def Fibonacci(n):
    if n <= 1:
        return 1
    if memo[n] != -1:
        return memo[n]
    memo[n] = Fibonacci(n - 1) + Fibonacci(n - 2)
    return memo[n]
memo = [-1] * 30
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
vector<int> memo(30, -1);
int Fibonacci(int n)
{
    if (n <= 1) return 1;
    if (memo[n] != -1) return memo[n];
    return memo[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp
int[] memo = new int[30];
public int Fibonacci(int n)
{
    if (n <= 1) return 1;
    if (memo[n] != -1) return memo[n];
    return memo[n] = Fibonacci(n - 1) +Fibonacci(n - 2);
}
```

  </TabItem>
</Tabs>
