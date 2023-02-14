import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';

import admin from '../config/firebase-config.js'

const verifyToken = async (req) => {
    try { 
        const token = await req.headers.authorization.split(" ")[1]
        const decodedToken = await admin.auth().verifyIdToken(token)
        if (decodedToken) {
            return decodedToken
        } else {
            throw new GraphQLError('Invalid Token', {
                extensions: {
                    code: 'INVALID_TOKEN',
                },
            })
        }
    } catch (error) {
        throw new ApolloServerErrorCode.INTERNAL_SERVER_ERROR
    }
}

export default verifyToken