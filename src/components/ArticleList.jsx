import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleSort from "./ArticleSort";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    limit: 10,
    sort_by: "votes"
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic_slug !== this.props.topic_slug ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const { topic_slug } = this.props;
    const { limit, sort_by } = this.state;
    return api.fetchArticles(topic_slug, limit, sort_by).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <Loader />;
    return (
      <>
        <h2>Stories</h2>
        <ArticleSort handleSort={this.handleSort} />
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </>
    );
  }

  handleSort = event => {
    event.preventDefault();
    const { target } = event;
    this.setState({ sort_by: target.value }, () => {});
  };
}

export default ArticleList;
