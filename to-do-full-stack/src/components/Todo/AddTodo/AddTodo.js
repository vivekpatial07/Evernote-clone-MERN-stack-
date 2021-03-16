import React,{useState, useEffect} from 'react'
import DeleteTodo from '../DeleteTodo/DeleteTodo'
import {v4 as uuidv4} from 'uuid'
import './AddTodo.css'
import axios from 'axios'
import {connect , useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../../redux/actionCreator'
import { todoSelector } from '../../../redux/selector'
import {Input, Button} from 'semantic-ui-react'
import EditTodo from '../EditTodo/EditTodo'
import { motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";
function AddTodo() {
	const dispatch = useDispatch()
	const todos = useSelector(todoSelector)
	const initialState = {
			task:'',
			id:'',
			isChecked:false
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
		console.log(currTodo)
		axios.post('http://localhost:7777/todo',currTodo).then(res=>{
				fetchtodofrombackend()

		}).catch(err=>{
				console.log(err)
		})
	}
	const checkboxHandler = async(e,id) =>{
		console.log(e.target.checked)
		const todolists = [...todos]
			console.log(id)
		const updateTodo=todolists.find(todo=>{
			return todo.id===id
		})
		updateTodo.isChecked = e.target.checked
		console.log(updateTodo)
		const res = await axios.put('http://localhost:7777/todo',updateTodo)
		if(res.status===200) fetchtodofrombackend()
	}
	const fetchtodofrombackend = () => {
		axios.get('http://localhost:7777/todo').then(res=>{
			dispatch(fetchData(res.data))
		}).catch(err=>{
				console.log(err)
		})
		}
		useEffect(()=>{
			fetchtodofrombackend()
		},[])
		const showTodo = todos?.map(todo=>{
			return <div className='todoContainer' key={todo._id}>
				<div className='todos'>
					<div className={todo.isChecked?'strikes':null}>
						<span className='checkbox'>
					<input type="checkbox" onChange={(e)=>checkboxHandler(e,todo.id)} 
						checked={todo.isChecked}
						/>
						</span>
					{todo.task}
			
					</div>
				<div className='controller'>
					<EditTodo id={todo.id} fetchData={fetchtodofrombackend}/>
					<DeleteTodo id={todo.id} fetchData={fetchtodofrombackend}/>
				</div>
				</div>
				
			</div>
	})
  return (
	//component is not unmouting
	<AnimateSharedLayout>
	<AnimatePresence>
		<motion.div 
			animate={{scale:1}}
			initial={{scale:0}}
			transition={{duration:0.7}}
			exit={{scale:0}}
			className='container'>
			<form onSubmit={addToDb}>
			<Input type='text' onChange={chandHandler}/>
			<motion.div
			whileHover={{scale:1.09}}>	
			<Button secondary>ADD TODO</Button>
			</motion.div>
			</form>
			<div>{showTodo}</div>
		</motion.div>
	</AnimatePresence>
	</AnimateSharedLayout>
  )
}

export default connect()(AddTodo)
