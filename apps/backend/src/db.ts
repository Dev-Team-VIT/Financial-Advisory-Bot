import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/moneyMantra",)

const  userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }

})

export const User = mongoose.model('User', userSchema);


