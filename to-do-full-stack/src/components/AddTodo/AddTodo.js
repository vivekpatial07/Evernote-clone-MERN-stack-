import React,{useState} from 'react'
import DeleteTodo from '../DeleteTodo/DeleteTodo'
import './AddTodo.css'
import axios from 'axios'
function AddTodo() {
	const initialState = {
			task:'',
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
		axios.post('http://localhost:7777/',todo).then(res=>{
				console.log(res)
		}).catch(err=>{
				console.log(err)
		})
	}
	const fetchtodofrombackend = () => {
		axios.get('http://localhost:7777/').then(res=>{
			console.log(res)
			const fetchedData = res.data.map(d=>{
			return<div className='todos' key={d._id}>
				<div>
				{d.task}
				</div>
				<div>
					<DeleteTodo id={d._id}/>
				</div>
				
				</div>
			})
			setshowTodo(fetchedData)
		}).catch(err=>{
				console.log(err)
		})
		}
	
  return (
		<div>
			<form onSubmit={addToDb}>
			<input type='text' onChange={chandHandler}/>
			<button>ADD TODO</button>
			</form>
			<div>{showTodo}</div>
			<button onClick={fetchtodofrombackend}>Fetch from backend</button>
			<div>{}</div>
		</div>
  )
}

export default AddTodo
