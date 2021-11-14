import { ApolloError } from 'apollo-server-express'
import { Controller } from '@/presentation/protocols'

export const adaptResolver = async (controller: Controller, args: any): Promise<any> => {
    const httpResponse = await controller.handle({
        body: args,
        params: args
    })
    console.log(httpResponse)
    switch(httpResponse.statusCode) {
        case 200: return httpResponse.body
        case 204: return "No body :/"
        default: throw new ApolloError(httpResponse.body.message)
    }
    return 
}