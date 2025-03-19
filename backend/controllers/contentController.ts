import type { Request, Response } from "express"
import z from "zod"
import { ContentModel } from "../models/contentModel"
const contentZodSchema = z.object({
    type: z.string(),
    link: z.string().url(),
    title: z.string(),
    tags: z.string().array()

})
export const addContent = async (req: Request, res: Response) => {
    const parsedData = contentZodSchema.safeParse(req.body)
    if (!parsedData.success) {
        return res.status(409).json({
            message: "Invalid inputs",
            error: parsedData.error
        })
    }

    const { type, link, title, tags } = parsedData.data
    try {
        const content = await ContentModel.create({
            type,
            link,
            title,
            tags
        })
        if (content) {
            return res.status(200).json({
                message: "Content added",
                content
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while adding content"
        })
    }
}

export const deleteContent = (req: Request, res: Response) => {
    res.send("Delete content")
}


export const getAllContent = (req: Request, res: Response) => {
    res.send("All the content")
}