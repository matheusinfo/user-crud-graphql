export interface HashPassword {
    hash: (params: HashPassword.Params) => Promise<HashPassword.Result>
}

export namespace HashPassword {
    export type Params = {
        password: string
    }

    export type Result = {
        hashedPassword: string
    }
}