'use client'

import { motion } from 'framer-motion'

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="mv" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 背景動画 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* 動画の上にオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold leading-tight text-balance"
          >
            <span className="block">声と動きが、</span>
            <span className="block bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              アートになる。
            </span>
          </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-textSecondary leading-relaxed"
            >
              子どもたちの『わぁ！』が止まらない、参加型デジタルアート体験。
            </motion.p>

            <motion.ul
              variants={itemVariants}
              className="space-y-3"
            >
              {['説明不要。直感で遊べる', 'イベント/施設で回遊と滞在をつくる', '子ども×テック×アートの体験価値'].map((bullet, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-textSecondary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#cases"
                className="px-8 py-4 bg-surface border border-border rounded-full text-center hover:border-accent transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                事例を見る
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-accent text-white rounded-full text-center hover:bg-accent/90 transition-all glow-effect"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                相談する
              </motion.a>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-textSecondary pt-4"
            >
              ※ デモ/導入の相談歓迎（小規模イベントもOK）
            </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

