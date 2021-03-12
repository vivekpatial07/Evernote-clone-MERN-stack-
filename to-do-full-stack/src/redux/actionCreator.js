import * as actionTypes from './actionTypes'
export const fetchData = (todos) => {
    return {
        type:actionTypes.FETCH_DATA,
        payload:todos
    }
}