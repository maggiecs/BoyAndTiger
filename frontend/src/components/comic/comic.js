import React from 'react';
import { withRouter } from 'react-router-dom';

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
        if (!this.state.comic) {
            return (<div>Hang tight...</div>)
        } else {
            return (
                <div>
                    <h3>{this.state.comic.date}</h3>
                    <img src={"images/" + this.state.comic.date + ".gif"}></img>
                    <p>{this.state.comic.dialog}</p>
                </div>
            )
        };
    }
}

export default withRouter(Comic);