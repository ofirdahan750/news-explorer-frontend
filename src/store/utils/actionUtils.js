export default function setSortedArticles(arr) {
  return arr.map((article) => {
    const {source, title, publishedAt, description, urlToImage, url} = article;
    const formattedDate = new Date(publishedAt);
    return {
      source: source.name,
      title: title,
      publishedAt: new Date(formattedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      description: description,
      url: url,
      imgUrl: urlToImage
    };
  });
}
