import axios from '../config/axios'
const stockApi ={}

stockApi.addProduct = (body)=> axios.post('http://localhost:8888/admin/add-product-coffee',body)
stockApi.getCoffee = () => axios.get('http://localhost:8888/product/coffee')
stockApi.getNewProduct = () => axios.get('http://localhost:8888/product/new')

export default stockApi