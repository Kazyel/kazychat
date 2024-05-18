// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
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
