import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const msp = state => {
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
    createComment: (comicDate,comment) => dispatch(createComment(comicDate,comment))
  };
};

export default connect(msp, mdp)(CommentForm);