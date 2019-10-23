import { SET_SHELF_STYLE, TOGGLE_BOOK_LISTS, TOGGLE_SHELF_DISPLAY } from '../actions/actionTypes'

const sessionsState = {shelfStyle: 'classic', ownedBooks: true, displayShelf: true}

export const settingsAndFormReducer = (state = sessionsState, action) => {
  switch (action.type) {
    case SET_SHELF_STYLE:
      return {...state, shelfStyle: action.payload}
      case TOGGLE_BOOK_LISTS:
        return {...state, ownedBooks: !state.ownedBooks}
      case TOGGLE_SHELF_DISPLAY:
        return {...state, displayShelf: !state.displayShelf}
    default:
      return state
  }
}

export default settingsAndFormReducer
