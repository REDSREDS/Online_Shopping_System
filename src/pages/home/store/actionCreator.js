import * as constants from './constants';

export const addQuantityByIndex = (categoryIndex, itemIndex) => ({
    type: constants.ADD_TO_CART,
    categoryIndex,
    itemIndex
})

export const initiateProductList = (code, msg, list) => ({
    type: constants.INITIATE_PRODUCT_DATA,
    code,
    msg,
    list
})

