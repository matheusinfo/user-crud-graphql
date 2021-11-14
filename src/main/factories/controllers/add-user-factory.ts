import { AddUserUsecase } from '@/data/usecases/user'
import { BcryptAdapter } from '@/infra/lib/cryptography'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { Controller } from '@/presentation/protocols'
import { AddUserController } from '@/presentation/controllers/user'

export const makeAddUserFactory = (): Controller => {
    const userRepository = new PostgresUserRepository() 
    const hashPassword = new BcryptAdapter()
    const addUserUsecase = new AddUserUsecase(userRepository, hashPassword)
    return new AddUserController(addUserUsecase)
}