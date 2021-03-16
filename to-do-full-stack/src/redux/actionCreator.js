import * as actionTypes from './actionTypes'
export const fetchData = (todos) => {
    return {
        type:actionTypes.FETCH_DATA,
        payload:todos
    }
}
export const showModal = (data) => {
    return {
        type:actionTypes.SHOW_MODAL,
        payload:data
    }
}
