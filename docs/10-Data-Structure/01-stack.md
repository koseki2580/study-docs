---
title: スタック
sidebar_label: スタック
draft: false
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## スタックとは

データを後入れ先出し(LIFO : Last In First Out)のリスト構造を持つデータ構造を`スタック(stack)`という。

![イメージ図](/img/svg/Data-structure/stack/stack-1.drawio.svg "スタック")

ほとんどの言語で標準で実装されているのでそれ使用するのが一番高速に動作するため、標準で実装されているものを使用する。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="stack.py"
# Pythonの標準ライブラリ
from collections import deque

# 初期化
box = deque()

# push 要素を一番後ろに追加する
box.append(1)
box.append(2)
box.append(3)
print(box) # deque([1, 2, 3])
box.append(4)
print(box) # deque([1, 2, 3, 4])

# pop 一番後ろ（新しい）要素を取り出し
print(box.pop()) # 4
print(box.pop()) # 3
print(box) # deque([1, 2])
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="stack.cpp"
int main() {
    // 初期化
    stack<int> s;
    // push　要素を後ろに追加
    s.push(1);
    s.push(2);
    s.push(3);
    // 一番後ろの要素を確認
    cout << s.top() << endl; // 3  s:[1,2,3]
    s.push(4);
    cout << s.top() << endl; // 4  s:[1,2,3,4]

    // pop 一番後ろ（一番新しい）要素を取り除く
    s.pop();
    s.pop();
    cout << s.top() << endl; // 2  s:[1,2]
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="stack.cs"
public static void Main()
{
  // 初期化
  Stack<int> s = new Stack<int>();

  // Push 要素を一番後ろに追加
  s.Push(1);
  s.Push(2);
  s.Push(3);
  Console.WriteLine(s.Peek()); // 3  s:[1,2,3]
  s.Push(4);
  Console.WriteLine(s.Peek()); // 4  s:[1,2,3,4]

  // Pop　一番後ろ（一番新しい）要素を取り除く
  s.Pop();
  s.Pop();
  Console.WriteLine(s.Peek()); // 2  s:[1,2]

  return;
}
```

  </TabItem>
</Tabs>

### Pop

データを後ろから取り出す処理。言語により、名称が異なるがスタックのデータ構造でデータを取り出す処理を`Pop`という。

![イメージ図](/img/svg/Data-structure/stack/stack-2.drawio.svg "ポップ")

### Push

データを後ろに入れる処理。言語により、名称が異なるがスタックのデータ構造でデータを入れる処理を`Push`という。

![イメージ図](/img/svg/Data-structure/stack/stack-3.drawio.svg "プッシュ")
