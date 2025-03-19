import express from "express"
import { addContent, deleteContent, getAllContent } from "../controllers/contentController"
import { authMiddleware } from "../middlewares/authMiddleware"

const contentRouter = express.Router()


// Add a new content
contentRouter.post("/", authMiddleware, addContent)


// Delete a content with content id
contentRouter.delete("/:id", authMiddleware, deleteContent)

// Get all the content of the user
contentRouter.get("/", authMiddleware, getAllContent)


export default contentRouter