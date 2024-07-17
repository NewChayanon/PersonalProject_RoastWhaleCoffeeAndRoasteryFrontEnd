import axios from "../config/axios";

const userApi = {};

userApi.getUser = () => axios.get(`/users`);
userApi.cartUser = () => axios.get("/users/cart");
userApi.getShoppingList = () => axios.get(`/users/orders`);

userApi.updatePaymentImage = (formData) => axios.patch(`/users/payment`, formData);

userApi.Login = (body) => axios.post("/auth/login", body);
userApi.address = (body) => axios.post(`/users/address`, body);
userApi.payment = (body) => axios.post(`/users/checkout`, body);
userApi.quickAdd = (productId, body) => axios.post(`/users/cart/products/${productId}/quick-add`, body);
userApi.addProduct = (productAndSizeId, body) => axios.post(`/users/add-product/${productAndSizeId}`, body);
userApi.addAndUpdateProduct = (productAndSizeId, body) => axios.post(`/users/add-product/${productAndSizeId}`, body);

userApi.deleteProductInCart = (cartItemId) => axios.delete(`/users/cart/products/${cartItemId}`);

export default userApi;
