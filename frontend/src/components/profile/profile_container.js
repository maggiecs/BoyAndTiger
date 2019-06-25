import { connect } from 'react-redux';
import { fetchUserComments } from '../../actions/comment_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    comments: Object.values(state.comments.all),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserComments: userId => dispatch(fetchUserComments(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);