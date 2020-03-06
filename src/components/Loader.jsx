import React from "react";
import FidgetSpinner from "../assets/fidget-spinner.gif";

const Loader = ({ hideGif }) => {
  return (
    <div>
      {!hideGif && <img src={FidgetSpinner} alt="Fidget spinner gif" />}
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
