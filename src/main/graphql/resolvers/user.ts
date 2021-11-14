import { adaptResolver } from '@/main/adapters'
import { makeAddUserFactory } from '@/main/factories/controllers/add-user-factory'
import { makeDeleteUserFactory } from '@/main/factories/controllers/delete-user-factory'
import { makeListUsersFactory } from '@/main/factories/controllers/list-users-factorty'
import { makeUpdateUserFactory } from '@/main/factories/controllers/update-user-factory'

export default {
    Query: {
        lstUsers: async (parent: any, args: any) => adaptResolver(makeListUsersFactory(), args)
    },

    Mutation: {
        updUser: async (parent: any, args: any) => adaptResolver(makeUpdateUserFactory(), args),
        addUser: async (parent: any, args: any) => adaptResolver(makeAddUserFactory(), args),
        delUser: async (parent: any, args: any) => adaptResolver(makeDeleteUserFactory(), args)
    }
}
