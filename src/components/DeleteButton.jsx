import React from "react";
import MainButton from "./styled-components/MainButton";

const DeleteButton = ({ handleDelete, disableButton }) => {
  return (
    <MainButton
      onClick={handleDelete}
      disabled={disableButton}
      className="deleteButton"
    >
      Delete
    </MainButton>
  );
};

export default DeleteButton;
