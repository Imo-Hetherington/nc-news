import React, { Component } from "react";
import NavButton from "./styled-components/NavButton";
import MainButton from "./styled-components/MainButton";

class ViewTopics extends Component {
  state = { isVisible: false };

  toggleVisible = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };
  render() {
    return (
      <>
        <MainButton onClick={this.toggleVisible}>{this.props.name}</MainButton>
        <br />
        {this.state.isVisible && <>{this.props.children}</>}
      </>
    );
  }
}

export default ViewTopics;
