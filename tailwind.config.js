/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sav: {
          bg: '#050914',
          secondary: '#091426',
          card: '#0D1B30',
          elevated: '#11233E',
          border: 'rgba(148, 163, 184, 0.14)',
          emerald: '#10B981',
          'emerald-light': '#34D399',
          cyan: '#22D3EE',
          'cyan-light': '#67E8F9',
          danger: '#EF4444',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#0B172C',
        },
      },
      fontFamily: {
        alexandria: ['Alexandria', 'Cairo', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderColor: {
        'sav-border': 'rgba(148, 163, 184, 0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
