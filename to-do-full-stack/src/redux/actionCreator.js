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
export const storeNotes = (data) => {
    return {
        type:actionTypes.STORE_NOTES,
        payload:data
    }
}

export const fetchNotes = () => {
    return {
        type:actionTypes.FETCH_NOTES,
    }
}

export const fetchNoteSuccess = (data) => {
    return {
        type:actionTypes.FETCH_NOTES_SUCCESS,
        payload:data
    }
}

export const fetchCurrentNote = (data) => {
    return {
        type: actionTypes.FETCH_CURRENT_NOTE,
        payload:data
        
    }
}


export const fetchCurrentNoteSuccess = (data) => {
    return {
        type: actionTypes.FETCH_CURRNOTE_SUCCESS,
        payload: data
    }
}

export const saveNote = () => {
    return {
        type: actionTypes.SAVE_NOTE,

    }
}

export const saveNoteSuccess = (data) => {
    return {
        type: actionTypes.SAVE_NOTE_SUCCESS,
        payload: data
    }
}