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

const formatSlug = slug => {
  return slug.substr(0, 1).toUpperCase() + slug.substr(1);
};

export { formatDate, formatTime, formatSlug };
