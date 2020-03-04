import React, { Component } from "react";

class ViewToggler extends Component {
  state = { isVisible: false };

  toggleVisible = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };
  render() {
    return (
      <>
        <button onClick={this.toggleVisible}>{this.props.name}</button>
        {this.state.isVisible && <>{this.props.children}</>}
      </>
    );
  }
}

export default ViewToggler;
