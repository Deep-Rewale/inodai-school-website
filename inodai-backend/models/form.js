const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({

    studentName: String,
    parentName: String,
    email: String,
    phone: String,
    program: String,
    subject: String,
    message: String,
    type: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("form", formSchema)