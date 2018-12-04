import { combineReducers } from 'redux';
import Reducer from './components/Main/Reducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  Reducer
});

export default rootReducer;
