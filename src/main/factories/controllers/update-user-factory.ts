import {  UpdateUserUsecase } from '@/data/usecases/user'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { Controller } from '@/presentation/protocols'
import { UpdateUserController } from '@/presentation/controllers/user'

export const makeUpdateUserFactory = (): Controller => {
    const userRepository = new PostgresUserRepository() 
    const updateUserUsecase = new UpdateUserUsecase(userRepository)
    return new UpdateUserController(updateUserUsecase)
}