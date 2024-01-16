// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
    },
  },
  routeRules: {
    "/exposition": { ssr: false },
  },
  modules: ["@nuxtjs/prismic", "@nuxt/image"],
  prismic: {
    endpoint: process.env.NUXT_PRISMIC_ENDPOINT,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    mail: process.env.NUXT_MAIL,
    psw: process.env.NUXT_PSW,
  },
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
