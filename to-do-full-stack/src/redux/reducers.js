import * as actionTypes from "./actionTypes";
import {  combineReducers } from "redux";
const initialState = []
const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.FETCH_DATA:
        return[
                action.payload
            ]            
        default:
                return state
    }
}
const initialNoteState = {
    showModal:false,
    notes:[]

}
const noteReducer = (state = initialNoteState , action ) => {
    switch(action.type){
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                showModal:action.payload
            }
        // case actionTypes.SHOW_MODA
            default:
                return state
    }
}
export const rootReducers = combineReducers({
    todo:todoReducer,
    note:noteReducer
})