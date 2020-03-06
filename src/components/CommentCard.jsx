import React, { Component } from "react";
import { formatDate } from "../utils/utils";
import Voter from "./Voter";
import DeleteButton from "./DeleteButton";
import * as api from "../utils/api";
import { StyledComment } from "./styled-components/StyledCard";
import UserContext from "../UserContext";

class CommentCard extends Component {
  state = {
    deleted: false,
    disableDelete: false
  };

  handleDelete = () => {
    this.setState({ disableDelete: true });
    api.deleteComment(this.props.comment_id).then(() => {
      this.setState({ deleted: true });
    });
  };

  static contextType = UserContext;

  render() {
    const { author, body, created_at, votes, comment_id } = this.props;
    const username = this.context;
    const { deleted, disableDelete } = this.state;
    return (
      !deleted && (
        <StyledComment type="comment">
          <Voter type="comments" votes={votes} id={comment_id} />
          <h3>{author}</h3>
          <p className="dateTime">{formatDate(created_at)}</p>
          <p className="commentBody">{body}</p>

          {author === username && (
            <DeleteButton
              handleDelete={this.handleDelete}
              disableButton={disableDelete}
            />
          )}
        </StyledComment>
      )
    );
  }
}

export default CommentCard;
