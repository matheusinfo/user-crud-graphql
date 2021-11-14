import { UpdateUser } from '@/domain/usecases/user'
import { UserNotFoundError } from '@/domain/errors/user'
import { FindUserByIdRepository, UpdateUserRepository } from '@/data/protocols/repository/user'

export class UpdateUserUsecase implements UpdateUser {
    constructor(
        private readonly userRepository: FindUserByIdRepository & UpdateUserRepository
    ){}

    async update (params: UpdateUser.Params): Promise< UpdateUser.Result> {
        const { id, name } = params
        const userExists = await this.userRepository.findById({ id })
        if(!userExists) {
            throw new UserNotFoundError()
        }
        const updateUser = await this.userRepository.update({ id, name })
        return updateUser
    }
}