// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: ["@nuxt/image"],

  app: {
    head: {
      // Define o idioma da página (ajuda no SEO e acessibilidade)
      htmlAttrs: {
        lang: "pt-BR",
      },
      title: "Dr. Vinicius Sanches Bersanete - Psiquiatra",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // A "Description" é crucial para o Lighthouse e para o Google
        {
          name: "description",
          content:
            "Atendimento psiquiátrico especializado com o Dr. Vinicius Sanches Bersanete. Foco em saúde mental, bem-estar e tratamento humanizado.",
        },
        // Tags Open Graph (melhoram a aparência ao compartilhar no LinkedIn/WhatsApp)
        {
          property: "og:title",
          content: "Dr. Vinicius Sanches Bersanete - Psiquiatra",
        },
        {
          property: "og:description",
          content: "Atendimento especializado em psiquiatria e saúde mental.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/logoIcon.png" }],
    },
  },
});
