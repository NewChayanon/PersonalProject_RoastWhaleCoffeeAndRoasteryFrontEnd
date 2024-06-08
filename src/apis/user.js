import axios from "../config/axios";

const userApi = {};

userApi.Login = (body) => axios.post("http://localhost:8888/logins", body);

export default userApi;
