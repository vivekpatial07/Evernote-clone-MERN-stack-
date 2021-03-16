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
module.exports = router