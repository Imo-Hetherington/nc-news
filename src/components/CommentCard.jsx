import React from "react";
import { formatDate, formatTime } from "../utils/utils";

const CommentCard = ({ author, body, created_at, votes }) => {
  return (
    <section>
      <h5>{author}</h5>
      <p>{body}</p>
      <p>
        {formatDate(created_at)} {formatTime(created_at)}
      </p>
      <p>{votes} votes</p>
    </section>
  );
};

export default CommentCard;
