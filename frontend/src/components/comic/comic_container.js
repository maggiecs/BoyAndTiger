import { connect } from 'react-redux';
import { fetchComic } from '../../actions/comic_actions';
import Comic from './comic';

const mapStateToProps = (state) => {
    return {
        comic: state.comics.comic
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComic: date => dispatch(fetchComic(date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comic);