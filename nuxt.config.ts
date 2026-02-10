// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules:[
    '@nuxt/image',
  ],
  app: {
    head: {
      title: 'Dr. Vinicius Sanches Bersanete - Psiquiatra', // Título padrão
      link: [
        // O link para o seu favicon SVG
        { rel: 'icon', type: 'image/png', href: '/logoIcon.png' }
      ]
    }
  }
});
