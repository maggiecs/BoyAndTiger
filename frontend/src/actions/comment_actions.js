import * as CommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = date => dispatch => (
  CommentUtil.getComments(date)
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);

export const fetchComment = (date, commentId) => dispatch => (
  CommentUtil.getComment(date, commentId)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const createComment = (date, data) => dispatch => (
  CommentUtil.createComment(date, data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const editComment = (date, data) => dispatch => (
  CommentUtil.editComment(date, data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const deleteComment = (date, data) => dispatch => (
  CommentUtil.deleteComment(date, data)
    .then(comment => dispatch(removeComment(comment)))
    .catch(err => console.log(err))
);