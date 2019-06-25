import React from 'react';
import CommentListItem from '../comments/comment_list_item_container.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.fetchUserComments(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {

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
  }
}

export default Profile;