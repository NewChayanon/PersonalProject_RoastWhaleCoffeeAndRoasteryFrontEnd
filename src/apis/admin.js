import axios from "../config/axios";
const adminApi = {};

adminApi.getAllOrder = () => axios.get("/admin/orders");

adminApi.updateStatusOrder = (orderId, body) => axios.patch(`/admin/orders/${orderId}`, body);

export default adminApi;
