import { trpcRouter } from '../trpc'
import { exampleRouter } from './example'
export const appRouter = trpcRouter({
  example: exampleRouter,
})
export type AppRouter = typeof appRouter
