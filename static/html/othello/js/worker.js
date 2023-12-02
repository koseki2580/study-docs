// worker.js
var Module = {
  onRuntimeInitialized: function () {
    // WebAssemblyが初期化された後、C++コードからデータをJavaScriptに渡すことができます
  },
  printToConsole: function (text) {
    // C++からの出力をJavaScriptのコンソールに表示
    console.log(text);
  },
};

// オセロを進行するのに使用するplayOthelloクラス
let othello;

importScripts("othello.js");

onmessage = function (e) {
  const message = e.data;
  switch (message.eventType) {
    case "createPlayOthello":
      let { isFirstPlayer, strategy, depth, maxTime, evaluation } = message;
      const strategyPtr = _malloc(strategy.length + 1); // メモリ確保
      stringToUTF8(strategy, strategyPtr, strategy.length + 1);

      const evaluationPtr = _malloc(evaluation.length + 1);
      stringToUTF8(evaluation, evaluationPtr, evaluation.length + 1);
      othello = _createPlayOthello(
        isFirstPlayer,
        strategyPtr,
        depth,
        maxTime,
        evaluationPtr
      );
      _free(strategyPtr);
      _free(evaluationPtr);

      postMessage({
        eventType: "createPlayOthello",
        result: "Othello Object Create Success",
      });
      break;
    case "put":
      let { y, x } = message;
      Module.ccall(
        "put",
        "void",
        ["number", "number", "number"],
        [othello, y, x]
      );

      postMessage({
        eventType: "put",
        result: "Success",
      });
      break;

    case "cpuPut":
      const putPointArrayPtr = _malloc(8); // 4 * 2

      Module.ccall(
        "cpuPut",
        "void",
        ["number", "number"],
        [othello, putPointArrayPtr]
      );
      // 配列のポインタを取得
      const putPointArrayPtrValue = Module.getValue(putPointArrayPtr, "i32");

      const putPointInt32Array = new Int32Array(
        Module.HEAP32.buffer,
        putPointArrayPtrValue,
        2
      );
      _free(putPointArrayPtr);
      postMessage({
        eventType: "cpuPut",
        result: "Success",
        y: putPointInt32Array[0],
        x: putPointInt32Array[1],
      });
      break;
    case "deletePlayOthello":
      _deletePlayOthello(othello);

      postMessage({
        eventType: "deletePlayOthello",
        result: "Success",
      });
      break;
    case "getLegalActions":
      // メモリ確保
      const legalActionsArrayPtr = _malloc(4);
      const legalActionsSize = _malloc(4);

      // cppの関数を実行
      Module.ccall(
        "getLegalActions",
        "void",
        ["number", "number", "number"],
        [othello, legalActionsArrayPtr, legalActionsSize]
      );

      // 配列の長さを取得
      const legalActionsSizeValue = Module.getValue(legalActionsSize, "i32");

      // 配列のポインタを取得
      const legalActionsArrayPtrValue = Module.getValue(
        legalActionsArrayPtr,
        "i32"
      );
      // 配列のデータを取得
      const legalActionsInt32Array = new Int32Array(
        Module.HEAP32.buffer,
        legalActionsArrayPtrValue,
        legalActionsSizeValue * 2
      );

      // 扱いやすい形に整形
      let legalActionsArray = [];
      for (let i = 0; i < legalActionsSizeValue; ++i) {
        legalActionsArray.push({
          row: legalActionsInt32Array[2 * i],
          col: legalActionsInt32Array[2 * i + 1],
        });
      }
      _free(legalActionsArrayPtr);
      _free(legalActionsSize);
      postMessage({
        eventType: "getLegalActions",
        result: "Success",
        legalActionsArray: legalActionsArray,
      });
      break;
    case "getBoardInfo":
      const outRows = _malloc(4); // int型のポインタを確保
      const outCols = _malloc(4); // int型のポインタを確保
      const outBoard = _malloc(4); // int型のポインタを確保

      Module.ccall(
        "getBoardInfo",
        "void",
        ["number", "number", "number", "number"],
        [othello, outBoard, outRows, outCols]
      );

      // JavaScriptから取得した整数値を読み取り
      const rows = Module.getValue(outRows, "i32");
      const cols = Module.getValue(outCols, "i32");

      // 初めにポインタのポインタの位置を取得する。
      const boardDataPtr = Module.getValue(outBoard, "i32");

      // 配列のポインタを取得
      const boardDataPtrArray = new Int32Array(
        Module.HEAP32.buffer,
        boardDataPtr,
        rows
      );

      // boardDataPtrからデータを取得してJavaScriptの配列にコピー
      const boardData = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        // ポインタから値を取得
        const boardDataPtrRowArray = new Int32Array(
          Module.HEAP32.buffer,
          boardDataPtrArray[i],
          cols
        );
        for (let j = 0; j < cols; ++j) {
          row.push(boardDataPtrRowArray[j]);
        }

        boardData.push(row);
      }

      // 確保したメモリを解放
      _free(outRows);
      _free(outCols);
      _free(outBoard);

      postMessage({
        eventType: "getBoardInfo",
        result: "Success",
        board: boardData,
      });
      break;
    case "isDone":
      const isDone = _malloc(1); // int型のポインタを確保

      Module.ccall("isDone", "void", ["number", "number"], [othello, isDone]);
      let result = Module.getValue(isDone, "i8") === 1;
      _free(isDone);
      postMessage({
        eventType: "isDone",
        result: "Success",
        isDone: result,
      });
      break;
  }
};
