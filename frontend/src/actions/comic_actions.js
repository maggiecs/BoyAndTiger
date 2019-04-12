import { getComics, getComic } from '../util/comic_api_util';

export const RECEIVE_COMICS = "RECEIVE_COMICS";
export const RECEIVE_COMIC = "RECEIVE_COMIC";

export const receiveComics = comics => ({
    type: RECEIVE_COMICS,
    comics
});

export const receiveComic = comic => ({
    type: RECEIVE_COMIC,
    comic
});

export const fetchComics = (searchedQuery) => dispatch => (
    getComics(searchedQuery)
        .then(comics => dispatch(receiveComics(comics)))
        .catch(err => console.log(err))
);

export const fetchComic = date => dispatch => (
    getComic(date)
        .then(comic => dispatch(receiveComic(comic)))
        .catch(err => console.log(err))
);