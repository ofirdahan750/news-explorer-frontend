import demoData from "../DemoData/DemoData.json";
class NewsApi {
  constructor({baseUrl, from, to, pageSize}) {
    this._baseUrl = baseUrl;
    this._from = from;
    this._to = to;
    this._pageSize = pageSize;
  }
  _onHttpRequest = async (url) => {
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject();
    }
  };

  getSearchArticles = async ({searchParmas, apiKey}) => {
    console.log('searchParmas:', searchParmas)
    return await this._onHttpRequest(
      `${this._baseUrl}/everything?q=${searchParmas}&apiKey=${apiKey}&from=${this._from}&to=${this._to}&pageSize=${this._pageSize}`
    );
    //for Testing and dev on the server
    // demoData.totalResults = 0;
    // return Promise.resolve([]);
    // return Promise.resolve(demoData);
  };
}
const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2",
  from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
    "en-US"
  ),
  to: new Date(Date.now()).toLocaleDateString("en-US"),
  pageSize: 100
});

export default newsApi;
