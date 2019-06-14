import { SET_INITIAL_STATE, SET_USER } from '../actions/actionTypes'

const userState = {}

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
    debugger
      const {book_clubs, ...user} = action.payload
      return {...state, user}
    case SET_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer
