import React from "react";

const DeleteButton = ({ handleDelete, disableButton }) => {
  return (
    <button onClick={handleDelete} disabled={disableButton}>
      Delete
    </button>
  );
};

export default DeleteButton;
