// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
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
    baseURL: '/',
    head: {
      title: 'CineVerse',
      meta: [
        { name: 'description', content: 'Exemlpo de desc de teste' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon_stream.png' }
      ]
    }
  }
})
