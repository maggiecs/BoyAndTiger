import React from 'react';
import CommentProfileItem from '../comments/comment_profile_item_container.js';
import './profile.css';

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
          <CommentProfileItem comment={comment} />
        </li>
      )
    });

    return (
      <div className="profile-wrapper">
        <ul className="comics-container">
          <h1 className="profile-header">Your comments</h1>
          {comments}
        </ul>
      </div>
    )
  }
}

export default Profile;