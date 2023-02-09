const typeDefs = `#graphql
    type User {
        emailId: String!
        googleId: String!
        firstName: String!
        lastName: String!
        movies:  [Movie]
        toekn: String!
        createdAt: String!
        updatedAt: String!
    }
    
    type Movie {
        googleId: String!
        movietName: String!
        src: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getUser: [User]
        getMovie: [Movie]
    }

    input RegisterInput {
        emailId: String!
        googleId: String!
        firstName: String!
        lastName: String!
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
    }
`

export default typeDefs