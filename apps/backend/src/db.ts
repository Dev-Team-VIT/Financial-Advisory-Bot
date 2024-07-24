import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()
// const db = (process.env.DATABASE)?.toString()

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE as string).then( () =>{
            console.log("Database Connected");
        })
    }catch(error){
        console.log(error as Error);
        process.exit(1);
    };
}

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
    },
    customerId: {
        type: String,
        required: false
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date

})

export const User = mongoose.model('User', userSchema);


