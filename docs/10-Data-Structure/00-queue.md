---
title: キュー
sidebar_label: キュー
draft: false
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## キューとは

データを先入れ先出し(FIFO : First In First Out)のリスト構造を持つデータ構造を`キュー(queue)`という。

![イメージ図](/img/svg/Data-structure/queue/queue-1.drawio.svg "キュー")

ほとんどの言語で標準で実装されているのでそれ使用するのが一番高速に動作するため、標準で実装されているものを使用する。

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="queue.py"
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

# pop 最初に入れた要素を取り出し
print(box.popleft()) # 1
print(box.popleft()) # 2
print(box) # deque([3, 4])
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="queue.cpp"
int main() {
    // 初期化
    queue<int> s;
    // push　要素を後ろに追加
    s.push(1);
    s.push(2);
    s.push(3);
    // 一番前の要素を確認
    cout << s.front() << endl; // 1  s:[1,2,3]
    s.push(4);

    // pop　一番前の要素を取り除く
    s.pop();
    cout << s.front() << endl; // 2  s:[2,3,4]
    s.pop();
    cout << s.front() << endl; // 3  s:[3,4]
    return 0;
}
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="queue.cs"
 public static void Main()
{
    // 初期化
    Queue<int> s = new Queue<int>();

    // Enqueue　要素を後ろに追加
    s.Enqueue(1);
    s.Enqueue(2);
    s.Enqueue(3);
    Console.WriteLine(s.Peek()); // 1  s:[1,2,3]
    s.Enqueue(4);

    // Dequeue 要素の一番前を取り除く
    s.Dequeue();
    Console.WriteLine(s.Peek()); // 2  s:[2,3,4]
    s.Dequeue();
    Console.WriteLine(s.Peek()); // 3  s:[3,4]
    return;
}
```

  </TabItem>
</Tabs>

### Dequeue

データを前から取り出す処理。言語により、名称が異なるが一般的にキューのデータ構造でデータを取り出す処理を`Dequeue`という。

![イメージ図](/img/svg/Data-structure/queue/queue-2.drawio.svg "デキュー")

### Enqueue

データを後ろに入れる処理。言語により、名称が異なるが一般的にキューのデータ構造でデータを入れる処理を`Enqueue`という。

![イメージ図](/img/svg/Data-structure/queue/queue-3.drawio.svg "エンキュー")
