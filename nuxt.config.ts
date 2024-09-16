// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'vercel',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
  runtimeConfig: {
    public: {
      apiKeyTmdb: process.env.NUXT_API_KEY_TMDB,
    },
  },
  devServer: {
    port: 8080,
  },
  app: {
    head: {
      title: 'CineVerse',
      meta: [
        { name: 'description', content: 'Exemlpo de desc de teste' }
      ],
      // link: [
      //   { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '' }
      // ]
    }
  }
})
