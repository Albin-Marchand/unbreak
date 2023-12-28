// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "nuxt-simple-sitemap"],
  runtimeConfig: {
    public: {
      gtagId: "G-EKBV2R1LK6",
    },
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
