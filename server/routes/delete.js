const router = require('express').Router();
let Todo = require('../schemas/tasks')

router.route('/').delete((req,res)=>{
	const id = req.body.id
	console.log(req.body)
	Todo.findOneAndRemove({id:id},(err,data)=>{
		console.log(err)
		res.status(200).json('deleted')
	})

})
module.exports = router