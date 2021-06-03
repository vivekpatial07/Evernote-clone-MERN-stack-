import { put } from "@redux-saga/core/effects"
import axios from "axios"
import {
  signUpSuccess,
  loginSuccess,
  logoutSuccess
} from "./actionCreator"


export function* signUpSaga(data){
  
  const userCreds = yield data.payload
  
  yield axios.post('http://localhost:7777/signup',userCreds).then((res)=>{
    console.log(res.data)
    localStorage.setItem('userInfo',JSON.stringify(res.data))
  })

  try {
    yield put(signUpSuccess(userCreds))
    yield data.redirectTo.push('/task')
  } catch(error) {
    alert('sign up failed', error)
  }
}

export function* loginSaga(data) {
  
  const userCreds = yield data.payload

  yield axios.post('http://localhost:7777/login', userCreds).then((res) => {
    console.log(res.data)
    localStorage.setItem('userInfo',JSON.stringify(res.data))
  }).catch(err => {
    console.log(err)
  })

  try {
    yield put(loginSuccess(userCreds))
    yield data.redirectTo.push('/task')
  } catch (error) {
    console.log('login failed', error)
  }
}

export function* logoutSaga(data) {
  
  yield localStorage.removeItem("userInfo")
  
  try {
    yield put(logoutSuccess())
    yield data.redirectTo.push('/login')
    yield console.log('ppus')
  } catch (error) {
    console.log('erero', error)    
  }
}