import type { JwtPayload } from "jsonwebtoken";

declare global {
  declare module Express {
    interface Request {
      user: string | JwtPayload;
    }
  }
}