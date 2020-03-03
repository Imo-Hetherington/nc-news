import React from "react";

const ArticleSort = ({ handleSort }) => {
  return (
    <form>
      <label>
        Sort by:
        <br />
        <button onClick={handleSort} value="votes">
          Most Popular
        </button>
        <button onClick={handleSort} value="created_at">
          Most Recent
        </button>
        <button onClick={handleSort} value="comment_count">
          Most discussed
        </button>
      </label>
    </form>
  );
};

export default ArticleSort;
