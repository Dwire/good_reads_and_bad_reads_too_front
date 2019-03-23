import { SET_USER } from './actionTypes'

export const setUser = (user) => {
  debugger
  return {
    type: SET_USER,
    payload: user.data
  }
}
