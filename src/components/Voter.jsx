import React, { Component } from "react";
import * as api from "../utils/api";
import MainButton from "./styled-components/MainButton";

class Voter extends Component {
  state = { addVotes: 0 };

  handleVote = inc_votes => {
    const { id, type } = this.props;
    api.patchVotes(id, inc_votes, type);

    this.setState(currentState => {
      return { addVotes: currentState.addVotes + inc_votes };
    });
  };

  render() {
    const { addVotes } = this.state;
    return (
      <section className="voterForm">
        <MainButton
          disabled={addVotes > 0}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          +
        </MainButton>
        <span>{this.props.votes + addVotes}</span>
        <MainButton
          disabled={addVotes < 0}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          -
        </MainButton>
      </section>
    );
  }
}

export default Voter;
