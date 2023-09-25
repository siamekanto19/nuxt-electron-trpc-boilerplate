import { procedure, trpcRouter } from '../trpc'

export const exampleRouter = trpcRouter({
  osInfo: procedure.query(() => {
    return process.platform
  }),
})
