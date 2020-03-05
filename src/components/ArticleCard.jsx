import React from "react";
import { Link } from "@reach/router";
import { formatDate, formatTime } from "../utils/utils";
import { StyledCard } from "./styled-components/StyledCard";

const ArticleCard = ({
  article_id,
  title,
  created_at,
  author,
  topic,
  votes
}) => {
  return (
    <Link to={`/articles/${article_id}`}>
      <StyledCard>
        <h3>{title}</h3>
        <p>
          Posted by {author} on {formatDate(created_at)} at{" "}
          {formatTime(created_at)}
        </p>
      </StyledCard>
    </Link>
  );
};

export default ArticleCard;
