import { getComments, getComment, 
         createComment, editComment, 
         deleteComment } from '../util/comic_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENTS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId
});

export const fetchComments = date => dispatch => (
  getComments(date)
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);

export const fetchComment = (date, commentId) => dispatch => (
  getComment(date, commentId)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const createComment = (date, data) => dispatch => (
  createComment(date, data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const editComment = (date, data) => dispatch => (
  editComment(date, data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
);

export const deleteComment = (date, data) => dispatch => (
  deleteComment(date, data)
    .then(comment => dispatch(deleteComment(comment)))
    .catch(err => console.log(err))
);