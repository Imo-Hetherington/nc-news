import React, { Component } from "react";
import * as api from "../utils/api";
import Upvote from "../assets/up.png";
import Downvote from "../assets/down.png";

class Voter extends Component {
  state = { addVotes: 0 };

  handleVote = inc_votes => {
    const { article_id, type } = this.props;
    api.patchVotes(article_id, inc_votes, type);

    this.setState(currentState => {
      return { addVotes: currentState.addVotes + inc_votes };
    });
  };

  render() {
    const { addVotes } = this.state;
    return (
      <>
        <button
          disabled={addVotes > 0}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          <img height="20px" src={Upvote} alt="Upvote" />
        </button>
        <span>{this.props.votes + addVotes} votes</span>
        <button
          disabled={addVotes < 0}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          <img src={Downvote} alt="downvote" height="20px" />
        </button>
      </>
    );
  }
}

export default Voter;
