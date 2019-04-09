import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
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


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.date !== this.props.match.params.date) {
            this.props.fetchComic(this.props.match.params.date);
        }
    }

    componentWillReceiveProps(newState) {
        // A comic comes in as an array of one element.
        this.setState({ comic: newState.comic[0] });
    }

    render() {


        if (!this.state.comic) {
            return (<div>Hang tight...</div>)
        } else {
            if (this.state.comic.datestring) {
                var dateString = `${this.state.comic.datestring}`;
                var year = dateString.slice(0, 4);
                var month = dateString.slice(4, 6);
                var day = dateString.slice(6, 8);
                var date = new Date(year, month - 1, day);
                var prevDate = new Date(date.setDate(date.getDate() - 1)).toISOString().slice(0, 10).replace(/-/g, "");
                var nextDate = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, "");
                var date = new Date(year, month - 1, day);
                var options = {
                    year: 'numeric', month: 'long', day: 'numeric'
                };
                date = date.toLocaleString('en-US', options).toString();
            }

            return (
              <>
                <div className="comicWrapper">
                <h2 className="comicDate">{date}</h2>
                
                {this.state.comic.datestring ?
                    <a href={"https://s3.amazonaws.com/ch-comics/hdcalvinhobbes/" + this.state.comic.datestring + ".jpg"}>
                        <img
                            title={this.state.comic.desc}
                            alt="comic"
                            src={"https://s3.amazonaws.com/ch-comics/hdcalvinhobbes/" + this.state.comic.datestring + ".jpg"}
                            className="comicImage"
                        />
                    </a>
                    :
                    null
                }
                
                <div className="comicControls">
                    <Link to={'/comics/' + prevDate}>
                    Previous
                    </Link>
                    <Link to={'/comics/' + nextDate}>
                    Next
                    </Link>
                </div>
                {/* <p className="comicDialog">{this.state.comic.dialog}</p> */}
                
                </div>
              </>
            );
        };
    }
}

export default withRouter(Comic);