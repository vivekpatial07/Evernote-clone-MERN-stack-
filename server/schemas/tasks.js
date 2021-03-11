const mongoose = require('mongoose');




//schema
const todoSchema = new mongoose.Schema({
    task: String
    // {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true,
    //     minLength: 2
    // }
})
//model
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports= ToDo