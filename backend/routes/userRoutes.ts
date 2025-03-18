import express from "express"
import { signin, signup } from "../controllers/userController"

const userRouter = express.Router()


// Sign in route
userRouter.post("/signin",signin)

// Sign up route
userRouter.post("/signup",signup)    

export default userRouter