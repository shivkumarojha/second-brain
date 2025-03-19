import type { Request, Response } from "express"
import z, { boolean } from "zod"
import { ContentModel } from "../models/contentModel"
const shareSchema = z.object({
    share: z.boolean()
})
export const brainShare = async (req: Request, res: Response) => {
    const contentId = req.params.id
    const parsedData = shareSchema.safeParse(req.body)
    if (!parsedData.success) {
        return res.status(400).json({
            message: "Invalid inputs"
        })
    }
    const { share } = parsedData.data
    console.log(share)
    try {
        const sharedContent = await ContentModel.findOneAndUpdate(
            {
                _id: contentId
            },
            {
                share
            },
            {
                new: true
            }

        )
        console.log(sharedContent)
        return res.status(200).json({
            message: "content Shared",
            sharedContent
        })
    } catch (error) {
        return res.status(409).json({
            message: "Something went wrong",
            error
        })
    }
}

export const lookSharedBrain = async (req: Request, res: Response) => {
    const sharedContentId = req.params.id
    console.log(sharedContentId)

    try {
        const sharedContent = await ContentModel.findOne({
            _id: sharedContentId
        })
        if (!sharedContent) {
            return res.status(404).json({
                message: "Shared content not found"
            })
        }
        if (!sharedContent.share) {
            return res.status(411).json({
                message: "Unauthorized request content is not shared",
            })
        }
        return res.status(200).json({
            message: "Shared content",
            sharedContent
        })
    } catch (error) {
        return res.status(409).json({
            message: "Something went wrong",
            error
        })
    }
}



