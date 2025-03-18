import express from "express"

const brainRoutes = express.Router()


// Share your own brain content
brainRoutes.post("/share", (req, res) => {
    res.send("Share brain")
})

// Another users share brain content
brainRoutes.get("/:shareLink", (req, res) => {
    res.send("This is your shared links")
})

export default brainRoutes