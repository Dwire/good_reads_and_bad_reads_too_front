import { SET_LOGIN } from '../actions/actionTypes'

const sessionsState = {loggedIn: false}

export const sessionsReducer = (state = sessionsState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {...state, loggedIn: action.payload}
    default:
      return state
  }
}

export default sessionsReducer
