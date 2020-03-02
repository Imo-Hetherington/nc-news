import React, { Component } from "react";
import Loader from "./Loader";

class Article extends Component {
  state = {
    article: {},
    isLoading: false
  };

  render() {
    const {
      isLoading,
      article: { title, author, body, created_at }
    } = this.state;
    if (isLoading) return <Loader />;
    return (
      <article>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>By {author}</p>
      </article>
    );
  }
}

export default Article;
