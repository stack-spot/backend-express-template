import { Express } from 'express'
import { helloworldController } from '../controllers/helloworld'

export function applyRoutes(app: Express) {
  app.get('/', (_, res) => helloworldController(res))
}
