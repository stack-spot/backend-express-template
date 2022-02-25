import { Express } from 'express'
import { applyRoutes as applyHelloworldRoutes } from './helloworld'

export function applyRoutes(app: Express) {
  applyHelloworldRoutes(app)
}