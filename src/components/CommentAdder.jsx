import React, { Component } from "react";
import * as api from "../utils/api";
import MainButton from "./styled-components/MainButton";
import StyledForm from "./styled-components/StyledForm";
import UserContext from "../UserContext";

class CommentAdder extends Component {
  state = {
    commentBody: "",
    disableComment: false
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ commentBody: value });
  };

  handleComment = event => {
    event.preventDefault();
    const body = this.state.commentBody;
    const username = this.context;
    const { article_id } = this.props;
    this.setState({ disableComment: true });
    api.postComment(article_id, { username, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ commentBody: "", disableComment: false });
    });
  };

  static contextType = UserContext;
  render() {
    const { disableComment } = this.state;
    return (
      <StyledForm onSubmit={this.handleComment}>
        <textarea
          required
          type="text"
          placeholder="Leave a comment..."
          onChange={this.handleChange}
          value={this.state.commentBody}
        />
        <MainButton disabled={disableComment}>Comment</MainButton>
      </StyledForm>
    );
  }
}

export default CommentAdder;
