const mongoose = require('mongoose');


//schema
const todoSchema = new mongoose.Schema({
    task: {type:String, required:true},
    id: String,
    isChecked:Boolean
})

//model
const ToDo = mongoose.model('ToDo', todoSchema,'All to-dos');


module.exports= ToDo