const router = require('express').Router();
let Todo = require('../schemas/tasks')

router.route('/').put((req,res)=>{
    console.log(req.body)
    const id = req.body.id
    const task = req.body.task
    let todo = {
        task:task,
        id:id,
        isChecked:req.body.isChecked
    }
    // todo = JSON.stringify(todo) 
    console.log(todo)
    Todo.findOneAndUpdate({id:id},todo,null,(err,data)=>{
        res.status(200).json('updated')
    })
})
module.exports = router