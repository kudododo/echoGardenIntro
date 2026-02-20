'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface HeaderBaseProps {
  logoHref?: string
  children?: ReactNode
  rightContent?: ReactNode
}

export default function HeaderBase({ 
  logoHref = '/', 
  children, 
  rightContent 
}: HeaderBaseProps) {
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
            href={logoHref}
            className="text-xl font-heading font-semibold text-textPrimary hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Echo Garden
          </motion.a>

          {children}

          {rightContent}
        </div>
      </div>
    </motion.header>
  )
}

