const router = require('express').Router();
let Todo = require('../../models/todoModel/tasks')

router.route('/todo').get((req,res)=>{
    Todo.find()
    .then(users => res.json(users))
    .catch(err=>{
        console.log(`erororor`)
        return res.status(400).json("Error" + err)})
}).post((req,res)=>{

    const todo = new Todo({
        task: req.body.task,
				id: req.body.id,
                isChecked:req.body.isChecked
    })
    todo.save()
    .then(()=> res.json('Todo Added'))
    .catch (err=>res.status(400).json(`Error ${err}`))
})
module.exports = router