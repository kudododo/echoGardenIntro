'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'

const sideInfo = [
  { title: '想定導入', desc: 'イベント/施設/教育現場など' },
  { title: '準備目安', desc: '画面（プロジェクター/LED）・マイク・PC（または運用端末）' },
  { title: 'まずは', desc: '目的と会場規模だけ教えてください。最適な構成を提案します。' },
]

type SubmitStatus = 'idle' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    category: '',
    message: '',
    consent: false,
  })

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!recaptchaToken) {
      alert('reCAPTCHAを確認してください')
      return
    }

    if (!formData.consent) {
      alert('プライバシーポリシーに同意してください')
      return
    }

    if (formData.message.length < 30) {
      alert('内容は30文字以上で入力してください')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      if (!response.ok) {
        throw new Error('送信に失敗しました')
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        org: '',
        category: '',
        message: '',
        consent: false,
      })
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-h2 font-heading font-bold">問い合わせ</h2>
          <p className="text-lg text-textSecondary">
            導入相談・デモ依頼・企画段階でもOKです。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  お名前 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  メールアドレス <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="org" className="block text-sm font-medium mb-2">
                  会社/団体名
                </label>
                <input
                  type="text"
                  id="org"
                  name="org"
                  value={formData.org}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="株式会社○○"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  相談内容 <span className="text-accent">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="導入相談">導入相談</option>
                  <option value="デモ依頼">デモ依頼</option>
                  <option value="共同企画">共同企画</option>
                  <option value="取材/メディア">取材/メディア</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  内容 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={30}
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="ご相談内容をご記入ください（30文字以上）"
                />
                <p className="text-sm text-textSecondary mt-2">
                  {formData.message.length}/30文字以上
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-border bg-surface text-accent focus:ring-accent"
                />
                <label htmlFor="consent" className="text-sm text-textSecondary">
                  <a href="/privacy" className="text-accent hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意します <span className="text-accent">*</span>
                </label>
              </div>

              <div className="flex justify-center py-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-accent/20 border border-accent rounded-lg text-center text-textPrimary"
                >
                  送信しました。通常1〜3営業日以内にご連絡します。
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-center text-textPrimary"
                >
                  送信に失敗しました。時間をおいて再度お試しください。
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || !recaptchaToken}
                className="w-full px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </motion.button>
            </form>
          </div>

          <div className="space-y-8">
            {sideInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-6"
              >
                <h3 className="text-h3 font-heading font-bold mb-2">{info.title}</h3>
                <p className="text-textSecondary">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

