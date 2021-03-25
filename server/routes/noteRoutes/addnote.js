const router = require('express').Router()
let Note = require('../../models/noteModel/noteSchema')


router.route('/task').get((req,res)=>{
    Note.find()
    .then((notes)=> res.json(notes))
    .catch(err=>res.status(400).json("Error"+err))
})

// .put((req,res)=>{
    // console.log(req.body)
    // const notes = new Note({
    //     mainNote:req.body.mainNote,
    // })
    // console.log(notes)
    // notes.save()
    // .then(()=>res.json("note added"))
    // .catch(err=>res.status(400).json('error'))
// })



router.route('/task/:id').get((req,res)=>{
    const id = req.params.id
    console.log(id)
    Note.findById(id,(err,note)=>{
        res.json(note)
    })
}).put((req,res)=>{
    console.log(req.body)
    const blah = req.body.mainNote
    const note = {
        mainNote:req.body.mainNote,
        //noteType:'normal'
    }
    console.log(req.params.id)
    Note.findByIdAndUpdate(req.params.id,note,(err,data)=>{
        // res.status(200).json('updated')
        console.log(data)
    })
})





module.exports = router