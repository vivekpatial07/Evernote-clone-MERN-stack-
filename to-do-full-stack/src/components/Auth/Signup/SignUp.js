import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { signUpInitiate } from '../../../redux/actionCreator'
import './Signup.css'

const SignUp = ({ history }) => {
  
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signUpInitiate(data,history))
  }

  const changeHandler = (e) => {
    const inputData = {...data}
    inputData[e.target.name]=e.target.value
    setData(inputData)
  }

  return (
    <div className="signUpContainer">
      <form onSubmit={submitHandler}>
        <div className="wrapper">
        {/* <input placeholder="username"/> */}
        <input placeholder="email" onChange={changeHandler} name="email"/>
        <input placeholder="password" type="password" onChange={changeHandler} name="password"/>
        <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
