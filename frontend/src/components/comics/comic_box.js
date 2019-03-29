import React from 'react';

class ComicBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <img src={ "images/" + this.props.date + ".gif" }></img>
                <p>{this.props.dialog}</p>
            </div>
        );
    }
}

export default ComicBox;