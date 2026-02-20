'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="max-w-3xl mx-auto"
        >
          {/* ヘッダー */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            プライバシーポリシー
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-textSecondary mb-12 leading-relaxed"
          >
            Echo Garden（以下「当サイト」といいます。）は、当サイトにおけるサービスの提供にあたり、利用者の個人情報を適切に取り扱うため、以下のとおりプライバシーポリシーを定めます。
          </motion.p>

          {/* セクション */}
          <div className="space-y-12">
            {/* 第1条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第1条（個人情報の定義）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                本ポリシーにおいて「個人情報」とは、個人情報保護法に定める「個人情報」を指し、生存する個人に関する情報であって、氏名、メールアドレス、会社名、その他の記述等により特定の個人を識別できる情報をいいます。
              </p>
            </motion.section>

            {/* 第2条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第2条（個人情報の取得方法）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトは、以下の方法により個人情報を取得します。
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 pl-5">
                <li>お問い合わせフォームの送信</li>
                <li>メールによるお問い合わせ</li>
                <li>その他、利用者が任意に提供する情報</li>
              </ul>
            </motion.section>

            {/* 第3条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第3条（取得する個人情報の項目）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトでは、以下の情報を取得する場合があります。
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 pl-5">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>会社・団体名</li>
                <li>お問い合わせ内容</li>
                <li>その他、利用者が入力または送信した情報</li>
              </ul>
              <p className="text-textSecondary leading-relaxed pl-5 mt-4">
                また、アクセス解析により以下の情報が自動取得される場合があります。
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 pl-5">
                <li>IPアドレス</li>
                <li>ブラウザ情報</li>
                <li>閲覧ページ</li>
                <li>アクセス日時</li>
                <li>クッキー（Cookie）情報</li>
              </ul>
            </motion.section>

            {/* 第4条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第4条（個人情報の利用目的）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトは、取得した個人情報を以下の目的で利用します。
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 pl-5">
                <li>お問い合わせへの対応</li>
                <li>サービスに関する連絡・案内</li>
                <li>サービスの改善および品質向上</li>
                <li>不正アクセス・不正利用の防止</li>
                <li>法令等への対応</li>
              </ul>
              <p className="text-textSecondary leading-relaxed pl-5 mt-4">
                取得した個人情報を、上記目的以外で利用することはありません。
              </p>
            </motion.section>

            {/* 第5条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第5条（個人情報の第三者提供）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトは、以下の場合を除き、個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 pl-5">
                <li>本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護に必要な場合</li>
                <li>公衆衛生の向上または児童の健全育成に特に必要な場合</li>
                <li>国の機関または地方公共団体等への協力が必要な場合</li>
              </ul>
            </motion.section>

            {/* 第6条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第6条（外部サービスの利用）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトでは、サービス提供および利便性向上のため、以下の外部サービスを利用する場合があります。
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 pl-5">
                <li>アクセス解析サービス（例：Google Analytics 等）</li>
                <li>メール送信サービス（例：Resend / SendGrid 等）</li>
                <li>ホスティングサービス（例：Vercel 等）</li>
                <li>フォームスパム対策サービス（例：reCAPTCHA / hCaptcha 等）</li>
              </ul>
              <p className="text-textSecondary leading-relaxed pl-5 mt-4">
                これらのサービス提供事業者は、各社のプライバシーポリシーに基づいて情報を取り扱います。
              </p>
            </motion.section>

            {/* 第7条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第7条（Cookieの利用）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトでは、利用者の利便性向上およびアクセス解析のためCookieを使用することがあります。
                利用者はブラウザの設定によりCookieの使用を拒否することができますが、その場合、一部機能が利用できない場合があります。
              </p>
            </motion.section>

            {/* 第8条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第8条（個人情報の管理）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトは、個人情報の漏えい、紛失、改ざん、不正アクセスを防止するため、適切な安全管理措置を講じます。
              </p>
            </motion.section>

            {/* 第9条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第9条（個人情報の開示・訂正・削除）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                利用者は、当サイトが保有する自己の個人情報について、開示・訂正・削除を請求することができます。
                請求を希望される場合は、下記お問い合わせ窓口までご連絡ください。
              </p>
            </motion.section>

            {/* 第10条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第10条（プライバシーポリシーの変更）
              </h2>
              <p className="text-textSecondary leading-relaxed pl-5">
                当サイトは、必要に応じて本ポリシーを変更することがあります。
                変更後のプライバシーポリシーは、当サイト上に掲載した時点で効力を生じるものとします。
              </p>
            </motion.section>

            {/* 第11条 */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-textPrimary border-l-4 border-primary pl-4">
                第11条（事業者情報）
              </h2>
              <div className="bg-surface/50 rounded-2xl p-6 border border-border pl-5">
                <dl className="space-y-3 text-textSecondary">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-medium text-textPrimary min-w-[140px]">事業者名</dt>
                    <dd>Echo Garden</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-medium text-textPrimary min-w-[140px]">所在地</dt>
                    <dd>東京都渋谷区恵比寿４丁目１７ カゲオカビルディング5F</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-medium text-textPrimary min-w-[140px]">メールアドレス</dt>
                    <dd>info@echo-garden.jp</dd>
                  </div>
                </dl>
              </div>
            </motion.section>

            {/* 制定日 */}
            <motion.section variants={fadeIn} className="pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:gap-8 text-sm text-textSecondary">
                <p>制定日： 2026年2月20日</p>
                {/* <p>最終改定日： —</p> */}
              </div>
            </motion.section>
          </div>

          {/* トップへ戻る */}
          <motion.div
            variants={fadeIn}
            className="mt-16 text-center"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              トップページへ戻る
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

