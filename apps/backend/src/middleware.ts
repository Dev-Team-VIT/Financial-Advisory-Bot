import { validateCustomerIds } from "."
import { JWT_SECRET } from "./config";
import jwt, { JwtPayload } from "jsonwebtoken"
import { User } from "./db";

export function validate(req: any, res: any, next: any) {
    const {customerId} = req.body

    if(!validateCustomerIds.includes(customerId)) {
        req.status(411).json({
            message: "Invalid customerId"
        })
    }
    next()
}

export function authenticateUser(req: any, res: any, next: any) {
    const authHeaders = req.headers.authorization;

    if(!authHeaders || authHeaders.startsWith("Bearer")) {
        res.status(403).json({
            message: "Invalid headers"
        })
    }

    const token = authHeaders.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload

        req.userId = decoded.userId

        next()
    }catch(err) {
        res.status(403).json({
            error: err
        })
    }
}


export async function resetPassword(req: any, res: any, next: any) {
    const {token} = req.params

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        const user = await User.findOne({
            email: decoded.email,
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
          });

        if (!user) {
            return res.status(400).json({ error: 'User does not exist' });
        }
          req.user = user

          next()
    } catch (err) {
        res.status(403).json({
            error: err
        })
    }
}