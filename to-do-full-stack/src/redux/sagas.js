import {takeLatest} from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import {
  fetchNotesSaga,
  saveNoteSaga,
  fetchCurrNoteSaga,
  editNoteSaga,
  starUnstarSaga
  
} from './notesSaga'
export default function* watcherSaga() {
  // ----------------------- NOTES--------------------------------------- //
    yield takeLatest(actionTypes.FETCH_NOTES, fetchNotesSaga)
    yield takeLatest(actionTypes.FETCH_CURRENT_NOTE, fetchCurrNoteSaga)
    yield takeLatest(actionTypes.EDIT_NOTE_INIT, editNoteSaga)
    yield takeLatest(actionTypes.SAVE_NOTE, saveNoteSaga)
    yield takeLatest(actionTypes.STAR_UNSTAR, starUnstarSaga)
  }