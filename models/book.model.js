import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    saga: {
        type: String,
        default: ""
    },
    pages: {
        type: Number,
    },
    genre: {
        type: String,
    },
    subgenre: {
        type: String,
    },
    subject: {
        type: String,
    },
    estante: {
        type: Number,
    },
    lang: {
        type: String,
    },
    read: {
        type: Boolean,
    },
    prestado: {
        type: String,
    },
    oLkey: {
        type: String,
    },
    aux: {
        type: String,
        default: ""
    },


})

export default mongoose.model("Book", bookSchema,"books")