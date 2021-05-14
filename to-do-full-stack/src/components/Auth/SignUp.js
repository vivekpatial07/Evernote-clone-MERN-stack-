import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { signUpInitiate } from '../../redux/actionCreator'
import {useHistory} from 'react-router-dom'
import {authSelector} from '../../redux/selector'
const SignUp = () => {
  const userData = JSON.parse(localStorage.getItem('userInfo'))
  console.log(userData)
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const state = useSelector(authSelector)
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signUpInitiate(data))
  }

  const changeHandler = (e) => {
    const inputData = {...data}
    inputData[e.target.name]=e.target.value
    setData(inputData)
  }
  // useEffect(()=>{
  //   if(userData?.token){
  //     history.push('/task')
  //   }
  // },[state,history])
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
