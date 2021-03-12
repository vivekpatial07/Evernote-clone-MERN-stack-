import React from 'react'
import './DeleteTodo.css'
import axios from 'axios'
function DeleteTodo({id, fetchData}) {
	// component not rerendering bcz state is not changing of parent component
	// will do this with redux
	const deleteHandler = (e,id) =>{
	 axios.delete('http://localhost:7777/',{data:{id:id}})
	}
	return (
		<div>
			<button className='dltbtn' onClick={(e)=>deleteHandler(e,id)}>X</button>
		</div>
	)
}

export default DeleteTodo
