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
        primary_dark: '#e6ac00',
        content: '#FFFFFF',
        subtitle: '#B3B3B3',
        background: '#121212',
        app: '#0C0C0C',

        danger: '#FF4C4C',
        warning: '#FFD700',
        info: '#4CAF50',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

