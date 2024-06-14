import axios from '../config/axios'
const adminApi = {}

adminApi.getAllOrder = ()=> axios.get('http://localhost:8888/admin/order-list')

 export default adminApi