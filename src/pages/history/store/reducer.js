import * as constants from './constants';
const defaultState = {
  "code": 0,
  "msg": '',
  "data": [],
  "orderDetail": ''
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
      case constants.GET_HISTORY:
          newState.code = action.result.code;
          newState.msg = action.result.msg;
          newState.data = action.result.data;
          console.log(newState);
          return newState;
  }
  return state;
}