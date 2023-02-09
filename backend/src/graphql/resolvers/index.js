import userResolver from "./user-resolver.js"
import movieResolver from "./movie-resolver.js"

export default {
    Query: {
        ...movieResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
    }
}