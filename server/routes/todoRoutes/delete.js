const router = require('express').Router();
let Todo = require('../../models/todoModel/tasks')

router.route('/todo').delete((req,res)=>{
	const id = req.body.id
	console.log(req.body)
	Todo.findOneAndRemove({id:id},(err,data)=>{
		console.log(err)
		res.status(200).json('deleted')
	})

})
module.exports = router