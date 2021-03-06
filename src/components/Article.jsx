import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import { formatDate, formatTime } from "../utils/utils";
import CommentList from "./CommentList";
import Voter from "./Voter";
import ErrorPage from "./ErrorPage";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const { article_id } = this.props;
    return api
      .fetchArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data, status } }) => {
        this.setState({ error: { status, msg: data.msg }, isLoading: false });
      });
  };

  render() {
    const {
      isLoading,
      article: { article_id, title, author, body, created_at, votes },
      error
    } = this.state;
    if (isLoading) return <Loader />;
    if (error) return <ErrorPage {...error} />;
    return (
      <>
        <article>
          <h2>{title}</h2>
          <p>By {author}</p>

          <p>{body}</p>
          <time>
            Posted at {formatTime(created_at)} {formatDate(created_at)}
          </time>
        </article>
        <Voter votes={votes} id={article_id} type="articles" />
        <CommentList article_id={article_id} />
      </>
    );
  }
}

export default Article;
