import { put } from "@redux-saga/core/effects"
import axios from "axios"
import { signUpSuccess } from "./actionCreator"



export function* signUpSaga(data){
  const userCreds = yield data.payload
  yield axios.post('http://localhost:7777/signup',userCreds).then((res)=>{
    console.log(res.data)
    localStorage.setItem('userInformation',JSON.stringify(res.data))
  })
  try{
    yield put(signUpSuccess())
  }catch{
    alert('login failed')
  }
}