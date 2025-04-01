import mongoose, { model } from "mongoose"
import { ContentModel } from "./contentModel"
import { UserModel } from "./userModel"

const tagSchema = new mongoose.Schema({
    tag: {
        type: String,
        unique: true
    },
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ContentModel
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel
    }
})


export const TagModel = mongoose.model("Tag", tagSchema)
