import express from "express"
import userRouter from "./routes/userRoutes"
import contentRouter from "./routes/contentRoutes"
import brainRoutes from "./routes/brainRoutes"

const app = express()

// body parser
app.use(express.json())

app.get("/health", (req, res) => {
    res.send("Hello")
})

// user router
app.use("/api/v1/user", userRouter)

// Content Router
app.use("/api/v1/content", contentRouter)

// Share brain content
app.use("/api/v1/brain", brainRoutes)

app.listen((process.env.PORT), () => {
    console.log('Server is listening at ' + process.env.PORT)
})