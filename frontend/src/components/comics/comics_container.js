import { connect } from 'react-redux';
import { fetchComics } from '../../actions/comic_actions';
import Comics from './comics';

const mapStateToProps = (state) => {
  return {
    comics: Object.values(state.comics.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComics: () => dispatch(fetchComics())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comics);