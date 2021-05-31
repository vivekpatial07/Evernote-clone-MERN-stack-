import React,{useEffect, useState}from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginInitiate } from '../../redux/actionCreator'
import { withRouter } from 'react-router-dom'
import './Login.css'
import Icon1 from '../Icons/Icon1'

const Login = (props) => {
	
	const [data,setdata] = useState()
	const [isLogged,setisLogged] = useState(false)
	const dispatch = useDispatch()

	const changeHandler = (e) => {
		const datum = {...data}
		datum[e.target.name]=e.target.value
		setdata(datum)
	}

	const loginHandler = async(e) =>{
		e.preventDefault()
		dispatch(loginInitiate(data, props.history))


		// const res =  await axios.post('http://localhost:7777/login',data)
		// console.log(res)
		// if(res.status===200){
			// setisLogged(true)
		// }
			
	}
// use local storage for this redirect
	// useEffect(()=>{
	// 	if(isLogged){
	// 		props.history.push('todo')
	// 	}
	// },[isLogged, props.history])

	return (
		<div className="loginWrapper">
			<Icon1 />
			<p className="formHeader">NeverNote</p>
			<form style={{display:'flex',flexDirection:'column'}}>
				<input onChange={changeHandler} name="email" placeholder="email"/>
				<input onChange={changeHandler} name="password" placeholder="password"/>
				<button className="formBtn" onClick={loginHandler}>LOGIN</button>
			</form>
			<div className="formFooter">
				<p>
					Don't Have an account ?
				</p>
				<button onClick={() => props.history.push('/signup')}>Sign Up</button>
			</div>
		</div>
	)
}

export default withRouter(Login)
