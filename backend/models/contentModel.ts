import mongoose from "mongoose"

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    link: {
        type: URL,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
})


export const ContentModel = mongoose.model("Content", contentSchema) 