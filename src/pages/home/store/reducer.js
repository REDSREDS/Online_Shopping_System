import * as constants from './constants';

const defaultState = {
    code:'',
    message:'',
    list: [],
    inCart: [],
}

export default (state = defaultState, action) => {
    if(action.type === constants.ADD_TO_CART) {
        const newState = JSON.parse(JSON.stringify(state));
        const { id, name, price }  = newState.list[action.categoryIndex].food[action.itemIndex];
        var found = false;
        
        for(var i = 0; i < newState.inCart.length; i++) {
            if(newState.inCart[i].productId === id) {
                newState.inCart[i].productQuantity += 1;
                found = true;
                break;
            }
        }
        if(found === false) {
            newState.inCart.push({productId : id, productName: name, productPrice: price, productQuantity: 1});
        }
        return newState;
    }
    if(action.type === constants.INITIATE_PRODUCT_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        const {code, msg, list} = action;
        newState.code = code;
        newState.msg = msg;
        newState.list = list;
        return newState;
    }

    return state;
}

