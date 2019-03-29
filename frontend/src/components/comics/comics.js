import React from 'react';
import { withRouter } from 'react-router-dom';
import ComicBox from './comic_box';

class Comic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comics: []
        };
    }

    componentWillMount() {
        this.props.fetchComics();
    }

    componentWillReceiveProps(newState) {
        this.setState({ comics: newState.comics });
    }

    render() {
        if (this.state.comics.length === 0) {
            return (<div>There are no Comics</div>)
        } else {
            return (
                <div>
                    <h2>All Comics</h2>
                    {this.state.comics.map(comic => (
                        <ComicBox key={comic._id} date={comic.date} dialog={comic.dialog} />
                    ))}
                </div>
            )
        };
    }
}

export default withRouter(Comic);