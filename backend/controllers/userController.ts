import type { Request, Response } from "express"
import { z } from "zod"
import { UserModel } from "../models/userModels"

const userZodSchema = z.object({
    name: z.string(),
    username: z.string().min(3).max(30),
    password: z.string().min(8).max(20)
})


export const signin = (req: Request, res: Response) => {
    res.send("Sign in controller")
}

export const signup = async (req: Request, res: Response) => {
    // get the user details from the body
    const parsedData = userZodSchema.safeParse(req.body)

    // check if the user input is valid or not
    if (!parsedData.success) {
        return res.status(400).json({
            message: "Invalid inputs",
            error: parsedData.error
        })
    }

    const { name, username, password } = parsedData.data
    // check if the user with username exist
    const userExists = await UserModel.findOne({
        username
    })
    if (userExists) {
        return res.status(409).json({
            message: "User already exist with this username"
        })
    }

    // Hash password
    const hashedPassword = await Bun.password.hash(password)
    console.log(hashedPassword)
    try {
        await UserModel.create({
            name,
            username,
            password: hashedPassword
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while adding user, try again",
            error
        })
    }

    res.status(200).json({
        message: "user is created"
    })
}