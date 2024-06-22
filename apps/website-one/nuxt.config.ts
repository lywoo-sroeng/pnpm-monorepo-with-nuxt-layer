// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Website One',
    },
  },
  devtools: { enabled: true },
  extends: ['base-layer'],
})
