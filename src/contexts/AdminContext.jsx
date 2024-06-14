/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import adminApi from "../apis/admin";
import { useUser } from "../hooks/useUser";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [res, setRes] = useState(null);
  const { isUser } = useUser();

  const prepareOrder = order?.map((el) => {
    const obj = {};
    const initialValue = { price: 0 };
    const { price } = el.cart["cart_items"].reduce((acc, crr) => {
      acc.price = acc.price + crr.quantity * crr["product_and_size"].price;
      return acc;
    }, initialValue);

    obj.id = el.id;
    obj.name = el.cart.cart_items[0].product_and_size.product.name;
    obj.description =
      el.cart.cart_items[0].product_and_size.product.description;
    obj.firstName = el.address["first_name"];
    obj.lastName = el.address["last_name"];
    obj.address =
      el.address.address +
      " " +
      el.address.district +
      " " +
      el.address.province +
      " " +
      el.address.postcode;
    obj.price = price;
    obj.image = el.image;
    obj.status = el.status;
    return obj;
  });
  console.log(prepareOrder);

  const handlePending = async (id) => {
    console.log(id);
    const body = { status: "PENDING" };
    const res = await adminApi.updateStatusOrder(id, body);
    setRes(res.data)
  };
  const handSuccess = async (id) => {
    console.log(id);
    const body = { status: "SUCCESSED" };
    const res = await adminApi.updateStatusOrder(id, body);
    setRes(res.data)
  };
  const handFailed = async (id) => {
    console.log(id);
    const body = { status: "FAILED" };
    const res = await adminApi.updateStatusOrder(id, body);
    setRes(res.data)
  };

  useEffect(() => {
    const fetchAllOrder = async () => {
      if (isUser?.["is_admin"]) {
        const resOrder = await adminApi.getAllOrder();
        setOrder(resOrder.data);
      } else {
        setOrder(null);
      }
    };
    fetchAllOrder();
  }, [isUser, res]);

  return (
    <AdminContext.Provider
      value={{ prepareOrder, handlePending, handSuccess, handFailed }}
    >
      {children}
    </AdminContext.Provider>
  );
}
