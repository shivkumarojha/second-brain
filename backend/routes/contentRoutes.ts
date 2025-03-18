import express from "express"
import { addContent, deleteContent, getAllContent } from "../controllers/contentController"

const contentRouter = express.Router()


// Add a new content
contentRouter.post("/", addContent)


// Delete a content with content id
contentRouter.delete("/:id", deleteContent) 

// Get all the content of the user
contentRouter.get("/", getAllContent)


export default contentRouter