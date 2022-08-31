const BASE_URL = "https://api.news-explorer-ofir.students.nomoredomainssbs.ru";

const handleResponse = async (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(await res.json());
  }
};

const register = async ({email, password, name}) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password, name})
  });

  return handleResponse(res);
};

const authenticate = async ({email, password}) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})
  });
  return handleResponse(res);
};

const validateToken = async (token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  return handleResponse(res);
};

export {authenticate, register, validateToken};
