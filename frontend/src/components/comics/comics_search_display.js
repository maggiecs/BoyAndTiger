import React from 'react';
import { Link } from 'react-router-dom';
import './comics_search.css';
import './../main/reset.css';


class SearchedComics extends React.Component {
    constructor(props) {
        super(props);
        this.getSearchedComics = this.getSearchedComics.bind(this);
        this.query = new URLSearchParams(this.props.location.search).get('query');
    }

    componentDidMount() {
        this.props.fetchComics({ searchedQuery: this.query });
    }

    getSearchedComics() {
        let comics = this.props.comics;
        let searchedComics;

        if (comics.length > 0) {
            searchedComics = comics.map(comic => {
                return (
                    <div key={comic._id} className="comic-item">
                        <div className="comic-image">
                            <Link to={'/comics/' + comic.datestring}><img
                                src={"images/" + comic.datestring + ".gif"}
                                alt={comic.datestring}
                                className="comic-thumbnail"
                            /></Link>
                        </div>
                        <div className="comic-dialogue">
                            <p>{comic.dialog}</p>
                        </div>
                    </div>
                )
            });
            return searchedComics;
        } else {
            return (
                <div className="not-found-page">
                    <img
                        alt="no search"
                        src={"images/calvin_hobbes_no_search.jpg"}
                        className="not-found-img"
                    />
                    <h2>No results found</h2>
                    <p>Try different keywords</p>
                </div>
            );
        }
    }

    render() {
        // let sectionStyle;

        //     if (this.props.history.location.search === "?query=Spaceman%20Spiff") {
        //         sectionStyle = {
        //             backgroundImage: `url("wallpapers/bill.jpg")`,
        //             backgroundSize: "cover"

        //     }
        //     else
       

        

        return (
            <div className="comics-container" style={{ backgroundSize: "auto"}}>
                {this.getSearchedComics()}
            </div>
        );
    }

}

export default SearchedComics;