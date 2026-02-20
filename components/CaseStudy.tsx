'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cases = [
  {
    title: '商業施設の週末イベント',
    problem: '親子の滞在時間が伸びない／回遊が弱い',
    solution: '入口近くに体験を配置し、声の反応で人を集める',
    result: '体験の周囲に自然な人だかりができ、写真・動画のシェアが増加',
    notes: ['運用: スタッフ1名で誘導', '設置: スクリーン or LED + マイク'],
  },
  {
    title: '自治体・教育イベント',
    problem: '子どもが『参加者』になる体験が少ない',
    solution: '体験設計を短くし、成功体験をすぐ返す',
    result: '年齢差があっても参加が途切れにくい',
    notes: ['運用: 回転率重視の導線', '演出: 音量に応じた視覚効果で達成感'],
  },
]

// const galleryImages = ['/cases/eg-01.jpg', '/cases/eg-02.jpg', '/cases/eg-03.jpg']

export default function CaseStudy() {
  return (
    <section id="cases" className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-h2 font-heading font-bold">事例紹介</h2>
          <p className="text-lg text-textSecondary">Echo Garden（導入イメージ）</p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {cases.map((caseItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-8 md:p-10 space-y-6"
            >
              <h3 className="text-h3 font-heading font-bold">{caseItem.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-textSecondary mb-2">課題</p>
                  <p className="text-textPrimary">{caseItem.problem}</p>
                </div>
                <div>
                  <p className="text-sm text-textSecondary mb-2">解決策</p>
                  <p className="text-textPrimary">{caseItem.solution}</p>
                </div>
                <div>
                  <p className="text-sm text-textSecondary mb-2">結果</p>
                  <p className="text-textPrimary">{caseItem.result}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <ul className="flex flex-wrap gap-4">
                  {caseItem.notes.map((note, nIdx) => (
                    <li key={nIdx} className="text-sm text-textSecondary">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border"
            >
              <Image
                src={image}
                alt={`Case ${idx + 1}`}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23101826" width="800" height="600"/%3E%3Ctext fill="%23F5F7FB" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECase ' + (idx + 1) + '%3C/text%3E%3C/svg%3E'
                }}
              />
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

