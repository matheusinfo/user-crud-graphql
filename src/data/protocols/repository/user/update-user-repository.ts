import { User } from '@/domain/model'
import { UpdateUser } from '@/domain/usecases/user'

export interface UpdateUserRepository {
    update: (params: UpdateUserRepository.Params) => Promise<UpdateUserRepository.Result>
}

export namespace UpdateUserRepository {
    export type Params =  {
        id: number
        name: string
    }

    export type Result = UpdateUser.Result
}