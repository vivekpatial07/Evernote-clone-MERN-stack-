import React, { useState } from 'react'
import './DeleteTodo.css'
import axios from 'axios'
import { connect,useDispatch } from 'react-redux'
import {reRender} from '../../redux/actionCreator'
function DeleteTodo({id, fetchData}) {
	// component not rerendering bcz state is not changing of parent component
	// will do this with redux
	const dispatch = useDispatch()
	const deleteHandler = async(e,id) =>{
	console.log(id)
	const res = await axios.delete('http://localhost:7777/',{data:{id:id}})
	// console.log(res)
	if(res.status===200)
		dispatch(reRender())
		fetchData()
	}
	return (
		<div>
			<button className='dltbtn' onClick={(e)=>deleteHandler(e,id)}>X</button>
		</div>
	)
}

export default connect()(DeleteTodo)
