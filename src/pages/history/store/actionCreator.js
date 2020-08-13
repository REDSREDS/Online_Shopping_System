import * as constants from './constants';

export const getOrderHistory = (result) => ({
  type: constants.GET_HISTORY,
  result
})