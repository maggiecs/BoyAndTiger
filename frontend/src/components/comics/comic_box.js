import React from 'react';

class ComicBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h3>{this.props.dialog}</h3>
            </div>
        );
    }
}

export default ComicBox;