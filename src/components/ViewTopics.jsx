import React, { Component } from "react";
import NavButton from "./styled-components/NavButton";

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
        <NavButton onClick={this.toggleVisible}>{this.props.name}</NavButton>
        <br />
        {this.state.isVisible && <>{this.props.children}</>}
      </>
    );
  }
}

export default ViewTopics;
