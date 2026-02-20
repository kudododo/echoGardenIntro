'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion()
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* グラデーションメッシュ背景 */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(255, 142, 83, 0.5) 0%, transparent 70%)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 100, 0],
                  y: [0, 100, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(255, 217, 61, 0.5) 0%, transparent 70%)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -80, 0],
                  y: [0, -80, 0],
                  scale: [1, 1.3, 1],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 142, 83, 0.4) 0%, rgba(255, 217, 61, 0.4) 50%, transparent 70%)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 120, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* 幾何学図形 */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8E53" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFD93D" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF8E53" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="gradient3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF8E53" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FFD93D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FF8E53" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 動く多角形 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.15 }
              : {
                  opacity: [0.1, 0.2, 0.1],
                  x: [0, 100, 0],
                  y: [0, 60, 0],
                  rotate: [0, 360],
                }
          }
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <polygon
            points="200,200 400,100 600,200 500,400 300,400"
            fill="url(#gradient1)"
          />
        </motion.g>

        {/* 動く円 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.14 }
              : {
                  opacity: [0.1, 0.18, 0.1],
                  x: [0, -80, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <circle
            cx="1600"
            cy="200"
            r="180"
            fill="url(#gradient2)"
          />
        </motion.g>

        {/* 回転する四角形 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.14 }
              : {
                  opacity: [0.1, 0.18, 0.1],
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '200px 700px' }}
        >
          <rect
            x="100"
            y="600"
            width="200"
            height="200"
            fill="url(#gradient1)"
            rx="20"
          />
        </motion.g>

        {/* ダイヤモンド形状 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.12 }
              : {
                  opacity: [0.08, 0.16, 0.08],
                  x: [0, 150, 0],
                  y: [0, -80, 0],
                  rotate: [0, -360],
                }
          }
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <path
            d="M 960 540 L 1100 400 L 1240 540 L 1100 680 Z"
            fill="url(#gradient2)"
          />
        </motion.g>

        {/* 六角形 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.125 }
              : {
                  opacity: [0.1, 0.15, 0.1],
                  x: [0, -100, 0],
                  y: [0, 100, 0],
                  rotate: [0, 180, 360],
                }
          }
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '1700px 800px' }}
        >
          <polygon
            points="1700,800 1800,750 1850,850 1800,950 1700,1000 1650,900"
            fill="url(#gradient3)"
          />
        </motion.g>

        {/* 星形 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.11 }
              : {
                  opacity: [0.08, 0.14, 0.08],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }
          }
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '400px 900px' }}
        >
          <path
            d="M 400 900 L 420 960 L 480 960 L 430 990 L 450 1050 L 400 1020 L 350 1050 L 370 990 L 320 960 L 380 960 Z"
            fill="url(#gradient1)"
          />
        </motion.g>
      </svg>

      {/* グリッドパターン */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 142, 83, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 142, 83, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* ノイズオーバーレイ */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  )
}

