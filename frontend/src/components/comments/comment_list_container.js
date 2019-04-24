import CommentList from './comment_list';
import { fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const msp = state => {
  return {
    comments: Object.values(state.comments.all)
  };
};

const mdp = dispatch => {
  return {
    fetchComments: (date) => dispatch(fetchComments(date))
  };
};

export default connect(msp, mdp)(CommentList);