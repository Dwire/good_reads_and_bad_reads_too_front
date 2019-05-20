import { SET_INITIAL_STATE, SET_BOOK_CLUB, SET_BOOK_CLUBS } from '../actions/actionTypes'

const userState = {}

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      const {book_clubs} = action.payload
      const book_club = book_clubs[0]
      return {...state, bookClub: book_club, bookClubs: book_clubs}
    case SET_BOOK_CLUB:
      return action.payload
    case SET_BOOK_CLUBS:
      return action.payload
    default:
      return state
  }
}

export default userReducer
