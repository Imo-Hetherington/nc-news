import UserContext from "../UserContext";
import React, { Component } from "react";
import { Link } from "@reach/router";

class UserInfo extends Component {
  static contextType = UserContext;
  render() {
    const username = this.context;

    return (
      <section>
        <p>You are signed in as {username}</p>
        <Link to="/">View your posts</Link>
      </section>
    );
  }
}

export default UserInfo;
