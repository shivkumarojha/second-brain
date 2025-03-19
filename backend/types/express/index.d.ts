import type { JwtPayload } from "jsonwebtoken";
import type mongoose from "mongoose";
import type { userType } from "../../middlewares/authMiddleware";
declare global {
  declare module Express {
    interface Request {
      user: userType 
    }
  }
}