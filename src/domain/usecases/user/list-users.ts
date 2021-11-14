import { User } from '@/domain/model'

export interface ListUsers {
    list: () => Promise< ListUsers.Result>
}

export namespace ListUsers {
    export type Result = Omit<User, 'password'>[]
}