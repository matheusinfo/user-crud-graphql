import { User } from '@/domain/model'

export interface UpdateUser {
    update: (params: UpdateUser.Params) => Promise< UpdateUser.Result>
}

export namespace UpdateUser {
    export type Params = {
        id: number
        name: string
    }
    
    export type Result = boolean
}