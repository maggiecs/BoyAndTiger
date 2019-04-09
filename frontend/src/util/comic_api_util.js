import axios from 'axios';

// export const getComics = () => {
//     return axios.get('/api/comics')
// };

export const getComics = (searchedQuery) => {
    return axios.get('/api/comics', {
        params: searchedQuery
    });
};

export const getComic = date => {
    return axios.get(`/api/comics/${date}`);
};