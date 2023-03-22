---
title: ベルマン-フォード法
sidebar_label: ベルマン-フォード法
draft: true
toc_max_heading_level: 5
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## ベルマン-フォード法とは

ダイクストラ法と同様で単一始点最短経路問題を解くためアルゴリズムであり、辺のコストが全て非負の場合はダイクストラ法の方が高速に動作する。

ダイクストラ法は負のコストが存在する場合には無限に処理が走ってしまうため、使用することができない。しかし、ベルマン-フォード法は負の経路を検出することができるため、負の経路が存在した場合でも正常に動作する(コストが正常に求められるわけではない)。
