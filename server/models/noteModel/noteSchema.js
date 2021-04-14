const  mongoose = require('mongoose')





const noteSchema = new mongoose.Schema({
    mainNote:{type:String,required:true},
    title: {type:String,required:true},
    noteType: String,
    _id: String
})



const Note = mongoose.model('Note', noteSchema, 'all-notes')

module.exports = Note