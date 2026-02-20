'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    key: 'echo-garden',
    name: 'Echo Garden',
    catch: '声が、花や光になる。',
    desc: '子どもの声量・音域・テンポに反応して、映像がリアルタイムに変化するデジタルアート。',
    tags: ['Interactive Art', 'Voice', 'Kids'],
    highlights: [
      'マイク1本で導入可能（環境により調整）',
      '短時間回転でも盛り上がる',
      '会場の『象徴体験』になりやすい',
    ],
    image: '/apps/echo-garden.png',
    cta: 'デモ相談',
  },
  {
    key: 'hit-balloon',
    name: 'Hit Balloon',
    catch: '割って学ぶ、英語×ゲーム。',
    desc: 'バルーンを割ると、動物や単語が出現。楽しみながら語彙に触れられる体験。',
    tags: ['VR/AR', 'Edutainment', 'Vocabulary'],
    highlights: [
      '短時間で達成感',
      '展示会・学びイベント向き',
      '年齢に合わせた難易度調整が可能（設計次第）',
    ],
    image: '/apps/hit-balloon.jpg',
    cta: '用途を相談',
  },
  {
    key: 'air-builder',
    name: 'Air Builder',
    catch: '空中で組む、ARブロック。',
    desc: 'カメラとARで、手の動きに合わせてブロックパズルを組み立てる体験。',
    tags: ['AR', 'Hand Tracking', 'Puzzle'],
    highlights: [
      '直感操作で盛り上がる',
      '行列ができる導線設計がしやすい',
      'ワークショップ展開も相性◎',
    ],
    image: '/apps/air-builder.jpg',
    cta: '導入相談',
  },
]

export default function ProductCards() {
  return (
    <section id="apps" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-h2 font-heading font-bold">アプリ紹介</h2>
          <p className="text-lg text-textSecondary">
            目的に合わせて、最適な体験を選べます。
          </p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%23101826" width="800" height="450"/%3E%3Ctext fill="%23F5F7FB" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' + product.name + '%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
              </div>

              <div className={`space-y-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div>
                  <h3 className="text-h2 font-heading font-bold mb-2">{product.name}</h3>
                  <p className="text-xl text-accent mb-4">{product.catch}</p>
                  <p className="text-textSecondary leading-relaxed">{product.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface border border-border rounded-full text-sm text-textSecondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {product.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-textSecondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-all glow-effect"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {product.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

