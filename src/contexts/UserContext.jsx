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
  const [shoppingList, setShoppingList] = useState(null);
  const [res, setRes] = useState();

  const handleLogin = async (credentials) => {
    const res = await userApi.Login(credentials);
    // setToken
    setAccessToken(res.data.accessToken);
    const getUser = await userApi.getUser();
    setIsUser(getUser.data.user);
    setRes(res.data);
    return getUser;
  };

  const handleLogout = () => {
    removeAccessToken();
    setIsUser(null);
    setCartUser(null)
  };

  const handleClickAddCoffeeToCart = async (productId) => {
    console.log(productId);
    const body = { quantity: 1 };
    const res = await userApi.quickAdd(productId, body);
    setRes(res.data);
  };

  const handleIncrementProductInCart = async (productAndSizeId, quantity) => {
    quantity++;
    let body = { quantity };
    const res = await userApi.addAndUpdateProduct(productAndSizeId, body);
    setRes(res.data);
  };

  const handleDecrementProductInCart = async (
    productAndSizeId,
    quantity,
    cartItemId
  ) => {
    quantity--;
    if (quantity <= 0) {
      const res = await userApi.deleteProductInCart(cartItemId);
      return setRes(res.data);
    }
    let body = { quantity };
    const res = await userApi.addAndUpdateProduct(productAndSizeId, body);
    setRes(res.data);
  };

  const handleAllDeleteInCart = () => {
    cartUser.map(async (el) => {
      const res = await userApi.deleteProductInCart(el.id);
      setRes(res);
    });
  };

  const checkOutCart = async (input, payment) => {
    console.log(input, payment);
    const resAddress = await userApi.address(input);
    const resPayment = await userApi.payment(payment);
    setRes(resAddress);
    setRes(resPayment);
  };

  useEffect(() => {
    const fetchCartUser = async () => {
      const resCartUser = await userApi.cartUser();
      setCartUser(resCartUser.data);
      const resShoppingList = await userApi.getShoppingList();
      setShoppingList(resShoppingList.data);
    };
    fetchCartUser();
  }, [res]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await userApi.getUser();
          setIsUser(res.data.user);
          const resCartUser = await userApi.cartUser();
          setCartUser(resCartUser.data);
          const resShoppingList = await userApi.getShoppingList();
          setShoppingList(resShoppingList.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        isUser,
        handleLogin,
        handleLogout,
        handleClickAddCoffeeToCart,
        cartUser,
        handleIncrementProductInCart,
        handleDecrementProductInCart,
        handleAllDeleteInCart,
        checkOutCart,
        shoppingList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
