import React from "react";
import { Link } from "@reach/router";

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
        <h2>{title}</h2>
      </Link>
      <p>By {author}</p>
    </section>
  );
};

export default ArticleCard;
