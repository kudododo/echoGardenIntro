'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: '思い', href: '#thoughts' },
  { label: 'アプリ', href: '#apps' },
  { label: '事例', href: '#cases' },
  { label: '問い合わせ', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#mv"
            className="text-xl font-heading font-semibold text-textPrimary hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Echo Garden
          </motion.a>

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

          <motion.a
            href="#contact"
            className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-all glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            相談する
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

