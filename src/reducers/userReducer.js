import { SET_INITIAL_STATE, SET_USER } from '../actions/actionTypes'

const userState = {}

export const userReducer = (state = userState, action) => {
  // debugger
  switch (action.type) {
    case SET_INITIAL_STATE:
      return action.payload
    case SET_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer
