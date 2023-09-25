import { initTRPC } from '@trpc/server'
const t = initTRPC.create()

export const procedure = t.procedure
export const trpcRouter = t.router
