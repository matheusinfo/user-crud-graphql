import { AddUser } from '@/domain/usecases/user'
import { UserDuplicatedError } from '@/domain/errors/user'
import { HashPassword } from '@/data/protocols/criptography'
import { AddUserRepository, FindUserByEmailRepository } from '@/data/protocols/repository/user'

export class AddUserUsecase implements AddUser {
    constructor(
        private readonly userRepository: FindUserByEmailRepository & AddUserRepository,
        private readonly hashPassword: HashPassword
    ){}

    async add (params: AddUser.Params): Promise< AddUser.Result> {
        const { name, email, password } = params
        const userAlreadyExists = await this.userRepository.findByEmail({ email })
        if(userAlreadyExists) {
            throw new UserDuplicatedError()
        }
        const { hashedPassword } = await this.hashPassword.hash({ password })
        const user = await this.userRepository.add({ name, email, password: hashedPassword })
        return user
    }
}