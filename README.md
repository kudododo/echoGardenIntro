# Echo Garden Site

Echo Garden を中心に、Hit Balloon / Air Builder も含めた紹介サイトです。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend (メール送信)
- Google reCAPTCHA

## セットアップ

1. 依存関係のインストール

```bash
npm install
```

2. 環境変数の設定

`.env.example` を `.env.local` にコピーして、必要な値を設定してください。

```bash
cp .env.example .env.local
```

必要な環境変数:
- `RESEND_API_KEY`: ResendのAPIキー
- `CONTACT_FROM`: 送信元メールアドレス
- `CONTACT_TO`: 送信先メールアドレス
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Google reCAPTCHAのサイトキー
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHAのシークレットキー

3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## デプロイ

Vercelにデプロイする場合:

1. Vercelにプロジェクトをインポート
2. 環境変数を設定
3. デプロイ

## 必要なアセット

以下の画像・動画ファイルを `public` ディレクトリに配置してください:

- `/hero.mp4` または `/hero.jpg` (ヒーローセクション)
- `/apps/echo-garden.jpg`
- `/apps/hit-balloon.jpg`
- `/apps/air-builder.jpg`
- `/cases/eg-01.jpg`
- `/cases/eg-02.jpg`
- `/cases/eg-03.jpg`
- `/ogp.png` (OGP画像)

動画が存在しない場合は、自動的に静止画にフォールバックします。

