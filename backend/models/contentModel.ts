import mongoose from "mongoose"
import { UserModel } from "./userModel"

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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel
    }
}, {
    timestamps: true
})


export const ContentModel = mongoose.model("Content", contentSchema) 