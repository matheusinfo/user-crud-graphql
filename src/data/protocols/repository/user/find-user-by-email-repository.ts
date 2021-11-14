export interface FindUserByEmailRepository {
    findByEmail: (params: FindUserByEmailRepository.Params) => Promise<FindUserByEmailRepository.Result>
}

export namespace FindUserByEmailRepository {
    export type Params = {
        email: string
    }

    export type Result = boolean
}