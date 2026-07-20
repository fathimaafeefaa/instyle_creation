import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#17233A',
          light: '#243354',
          dark: '#0E1626',
        },
        walnut: {
          DEFAULT: '#6B4530',
          light: '#8A5F42',
        },
        mustard: {
          DEFAULT: '#C89B3C',
          light: '#DDB65F',
          dark: '#A87F2E',
        },
        marble: {
          DEFAULT: '#F6F3EE',
          dark: '#EEE9E0',
        },
        ink: '#211D19',
        brass: '#B08D57',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
