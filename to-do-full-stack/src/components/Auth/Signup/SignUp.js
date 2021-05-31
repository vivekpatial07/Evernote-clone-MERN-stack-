import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { signUpInitiate } from '../../../redux/actionCreator'
import './Signup.css'
import Icon1 from '../../Icons/Icon1'
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
    <>
      <div className="signUpContainer">
        <Icon1 />
        <p className="formHeader">NeverNote</p>
        <form onSubmit={submitHandler}>
          <div className="wrapper">
          {/* <input placeholder="username"/> */}
          <input placeholder="username" onChange={changeHandler} name="username"/>
          <input placeholder="email" onChange={changeHandler} name="email"/>
          <input placeholder="password" type="password" onChange={changeHandler} name="password"/>
          <button type="submit">SIGN UP</button>
          </div>
        </form>
        <div className="signupFooter">
				<p>
					Already Have an account ?
				</p>
				<button onClick={() => history.push('/login')}>Login In</button>
			</div>
      </div>
    </>
  )
}

export default SignUp
