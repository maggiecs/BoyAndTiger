import CommentList from './comment_list';
import { fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const msp = state => {
  debugger
  return {
    comment: {
      text: '',
      comicDate: '',
      user: state.session.user,
    }
  }
}

const mdp = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(msp, mdp)(CommentList);