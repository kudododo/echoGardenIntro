/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1815', // 温かみのあるダークベージュグレー
        surface: '#25221F', // 少し明るめのサーフェス
        textPrimary: '#F5F7FB',
        textSecondary: 'rgba(245,247,251,0.75)',
        border: 'rgba(245,247,251,0.12)',
        accent: '#FF8E53', // 温かいオレンジ
        accent2: '#FFD93D', // 明るいゴールド
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', '-apple-system', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'sans-serif'],
      },
      fontSize: {
        h1: '52px',
        h2: '34px',
        h3: '22px',
        body: '16px',
      },
      borderRadius: {
        DEFAULT: '18px',
      },
      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
}

