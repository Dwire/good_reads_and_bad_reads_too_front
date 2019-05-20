import { SET_USER, SET_INITIAL_STATE } from '../actions/actionTypes'

const sessionsState = {loggedIn: false}

export const sessionsReducer = (state = sessionsState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {...state, loggedIn: true}
    case SET_USER:
      return {...state, loggedIn: true}
    default:
      return state
  }
}

export default sessionsReducer
