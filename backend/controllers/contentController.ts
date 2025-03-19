import type { Request, Response } from "express"

export const addContent = (req: Request, res: Response) => {
    
    res.send("Content Route")
}

export const deleteContent = (req: Request, res: Response) => {
    res.send("Delete content")
}


export const getAllContent = (req: Request, res: Response) => {
    res.send("All the content")
}