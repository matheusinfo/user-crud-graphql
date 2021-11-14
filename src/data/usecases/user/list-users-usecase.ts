import { ListUsers } from '@/domain/usecases/user'
import { ListUsersRepository } from '@/data/protocols/repository/user'

export class ListUsersUsecase implements ListUsers {
    constructor(
        private readonly listUsersRepository: ListUsersRepository,
    ){}

    async list (): Promise<ListUsers.Result> {
        const users = await this.listUsersRepository.list()
        return users
    }
}