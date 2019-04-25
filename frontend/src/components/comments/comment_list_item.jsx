import React from "react";
import * as moment from "moment";
import Chip from '@material-ui/core/Chip';
import './comment.css';

class CommentListItem extends React.Component {
  handleDelete(){
    this.props.deleteComment(this.props.comment.comicDate,this.props.comment._id)
  }

  renderDeleteIcon(){
    if (this.props.currentUser === this.props.comment.user) {
      return(
        <Chip onDelete={this.handleDelete.bind(this)}/>
      )
    }
  }

  render() {
    return(
      <div className="comment">
        <div className="comment-info">
          <span>{this.props.comment.author}</span>
          <span className="comment-date">{moment(this.props.comment.date).fromNow(true)}</span>
        </div>
        <div className="comment-body">
          {this.props.comment.text}
        </div>
        {this.renderDeleteIcon()}
      </div>
    )
  }
}

export default CommentListItem;