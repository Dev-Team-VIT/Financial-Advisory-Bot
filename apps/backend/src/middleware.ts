import { validateCustomerIds } from "."
import { JWT_SECRET } from "./config";
import jwt, { JwtPayload } from "jsonwebtoken"

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