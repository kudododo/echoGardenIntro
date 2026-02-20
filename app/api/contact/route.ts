import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { adminEmailTemplate, autoReplyTemplate, ContactFormData } from '@/lib/email-templates'

// SMTPトランスポーター設定
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set')
    return false
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, org, category, message, recaptchaToken } = body

    // バリデーション
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    if (message.length < 30) {
      return NextResponse.json(
        { error: '内容は30文字以上で入力してください' },
        { status: 400 }
      )
    }

    // reCAPTCHA検証
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHAが確認されていません' },
        { status: 400 }
      )
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA検証に失敗しました' },
        { status: 400 }
      )
    }

    // メールアドレス設定
    const siteEmail = process.env.SITE_EMAIL || 'info@echo-garden.jp'
    const siteName = process.env.SITE_NAME || 'Echo Garden'

    // フォームデータ
    const formData: ContactFormData = {
      name,
      email,
      org: org || '',
      category,
      message,
    }

    const transporter = createTransporter()

    // 1. 管理者宛メール（自分への通知）
    await transporter.sendMail({
      from: `"${siteName}" <${siteEmail}>`,
      to: siteEmail,
      replyTo: email, // 返信先を送信者に設定
      subject: adminEmailTemplate.subject(formData),
      text: adminEmailTemplate.body(formData),
    })

    // 2. 送信者宛メール（自動返信）
    await transporter.sendMail({
      from: `"${siteName}" <${siteEmail}>`,
      to: email,
      subject: autoReplyTemplate.subject(formData),
      text: autoReplyTemplate.body(formData),
    })

    return NextResponse.json(
      { success: true, message: '送信が完了しました' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました。時間をおいて再度お試しください。' },
      { status: 500 }
    )
  }
}
