import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import comics from './comics_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  comics,
});

export default RootReducer;
