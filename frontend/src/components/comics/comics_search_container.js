import { connect } from 'react-redux';
import { fetchComics } from '../../actions/comic_actions';
import SearchedComics from './comics_search_display';

const mapStateToProps = (state) => {
    return {
        comics: Object.values(state.comics.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchComics: () => dispatch(fetchComics())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchedComics);