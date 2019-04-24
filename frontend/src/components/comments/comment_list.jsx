import React from "react";
import { withRouter } from 'react-router-dom';


class CommentList extends React.Component {
  constructor(props) {
    super(props);
    };

  componentWillMount(){
    this.props.fetchComments(this.props.match.params.date);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.date !== this.props.match.params.date) {
      this.props.fetchComments(this.props.match.params.date);
    }
  }

  render() {
    let comments = (this.props.comments || {}).map((comment) => {
        return (
          <li className="comment-item">
            {comment.author}
            {comment.date}
            {comment.text}
          </li>
        )
    });

    return (
      <ul className="comment-list">
        {comments}
      </ul>
    )
  };
}

export default withRouter(CommentList);