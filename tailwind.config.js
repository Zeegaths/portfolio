/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAFA',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#0A0A0B',
          muted: '#5A5A66',
          soft: '#8A8A96',
        },
        line: '#E8E8EC',
        violet: {
          DEFAULT: '#6D28D9',
          deep: '#4C1D95',
          soft: '#F3EEFF',
        },
        lime: {
          DEFAULT: '#C6F432',
          deep: '#A3CC15',
        },
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      maxWidth: {
        container: '78rem',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        orbit: 'orbit 28s linear infinite',
        'orbit-counter': 'orbit-counter 28s linear infinite',
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        blink: 'blink 1.1s step-end infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'rise-in': 'rise-in 500ms cubic-bezier(0, 0, 0.2, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(var(--orbit-r)) rotate(0deg)',
          },
          '100%': {
            transform:
              'rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg)',
          },
        },
        'orbit-counter': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(6%, -8%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 5%, 0) scale(0.95)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(2.2)', opacity: '0' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  // @tailwindcss/aspect-ratio is intentionally NOT loaded: it disables
  // Tailwind's core aspect-* utilities (aspect-square et al) and modern
  // browsers support aspect-ratio natively.
  plugins: [require('@tailwindcss/typography')],
};
