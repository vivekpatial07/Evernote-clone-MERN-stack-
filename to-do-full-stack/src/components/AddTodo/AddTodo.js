import React,{useState, useEffect} from 'react'
import DeleteTodo from '../DeleteTodo/DeleteTodo'
import {v4 as uuidv4} from 'uuid'
import './AddTodo.css'
import axios from 'axios'
import EditTodo from '../EditTodo/EditTodo'
function AddTodo() {
	const initialState = {
			task:'',
			id:''
	}
	const [showTodo, setshowTodo] = useState([])
	const [todo, settodo] = useState(initialState)
    
	const chandHandler = (e)=>{
		const currentTodo = {...todo}
		currentTodo.task = e.target.value
		settodo(currentTodo)
  }
	const addToDb = (e) =>{
		e.preventDefault()
		const currTodo = {...todo}
		currTodo.id = uuidv4()
		axios.post('http://localhost:7777/',currTodo).then(res=>{
				fetchtodofrombackend()

		}).catch(err=>{
				console.log(err)
		})
	}
	const fetchtodofrombackend = () => {
		axios.get('http://localhost:7777/').then(res=>{
			const fetchedData = res.data.map(d=>{
			return<div className='todos' key={d._id}>
				<div>
				{d.task}
				</div>
				<div>
					<DeleteTodo id={d.id}/>
				</div>
				<div>
					<EditTodo/>
				</div>
				</div>
			})
			setshowTodo(fetchedData)
		}).catch(err=>{
				console.log(err)
		})
		}
		useEffect(()=>{
			fetchtodofrombackend()
		}, [])
	
  return (
		<div className='container'>
			<form onSubmit={addToDb}>
			<input type='text' onChange={chandHandler}/>
			<button>ADD TODO</button>
			</form>
			<div>{showTodo}</div>
		</div>
  )
}

export default AddTodo
