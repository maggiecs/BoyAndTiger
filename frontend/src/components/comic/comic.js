import React from 'react';
import { withRouter } from 'react-router-dom';
import "./comic.css";


class Comic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comic: {}
        };
    }

    componentWillMount() {
        this.props.fetchComic(this.props.match.params.date);
    }

    componentWillReceiveProps(newState) {
        // A comic comes in as an array of one element.
        this.setState({ comic: newState.comic[0] });
    }

    render() {

        if (this.state.comic.date) {
        var dateString = `${this.state.comic.date}`;
        var year = dateString.slice(0, 4);
        var month = dateString.slice(4, 6);
        var day = dateString.slice(6, 8);
        var date = new Date(year, month - 1, day);
        var options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        date = date.toLocaleString('en-US', options).toString();
    }


        if (!this.state.comic) {
            return (<div>Hang tight...</div>)
        } else {
            return (
              <>
                <div className="comicWrapper">
                <h2 className="comicDate">{date}</h2>
                
                <img
                    alt="comic"
                    src={"https://s3.amazonaws.com/ch-comics/hdcalvinhobbes/" + this.state.comic.date + ".jpg"}
                    className="comicImage"
                />
                
                <div className="comicControls"></div>
                {/* <p className="comicDialog">{this.state.comic.dialog}</p> */}
                
                </div>
              </>
            );
        };
    }
}

export default withRouter(Comic);