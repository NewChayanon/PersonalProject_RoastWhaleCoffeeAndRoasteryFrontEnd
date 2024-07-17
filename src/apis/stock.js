import axios from "../config/axios";
const stockApi = {};

stockApi.getTool = () => axios.get("/products/tools");
stockApi.getCoffee = () => axios.get("/products/coffees");
stockApi.getNewProduct = () => axios.get("/products/new-arrivals");
stockApi.getProductInfo = (productId) => axios.get(`/products/${productId}`);

// edit coffee product
stockApi.editCoffeeProduct = (body) => axios.patch(`/admin/products`, body);

// delete coffee product
stockApi.deleteCoffeeProduct = (id) => axios.patch(`/admin/products/${id}/remove`);

// add product image
stockApi.addProductImage = (formData) => axios.post("/admin/products/images", formData);
stockApi.addProduct = (body) => axios.post("/admin/products", body);

export default stockApi;
