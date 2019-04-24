import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    };

  componentWillMount(){
    this.props.fetchComments(this.props.date);
  }

  render() {
    let comments = (this.props.comments || {}).map((comment) => {
        return (
          <li className="comment-item">)
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

export default CommentList;