import {LOG_IN, LOG_OUT, SIGN_UP} from './constants';

const defaultState = {
    buyerEmail: '',
    buyerName: '',
    logStatus: false
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const result = action.result;
    console.log(result);
    console.log(action.type);
    switch(action.type) {
      case LOG_IN:
        if(result.code === 0) {
          newState.logStatus = true;
          newState.buyerEmail = result.data.buyerEmail;
          newState.buyerName = result.data.buyerName;
          return newState;
        }
        
      case SIGN_UP:
        if(result.code === 0) {
          newState.logStatus = true;
          newState.buyerEmail = result.data.buyerEmail;
          newState.buyerName = result.data.buyerName;
          return newState;
        }

      case LOG_OUT:
        newState.logStatus = false;
        newState.buyerName = '';
        newState.buyerEmail = '';
        console.log(newState);
        return newState;
    }

    return state;
}