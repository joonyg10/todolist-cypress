import { rest } from 'msw'

export const handlers = [
  rest.get('/todo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: '1', todo: 'first todo', done: false },
        { id: '2', todo: 'second todo', done: false },
        { id: '3', todo: 'second todo', done: false },
      ]),
    )
  }),
]
