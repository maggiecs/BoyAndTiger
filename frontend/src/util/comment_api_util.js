import axios from 'axios';

export const getComments = date => {
  return axios.get(`/api/comics/${date}`)
};

export const getComment = (date, commentId) => {
  return axios.get(`/api/comics/${date}/${commentId}`);
};

export const createComment = (date, data) => {
  return axios.post(`/api/comics/${date}/comments`, data)
};

export const editComment = (date, data) => {
  return axios.patch(`api/comics/${date}/comments/${data.commentId}`, data)
};

export const deleteComment = (date, data) => {
  return axios.delete(`api/comics/${date}/comments/${data.commentId}`, data)
};