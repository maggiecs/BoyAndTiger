import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.comment.user,
      text: '',
      comicDate: this.props.date,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userLoggedIn !== this.props.userLoggedIn){
      this.renderFormOrNah();
    }
  }

  updateText() {
    return e =>
      this.setState({ text: e.currentTarget.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.date, this.state);
    this.setState({text: ""});
  };

  showCommentForm(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.updateText()}
          placeholder={`I love this strip!`}
          className="comment-form"
        />
        <input type="submit" className="submit-btn" />
      </form>
    )
  }

  showLoginMessage(){
    return (
      <span>You must be logged in to comment!</span>
    )
  }

  renderFormOrNah(){
    return this.props.userLoggedIn ? this.showCommentForm() : this.showLoginMessage()
  }

  render() {
    return (
      <>
      {this.renderFormOrNah()}
      </>
    );
  };
};

export default CommentForm;