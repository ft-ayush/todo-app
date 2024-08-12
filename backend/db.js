const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin:passkey@cluster0.ufkm8gc.mongodb.net/todo-app")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("Todo", todoSchema)

module.exports = {todo}