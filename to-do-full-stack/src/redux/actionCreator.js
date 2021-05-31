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

export const editNoteInit = (data) => {
	return {
		type: actionTypes.EDIT_NOTE_INIT,
		payload: data
	}
}

export const editNoteSuccess = (data) => {
	return {
		type: actionTypes.EDIT_NOTE_SUCCESS,
		payload: data
	}
}

export const saveNote = (data) => {
	return {
		type: actionTypes.SAVE_NOTE,
		payload:data
	}
}

export const saveNoteSuccess = (data) => {
	return {
		type: actionTypes.SAVE_NOTE_SUCCESS,
		payload: data
	}
}

export const starUnstar = (data) => {
	return {
		type: actionTypes.STAR_UNSTAR,
		payload: data
	}
}

export const starUnstarSuccuss = (data) => {
	return {
		type:actionTypes.STAR_UNSTAR_SUCCESS,
		payload: data
	}
}

export const fetchImportantNotes = () => {
	return {
		type:actionTypes.FETCH_IMPORTANT_NOTES_INIT,
	}
}

export const fetchImportantNotesSuccess = (data) => {
	return {
		type:actionTypes.FETCH_IMPORTANT_NOTES_SUCCESS,
		payload:data
	}
}

export const signUpInitiate = (data, redirectTo) => {
	return {
		type: actionTypes.SIGN_UP_INITIATE,
		payload: data,
		redirectTo: redirectTo
	}
}

export const signUpSuccess = (data) => {
	return {
		type: actionTypes.SIGN_UP_SUCCESS,
		payload: data
	}
}

export const loginInitiate = (data, redirectTo) => {
	return {
		type: actionTypes.LOGIN_INITIATE,
		payload: data,
		redirectTo: redirectTo
	}
}

export const loginSuccess = (data) => {
	return {
		type: actionTypes.LOGIN_SUCCESS,
		payload: data
	}
}

export const logoutInitate = (redirectTo) => {
	return {
		type: actionTypes.LOGOUT_INITIATE,
		redirectTo: redirectTo
	}
}

export const logoutSuccess = () => {
	return {
		type: actionTypes.LOGOUT_SUCCESS
	}
}