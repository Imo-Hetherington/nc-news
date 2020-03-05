import React from "react";
import MainButton from "./styled-components/MainButton.jsx";

const ArticleSort = ({ handleSort }) => {
  return (
    <form>
      <MainButton onClick={handleSort} value="votes">
        Most Popular
      </MainButton>
      <MainButton onClick={handleSort} value="created_at">
        Most Recent
      </MainButton>
      <MainButton onClick={handleSort} value="comment_count">
        Most discussed
      </MainButton>
    </form>
  );
};

export default ArticleSort;
