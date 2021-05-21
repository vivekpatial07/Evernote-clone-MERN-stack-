import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { signUpInitiate } from '../../redux/actionCreator'

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
    <div>
      <form onSubmit={submitHandler}>
        {/* <input placeholder="username"/> */}
        <input placeholder="email" onChange={changeHandler} name="email"/>
        <input placeholder="password" type="password" onChange={changeHandler} name="password"/>
        <button type="submit">SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
