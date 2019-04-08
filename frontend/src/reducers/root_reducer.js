import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import comics from './comics_reducer';
import comments from './comments_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  comics,
  comments,
});

export default RootReducer;
