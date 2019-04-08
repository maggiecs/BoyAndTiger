import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (state = { all: {}, comment: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState.all = action.comments.data;
      return newState;
    case RECEIVE_COMMENT:
      newState.comment = action.comment.data;
      return newState;
    case REMOVE_COMMENT:
      newState.comment = action.comment.data;
      delete newState[action.commentId]
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer; 