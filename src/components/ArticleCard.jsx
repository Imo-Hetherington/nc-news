import React from "react";
import { Link } from "@reach/router";
import { formatDate, formatTime } from "../utils/utils";

const ArticleCard = ({
  article_id,
  title,
  created_at,
  author,
  topic,
  votes
}) => {
  return (
    <section>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>
        Posted by {author} at {formatTime(created_at)} {formatDate(created_at)}
      </p>
    </section>
  );
};

export default ArticleCard;
