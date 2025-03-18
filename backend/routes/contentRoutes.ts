import express from "express"

const contentRouter = express.Router()


// Add a new content
contentRouter.post("/", (req, res) => {
    res.send("Content Route")
})


// Delete a content with content id
contentRouter.delete("/", (req, res) => {
    res.send("Delete content route")
})

// Get all the content of the user
contentRouter.get("/", (req, res) => {
    res.send("All the content")
})


export default contentRouter