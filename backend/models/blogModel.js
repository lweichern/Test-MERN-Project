const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    image_source: {
        type: String,
        // required: [true, "Image Source is required"]
    },
    title: {
        type: String,
        required: [true, "Blog title is required"]
    },
    description: {
        type: String,
        required: [true, "Blog description is required"]
    },
    categories: {
        type: Array,
        default: []
    },
    is_favorite: {
        type: Boolean,
        default: false
    },
    date_created: {
        type: Date,
        default: new Date()
    }
})

const Blog = mongoose.model("Blogposts", blogSchema)

module.exports = Blog