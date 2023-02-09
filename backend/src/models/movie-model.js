import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: [true, "googleId not provided"], 
        unique: true
    },
    movieName: {
        type: String,
        required: [true, "movieName not provided"], 
    },
    src: {
        type: String,
        required: [true, "source not provided"], 
        unique: true
    },
}, { timestamps: true })

export default mongoose.model('MovieModel', MovieSchema)