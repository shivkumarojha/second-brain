import type { Request, Response } from "express"

export const signin = (req: Request, res: Response) => {
    res.send("Sign in controller")
}

export const signup = (req: Request, res: Response) => {
    res.send("Sign up route")
}