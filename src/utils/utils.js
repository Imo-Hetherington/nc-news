const formatDate = datetime => {
  const date = datetime
    .substr(0, 10)
    .split("-")
    .reverse()
    .join("/");
  return date;
};

const formatTime = datetime => {
  const time = datetime.substr(11, 5);
  return time;
};

const formatSlug = slug => {};

export { formatDate, formatTime, formatSlug };
