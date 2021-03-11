import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from 'redux';
import {rootReducers} from './reducers'
const store = createStore(rootReducers, composeWithDevTools())
export default store 