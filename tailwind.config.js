/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050814',
        obsidian: '#090D1E',
        rose: { soft: '#FDA4AF', DEFAULT: '#F43F5E' },
        lavender: '#C4B5FD',
        warm: '#F8FAFC',
        slate2: '#94A3B8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'none' } },
      },
      animation: { 'fade-up': 'fadeUp 0.7s ease-out both' },
    },
  },
  plugins: [],
};
