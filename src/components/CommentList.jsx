import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import CommentAdder from "./CommentAdder";
import MainButton from "./styled-components/MainButton";
import ViewToggler from "./ViewToggler";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { comments } = this.state;
    if (comments.length > prevState.comments.length) this.getComments();
  }

  getComments = () => {
    const { article_id } = this.props;
    return api.fetchComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  addComment = comment => {
    this.setState(currentState => {
      const updatedComments = currentState.comments;
      updatedComments.unshift(comment);
      return { comments: updatedComments };
    });
  };

  render() {
    const { isLoading, comments } = this.state;
    const { username, article_id } = this.props;
    if (isLoading) return <Loader />;
    return (
      <>
        <CommentAdder addComment={this.addComment} article_id={article_id} />
        {comments.length === 0 ? (
          <p>"No comments yet"</p>
        ) : (
          <>
            <ViewToggler name={`View ${comments.length} comments`}>
              {comments.map(comment => {
                return (
                  <CommentCard
                    {...comment}
                    key={comment.comment_id}
                    username={username}
                  />
                );
              })}
            </ViewToggler>
          </>
        )}
      </>
    );
  }
}

export default CommentList;
