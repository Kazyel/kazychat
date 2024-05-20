// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Reddit Sans": [100, 200, 300, 400, 500, 600, 700, 800],
        },
      },
    ],
  ],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
});
