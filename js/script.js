document.addEventListener('DOMContentLoaded', () => {
    // Topに戻るボタンの要素を取得
    const topButton = document.querySelector('.top-button');

    // ボタンが存在する場合のみ処理を実行
    if (topButton) {
        topButton.addEventListener('click', (event) => {
            event.preventDefault(); // デフォルトのアンカーリンク挙動をキャンセル

            // ページの最上部へスムーズにスクロール
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // スムーズなスクロールを有効にする
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const topLink = document.querySelector('.top-link-js'); // クラス名を適宜変更

    if (topLink) {
        topLink.addEventListener('click', function(e) {
            e.preventDefault(); // デフォルトのアンカーリンクの挙動をキャンセル

            window.scrollTo({
                top: 0,
                behavior: 'smooth' // スムーズスクロール
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  // コンテナを指定
  const section = document.querySelector('.bubble-background');

  // 泡を生成する関数
  const createBubble = () => {
    const bubbleEl = document.createElement('span');
    bubbleEl.className = 'bubble';
    const minSize = 10;
    const maxSize = 50;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(bubbleEl);

    // 一定時間が経てば泡を消す
    setTimeout(() => {
      bubbleEl.remove();
    }, 8000);
  }

  // 泡の生成を開始するトリガー（初期値はOFF）
  let activeBubble = null;

  // 泡の生成をストップする関数
  const stopBubble = () => {
    clearInterval(activeBubble);
  };

  // Intersection observerに渡すコールバック関数
  const cb = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        activeBubble = setInterval(createBubble, 600);
      } else {
        stopBubble();
      }
    })
  };

  // Intersection observerに渡すオプション
  const options = {
    rootMargin: "100px 0px"
  }

  // Intersection observerの初期化
  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfill
  io.observe(section);
});