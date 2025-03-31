/*
    Todo{
        title: string; 
        description: string;
        completed: boolean
    }
*/



const mongoose = require("mongoose");
// mongodb url handy
// mongodb+srv://admin:vLyJcyrjxCHtTpv6@cluster0.5uv3y.mongodb.net/
// .env

mongoose.connect("mongodb+srv://admin:vLyJcyrjxCHtTpv6@cluster0.5uv3y.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}