import express from "express"
import { brainShare, lookSharedBrain } from "../controllers/brainController"
import { authMiddleware } from "../middlewares/authMiddleware"

const brainRoutes = express.Router()


// Share your own brain content
brainRoutes.post("/share/:id", authMiddleware, brainShare)

// Another users share brain content
brainRoutes.get("/:id", lookSharedBrain)

export default brainRoutes