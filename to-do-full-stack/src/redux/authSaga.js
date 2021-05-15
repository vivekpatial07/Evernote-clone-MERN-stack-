import { put } from "@redux-saga/core/effects"
import axios from "axios"
import {
  signUpSuccess,
  logoutSuccess
} from "./actionCreator"



export function* signUpSaga(data){
  const userCreds = yield data.payload
  yield axios.post('http://localhost:7777/signup',userCreds).then((res)=>{
    console.log(res.data)
    localStorage.setItem('userInfo',JSON.stringify(res.data))
  })
  try{
    yield put(signUpSuccess(userCreds))
    yield data.redirectTo.push('/task')
  }catch{
    alert('login failed')
  }
}

export function* logoutSaga(data){
  yield localStorage.removeItem("userInfo")
  try {
    yield put(logoutSuccess())
    yield data.redirectTo.push('/signup')
    yield console.log('ppus')
  } catch (error) {
    console.log('erero', error)    
  }
}