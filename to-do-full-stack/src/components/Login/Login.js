import React,{useEffect, useState}from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
	
	const [data,setdata] = useState()
	const [isLogged,setisLogged] = useState(false)

	const changeHandler = (e) => {
		const datum = {...data}
		datum[e.target.name]=e.target.value
		setdata(datum)
	}

	const loginHandler = async(e) =>{
		e.preventDefault()
		console.log(data)
		const res =  await axios.post('http://localhost:7777/login',data)
		console.log(res)
		if(res.status===200){
			setisLogged(true)
		}
			
	}

	useEffect(()=>{
		if(isLogged){
			props.history.push('todo')
		}
	},[isLogged, props.history])

	return (
		<div>
			<h1>Login</h1>
			<form style={{display:'flex',flexDirection:'column'}}>
				<input onChange={changeHandler} name="email" placeholder="email"/>
				<input onChange={changeHandler} name="password" placeholder="password"/>
				<button onClick={loginHandler}>LOGIN</button>
			</form>
		</div>
	)
}

export default withRouter(Login)
