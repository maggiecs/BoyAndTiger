import * as CommentAPIUtil from '../util/comment_api_util';

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
  CommentAPIUtil.getComments(date)
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);

export const fetchComment = (date, commentId) => dispatch => (
  CommentAPIUtil.getComment(date, commentId)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const createComment = (date, data) => dispatch => (
  CommentAPIUtil.createComment(date, data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const editComment = (date, data) => dispatch => (
  CommentAPIUtil.editComment(date, data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const deleteComment = (date, data) => dispatch => (
  CommentAPIUtil.deleteComment(date, data)
    .then(comment => dispatch(removeComment(comment)))
    .catch(err => console.log(err))
);