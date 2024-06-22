import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Base Layer',
    },
  },
  devtools: { enabled: true },
  alias: {
    '~': currentDir,
  },
  css: [join(currentDir, './assets/css/tailwind.css')],
  components: [
    {
      path: './components/',
      extensions: ['.vue'],
      prefix: undefined,
      pathPrefix: false,
    },
  ],
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
})
