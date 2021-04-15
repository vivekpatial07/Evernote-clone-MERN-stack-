const router = require('express').Router()
let Note = require('../../models/noteModel/noteSchema')


router.route('/task').get((req,res)=>{
    Note.find()
    .then((notes)=> res.json(notes))
    .catch(err=>res.status(400).json("Error"+err))
})




router.post('/task',((req,res)=>{
    Note.findById(req.body._id,(err,data)=>{
        if(!data){
            const note = new Note({
                mainNote: req.body.mainNote||"PLEASE WRITE SOMETHING`",
                title: req.body.title||'title', //validation to be added if something is emplty show toaster or just save with common text like this
                _id: req.body._id
            })
            note.save().then(()=>res.json('note added'))
            .catch (err=>res.status(400).json(`Error ${err}`))
        }
        else{
            const note = new Note({
                mainNote: req.body.mainNote||"PLEASE WRITE SOMETHING`",
                title: req.body.title||'title', //validation to be added if something is emplty show toaster or just save with common text like this
                _id: req.body._id
            })

            Note.findByIdAndUpdate(req.body._id, note,(err,data)=>{
                res.status(200).json('Edited Sucessfully')
            })
        }
    })
}))




router.put('/task/:id/edit',((req,res)=>{
    if(req.body.noteType==="important"){
        const note = {
            noteType:req.body.noteType
        }
        Note.findByIdAndUpdate((req.body.id),note,(err,data)=>{
            res.status(200).json('updated!')
        })
    }
    else if(req.body.noteType==="normal"){
        const note = {
            noteType:req.body.noteType
        }
        Note.findByIdAndUpdate((req.body.id),note,(err,data)=>{
            res.status(200).json('updated!')
        })
    }
    else{
        const note = {
            mainNote:req.body.mainNote,
            title: req.body.title,
            _id: req.body._id,
            noteType:'normal'
        }
        Note.findByIdAndUpdate(req.params.id,note,(err,data)=>{
            res.status(200).json(data)
        })
    }
    
}))

router.route('/task/:id').get((req,res)=>{
    const id = req.params.id
    Note.findById(id,(err,note)=>{
        res.json(note)
    })
})

module.exports = router