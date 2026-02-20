'use client'

import { motion } from 'framer-motion'

const values = [
  { title: 'Instant', desc: '触らなくても、すぐ始まる' },
  { title: 'Immersive', desc: '空間ごと体験になる' },
  { title: 'Shareable', desc: '思い出が残り、広がる' },
]

export default function Story() {
  return (
    <section id="thoughts" className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-h2 font-heading font-bold">思い</h2>
          <p className="text-xl text-textSecondary leading-relaxed">
            子どもの『声』や『動き』は、世界を変えるスイッチになる。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16 space-y-8">
          {[
            'Echo Garden は、子どもの発するエネルギーをそのままアートに変換する体験です。',
            '体験のハードルを限界まで下げ、誰でも『参加者』になれる場をつくります。',
            'テクノロジーは主役じゃない。主役は、そこで生まれる反応と感情です。',
          ].map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-lg text-textSecondary leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-accent transition-all"
            >
              <h3 className="text-h3 font-heading font-bold mb-3">{value.title}</h3>
              <p className="text-textSecondary">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

