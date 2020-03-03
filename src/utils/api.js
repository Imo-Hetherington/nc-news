import axios from "axios";

export const fetchTopics = () => {
  return axios
    .get("https://imo-nc-news.herokuapp.com/api/topics")
    .then(({ data: topics }) => topics.topics);
};

export const fetchArticles = (topic, limit, sort_by) => {
  return axios
    .get("https://imo-nc-news.herokuapp.com/api/articles", {
      params: { topic, limit, sort_by }
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
  return axios
    .patch(`https://imo-nc-news.herokuapp.com/api/${type}/${id}`, { inc_votes })
    .then(({ data: { article } }) => article);
};
