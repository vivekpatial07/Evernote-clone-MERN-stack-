const router = require('express').Router()
let Note = require('../../models/noteModel/noteSchema')


router.route('/task').get((req,res)=>{
    Note.find()
    .then((notes)=> res.json(notes))
    .catch(err=>res.status(400).json("Error"+err))
})




router.route('/task/:id').get((req,res)=>{
    const id = req.params.id
    Note.findById(id,(err,note)=>{
        res.json(note)
    })
})

router.route('/task/:id').put((req,res)=>{
    // console.log(req.body)
    const note = {
        mainNote:req.body.mainNote,
        title: req.body.title
        //noteType:'normal'
    }
    console.log(note)
    Note.findByIdAndUpdate(req.params.id,note,(err,data)=>{
        res.status(200).json(data)
        // console.log(data)
    })
})
module.exports = router