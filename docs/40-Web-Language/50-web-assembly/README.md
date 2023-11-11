---
title: WebAssembly(C++) 環境構築
sidebar_label: WebAssembly(C++) 環境構築
draft: false
toc_max_heading_level: 4
tags: [WebAssembly, emscripten, 環境構築]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 環境構築

Mac 環境(Ventura)での環境構築手順を残していく。

[https://emscripten.org/docs/getting_started/downloads.html](https://emscripten.org/docs/getting_started/downloads.html)の手順に沿って環境構築を行う。

1. `git clone https://github.com/emscripten-core/emsdk.git`を実行し、ファイルを手元に持ってくる。
2. `cd emsdk`でディレクトリを移動する。
3. `./emsdk install latest`を実行する。
4. `./emsdk activate latest`を実行する。
5. `source ./emsdk_env.sh`を実行する。

だけで必要なものはインストールできる。

### 動作確認

1. `**/emsdk/upstream/emscripten`のディレクトリに移動する。
2. `./em++ -v`を実行すると以下の様な情報を取得できる

   ```txt
   emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 3.1.47 (431685f05c67f0424c11473cc16798b9587bb536)
   clang version 18.0.0 (https://github.com/llvm/llvm-project 21030b9ab4487d845e29792063f5666d8c4b8e09)
   Target: wasm32-unknown-emscripten
   Thread model: posix
   InstalledDir: ~/WebAssembly/c++/emsdk/upstream/bin
   ```

3. コマンドで実行できるようにエイリアスをつける。

   ```bash
   alias em++="~/WebAssembly/c++/emsdk/upstream/emscripten/em++"
   ```

   これで`em++`コマンドで`em++`のコンパイルが可能となる。
   `~/.zshrc`などに記述しておくことで`em++`をターミナルを再起動した場合でもエイリアスでコマンド実行が可能となります。

   :::note
   シンボリックリンクを貼ると python ファイルの検索でシンボリックリンクが存在するディレクトリを検索してしまい、うまく動作しなかった。
   この辺りにあまり詳しくないのでシンボリックリンクでもできる方法があれば教えていただければと思います。
   :::

4. `src`ディレクトリを作成し以下のファイルを作成する。

   ```cpp title="hello_world.cpp"
   /*
   * Copyright 2011 The Emscripten Authors.  All rights reserved.
   * Emscripten is available under two separate licenses, the MIT license and the
   * University of Illinois/NCSA Open Source License.  Both these licenses can be
   * found in the LICENSE file.
   */

   #include <stdio.h>

   int main() {
    printf("hello, world!\n");
    return 0;
   }
   ```

5. `em++ src/hello_world.cpp -o ./output/hello.html`を実行し、html ファイルを作成する。(`output`ディレクトリが存在しない場合はエラーが出るので注意)
6. 4.で生成されたファイル html を開いても WebAssembly は動作しないのでサーバを立てて開くと`hello world`と画面に表示される。
7. 次は以下のファイルを作成して、`em++ src/canvas.cpp -o ./output/canvas.html`を実行する。

   ```cpp title="canvas.cpp"
   // Copyright 2011 The Emscripten Authors.  All rights reserved.
   // Emscripten is available under two separate licenses, the MIT license and the
   // University of Illinois/NCSA Open Source License.  Both these licenses can be
   // found in the LICENSE file.

   #include <stdio.h>
   #include <SDL/SDL.h>

   #ifdef __EMSCRIPTEN__
   #include <emscripten.h>
   #endif

   int main(int argc, char** argv) {
     printf("hello, world!\n");

     SDL_Init(SDL_INIT_VIDEO);
     SDL_Surface *screen = SDL_SetVideoMode(256, 256, 32, SDL_SWSURFACE);

   #ifdef TEST_SDL_LOCK_OPTS
     EM_ASM("SDL.defaults.copyOnLock = false; SDL.defaults.discardOnLock = true; SDL.defaults.opaqueFrontBuffer = false;");
   #endif

     if (SDL_MUSTLOCK(screen)) SDL_LockSurface(screen);
     for (int i = 0; i < 256; i++) {
       for (int j = 0; j < 256; j++) {
   #ifdef TEST_SDL_LOCK_OPTS
         // Alpha behaves like in the browser, so write proper opaque pixels.
         int alpha = 255;
   #else
         // To emulate native behavior with blitting to screen, alpha component is ignored. Test that it is so by outputting
         // data (and testing that it does get discarded)
         int alpha = (i+j) % 255;
   #endif
         *((Uint32*)screen->pixels + i * 256 + j) = SDL_MapRGBA(screen->format, i, j, 255-i, alpha);
       }
     }
     if (SDL_MUSTLOCK(screen)) SDL_UnlockSurface(screen);
     SDL_Flip(screen);

     printf("you should see a smoothly-colored square - no sharp lines but the square borders!\n");
     printf("and here is some text that should be HTML-friendly: amp: |&| double-quote: |\"| quote: |'| less-than, greater-than, html-like tags: |<cheez></cheez>|\nanother line.\n");

     SDL_Quit();

     return 0;
   }
   ```

### ファイルを読み込む

`Emscripten`は libc stdio API でファイルにアクセスできるファイルシステムを模擬している。
事前読み込み(--preload-file \{name\}) or 埋め込み(--embed-file \{file\})でコンパイルすることで仮想的なファイルシステムを構築する。

以下の c++のファイルと`preload/hello_world_file.txt`に何かを記述したテキストファイルを用意する。

```cpp title="hello_world_file.cpp"
// Copyright 2012 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

#include <stdio.h>

int main() {
  FILE *file = fopen("preload/hello_world_file.txt", "rb");
  if (!file) {
    printf("cannot open file\n");
    return 1;
  }
  while (!feof(file)) {
    char c = fgetc(file);
    if (c != EOF) {
      putchar(c);
    }
  }
  fclose (file);
  return 0;
}
```

ファイルの準備が完了したら以下のコマンドを実行し、確認すると txt ファイルに記述したファイルが表示される。

```zsh
em++ src/hello_world_file.cpp -o ./output/hello_file.html --preload-file preload/hello_world_file.txt
```

:::note
注意点として、txt ファイルは最後に改行で終わっている必要があります。
:::

### 最適化

`-o1`と`-o2`と言うオプションを用いることで最適化させたコードを生成することができる。

作業中にエラーが出たら随時追記していく。
