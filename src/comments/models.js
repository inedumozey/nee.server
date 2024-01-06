const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    body: {
        type: String,
        require: true,
        trim: true,
    },
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const comment = model("Comment", schema)
module.exports = comment;