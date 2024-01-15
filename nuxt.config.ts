// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/exposition": { ssr: false },
  },
  modules: ["@nuxtjs/prismic"],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["@/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";`,
        },
      },
    },
  },
});
