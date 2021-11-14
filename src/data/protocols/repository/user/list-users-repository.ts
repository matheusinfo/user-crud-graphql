import { ListUsers } from '@/domain/usecases/user'

export interface ListUsersRepository {
    list: () => Promise<ListUsersRepository.Result>
}

export namespace ListUsersRepository {
    export type Result = ListUsers.Result
}