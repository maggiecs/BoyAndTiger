import React from "react";
import { Link } from 'react-router-dom';
import * as moment from "moment";
import Chip from '@material-ui/core/Chip';
import './comment.css';

class CommentProfileItem extends React.Component {
  handleDelete(){
    this.props.deleteComment(this.props.comment.comicDate,this.props.comment._id)
  }

  renderDeleteIcon(){
    if (this.props.currentUser === this.props.comment.user) {
      return(
        <Chip 
          className="chip"
          label="Delete" 
          onClick={this.handleDelete.bind(this)} 
          onDelete={this.handleDelete.bind(this)}
          variant="outlined"
          color="secondary"
        />
      )
    }
    return(<span className="chip-replacement"> </span>)
  }

  render() {
    return(
      <div className="comic-item">
        <div className="comment-info">
          <div className="comic-image">
            <Link to={'/comics/' + this.props.comment.comicDate}><img
              src={"images/" + this.props.comment.comicDate + ".gif"}
              alt={this.props.comment.comicDate}
              className="comic-thumbnail"
            /></Link>
          </div>
          <span className="comment-date">
            {moment(this.props.comment.date).fromNow(true)}
          </span>
        </div>
        <div className="comment-body">
          {this.props.comment.text}
        </div>
        {this.renderDeleteIcon()}
      </div>
    )
  }
}

export default CommentProfileItem;