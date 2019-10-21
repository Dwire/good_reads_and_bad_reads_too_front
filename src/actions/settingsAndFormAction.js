import { SET_SHELF_STYLE, TOGGLE_BOOK_LISTS } from './actionTypes'

export const setShelfStyle = (shelfStyle) => {
  return {
    type: SET_SHELF_STYLE,
    payload: shelfStyle.target.value
  }
}

export const toggleBookLists = () => {
  return {
    type: TOGGLE_BOOK_LISTS
  }
}
