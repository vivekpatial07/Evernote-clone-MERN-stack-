import React,{useState, useEffect} from 'react'
import DeleteTodo from '../DeleteTodo/DeleteTodo'
import {v4 as uuidv4} from 'uuid'
import './AddTodo.css'
import axios from 'axios'
import {connect , useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../redux/actionCreator'
import { todoSelector } from '../../redux/selector'
import {Input, Button} from 'semantic-ui-react'
import EditTodo from '../EditTodo/EditTodo'
function AddTodo() {
	const dispatch = useDispatch()
	const todos = useSelector(todoSelector)
	// const reRender = useSelector(state=>state.render)
	// const [isRender,setisRender] = useState(reRender)
	const initialState = {
			task:'',
			id:''
	}
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
			dispatch(fetchData(res.data))
		}).catch(err=>{
				console.log(err)
		})
		}
		useEffect(()=>{
			fetchtodofrombackend()
		},[])
	const showTodo = todos?.map(todo=>{
		return <div className='todos' key={todo._id}>
			<div>{todo.task}</div>
			<div style={{display:'flex'}}>
			<EditTodo id={todo.id} fetchData={fetchtodofrombackend}/>
			<DeleteTodo id={todo.id} fetchData={fetchtodofrombackend}/>
			
			</div>
		</div>
	})
  return (
		<div className='container'>
			<form onSubmit={addToDb}>
			<Input type='text' onChange={chandHandler}/>
			<Button secondary>ADD TODO</Button>
			</form>
			<div>{showTodo}</div>
		</div>
  )
}

export default connect()(AddTodo)
