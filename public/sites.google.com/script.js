let PI_STR = ""; // 後でファイルから読み込む

fetch("pi.txt")
  .then(response => response.text())
  .then(text => {
    PI_STR = text.trim(); // 改行を除去
    initGame();
  });

function initGame() {
  let index = 0;
  const status = document.getElementById("status");

  // ページ全体でキー入力を監視
  document.addEventListener("keyup", function (event) {
    const key = event.key;

    // 数字キー以外は無視
    if (key < "0" || key > "9") {
      return;
    }

    // 正解の1文字と比較
    if (key === PI_STR[index]) {
      index++;
      status.textContent = `現在${index}`;
    } else {
      status.textContent = `結果${index}`;
      index = 0;
    }
  });
}
