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

  updateText() {
    return e =>
      this.setState({ text: e.currentTarget.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createComment(this.props.date, this.state);
  };

  render() {
    return (
      <div>
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
      </div>
    );
  };
};

export default CommentForm;