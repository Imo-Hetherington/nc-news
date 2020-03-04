import React from "react";

const Loader = ({ hideGif }) => {
  return (
    <div>
      {!hideGif && (
        <img
          src="https://media.tenor.com/images/e387ac6151669452bf01cd6cd143a8cf/tenor.gif"
          alt="Fidget spinner gif"
        />
      )}
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
