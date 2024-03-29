---
title: 優先度付きキュー
sidebar_label: 優先度付きキュー
draft: false
toc_max_heading_level: 4
tags: [データ構造]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 優先度付きキューとは

要素を取り出す際に入れた順ではなく、何らかの取り出し順(優先度)を定めて取り出していくデータ構造のことを`優先度付きキュー`という。

![イメージ図](/img/svg/Data-structure/priority-queue/priority-queue-1.drawio.svg "優先度付きキュー")

優先度付きキューは様々なデータ構造(木構造・配列)を用いて実装することが可能である。

### ヒープ

優先度付きキューの実装の 1 つで子要素は親要素より常に大きい(小さい)か等しいという制約を持つ 2 分木構造の事を`ヒープ`という。

![イメージ図](/img/svg/Data-structure/priority-queue/priority-queue-2.drawio.svg "ヒープ")

図のように子は必ず自分より大きいか小さくなっている。

#### コード

<Tabs groupId="code">
  <TabItem value="python" label="Python" default>

```python title="heap.py"
import heapq

box = [3, 19, 7, 16, 18, 2, 11, 4, 5]

# ヒープの並びに変換 → 2 4 3 5 18 7 11 16 19
heapq.heapify(box)

# 要素の取り出し → 2
b = heapq.heappop(box)

# 要素を追加 →　3 4 7 5 18 19 11 16 10
heapq.heappush(box, 10)

# 要素を追加 → 1 3 7 5 4 19 11 16 10 18
heapq.heappush(box, 1)
```

:::info
Python だと小さい順に並び、大きい順に並べることができない。そのため、全ての値に-1 を掛けること、つまり大小を反転させることで大きい順から値を取り出すことができる。
:::

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp title="heap.cpp"
int main()
{
    vector<int> temp = {3, 19, 7, 16, 18, 2, 11, 4, 5};
    priority_queue<int> box;

    // 要素を挿入 → 19 18 16 11 7 5 4 3 2
    for(auto x: temp) box.push(x);

    // 要素の取り出し → 19
    int b = box.top();box.pop();

    // 要素を挿入 → 18 16 11 10 7 5 4 3 2
    box.push(10);

    // 要素を挿入 → 18 16 11 10 7 5 4 3 2 1
    box.push(1);
    return 0;
}

```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp title="heap.cs"
class MainClass
{
  public static void Main(string[] args)
  {
      Heap box = new Heap(50);
      List<int> temp = new List<int>() { 3, 19, 7, 16, 18, 2, 11, 4, 5 };

      // 要素を挿入 → 2 4 3 5 18 7 11 19 16
      for (int i = 0; i < temp.Count; ++i)
      {
          box.push(temp[i]);
      }

      // 要素の取り出し → 2
      int b = box.pop();

      // 要素を挿入 → 3 4 7 5 18 16 11 19 10
      box.push(10);


      // 要素を挿入 → 1 3 7 5 4 16 11 19 10 18
      box.push(1);
  }
}
class Heap
{
  private int[] heap;
  public int size { get; private set; }
  public int this[int index]
  {
      private set {  }
      get { return this.heap[index]; }
  }
  public Heap(int n)
  {
      size = 0;
      heap = new int[n];
  }

  public void push(int x)
  {
      int num = size++;
      while (num > 0)
      {
          int p = (num - 1) / 2;
          if (heap[p] <= x) break;
          heap[num] = heap[p];
          num = p;
      }
      heap[num] = x;
  }
  public int pop()
  {
      int ret = heap[0];
      int x = heap[--size];
      int num = 0;
      while (num * 2 + 1 < size)
      {
          int a = num * 2 + 1;
          int b = num * 2 + 2;
          if (b < size && heap[b] < heap[a]) a = b;
          if (heap[a] >= x) break;
          heap[num] = heap[a];
          num = a;
      }
      heap[num] = x;
      return ret;
  }
}
```

:::info
.NET 6 から`PriorityQueue`クラスが実装されています。
:::

  </TabItem>
</Tabs>
