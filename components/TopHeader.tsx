'use client'

import { motion } from 'framer-motion'
import HeaderBase from './HeaderBase'

const navItems = [
  { label: '思い', href: '#thoughts' },
  { label: 'アプリ', href: '#apps' },
  { label: '事例', href: '#cases' },
  { label: '問い合わせ', href: '#contact' },
]

export default function TopHeader() {
  return (
    <HeaderBase
      logoHref="#mv"
      rightContent={
        <motion.a
          href="#contact"
          className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-all glow-effect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          相談する
        </motion.a>
      }
    >
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
            whileHover={{ y: -2 }}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>
    </HeaderBase>
  )
}

