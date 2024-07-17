import axios from "../config/axios";
const authApi = {};

authApi.register = (body) => axios.post("/auth/register", body);

export default authApi;
