const router = require('express').Router()
let Note = require('../../models/noteModel/noteSchema')


router.route('/task').get((req,res)=>{
    Note.find()
    .then((notes)=> res.json(notes))
    .catch(err=>res.status(400).json("Error"+err))
})




router.post('/task',((req,res)=>{
    const note = new Note({
        mainNote: req.body.mainNote,
        title: req.body.title
    })
    note.save().then(()=>res.json('note added'))
    .catch (err=>res.status(400).json(`Error ${err}`))

}))
router.put('/task/:id',((req,res)=>{
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
}))

router.route('/task/:id').get((req,res)=>{
    const id = req.params.id
    Note.findById(id,(err,note)=>{
        res.json(note)
    })
})

module.exports = router