import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./comic.css";
import CommentForm from '../comments/comment_form_container';
import CommentList from '../comments/comment_list_container';

import DatePicker from "react-datepicker";

class Comic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comic: {}
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleCalendarPick = this.handleCalendarPick.bind(this);
    }

    componentWillMount() {
        this.props.fetchComic(this.props.match.params.date);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.date !== this.props.match.params.date) {
            this.props.fetchComic(this.props.match.params.date);
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false);
    }

    componentWillReceiveProps(newState) {
        // A comic comes in as an array of one element.
        this.setState({ comic: newState.comic[0] });
    }

    handleCalendarPick = date => {
        let yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        mm = ((mm > 9 ? '' : '0') + mm);
        dd = ((dd > 9 ? '' : '0') + dd);
        let fullDate = yyyy + mm + dd;
        this.props.history.push(`/comics/${fullDate}`);
    };


    randomDate(e) {
        e.preventDefault();
        let yyyy = Math.floor(Math.random() * 9) + 1986;
        let mm = Math.floor(Math.random() * 10) + 1;
        let dd = Math.floor(Math.random() * 26) + 1;
        mm = (mm > 9 ? "" : "0") + mm;
        dd = (dd > 9 ? "" : "0") + dd;
        let fullDate = yyyy + mm + dd;
        this.props.history.push(`/comics/${fullDate}`);
    }


    onKeyDown(e) {

        var dateString = `${this.state.comic.datestring}`;
        var year = dateString.slice(0, 4);
        var month = dateString.slice(4, 6);
        var day = dateString.slice(6, 8);
        var dateKey = new Date(year, month - 1, day);
        var prevDateKey = new Date(dateKey.setDate(dateKey.getDate() - 1)).toISOString().slice(0, 10).replace(/-/g, "");
        var nextDateKey = new Date(dateKey.setDate(dateKey.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, "");
        dateKey = new Date(year, month - 1, day);
        var options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        dateKey = dateKey.toLocaleString('en-US', options).toString();

        if (e.keyCode === 37) {
            this.props.history.push(`/comics/` + prevDateKey);
        } else if (e.keyCode === 39) {
            this.props.history.push(`/comics/` + nextDateKey);
        }
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
                date = new Date(year, month - 1, day);
                var options = {
                    year: 'numeric', month: 'long', day: 'numeric'
                };
                date = date.toLocaleString('en-US', options).toString();
            }

            return (
              <>
                <div className="comicWrapper">
                <h2 className="comicDate">{date}</h2>
                <br></br>
                <div className="main_page_calendar">
                    <DatePicker
                        value={"SELECT BY DATE"}
                        selected={new Date(year, month - 1, day)}
                        className="calendar"
                        selectsStart
                        minDate={this.date1}
                        maxDate={this.date2}
                        onChange={event =>
                            this.handleCalendarPick(event)
                        }
                    />
                </div>
                
                {this.state.comic.datestring ?
                    <Link to={'/comics/' + nextDate}>
                        <img
                            title={this.state.comic.desc}
                            alt="comic"
                            src={"https://s3.amazonaws.com/ch-comics/hdcalvinhobbes/" + this.state.comic.datestring + ".jpg"}
                            className="comicImage"
                        />
                    </Link>
                    :
                    null
                }
                
                <div className="comicControls">
                    <Link to={'/comics/' + prevDate}>
                        <i className="fas fa-caret-left"></i>
                        <p className="nav-text">previous</p>                    
                    </Link>

                    <button onClick={e => this.randomDate(e)}>
                        <i className="fas fa-random" />
                        <p className="nav-text">random</p>
                    </button>

                    <Link to={'/comics/' + nextDate}>
                        <i className="fas fa-caret-right"></i>
                        <p className="nav-text">next</p>
                    </Link>
                </div>
                
                </div>
                <CommentForm date={this.props.match.params.date}/>
                <CommentList date={this.props.match.params.date}/>
              </>
            );
        };
    }
}

export default withRouter(Comic);