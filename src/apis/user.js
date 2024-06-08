import axios from "../config/axios";

const userApi = {};

userApi.Login = (body) => axios.post("http://localhost:8888/logins", body);

userApi.getUser = () => axios.get('http://localhost:8888/users');

export default userApi;
