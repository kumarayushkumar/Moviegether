import mongoose from "mongoose"

const connectDB = async (req, res) => {
    try {
        mongoose.set('strictQuery', true)
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB