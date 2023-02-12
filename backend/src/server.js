import dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'

import typeDefs from './graphql/typedefs.js'
import resolvers from './graphql/resolvers/index.js'
import connectDB from './config/db.js'

// connect to database
// connectDB()

const app = express()
const httpServer = http.createServer(app)
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await apolloServer.start()

app.use('/', (req, res) => {
    res.send('He')
})

app.use(
    '/a',
    cors({ origin: ['http://localhost:3000'] }),
    bodyParser.urlencoded({ extended: false }),
    (_req, _res, next) => { 
        context: async ({ req, res }) => {
            const token = req.headers.authorization || '';
            const user = await getUser(token);
                return { user };
        }
    },
    expressMiddleware(apolloServer),
)

await new Promise((resolve) => httpServer.listen({ port: process.env.PORT }, resolve))
    .then((resolve) => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`)
    }).catch((err) => {
        console.log(err)
    })
