import { combineReducers } from 'redux'
// import authReducer from './authReducer'
import userReducer from './userReducer'
import bookClubReducer from './bookClubReducer'
import sessionsReducer from './sessionsReducer'
import settingsAndFormReducer from './settingsAndFormReducer'

export default combineReducers({
  // auth: authReducer
  user: userReducer,
  bookClub: bookClubReducer,
  session: sessionsReducer,
  settingsAndFormReducer: settingsAndFormReducer
})
