/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107',
        content: '#FFFFFF',
        subtitle: '#B3B3B3',
        background: '#121212',
        app: '#0C0C0C',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}

