import { combineReducers } from 'redux'
// import authReducer from './authReducer'
import userReducer from './userReducer'
import bookClubReducer from './bookClubReducer'
import sessionsReducer from './sessionsReducer'

export default combineReducers({
  // auth: authReducer
  user: userReducer,
  bookClub: bookClubReducer,
  session: sessionsReducer
})
