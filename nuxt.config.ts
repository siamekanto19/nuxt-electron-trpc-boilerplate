import path from 'node:path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ['trpc-nuxt'],
  },
  modules: ['nuxt-electron'],
  electron: {
    build: [
      {
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
      },
    ],
    renderer: {},
  },
})
