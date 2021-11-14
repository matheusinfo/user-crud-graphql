import { AddUser } from '@/domain/usecases/user'
import { serverError, success } from '@/presentation/helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddUserController implements Controller {
    constructor(
        private readonly addUser: AddUser
    ){}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse>{
        try {
            const { name, email, password } = httpRequest.body
            const user = await this.addUser.add({
                name,
                email,
                password
            })
            return success(user)
        } catch (error) {
            return serverError(error)
        }
    }
}