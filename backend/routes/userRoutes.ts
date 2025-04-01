import express from "express"
import { chooseDefaultContentTypes, signin, signup } from "../controllers/userController"
import { authMiddleware } from "../middlewares/authMiddleware"

const userRouter = express.Router()


// Sign in route
userRouter.post("/signin",signin)

// Sign up route
userRouter.post("/signup",signup)    


// Choose Default Content Types 
userRouter.post("/choose-default-types",authMiddleware, chooseDefaultContentTypes)
export default userRouter