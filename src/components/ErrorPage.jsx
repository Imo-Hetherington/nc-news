import React from "react";
import MagnifyingGlass from "../assets/magnifying-glass.gif";

const ErrorPage = ({ msg, status }) => {
  return (
    <>
      <h2>Oh no! Something went wrong </h2>
      <p>{status}</p>
      <p>{msg}</p>
      {status === 404 ? <img src={MagnifyingGlass} /> : null}
    </>
  );
};

export default ErrorPage;
