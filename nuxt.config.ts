// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "nuxt-gtag", "nuxt-simple-sitemap"],
  gtag: {
    id: "GTM-5M9SPTJX",
  },
  site: {
    url: "https://unbreak-sport.com",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
