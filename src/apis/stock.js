import axios from "../config/axios";
const stockApi = {};

stockApi.addProduct = (body) =>
  axios.post("http://localhost:8888/admin/add-product-coffee", body);

stockApi.getCoffee = () => axios.get("http://localhost:8888/product/coffee");

stockApi.getTool = () => axios.get("http://localhost:8888/product/tool");

stockApi.getNewProduct = () => axios.get("http://localhost:8888/product/new");

// edit coffee product
stockApi.editCoffeeProduct = (body) =>
  axios.patch(`http://localhost:8888/admin/edit-coffee-product`, body);

// delete coffee product
stockApi.deleteCoffeeProduct = (id) =>
  axios.patch(`http://localhost:8888/admin/remove-product/${id}`);

export default stockApi;
