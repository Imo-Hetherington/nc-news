import React, { Component } from "react";
import * as api from "../utils/api";
import MainButton from "./styled-components/MainButton";
import StyledForm from "./styled-components/StyledForm";
import UserContext from "../UserContext";

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
    const username = this.context;
    const { article_id } = this.props;
    console.log(username, body);
    api.postComment(article_id, { username, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ commentBody: "" });
    });
  };

  static contextType = UserContext;
  render() {
    return (
      <StyledForm onSubmit={this.handleComment}>
        <textarea
          type="text"
          placeholder="Leave a comment..."
          onChange={this.handleChange}
          value={this.state.commentBody}
        />
        <MainButton>Comment</MainButton>
      </StyledForm>
    );
  }
}

export default CommentAdder;
