import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull } from 'graphql'
import UserModel from '../models/user-model.js'

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        userId: { type: GraphQLString },
        emailId: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: User,
            args: { userId: { type: GraphQLString } },
            resolve(parent, args) { return UserModel.findOne({ userId: args.userId }) }
        }
    }
})

//Mutation 
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: User,
            args: {
                userId: { type: GraphQLNonNull(GraphQLString) },
                emailId: { type: GraphQLNonNull(GraphQLString) },
                firstName: { type: GraphQLNonNull(GraphQLString) },
                lastName: { type: GraphQLNonNull(GraphQLString) }
                
            },
            resolve(parent, args) {
                const user = new UserModel({
                    userId: args.userId,
                    emailId: args.emailId,
                    firstName: args.firstName,
                    lastName: args.password
                })
                return user.save()
            }
        },

        deleteUser: {
            type: User,
            args: { userId: { type: GraphQLString } },
            resolve(parent, args) { return UserModel.deleteOne({ userId: args.userId }) }
        },

    }
})



const UserSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

export default UserSchema
