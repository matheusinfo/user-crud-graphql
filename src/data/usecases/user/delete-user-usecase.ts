import { DeleteUser } from '@/domain/usecases/user'
import { UserNotFoundError } from '@/domain/errors/user'
import { DeleteUserRepository, FindUserByIdRepository } from '@/data/protocols/repository/user'

export class DeleteUserUsecase implements DeleteUser {
    constructor(
        private readonly userRepository: FindUserByIdRepository & DeleteUserRepository
    ){}

    async delete ({ id }: DeleteUser.Params): Promise<void> {
        const userExists = await this.userRepository.findById({ id })
        if(!userExists) {
            throw new UserNotFoundError()
        }
        await this.userRepository.delete({ id })
    }
}