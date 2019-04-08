import React from 'react';
import { Link } from 'react-router-dom';
import './comics_search.css';
import './../main/reset.css';

class SearchedComics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let comics = this.props.comics;
        let searchedComics;

        searchedComics = comics.map(comic => {
            return (
                <div key={comic._id} className="comic-item">
                    <div className="comic-image">
                        <Link to={'/comics/' + comic.date}><img
                            src={"images/" + comic.date + ".gif"}
                            className="comic-thumbnail"
                        /></Link>
                    </div>
                    <div className="comic-dialogue">
                        <p>{comic.dialog}</p>
                    </div>
                </div>
            )
        });

        

        return (
            <div className="comics-container">
                {searchedComics}
            </div>
        );
    }

}

export default SearchedComics;