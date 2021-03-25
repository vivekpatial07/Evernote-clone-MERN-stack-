const router = require('express').Router()
let Note = require('../../models/noteModel/noteSchema')


router.route('/task').get((req,res)=>{
    Note.find()
    .then((notes)=> res.json(notes))
    .catch(err=>res.status(400).json("Error"+err))
})
.post((req,res)=>{
    const notes = new Note({
        mainNote:req.body.mainNote,
    })
    notes.save()
    .then(()=>res.json("note added"))
    .catch(err=>res.status(400).json('error'))
})



router.route('/task/:id').get((req,res)=>{
    const id = req.params.id
    console.log(id)
    Note.findById(id,(err,note)=>{
        res.json(note)
    })
})





module.exports = router