import { DeleteUser } from '@/domain/usecases/user'
import { noContent, serverError } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class DeleteUserController implements Controller {
    constructor(
        private readonly deleteUser: DeleteUser
    ){}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
        try {
            const { id } = httpRequest.params
            await this.deleteUser.delete({ id })
            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }
}