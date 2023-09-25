import { createTRPCNuxtClient } from 'trpc-nuxt/client'
import { ipcLink } from 'electron-trpc/renderer'
import { AppRouter } from '~/trpc/router'

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [ipcLink()],
  })

  return {
    provide: {
      trpc,
    },
  }
})
