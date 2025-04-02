import express from "express"
import userRouter from "./routes/userRoutes"
import contentRouter from "./routes/contentRoutes"
import brainRoutes from "./routes/brainRoutes"
import mongoose from "mongoose"
import cors from "cors"
const app = express()

// body parser
app.use(express.json())

// Cors 
app.use(cors())
app.get("/health", (req, res) => {
    res.send("Hello")
})

// user router
app.use("/api/v1/user", userRouter)

// Content Router
app.use("/api/v1/content", contentRouter)

// Share brain content
app.use("/api/v1/brain", brainRoutes)

// connecting database mongoose
try {
    await mongoose.connect(process.env.MONGODB_URL as string)
} catch (error) {
    console.log("error while connecting with mongo database")
} finally {
    console.log("Connection with mongoose, readyState", mongoose.connection.readyState)
}

app.listen((process.env.PORT), () => {
    console.log('Server is listening at ' + process.env.PORT)
})