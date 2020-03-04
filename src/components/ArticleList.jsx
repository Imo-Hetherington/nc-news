import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import ArticleSort from "./ArticleSort";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    limit: 10,
    sort_by: "votes",
    nextPage: 2,
    error: null
  };

  componentDidMount() {
    this.getArticles();
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
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
    return api
      .fetchArticles(topic_slug, limit, sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data, status } }) => {
        this.setState({ error: { status, msg: data.msg }, isLoading: false });
      });
  };

  loadMoreArticles = () => {
    const { topic_slug } = this.props;
    const { limit, sort_by, nextPage } = this.state;
    return api
      .fetchArticles(topic_slug, limit, sort_by, nextPage)
      .then(articles => {
        this.setState(currentState => {
          return {
            articles: currentState.articles.concat(articles),
            nextPage: currentState.nextPage + 1
          };
        });
      });
  };

  render() {
    const { isLoading, articles, error } = this.state;
    if (isLoading) return <Loader />;
    if (error) return <ErrorPage {...error} />;
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

  handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.scrollHeight
    ) {
      this.loadMoreArticles();
    }
  };
}

export default ArticleList;
