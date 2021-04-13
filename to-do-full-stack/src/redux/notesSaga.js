import {put} from 'redux-saga/effects'
import {fetchCurrentNoteSuccess, fetchNoteSuccess} from './actionCreator'
import axios from 'axios'

export function* fetchNotesSaga() {
    const data = yield axios.get('http://localhost:7777/task').then((res)=>{
       return res
    })
    console.log(data)
    try{
    yield put(fetchNoteSuccess(data.data))
    }
    catch {
        console.log('error')
    }
}

export function* fetchCurrNoteSaga(data) {
    const pathname = yield data.payload
    const currNote = yield axios.get(`http://localhost:7777${pathname}`).then((res)=>{ 
        return res.data
    })
    console.log(currNote)
    try {
        yield put(fetchCurrentNoteSuccess(currNote))
    }
    catch {
        console.log('error')
    }
}

export function* editNoteSaga(data) {
    const note = yield data.payload
    yield axios.put(`http://localhost:7777/task/${note._id}`, note)
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    //success toaster to be added
}

export function* saveNoteSaga(data) {
    const note = yield data.payload
    yield axios.post("http://localhost:7777/task",note).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}