import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import Loader from "./Loader";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    const { article_id } = this.props;
    return api.fetchComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <Loader />;
    return (
      <>
        <h4>Comments</h4>
        {comments.length === 0 ? (
          <p>"No comments yet"</p>
        ) : (
          comments.map(comment => {
            return <CommentCard {...comment} key={comment.comment_id} />;
          })
        )}
      </>
    );
  }
}

export default CommentList;
