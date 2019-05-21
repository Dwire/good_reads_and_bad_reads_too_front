import { SET_BOOK_CLUBS, SET_BOOK_CLUB } from './actionTypes'

export const setBookClub = (bookClub) => {
  return {
    type: SET_BOOK_CLUB,
    payload: bookClub
  }
}

export const setBookClubs = (bookClubs) => {
  return {
    type: SET_BOOK_CLUBS,
    payload: bookClubs
  }
}
