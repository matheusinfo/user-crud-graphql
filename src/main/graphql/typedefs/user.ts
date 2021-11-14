import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        lstUsers: [User!]!
    }

    extend type Mutation {
        addUser(name: String!, email: String!, password: String!): User!
        updUser(id: Int!, name: String!): ID
        delUser(id: Int!): ID
    }

    type User {
        id: ID!
        name: String!
        email: String!
    }
`