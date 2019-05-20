import { SET_LOGIN, SET_INITIAL_STATE } from './actionTypes'

export const setLogin = () => {
  return {
    type: SET_LOGIN,
    payload: true
  }
}

export const setInitialState = (userAndClubData) => {
  return {
    type: SET_INITIAL_STATE,
    payload: userAndClubData
  }
}
