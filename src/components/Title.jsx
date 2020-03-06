import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <Link className="Title" to="/">
      <header>
        <h1>nc-news</h1>
      </header>
    </Link>
  );
};

export default Title;
