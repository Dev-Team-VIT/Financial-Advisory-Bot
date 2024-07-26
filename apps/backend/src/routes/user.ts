import express from "express"
import zod from "zod"
import jwt from "jsonwebtoken"
import { User } from "../db"
import { JWT_SECRET } from "../config"
import { router } from "."
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"
import { resetPassword } from "../middleware"

const userRouter = express.Router()

const signUpBody = zod.object({
    email: zod.string().email(),
    username: zod.string(),
    password: zod.string()
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

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
        res.status(411).json({
            type:"failure", 
            message: "Email already exists"})
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
        type:"success",
        message: "Signed up Successfully",
        token: token,
        username:newUser.username,
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
            type:"failure",
            message: "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        email: req.body.email
    })
    
    if(existingUser) {
        const user = existingUser?.username;
        const pass = existingUser?.password;
        if (pass === parsedInput.data?.password){
            const token = jwt.sign({
                userId: existingUser._id
            }, JWT_SECRET)
            res.status(200).json({
                type:"success",
                message: "Logged In successFully",
                token: token, 
                username:user,
            })
            return;
        }
        res.status(411).json({
            type:"failure",
            message:"Incorrect Password",
        })
        return;

    }
    res.status(411).json({
        type:"failure",
        message:"User not found",
    })
    return;
})

userRouter.post('/forgot-password', async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email})

    if(!user) {
        res.status(403).json({
            type:"failure",
            message: "User does not exist"
        })
    }
        // generate token for reset
    const token = jwt.sign({
        email: email
    }, JWT_SECRET, {
        expiresIn: '1h'
    })

    if(user) {
        user.resetPasswordToken = token
        user.resetPasswordExpires = new Date(Date.now() + 3600000);
        await user.save();
    }

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Click the link to reset your password: http://localhost:3000/reset-password/${token}`
      };


      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).json({ 
            type:"failure",
            error: 'Failed to send email' });
        }
        res.status(200).json({ 
            type:"success",
            message: 'Password reset email sent' });
      });

      res.status(200).json({
        token: token
      })
});

userRouter.post('/reset-password/:token', resetPassword ,async (req: any, res: any) =>{
    
    const {newPassword} = req.body;

    try {
        const hashedPass = await bcrypt.hash(newPassword, 10);
        req.user.password = hashedPass
        req.user.resetPasswordToken = undefined;
        req.user.resetPasswordExpires = undefined;
        await req.user.save();


        res.status(200).json({
            type:"success",
            message: "Password has been reset"
        })
    } catch(err) {
        res.status(400).json({
            error: err
        })
    }
});

module.exports = userRouter