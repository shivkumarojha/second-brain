import mongoose from "mongoose"
import { UserModel } from "./userModel"

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    share: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: UserModel
    }
}, {
    timestamps: true
})


export const ContentModel = mongoose.model("Content", contentSchema) 