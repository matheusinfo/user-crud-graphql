import { ListUsers } from '@/domain/usecases/user'
import { serverError, success } from '@/presentation/helper'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ListUsersController implements Controller {
    constructor(
        private readonly listUsers: ListUsers
    ){}

    async handle (): Promise<HttpResponse>{
        try {
            const users = await this.listUsers.list()
            return success(users)
        } catch (error) {
            return serverError(error)
        }
    }
}