import { Response } from 'express'

export async function helloworldController(response: Response) {
  response.status(200).send({ message: 'Hello World' })
}
