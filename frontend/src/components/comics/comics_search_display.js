import React from 'react';
import { Link } from 'react-router-dom';
import './comics_search.css';
import './../main/reset.css';
import { NONAME } from 'dns';



class SearchedComics extends React.Component {
    constructor(props) {
        super(props);
        this.query = new URLSearchParams(this.props.location.search).get('query');
    }

    componentDidMount() {
        this.props.fetchComics({ searchedQuery: this.query });
    }

    

    render() {
        // let sectionStyle;

        //     if (this.props.history.location.search === "?query=Spaceman%20Spiff") {
        //         sectionStyle = {
        //             backgroundImage: `url("wallpapers/bill.jpg")`,
        //             backgroundSize: "cover"

        //     }
        //     else
        let comics = this.props.comics;
        let searchedComics;

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

        

        return (
            <div className="comics-container" style={{ backgroundSize: "auto"}}>
                {searchedComics}
            </div>
        );
    }

}

export default SearchedComics;