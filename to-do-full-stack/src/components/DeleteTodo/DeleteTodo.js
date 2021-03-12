import React from 'react'
import './DeleteTodo.css'
import axios from 'axios'
import { connect } from 'react-redux'
function DeleteTodo({id, fetchData}) {
	const deleteHandler = async(e,id) =>{
	console.log(id)
	const res = await axios.delete('http://localhost:7777/',{data:{id:id}})
	console.log(res)
	if(res.status===200)
		fetchData()
	}
	return (
		<div>
			<button className='dltbtn' onClick={(e)=>deleteHandler(e,id)}>X</button>
		</div>
	)
}

export default connect()(DeleteTodo)
