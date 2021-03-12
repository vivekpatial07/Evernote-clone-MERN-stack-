const mongoose = require('mongoose');


//schema
const todoSchema = new mongoose.Schema({
    task: String,
    id: String,
    isChecked:Boolean
})

//model
const ToDo = mongoose.model('ToDo', todoSchema,'All to-dos');


module.exports= ToDo