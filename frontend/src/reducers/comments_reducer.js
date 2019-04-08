import { RECEIVE_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comic_actions';

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
    case DELETE_COMMENT:

    default:
      return state;
  }
};

export default CommentsReducer; 