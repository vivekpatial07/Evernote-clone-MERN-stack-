import * as actionTypes from "./actionTypes";
import {  combineReducers } from "redux";
// import { actionChannel } from "@redux-saga/core/effects";


const initialState = []

const todoReducer = (state=initialState,action) => {
	switch(action.type){
		case actionTypes.FETCH_DATA:
			return[action.payload]            
		default:
			return state
	}
}


const initialNoteState = {
    showModal:false,
    notes:[],
    notesLoader:true,
    currentNote:null,
    importantNotes:[]
}

const noteReducer = (state = initialNoteState , action ) => {
	switch(action.type){
		case actionTypes.SHOW_MODAL:
			return {
				...state,
				showModal:action.payload,
				notesLoader: false
			}

		case actionTypes.STORE_NOTES:
			return {
				...state,
				notes:[...action.payload]
			}

		case actionTypes.FETCH_NOTES:
			return {
				...state,
				notesLoader:true
			}

		case actionTypes.FETCH_NOTES_SUCCESS:
			return {
				...state,
				notes:[...action.payload],
				notesLoader:false
			}

		// case actionChannel.FETCH_IMPORTANT_NOTES_INIT:
		//     return {
		//         ...state,
		//         notesLoader:true
		//     }

		case actionTypes.FETCH_IMPORTANT_NOTES_SUCCESS:
			return {
				...state,
				importantNotes:[...action.payload],
				// notesLoader:false
			}

		case actionTypes.FETCH_CURRENT_NOTE:
			return {
				...state,
				notesLoader:true   
			}

		case actionTypes.FETCH_CURRNOTE_SUCCESS:    
			return {
				...state,
				currentNote:action.payload,
				notesLoader:false
			}
		default:
			return state
	}
}


const initialAuthState = {
    userInfo: null,
    loading: false
}

const authReducer = (state=initialAuthState, action) => {
	switch(action.type){
		case actionTypes.SIGN_UP_INITIATE:
			return {
				...state,
				loading: true 
			}

		case actionTypes.SIGN_UP_SUCCESS:
			return {
				...state,
				userInfo: action.payload,
				loading: false
			}
			
		case actionTypes.LOGIN_INITIATE:
			return {
				...state,
				loading: true
			}

		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				userInfo: action.payload,
				loading: false
			}
		default:
			return state
	}
}

export const rootReducers = combineReducers({
    todo:todoReducer,
    note:noteReducer,
    auth:authReducer
})