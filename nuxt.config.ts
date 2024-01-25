// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: true,
  runtimeConfig: {
    public: {
      api: process.env.APIURL,
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
