import React from "react";
import { formatDate, formatTime } from "../utils/utils";
import Voter from "./Voter";

const CommentCard = ({ author, body, created_at, votes, comment_id }) => {
  return (
    <section>
      <h5>{author}</h5>
      <p>{body}</p>
      <p>
        {formatDate(created_at)} {formatTime(created_at)}
      </p>
      <Voter type="comments" votes={votes} id={comment_id} />
    </section>
  );
};

export default CommentCard;
