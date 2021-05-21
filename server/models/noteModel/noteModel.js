const  mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
	mainNote:{
		type:String,
		required:true
	},
	title: {
		type:String,
		required:true
	},
	noteType: String,
	_id: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	}
})

const Note = mongoose.model('Note', noteSchema,)

module.exports = Note