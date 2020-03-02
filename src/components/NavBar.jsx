import React from "react";
import { Link } from "@reach/router";
import TopicsList from "./TopicsList";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <button>Articles</button>
      </Link>
      <TopicsList />
    </nav>
  );
};

export default NavBar;
