import {put} from 'redux-saga/effects'
import {
	fetchCurrentNoteSuccess,
	fetchImportantNotesSuccess,
	fetchNoteSuccess
} from './actionCreator'
import axios from 'axios'


export function* fetchNotesSaga(id) {
	const data = yield axios.get('http://localhost:7777/task',{
		params: {
			id: id.payload
		}
	}).then((res)=>{
		console.log(res,'this is the prini')
		return res
	})

	try {
		yield put(fetchNoteSuccess(data.data))
	} catch {
			console.log('error')
	}
}

export function* fetchCurrNoteSaga(data) {
	
	const pathname = yield data.payload
	
	const currNote = yield axios.get(`http://localhost:7777/task/${pathname}`)
		.then((res)=>{ 
			return res.data
		})

	try {
		yield put(fetchCurrentNoteSuccess(currNote))
	}	catch {
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
	const user = yield JSON.parse(localStorage.getItem('userInfo'))
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${user.token}`,
		},
	}

	yield axios.post("http://localhost:7777/task", note, config)
		.then((res)=>{
			console.log(res)

	}).catch((err)=>{
			console.log(err)
	})
}

export function* starUnstarSaga(data) {
		
	yield console.log(data.payload)
	//whole document is changing if I use put/post changing find a better way
	yield axios.put(`http://localhost:7777/task/${data.payload.id}/edit`,data.payload)
}

export function* fetchImportantNotesSaga() {
	
	const importantNotes = yield axios.get('http://localhost:7777/task/important')
	.then(res=>res)
	
	try	{
		yield put(fetchImportantNotesSuccess(importantNotes.data))
	} catch	{
			console.log('error')
	}
}