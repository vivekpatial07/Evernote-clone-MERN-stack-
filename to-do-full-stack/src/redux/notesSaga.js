import {call, put} from 'redux-saga/effects'
import {fetchCurrentNoteSuccess, fetchNoteSuccess} from './actionCreator'
import axios from 'axios'

export function* fetchNotesSaga() {
    // yield console.log('saga')
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

// export function* saveNoteSaga() {
//     const data = yield 
// }
export function* fetchCurrNoteSaga(data) {
    yield console.log(data.payload)
    const currNote = yield axios.get(`http://localhost:7777${data.payload}`).then((res)=>{ 
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