import React from "react";

const ArticleSort = ({ handleSort }) => {
  return (
    <form>
      <label>
        Sort by:
        <button onClick={handleSort} value="votes">
          Most Popular
        </button>
        <button onClick={handleSort} value="created_at">
          Most Recent
        </button>
        <button onClick={handleSort} value="title">
          Alphabetical
        </button>
      </label>
    </form>
  );
};

export default ArticleSort;
