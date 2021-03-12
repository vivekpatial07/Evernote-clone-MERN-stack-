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

export const rootReducers = combineReducers({
    todo:todoReducer,
})