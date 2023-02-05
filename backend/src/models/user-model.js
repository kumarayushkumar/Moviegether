import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: [true, "emailId not provided"], 
        unique: true
    },
    userId: {
        type: String,
        required: [true, "userId not provided"], 
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
}, { timestamps: true })

export default mongoose.model('UserModel', UserSchema)