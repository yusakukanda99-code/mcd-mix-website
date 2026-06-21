# MCD MIX 確認用サイト（静的HTML・5ページ）

櫃田さんに見ていただくための、リンクを繋いだ静的HTMLサイトです。
GitHub Pages で公開すると、URLを共有するだけでブラウザで閲覧できます。

## ページ構成
- `index.html` … TOP
- `about.html` … About（MCD MIXとは／代表ご挨拶）
- `events.html` … Event 一覧
- `event-detail.html` … イベント概要（ながくてアートブック）
- `news.html` … News 一覧
- ※ 画像（.webp / .svg）は同じフォルダ内にあります。これらも一緒にアップしてください。

## GitHub Pages で公開する手順（ブラウザだけでOK）
1. GitHub にログイン → 右上「＋」→ **New repository**。
   - Repository name：例 `mcd-mix`（任意）
   - **Public** を選択 →「Create repository」。
2. 作成後の画面で **「uploading an existing file」** をクリック
   （または「Add file」→「Upload files」）。
3. このフォルダの**中身すべて**（`index.html` などのHTML＋画像＋`.nojekyll`）を
   ドラッグ＆ドロップ →「Commit changes」。
4. リポジトリ上部 **Settings → Pages**。
   - 「Build and deployment」の Source を **Deploy from a branch**。
   - Branch を **main**、フォルダを **/(root)** にして **Save**。
5. 1〜2分待つと、同じ Pages 画面に公開URLが表示されます。
   - 例：`https://（あなたのユーザー名）.github.io/mcd-mix/`
6. そのURLを櫃田さんに共有すれば、リンクを辿って各ページを確認できます。

## 補足
- TOPは `index.html` なので、`…github.io/mcd-mix/` を開くとTOPが表示されます。
- ヘッダー／フッターのナビ、TOPカード、「詳細はこちら」「お申し込みはこちら」などのリンクは、
  5ページ間で繋いであります。
- Contact・お知らせの個別記事など、まだ繋ぎ先が無い箇所は `#`（同じページ内）になっています。
- これは**見た目確認用の静的版**です。投稿で増やす機能（WordPress版）は含みません。
