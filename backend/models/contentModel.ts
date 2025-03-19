import mongoose from "mongoose"

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
    }
})


export const ContentModel = mongoose.model("Content", contentSchema) 