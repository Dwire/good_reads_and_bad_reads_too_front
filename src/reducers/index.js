import { combineReducers } from 'redux'
// import authReducer from './authReducer'
import userReducer from './userReducer'
import sessionsReducer from './sessionsReducer'

export default combineReducers({
  // auth: authReducer
  user: userReducer,
  session: sessionsReducer 
})
