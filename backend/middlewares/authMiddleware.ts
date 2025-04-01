import type { Request, Response, NextFunction } from "express"
import jwt, { type JwtPayload } from "jsonwebtoken"

export interface userType {
    id: string,
    username: string,
}
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization
    const token = authHeader?.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: "Token not provided,Unauthorized Access"
        })
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET as string, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    message: "Unauthorized access, JWT malformed"
                })
            } else {
                req.user = decoded as userType 
                next()
            }
        })
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }
}