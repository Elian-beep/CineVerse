// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
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
