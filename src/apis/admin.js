import axios from '../config/axios'
const adminApi = {}

adminApi.getAllOrder = ()=> axios.get('http://localhost:8888/admin/order-list')
adminApi.updateStatusOrder = (orderId,body) => axios.patch(`http://localhost:8888/admin/order/${orderId}`,body)

 export default adminApi