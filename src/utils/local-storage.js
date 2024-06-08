const ACCESS_TOKEN = "ACCESS_TOKEN";

export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token); // {ket(ACCESS_TOKEN):value(token)}

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);