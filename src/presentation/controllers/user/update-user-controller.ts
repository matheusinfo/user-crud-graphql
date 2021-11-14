import { UpdateUser } from '@/domain/usecases/user'
import { noContent, serverError } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class UpdateUserController implements Controller {
    constructor(
        private readonly updateUser: UpdateUser
    ){}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
        try {
            const { id, name } = httpRequest.body
            await this.updateUser.update({
                id,
                name
            })
            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }
}