import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'

//export to store.js
export default combineReducers({
    alert,
    auth
})