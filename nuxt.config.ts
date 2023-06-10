// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "Cirlce K | Canada",
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "My amazing site." }
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    "~/assets/css/global.css",
],
})
