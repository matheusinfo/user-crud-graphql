import { ListUsersUsecase } from '@/data/usecases/user'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { Controller } from '@/presentation/protocols'
import { ListUsersController } from '@/presentation/controllers/user'

export const makeListUsersFactory = (): Controller => {
    const userRepository = new PostgresUserRepository() 
    const listUsersUsecase = new ListUsersUsecase(userRepository)
    return new ListUsersController(listUsersUsecase)
}