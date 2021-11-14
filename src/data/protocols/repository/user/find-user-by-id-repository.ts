export interface FindUserByIdRepository {
    findById: (params: FindUserByIdRepository.Params) => Promise<FindUserByIdRepository.Result>
}

export namespace FindUserByIdRepository {
    export type Params = {
        id: number
    }

    export type Result = boolean
}