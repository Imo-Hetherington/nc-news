import React, { Component } from "react";
import { formatDate, formatTime } from "../utils/utils";
import Voter from "./Voter";
import DeleteButton from "./DeleteButton";
import * as api from "../utils/api";
import { StyledComment } from "./styled-components/StyledCard";

class CommentCard extends Component {
  state = {
    deleted: false,
    disableButton: false
  };

  handleDelete = () => {
    this.setState({ disableButton: true });
    api.deleteComment(this.props.comment_id).then(() => {
      this.setState({ deleted: true });
    });
  };

  render() {
    const {
      author,
      body,
      created_at,
      votes,
      comment_id,
      username
    } = this.props;
    const { deleted, disableButton } = this.state;
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
              disableButton={disableButton}
            />
          )}
        </StyledComment>
      )
    );
  }
}

export default CommentCard;
