const mongoose = require('mongoose');




//schema
const todoSchema = new mongoose.Schema({
    task: String,
    id: String
})
//model
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports= ToDo