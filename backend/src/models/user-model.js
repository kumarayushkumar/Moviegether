import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, "uid not provided"], 
        unique: true
    },
    emailId: {
        type: String,
        required: [true, "email id not provided"], 
        unique: true
    },
    name: {
        type: String, 
        required: [true, "name not provided"]
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'MovieModel'
    }]
}, { timestamps: true })

export default mongoose.model('UserModel', UserSchema)