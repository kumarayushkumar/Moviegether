import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: [true, "emailId not provided"], 
        unique: true
    },
    googleId: {
        type: String,
        required: [true, "googleId not provided"], 
        unique: true
    },
    firstName: {
        type: String, 
        required: [true, "firstName not provided"]
    },
    lastName: {
        type: String, 
        required: [true, "lastName not provided"]
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'MovieModel'
    }]
}, { timestamps: true })

export default mongoose.model('UserModel', UserSchema)