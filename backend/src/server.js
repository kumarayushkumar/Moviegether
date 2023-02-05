import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import UserSchema from './graphql-schema/user-schema.js'
import connectDB from './config/db.js'

const app = express()

//allow cross-origin requests
app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000']
}))


// connect to database
connectDB()

//middleware
app.use(express.json())

app.use((req, res, next) => {

    next()
})

app.use('/', graphqlHTTP({
    schema: UserSchema,
    pretty: true,
    graphiql: true
}))

// app.get('/', (req,res) => {
//     res.send('hello world')
// })

app.listen(process.env.PORT, (req, res) => {
    console.log(`listening on port ${process.env.PORT}`)
    console.log(res)
    console.log(req)
})

