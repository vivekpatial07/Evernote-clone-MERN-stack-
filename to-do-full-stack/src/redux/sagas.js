import {takeLatest} from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import {fetchNotesSaga, saveNoteSaga, fetchCurrNoteSaga} from './notesSaga'
export default function* watcherSaga() {
  // ----------------------- NOTES--------------------------------------- //
    yield takeLatest(actionTypes.FETCH_NOTES, fetchNotesSaga)
    yield takeLatest(actionTypes.FETCH_CURRENT_NOTE, fetchCurrNoteSaga)
    // yield takeLatest(actionTypes.SAVE_NOTE, saveNoteSaga)
  }