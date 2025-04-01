import mongoose from "mongoose"
import { UserModel } from "./userModel"
import { ContentTypeModel } from "./contentTypeModel"

const contentSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    share: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel
    },
    contentTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ContentTypeModel
    }
}, {
    timestamps: true
})


export const ContentModel = mongoose.model("Content", contentSchema) 