import React, { Component } from "react";
import * as api from "../utils/api";
import MainButton from "./styled-components/MainButton";
import StyledInput from "./styled-components/StyledInput";

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
        <StyledInput
          type="text"
          placeholder="Leave a comment..."
          onChange={this.handleChange}
          value={this.state.commentBody}
        />
        <MainButton>Comment</MainButton>
      </form>
    );
  }
}

export default CommentAdder;
