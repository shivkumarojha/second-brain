import type { Request, Response } from "express"
import z from "zod"
import { ContentModel } from "../models/contentModel"
import type { userType } from "../middlewares/authMiddleware"

const contentZodSchema = z.object({
    link: z.string().url(),
    title: z.string(),
    contentTypeId: z.string(),
    tags: z.string().array()

})
export const addContent = async (req: Request, res: Response) => {
    const parsedData = contentZodSchema.safeParse(req.body)
    const user: userType = req.user

    if (!parsedData.success) {
        return res.status(409).json({
            message: "Invalid inputs",
            error: parsedData.error
        })
    }

    const { contentTypeId, link, title, tags } = parsedData.data
    try {
        const content = await ContentModel.create({
            contentTypeId,
            link,
            title,
            tags,
            user: user?.id
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


export const deleteContent = async (req: Request, res: Response) => {
    const contentId = req.params.id
    try {
        const content = await ContentModel.findOneAndDelete({
            _id: contentId,
            user: req.user?.id
        })
        if (!content) {
            return res.status(400).json({
                message: "Content doesn't exist"
            })
        }
        res.status(200).json({
            message: "Content deleted"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Some error occured",
            error
        })
    }
}


export const getAllContent = async (req: Request, res: Response) => {
    try {
        const contents = await ContentModel.find({
            user: req.user?.id
        })
        if (!contents) {
            return res.status(404).json({
                message: "No contents available"
            })
        }
        return res.status(200).json({
            message: "Fetched contents successfully",
            contents
        })
    } catch (error) {
        return res.status(404).json({
            message: "Something went wrong",
            error
        })
    }
}