/* =============================================================
   MCD MIX - main.js
   このファイルではJavaScriptのすべての処理を管理しています。
   各機能はコメントブロックで区切ってあるので、後から読み返しやすく
   なっています。「ここは何をしているか」を辿る用にお使いください。
   ============================================================= */

(() => {
  'use strict';


  // ===========================================================
  // 1. ユーザー設定の確認
  // ===========================================================
  // ブラウザに「動きを抑える」設定（OSの設定 → アクセシビリティ）
  // をしているユーザーには、装飾的なアニメーションを止める。
  // これはアクセシビリティ要件として推奨される対応です。
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;


  // ===========================================================
  // 2. ヘッダーのスクロール挙動
  // ===========================================================
  // ページが少し下にスクロールされたら、ヘッダーに `.is-scrolled`
  // クラスを付与する。CSS側で見た目を変えられるようになる
  //（例：影をつける、半透明から不透明にする、など）
  const header = document.querySelector('.header');

  /**
   * 現在のスクロール量を見て、ヘッダーの状態クラスを更新する関数
   */
  const updateHeaderState = () => {
    if (!header) return;
    const scrollY = window.scrollY;

    // スクロール量が16px以上なら .is-scrolled クラスを付与
    if (scrollY > 16) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  // スクロール時に毎回実行（passive: true でブラウザのパフォーマンスを最適化）
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  // ページ読み込み時に1回実行（リロード時の状態にも対応）
  updateHeaderState();


  // ===========================================================
  // 3. アンカーリンクのスムーズスクロール
  // ===========================================================
  // ナビゲーション項目をクリックしたとき、対応するセクションまで
  // なめらかに移動する。スクロール位置はヘッダーの高さ分を考慮する。
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // 「#」だけのアンカー（空リンク）は無視
      if (targetId === '#' || targetId === '') return;

      const target = document.querySelector(targetId);

      // 対応するセクションがページに存在しない場合は何もしない
      // （ヒーローしか実装していない現段階では、ほぼ全てのリンクがここ）
      if (!target) return;

      // デフォルトのジャンプ動作を停止し、自前でスクロールする
      e.preventDefault();

      // ヘッダーの高さを考慮した位置を計算
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  });


  // ===========================================================
  // 4. 【将来の拡張用】スクロール連動の演出
  // ===========================================================
  // ここに、将来追加するセクション（イベント概要・過去のイベント・
  // FAQなど）のスクロール連動演出のロジックを書きます。
  //
  // 想定している演出：
  //   - 各セクションが画面に入ったときに、要素をフェードイン
  //   - 「過去のイベント」セクションのピン留め横スクロール
  //   - 背景イラストのセクションごとの切り替え（必要なら）
  //
  // 実装には GSAP + ScrollTrigger ライブラリを使う予定です。
  // 今はヒーロー単体なので、骨組みだけ用意して空にしておきます。


})();
