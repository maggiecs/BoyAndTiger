import { 
  RECEIVE_COMMENTS, 
  RECEIVE_COMMENT, 
  REMOVE_COMMENT 
} from '../actions/comment_actions';

const CommentsReducer = (state = { all: {}, comment: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState.all = action.comments.data;
      return newState;
    case RECEIVE_COMMENT:
      newState.all.push(action.comment.data);
      return newState;
    case REMOVE_COMMENT:
      newState.all = newState.all.filter(({_id}) => _id !== action.comment.data._id )
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer; 