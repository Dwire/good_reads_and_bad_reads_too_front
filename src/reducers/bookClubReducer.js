import { SET_INITIAL_STATE, SET_BOOK_CLUB, SET_BOOK_CLUBS } from '../actions/actionTypes'

const bookClubState = {currentClub: [], allClubs: []}

export const userReducer = (state = bookClubState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      const {book_clubs} = action.payload
      const book_club = book_clubs[0]
      return {...state, currentClub: book_club, allClubs: book_clubs}
    case SET_BOOK_CLUB:
      return {...state, currentClub: action.payload}
    case SET_BOOK_CLUBS:
      return {...state, allClubs: action.payload}
    default:
      return state
  }
}

export default userReducer
