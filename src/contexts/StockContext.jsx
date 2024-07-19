/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import stockApi from "../apis/stock";

export const StockContext = createContext();

export const StockContextProvider = ({ children }) => {
  const [coffeeProduct, setCoffeeProduct] = useState(null);
  const [toolProduct, setToolProduct] = useState(null);
  const [addCoffee, setAddCoffee] = useState();
  const [newProduct, setNewProduct] = useState();
  const [res, setRes] = useState();

  const addProductCoffee = async (input, file) => {
    const res = await stockApi.addProduct(input);
    const formData = new FormData();
    formData.append("productImage", file);
    formData.append("productId", res.data.id);
    const resAddProductImage = await stockApi.addProductImage(formData);
    setAddCoffee(res.data);
    setRes(resAddProductImage);
  };

  const handleEditCoffeeProduct = async (body, file) => {
    try {
      const resEditCoffeeProduct = await stockApi.editCoffeeProduct(body);
      if (file) {
        const formData = new FormData();
        formData.append("productImage", file);
        formData.append("productId", body.id);
        await stockApi.addProductImage(formData);
      }
      setRes(resEditCoffeeProduct.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCoffee = async (id) => {
    const resDeleteCoffee = await stockApi.deleteCoffeeProduct(id);
    setRes(resDeleteCoffee.data);
  };

  useEffect(() => {
    const fetchCoffeeProduct = async () => {
      try {
        const resGetCoffee = await stockApi.getCoffee();
        setCoffeeProduct(resGetCoffee.data.coffee);
        const resGetTool = await stockApi.getTool();
        setToolProduct(resGetTool.data.tool);
        const resNewProduct = await stockApi.getNewProduct();
        setNewProduct(resNewProduct.data.fetch);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoffeeProduct();
  }, [addCoffee, res]);

  return (
    <StockContext.Provider
      value={{
        coffeeProduct,
        addProductCoffee,
        newProduct,
        toolProduct,
        handleEditCoffeeProduct,
        handleDeleteCoffee,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
