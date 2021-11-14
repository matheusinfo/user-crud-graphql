import express from 'express'
import apolloServer from './apollo-server'
import middlewares from './middlewares'

const app = express()
middlewares(app)
apolloServer(app)

export default app
