import { getManager } from 'typeorm'
import { 
    AddUserRepository, 
    DeleteUserRepository, 
    UpdateUserRepository,
    ListUsersRepository,
    FindUserByEmailRepository,
    FindUserByIdRepository
} from '@/data/protocols/repository/user'
import { UserEntity } from '@/infra/db/postgres/entities'

export class PostgresUserRepository implements 
    AddUserRepository, 
    DeleteUserRepository, 
    UpdateUserRepository,
    ListUsersRepository,
    FindUserByEmailRepository,
    FindUserByIdRepository {
    async add (params: AddUserRepository.Params): Promise<AddUserRepository.Result> {
        const repository = getManager().getRepository(UserEntity)
        const user = await repository.save(params)
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    }

    async delete ({ id }: DeleteUserRepository.Params): Promise<void> {
        const repository = getManager().getRepository(UserEntity)
        await repository.delete({ id })
    }

    async update ({ id, name }: UpdateUserRepository.Params): Promise<UpdateUserRepository.Result> {
        const repository = getManager().getRepository(UserEntity)
        const updatedUser = await repository.update({
            id
         }, {
            name
         }
        )
        return !!updatedUser
    }

    async list (): Promise<ListUsersRepository.Result> {
        const repository = getManager().getRepository(UserEntity)
        const users = await repository.find()
        return users
    }

    async findByEmail ({ email }: FindUserByEmailRepository.Params): Promise<FindUserByEmailRepository.Result> {
        const repository = getManager().getRepository(UserEntity)
        const user = await repository.findOne({ email })
        return !!user
    }

    async findById ({ id }: FindUserByIdRepository.Params): Promise<FindUserByIdRepository.Result> {
        const repository = getManager().getRepository(UserEntity)
        const user = await repository.findOne({ id })
        return !!user
    }
}