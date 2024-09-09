import { Hono } from 'hono'
import { handle } from "hono/vercel"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000

export default handle(app)