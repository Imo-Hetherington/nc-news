import axios from "axios";

export const fetchTopics = () => {
  return axios
    .get("https://imo-nc-news.herokuapp.com/api/topics")
    .then(({ data: topics }) => topics.topics);
};
