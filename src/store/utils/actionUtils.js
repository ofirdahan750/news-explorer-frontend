export default function setSortedArticles(arr) {
  const newArray = arr.map((article) => {
    const {source, title, publishedAt, description, urlToImage, url} = article;
    const formattedDate = new Date(publishedAt);
    return {
      source: source.name,
      title: title,
      date: new Date(formattedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      timeStampDate: formattedDate.getTime(),
      text: description,
      link: url,
      image: urlToImage
    };
  });
  return newArray;
}
