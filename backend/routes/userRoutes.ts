import express from "express"

const userRouter = express.Router()


// Sign Up route
userRouter.post("/signup", (req, res) => {
    res.send("Hello from user router")
})

// Sign in route
userRouter.post("/signin", (req, res) => {
    res.send("Sign in Route")
})


export default userRouter