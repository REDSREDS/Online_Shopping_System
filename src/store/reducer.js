import homeReducer from '../pages/home/store/reducer';
import logInReducer from '../pages/login/store/reducer';
import historyReducer from '../pages/history/store/reducer';

import {combineReducers} from 'redux';

export default combineReducers({
  home: homeReducer,
  login: logInReducer,
  history: historyReducer
})

