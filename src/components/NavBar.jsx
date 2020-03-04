import React from "react";
import { Link } from "@reach/router";
import NavButton from "./styled-components/NavButton";

const NavBar = ({ toggleTopics }) => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <NavButton>Articles</NavButton>
      </Link>
      <NavButton onClick={toggleTopics}>Topics</NavButton>
    </nav>
  );
};

export default NavBar;
