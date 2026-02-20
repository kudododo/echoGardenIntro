'use client'

import { motion } from 'framer-motion'
import HeaderBase from './HeaderBase'

export default function SubPageHeader() {
  return (
    <HeaderBase
      logoHref="/"
      rightContent={
        <motion.a
          href="/#contact"
          className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-all glow-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          相談する
        </motion.a>
      }
    >
      <nav className="hidden md:flex items-center gap-8">
        <motion.a
          href="/#thoughts"
          className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
          whileHover={{ y: -2 }}
        >
          思い
        </motion.a>
        <motion.a
          href="/#apps"
          className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
          whileHover={{ y: -2 }}
        >
          アプリ
        </motion.a>
        <motion.a
          href="/#cases"
          className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
          whileHover={{ y: -2 }}
        >
          事例
        </motion.a>
        <motion.a
          href="/#contact"
          className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
          whileHover={{ y: -2 }}
        >
          問い合わせ
        </motion.a>
      </nav>
    </HeaderBase>
  )
}

