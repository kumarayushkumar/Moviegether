const typeDefs = `#graphql
    type User {
        uid: String!
        emailId: String!
        name: String!
        movies:  [Movie]
        createdAt: String!
        updatedAt: String!
    }
    
    type Movie {
        uid: String!
        src: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getUser: [User]
        getMovie(uid: String!): Movie!
    }

    input RegisterInput {
        emailId: String
        name: String
    }

    type Mutation {
        register(register: RegisterInput): User!
        login(token: String!): User!
        uploadMovie(uid: String!, src: String!): Movie! 
        deleteMovie(id: ID!): Movie!
    }
`

export default typeDefs