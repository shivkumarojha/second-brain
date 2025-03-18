import type { Request, Response } from "express"

export const brainShare = (req: Request, res: Response) => {
    res.send("Share brain")
}

export const lookSharedBrain = (req: Request, res: Response) => {
    res.send("This is your shared links")
}



