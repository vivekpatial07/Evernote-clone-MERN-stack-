import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import watcherSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import {rootReducers} from './reducers'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watcherSaga)
export default store