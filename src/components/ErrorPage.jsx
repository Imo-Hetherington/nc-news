import React from "react";

const ErrorPage = ({ msg, status }) => {
  return (
    <>
      <h2>Oh no! Something went wrong </h2>
      <p>{status}</p>
      <p>{msg}</p>
    </>
  );
};

export default ErrorPage;
