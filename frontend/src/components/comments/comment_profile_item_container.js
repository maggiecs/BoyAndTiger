import CommentProfileItem from './comment_profile_item.jsx';
import { deleteComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const msp = state => {
  return {
    currentUser: (state.session.user && state.session.user.id) || {},
  };
};

const mdp = dispatch => {
  return {
    deleteComment: (date,commentId) => dispatch(deleteComment(date,commentId))
  };
};

export default connect(msp, mdp)(CommentProfileItem);