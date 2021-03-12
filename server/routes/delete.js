const router = require('express').Router();
let Todo = require('../schemas/tasks')

router.route('/').get((req,res)=>{
	Todo.find()
	.then(users => res.json(users))
	.catch(err=>res.status(400).json("Error" + err))
});
router.route('/').delete((req,res)=>{
	const id = req.body.id
	console.log(req.body)
	Todo.findOneAndRemove({id:id},(err)=>{
		console.log(err)
	})

})
module.exports = router