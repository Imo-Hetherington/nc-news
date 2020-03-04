import React from "react";
import { Link } from "@reach/router";
import TopicsList from "./TopicsList";
import ViewToggler from "./ViewToggler";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <button>Articles</button>
      </Link>
      <ViewToggler name="Topics">
        <TopicsList />
      </ViewToggler>
    </nav>
  );
};

export default NavBar;
