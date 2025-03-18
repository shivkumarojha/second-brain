import express from "express"
import { signin, signup } from "../controllers/userController"

const userRouter = express.Router()


// Sign Up route
userRouter.post("/signup",signin)

// Sign in route
userRouter.post("/signin",signup)    

export default userRouter