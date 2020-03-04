import axios from "axios";

export const fetchTopics = () => {
  return axios
    .get("https://imo-nc-news.herokuapp.com/api/topics")
    .then(({ data: topics }) => topics.topics);
};

export const fetchArticles = (topic, limit, sort_by, p) => {
  return axios
    .get("https://imo-nc-news.herokuapp.com/api/articles", {
      params: { topic, limit, sort_by, p }
    })
    .then(({ data: articles }) => articles.articles);
};

export const fetchArticle = article_id => {
  return axios
    .get(`https://imo-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: article }) => article.article);
};

export const fetchComments = article_id => {
  return axios
    .get(
      `https://imo-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: comments }) => comments.comments);
};

export const patchVotes = (id, inc_votes, type) => {
  return axios.patch(`https://imo-nc-news.herokuapp.com/api/${type}/${id}`, {
    inc_votes
  });
};

export const postComment = (article_id, newComment) => {
  return axios
    .post(
      `https://imo-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then(({ data: { comment } }) => comment);
};

export const deleteComment = comment_id => {
  return axios
    .delete(`https://imo-nc-news.herokuapp.com/api/comments/${comment_id}`)
    .then(() => console.log("deleted"));
};
