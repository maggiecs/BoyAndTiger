import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchComics } from '../../actions/comic_actions';

import NavBar from './navbar';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchComics: (searchedQuery) => dispatch(fetchComics(searchedQuery))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);