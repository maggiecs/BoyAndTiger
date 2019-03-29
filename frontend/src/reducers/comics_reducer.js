import { RECEIVE_COMICS, RECEIVE_COMIC } from '../actions/comic_actions';

const ComicsReducer = (state = { all: {}, comic: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMICS:
            newState.all = action.comics.data;
            return newState;
        case RECEIVE_COMIC:
            newState.comic = action.comics.data;
            return newState;
        default:
            return state;
    }
};

export default ComicsReducer;