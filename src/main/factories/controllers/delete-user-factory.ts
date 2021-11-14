import { DeleteUserUsecase } from '@/data/usecases/user'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { Controller } from '@/presentation/protocols'
import { DeleteUserController } from '@/presentation/controllers/user'

export const makeDeleteUserFactory = (): Controller => {
    const userRepository = new PostgresUserRepository() 
    const deleteUserUsecase = new DeleteUserUsecase(userRepository)
    return new DeleteUserController(deleteUserUsecase)
}