const  mongoose = require('mongoose')





const noteSchema = new mongoose.Schema({
    mainNote:{type:String,required:true},
    title: String,
    noteType:String
})



const Note = mongoose.model('Note', noteSchema, 'all-notes')

module.exports = Note