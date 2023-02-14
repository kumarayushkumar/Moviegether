import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, "uid not provided"], 
    },
    src: {
        type: String,
        required: [true, "source not provided"], 
        unique: true
    },
}, { timestamps: true })

export default mongoose.model('MovieModel', MovieSchema)