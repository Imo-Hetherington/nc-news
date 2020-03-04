import React, { Component } from "react";
import { Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";

class TopicsList extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    return api.fetchTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { isLoading, topics } = this.state;
    if (isLoading) return <Loader hideGif={true} />;
    return (
      <>
        {topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </>
    );
  }
}

export default TopicsList;
