import React, { Component } from "react";
import { formatDate, formatTime } from "../utils/utils";
import Voter from "./Voter";
import DeleteButton from "./DeleteButton";
import * as api from "../utils/api";

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
        <section>
          <h4>{author}</h4>
          <p>{body}</p>
          <p>
            {formatDate(created_at)} {formatTime(created_at)}
          </p>
          <Voter type="comments" votes={votes} id={comment_id} />
          {author === username && (
            <DeleteButton
              handleDelete={this.handleDelete}
              disableButton={disableButton}
            />
          )}
        </section>
      )
    );
  }
}

export default CommentCard;
