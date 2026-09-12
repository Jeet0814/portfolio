/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0b0f19',
        bgCard: '#131b2e',
        bgCardHover: '#1c2744',
        accentCyan: '#00f0ff',
        accentCyanGlow: '#00f0ff33',
        accentIndigo: '#6366f1',
        textPrimary: '#f1f5f9',
        textMuted: '#94a3b8',
        borderDark: '#1e293b',
        borderHighlight: '#334155'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

