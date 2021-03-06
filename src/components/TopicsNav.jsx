import React, { Component } from "react";
import { Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";
import styled from "styled-components";
import { formatSlug } from "../utils/utils";

const StyledNav = styled.nav`
  grid-column-start: 1;
  grid-column-end: span 3;
  display: flex;
  background-color: #ea8c55;
  list-style: none;
  margin: 0;
  padding: 10px;
  justify-content: space-evenly;
  a {
    font-size: 20px;
    :visited {
      color: #252f30;
    }
  }
`;

class TopicsNav extends Component {
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
      <StyledNav>
        {topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              {formatSlug(topic.slug)}
            </Link>
          );
        })}
      </StyledNav>
    );
  }
}

export default TopicsNav;
