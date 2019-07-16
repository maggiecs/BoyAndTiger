import React from "react";
import {withRouter} from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.comment.user,
      text: '',
      comicDate: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  componentDidUpdate() {
    if (this.state.comicDate !== this.props.match.params.date){
      this.setState({ comicDate: this.props.match.params.date});
    }
  }

  updateText() {
    return e =>
      this.setState({ text: e.currentTarget.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state.comicDate, this.state);
    this.setState({text: ""});
  };

  showCommentForm(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.updateText()}
          placeholder={`enter a comment`}
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "enter a comment"}
          className="comment-form"
        />
        <input type="submit" className="submit-btn" />
      </form>
    )
  }

  showLoginMessage(){
    return (
      <span className="login-message">Log in to write a comment!</span>
    )
  }

  renderFormOrNah(){
    return this.props.userLoggedIn ? this.showCommentForm() : this.showLoginMessage()
  }

  render() {
    return (
      <div className="comment-form-wrapper">
      {this.renderFormOrNah()}
      </div>
    );
  };
};

export default withRouter(CommentForm);