import { initTRPC } from '@trpc/server'

const ideas = [
  { name: 'Idea 1', description: 'Desc...', id: 1 },
  { name: 'Idea 2', description: 'Desc...', id: 2 },
  { name: 'Idea 3', description: 'Desc...', id: 3 },
  { name: 'Idea 4', description: 'Desc...', id: 4 },
  { name: 'Idea 5', description: 'Desc...', id: 5 },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
