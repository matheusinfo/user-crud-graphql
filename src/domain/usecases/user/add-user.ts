import { User } from '@/domain/model'

export interface AddUser {
    add: (params: AddUser.Params) => Promise< AddUser.Result>
}

export namespace AddUser {
    export type Params = Omit<User, 'id'>
    
    export type Result = Omit<User, 'password'>
}