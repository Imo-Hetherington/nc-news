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
