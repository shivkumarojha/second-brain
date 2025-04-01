import type { Request, Response } from "express"
import { z } from "zod"
import { UserModel } from "../models/userModel"
import createJwtToken from "../utils/jwtUtil"
import { ContentTypeModel } from "../models/contentTypeModel"
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
        const token = await createJwtToken(jwtPayload)
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
    console.log(parsedData.data)
    // check if the user input is valid or not
    if (!parsedData.success) {
        return res.status(400).json({
            message: "Invalid inputs",
            error: parsedData.error
        })
    }

    const { name, username, password } = parsedData.data
    // check if the user with username exist
    const user = await UserModel.findOne({
        username
    })
    if (user) {
        return res.status(409).json({
            message: "User already exist with this username"
        })
    }

    // Hash password
    const hashedPassword = await Bun.password.hash(password)
    try {
        const newUser = await UserModel.create({
            name,
            username,
            password: hashedPassword
        })

        const jwtPayload = {
            id: newUser.id,
            username: newUser.username
        }
        const token = await createJwtToken(jwtPayload)
        res.status(200).json({
            message: "user is created",
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while adding user, try again",
            error
        })
    }

}



// choose Default Content types  : Auth Flow

// interface for default choosen content
const contentTypeSchema = z.object({
    contentType: z.string().array()
})
export const chooseDefaultContentTypes = async (req: Request, res: Response) => {
    const parsedData = contentTypeSchema.safeParse(req.body)
    const userId = req.user.id
    if (!parsedData.success) {
        return res.status(400).json({
            message: "Invalid Inputs"
        })
    }

    try {
        const contentTypeData = parsedData.data.contentType.map(contentType => ({
            contentType,
            userId
        }))

        // Add other as a field to this
        contentTypeData.push({contentType: "Others", userId})
        const contentType = await ContentTypeModel.insertMany(contentTypeData)
        if (!contentType) {
            return res.status(404).json({
                message: "Something went wrong while adding content types, Try again later!!!"
            })
        }
        return res.status(200).json({
            message: "Content is created"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error occured",
            error
        })
    }
}