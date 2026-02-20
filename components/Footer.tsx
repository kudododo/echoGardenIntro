'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-textSecondary text-sm"
          >
            © {currentYear} Echo Garden
          </motion.p>
          <div className="flex items-center gap-6">
            <motion.a
              href="/privacy"
              className="text-textSecondary text-sm hover:text-textPrimary transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#contact"
              className="text-textSecondary text-sm hover:text-textPrimary transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

