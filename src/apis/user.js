import axios from "../config/axios";

const userApi = {};

userApi.Login = (body) => axios.post("http://localhost:8888/logins", body);

userApi.getUser = () => axios.get(`http://localhost:8888/users`);

userApi.quickAdd = (productId, body) =>
  axios.post(`http://localhost:8888/quick-add-product/${productId}`, body);

userApi.cartUser = () => axios.get("http://localhost:8888/users/cart");

export default userApi;
