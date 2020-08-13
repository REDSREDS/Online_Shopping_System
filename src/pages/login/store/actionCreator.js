import * as constants from './constants';


export const login = (result) => ({
  type: constants.LOG_IN,
  result
})

export const signup =(result) => ({
  type: constants.SIGN_UP,
  result
})

export const logout = () => ({
  type: constants.LOG_OUT
})