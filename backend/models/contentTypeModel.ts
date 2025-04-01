import mongoose, { mongo } from "mongoose";
import { UserModel } from "./userModel";

const contentTypeSchema = new mongoose.Schema({
    contentType: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    }
})

export const ContentTypeModel = mongoose.model("ContentType", contentTypeSchema)