import type { Request, Response } from "express"
import { z } from "zod"
import { UserModel } from "../models/userModels"
import jwt from "jsonwebtoken"
const userZodSchema = z.object({
    name: z.string(),
    username: z.string().min(3).max(30),
    password: z.string().min(8).max(20)
})


export const signin = async (req: Request, res: Response) => {
    const parsedData = userZodSchema.omit({ name: true }).safeParse(req.body)
    if (!parsedData.success) {
        return res.status(400).json({
            message: "Invalid Inputs"
        })
    }

    const { username, password } = parsedData.data
    // Check if the use exist in the database
    try {
        const user = await UserModel.findOne({ username })
        if (!user) {
            return res.status(401).json({
                message: "User doesn't exists, kindly sign up "
            })
        }

        // check if the password matched
        const isPasswordMatch = await Bun.password.verify(password, user.password)

        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Password doesn't matched, retry"
            })
        }
        const jwtPayload = {
            id: user.id,
            username: user.username
        }
        // send the jwt token
        if(!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined")
        }
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {expiresIn: "30d"})
        return res.status(200).json({
            message: "Log in Success",
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error
        })
    }
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