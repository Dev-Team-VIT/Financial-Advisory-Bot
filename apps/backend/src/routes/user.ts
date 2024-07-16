import express from "express"
import zod from "zod"
import jwt from "jsonwebtoken"
import { User } from "../db"
import { JWT_SECRET } from "../config"
import { router } from "."
const userRouter = express.Router()

const signUpBody = zod.object({
    email: zod.string().email(),
    username: zod.string(),
    password: zod.string()
})

userRouter.post("/signup", async (req, res) => {
    const  parsedInput  = signUpBody.safeParse(req.body);
    
    if(!parsedInput.success) {
        res.status(411).json({
            message: "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        email: req.body.email
    })
    if(existingUser) {
        res.status(411).json({message: "Email already exists"})
    }

    const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    })
    const userId = newUser._id;

    const token = jwt.sign({
        userId: userId
    }, JWT_SECRET)

    res.status(200).json({
        message: "Signed up Successfully",
        token: token
    })
})

const signInBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

userRouter.post("/signin", async (req, res) => {
    const parsedInput = signInBody.safeParse(req.body);

    if(!parsedInput.success) {
        res.status(411).json({
            message: "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        email: req.body.email
    })

    if(existingUser) {
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET)
        res.status(200).json({
            message: "Logged In successFully",
            token: token
        })
        return;
    }
})

module.exports = userRouter