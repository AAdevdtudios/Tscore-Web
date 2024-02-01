// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
  ssr: true,
  runtimeConfig: {
    public: {
      api: process.env.APIURL,
      LIVESCORE: process.env.LIVESCORE,
      GAMES: process.env.GAMES,
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-snackbar",
    "nuxt-icon",
    "@vite-pwa/nuxt",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
