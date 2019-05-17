import { SET_INITIAL_STATE, SET_BOOK_CLUB, SET_BOOK_CLUBS } from '../actions/actionTypes'

const userState = {}

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return action.payload
    case SET_BOOK_CLUB:
      return action.payload
    case SET_BOOK_CLUBS:
      return action.payload
    default:
      return state
  }
}

export default userReducer
