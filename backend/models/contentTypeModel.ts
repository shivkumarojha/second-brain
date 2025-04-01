import mongoose, { mongo } from "mongoose";
import { UserModel } from "./userModel";
import { ContentModel } from "./contentModel";

const contentTypeSchema = new mongoose.Schema({
    contentType: {
        type: String,
        unique: true,
    },
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ContentModel
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel
    }
})

export const ContentTypeModel = mongoose.model("ContentType", contentTypeSchema)