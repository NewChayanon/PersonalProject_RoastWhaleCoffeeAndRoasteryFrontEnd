/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userApi from "../apis/user";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(null);
  const [cartUser, setCartUser] = useState(null);
  const [res, setRes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const handleLogin = async (credentials) => {
    const res = await userApi.Login(credentials);
    // setToken
    setAccessToken(res.data.accessToken);
    const getUser = await userApi.getUser();
    setIsUser(getUser.data.user);
    setRes(!res);
    return getUser;
  };

  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_API_LOGIN;
  };

  const handleLogout = () => {
    removeAccessToken();
    setIsUser(null);
    setCartUser(null);
  };

  const handleClickAddCoffeeToCart = async (productId) => {
    setLoading(true);
    const body = { quantity: 1 };
    await userApi.quickAdd(productId, body);
    setRes(!res);
  };

  const handleIncrementProductInCart = async (productAndSizeId, quantity) => {
    setLoading(true);
    quantity++;
    let body = { quantity };
    await userApi.addAndUpdateProduct(productAndSizeId, body);
    setRes(!res);
  };

  const handleDecrementProductInCart = async (productAndSizeId, quantity, cartItemId) => {
    setLoading(true);
    quantity--;
    if (quantity <= 0) {
      await userApi.deleteProductInCart(cartItemId);
      return setRes(!res);
    }
    let body = { quantity };
    await userApi.addAndUpdateProduct(productAndSizeId, body);
    setRes(!res);
  };

  const handleAllDeleteInCart = () => {
    setLoading(true);
    cartUser.map(async (el) => {
      await userApi.deleteProductInCart(el.id);
      setRes(!res);
    });
    if (cartUser.length === 0) {
      setLoading(false);
    }
  };

  const checkOutCart = async (input, payment, file) => {
    setLoading(true);
    await userApi.address(input);
    const resPayment = await userApi.payment(payment);
    const formData = new FormData();
    formData.append("paymentImage", file);
    formData.append("orderId", resPayment.data.id);
    await userApi.updatePaymentImage(formData);
    setRes(!res);
    setCheckout(true);
  };

  const handleAddProductBySize = async (productAndSizeId, body) => {
    await userApi.addProduct(productAndSizeId, body);
    setRes(!res);
  };

  useEffect(() => {
    const fetchCartUser = async () => {
      const resCartUser = await userApi.cartUser();
      setCartUser(resCartUser.data);
      setLoading(false);
    };
    fetchCartUser();
  }, [isUser, res]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await userApi.getUser();
          setIsUser(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        const resShoppingList = await userApi.getShoppingList();
        setShoppingList(resShoppingList.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShoppingList();
  }, [checkout]);

  return (
    <UserContext.Provider
      value={{
        isUser,
        loading,
        cartUser,
        checkOutCart,
        shoppingList,

        handleLogin,
        handleLogout,
        handleGoogleLogin,
        handleAllDeleteInCart,
        handleAddProductBySize,
        handleClickAddCoffeeToCart,
        handleIncrementProductInCart,
        handleDecrementProductInCart,

        setIsUser,
        setCartUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
