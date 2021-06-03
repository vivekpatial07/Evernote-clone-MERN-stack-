let Note = require('../models/noteModel/noteModel')
const User = require('../models/userModel/userModel')

const editNote = (req,res)=>{
  
	if (req.body.noteType==="important") {
		const note = { noteType: req.body.noteType }
		Note.findByIdAndUpdate((req.body.id),note,()=>res.status(200).json('updated!'))
	} else if (req.body.noteType==="normal") {
			const note = { noteType: req.body.noteType }
			Note.findByIdAndUpdate((req.body.id),note,()=>res.status(200).json('updated!'))
	} else {
			const note = {
					mainNote:req.body.mainNote,
					title: req.body.title,
					_id: req.body._id,
					noteType:'normal'
			}
			Note.findByIdAndUpdate(req.params.id,note,(err,data)=>res.status(200).json(data))
	}	
}

const addNote = (req,res)=>{
  Note.findById(req.body._id, async(err,data)=>{
      if(!data){
          const note = new Note({
              mainNote: req.body.mainNote||"PLEASE WRITE SOMETHING`",
              title: req.body.title||'title', //validation to be added if something is emplty show toaster or just save with common text like this
              _id: req.body._id,
              user: req.user
          })
          const updatedNote = await note.save()
          const  noteId = updatedNote._id
          console.log(noteId)
          let updatedUser = {}
          const user = await User.findById(req.user)
          user.notes.push(note._id)
        //   console.log(user)
        user.save().then(()=>{
            console.log('user saved')
        }).catch((error)=>{
            console.log(error,'eror is tis')
        })
    } else{
          //dont use new use edit method which is commented
          const note = new Note({
              mainNote: req.body.mainNote,
              title: req.body.title||'title', //validation to be added if something is emplty show toaster or just save with common text like this
              _id: req.body._id,
              user: req.user

          })
          // note.save()
          Note.findByIdAndUpdate(req.body._id, note).then(data => {
            console.log(data)
          }).catch(error => {
            console.log(error)
          })

          // console.log(note)
          console.log(req.body.mainNote || 'opsdfak')
          console.log('hii2')
          //const user = User.findById(req.user)
        //     user.notes.push(note)
        //   user.save().then(()=>{
        //     console.log('user saved')
        // }).catch((error)=>{
        //     console.log(error,'eror is tis')
        // })
        //   Note.findByIdAndUpdate(req.body._id, note,(err,data)=>{
        //       res.status(200).json('Edited Sucessfully')
        //   })
    }
  })
}

const getSingleNote = (req,res)=>{
  const id = req.params.id
  Note.findById(id,(err,note)=> res.json(note))
}

const getAllNotes = (req,res)=>{
  Note.find()
  .then((notes)=> res.json(notes))
  .catch(err=> res.status(400).json("Error"+err))
}


const getImportantNotes = (req,res)=> {
  Note.find({noteType:"important"}).then((impNotes)=>{
      res.json(impNotes)
  }).catch(err=>{
      console.log(err)
  })
}


module.exports = {
  editNote,
  addNote,
  getSingleNote,
  getAllNotes,
  getImportantNotes
}