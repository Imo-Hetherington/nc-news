import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    commentBody: ""
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ commentBody: value });
  };

  handleComment = event => {
    event.preventDefault();
    const body = this.state.commentBody;
    const { article_id, username } = this.props;
    api.postComment(article_id, { username, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ commentBody: "" });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleComment}>
        <input
          type="text"
          placeholder="Leave a comment..."
          onChange={this.handleChange}
          value={this.state.commentBody}
        />
        <button>Comment</button>
      </form>
    );
  }
}

export default CommentAdder;
