import jwt from "jsonwebtoken"
interface jwtPayloadInterface {
    id: string,
    username: string
}
export default async function createJwtToken(jwtPayload: jwtPayloadInterface
) {

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined")
    }
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, { expiresIn: "30d" })

    return token
}