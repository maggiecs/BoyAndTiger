import React from "react";
import { withRouter } from 'react-router-dom';
import CommentListItem from './comment_list_item_container.js';
import './comment.css';

class CommentList extends React.Component {
  componentWillMount(){
    this.props.fetchComments(this.props.match.params.date);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.date !== this.props.match.params.date) {
      this.props.fetchComments(this.props.match.params.date);
    }
  }

  render() {
    let comments = (this.props.comments || {}).map((comment, idx) => {
        return (
          <li className="comment-item" key={idx}>
            <CommentListItem comment={comment} />
          </li>
        )
    });

    return (
      <div className="comment-list-wrapper">
        <ul className="comment-list">
          {comments}
        </ul>
      </div>
    )
  };
}

export default withRouter(CommentList);