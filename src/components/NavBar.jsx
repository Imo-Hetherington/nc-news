import React from "react";
import { Link } from "@reach/router";
import NavButton from "./styled-components/NavButton";

const NavBar = ({ toggleTopicsOn, toggleTopicsOff }) => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <NavButton onClick={toggleTopicsOff}>Articles</NavButton>
      </Link>
      <NavButton onClick={toggleTopicsOn}>Topics</NavButton>
    </nav>
  );
};

export default NavBar;
