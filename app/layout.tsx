import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Echo Garden | 声と動きが、アートになる',
  description: '子どもの声や動きに反応する参加型デジタルアート体験。Echo Garden / Hit Balloon / Air Builder の紹介と導入事例。',
  openGraph: {
    title: 'Echo Garden | 声と動きが、アートになる',
    description: '子どもの声や動きに反応する参加型デジタルアート体験。Echo Garden / Hit Balloon / Air Builder の紹介と導入事例。',
    images: ['/ogp.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja-JP" className="scroll-smooth">
      <body className={inter.className}>
        <AnimatedBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

