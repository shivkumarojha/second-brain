import express from "express"
import { brainShare, lookSharedBrain } from "../controllers/brainController"

const brainRoutes = express.Router()


// Share your own brain content
brainRoutes.post("/share", brainShare)

// Another users share brain content
brainRoutes.get("/:shareLink", lookSharedBrain)

export default brainRoutes