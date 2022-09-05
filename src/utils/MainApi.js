class MainApi {
  constructor() {
    this._token = localStorage.getItem("jwt") || "";
    this._baseUrl =
      "https://api.news-explorer-ofir.students.nomoredomainssbs.ru";
  }
  _onHttpRequest = async ({url, method, data}) => {
    debugger;
    const res = await fetch(`${this._baseUrl}/${url}`, {
      method,
      headers: {
        authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };
  getSavedArticles = async () => {
    return await this._onHttpRequest({
      url: "articles",
      method: "GET"
    });
  };
  onSaveArticle = async (article) => {
    return await this._onHttpRequest({
      url: "articles",
      method: "POST",
      data: article
    });
  };
}
const mainApi = new MainApi();

export default mainApi;
