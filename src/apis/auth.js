import axios from '../config/axios'
const authApi = {};

authApi.register = (body) =>  axios.post("http://localhost:8888/registers", body);

export default authApi