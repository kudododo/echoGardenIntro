/**
 * メールテンプレート設定
 * 
 * このファイルでメールの件名・本文を編集できます。
 * {name}, {email}, {org}, {category}, {message} がフォームの値に置換されます。
 */

export interface ContactFormData {
  name: string
  email: string
  org: string
  category: string
  message: string
}

// ============================================
// 管理者宛メール（自分への通知）
// ============================================
export const adminEmailTemplate = {
  subject: (data: ContactFormData) => 
    `【問い合わせ】${data.category} / ${data.name} 様`,

  body: (data: ContactFormData) => `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　新しい問い合わせがありました
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お名前】
${data.name}

【メールアドレス】
${data.email}

【会社・団体名】
${data.org || '未入力'}

【相談内容】
${data.category}

【内容】
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
このメールは Echo Garden ウェブサイトのフォームから送信されました。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()
}

// ============================================
// 送信者宛メール（自動返信）
// ============================================
export const autoReplyTemplate = {
  subject: (data: ContactFormData) => 
    `【Echo Garden】お問い合わせありがとうございます`,

  body: (data: ContactFormData) => `
${data.name} 様

この度は Echo Garden へお問い合わせいただき、
誠にありがとうございます。

以下の内容でお問い合わせを承りました。
通常1〜3営業日以内にご連絡させていただきます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【相談内容】
${data.category}

【内容】
${data.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※ このメールは自動送信されています。
　ご返信いただいてもお答えできない場合がございます。

──────────────────────────────────
Echo Garden
Email: info@echo-garden.jp
Web: https://echo-garden.jp
──────────────────────────────────
`.trim()
}

