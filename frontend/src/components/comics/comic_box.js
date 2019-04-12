import React from 'react';
import CommentForm from '../comments/comment_form_container';
import { Link } from 'react-router-dom';

class ComicBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <Link to={'/comics/' + this.props.date}>
                    <img src={"images/" + this.props.date + ".gif"} alt={this.props.dialog}></img>
                </Link>
                <p>{this.props.dialog}</p>
                <CommentForm />
            </div>
        );
    }
}

export default ComicBox;