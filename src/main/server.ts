import 'module-alias/register'
import { PostgresDatabase } from '@/infra/db/postgres/connection'
import app from './config/app'
import env from './config/env'

const connection = async (): Promise<void> => {
  const database = new PostgresDatabase()
  database
    .connect()
    .then(async () => {
      app.listen(env.port, () => console.log(`server running at: http://localhost:${env.port}`))
    })
    .catch((error) => {
      console.log(`database connection problem: ${error}`)
    })
}

connection()
