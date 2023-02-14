import { ApolloServerErrorCode } from '@apollo/server/errors';

import UserModel from '../../models/user-model.js'
import verifyToken from '../../utils/verify-token.js'
import validateRegisterInput from '../../utils/validators.js'

export default {
    Mutation: {
        async register ( _, { emailId, name }, context ) {
            try {
                const { valid, errors } = validateRegisterInput(emailId, name)
                if (!valid) {
                    throw new ApolloServerErrorCode.BAD_REQUEST(errors)
                }
                const decodedToken = await verifyToken(context.req)
                const isUserExists = await UserModel.findOne({ uid: decodedToken.uid })
                if (isUserExists) {
                    return {
                        ...isUserExists._doc,
                    }
                } else {
                    //TODO: check what user returns when user manually signs up
                    const newUser = new UserModel({
                        uid: decodedToken.uid,
                        emailId: decodedToken.emailId || emailId,
                        name: decodedToken.name || name,
                    })
                    const user = await newUser.save()
                    return {
                        ...user._doc,
                    }
                }
            } catch (error) {
                throw new ApolloServerErrorCode.INTERNAL_SERVER_ERROR
            }            
        },
 
        async login( _, context ) {
            try {
                const decodedToken = await verifyToken(context.req)
                const user = await UserModel.findOne({ uid: decodedToken.uid })
                if (user) {
                    return {
                        ...user._doc,
                    }
                } else {
                    throw new ApolloServerErrorCode.BAD_REQUEST('User not found')
                }
            } catch (error) {
                throw new ApolloServerErrorCode.INTERNAL_SERVER_ERROR
            }            
        }
    }
} 