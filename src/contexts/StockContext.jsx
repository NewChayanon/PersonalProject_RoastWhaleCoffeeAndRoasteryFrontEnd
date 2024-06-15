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

  const addProductCoffee = async (input) => {
    const res = await stockApi.addProduct(input);
    setAddCoffee(res.data);
  };

  const handleEditCoffeeProduct = async (body) => {
    try {
      const resEditCoffeeProduct = await stockApi.editCoffeeProduct(body);
      setRes(resEditCoffeeProduct.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCoffee = async (id) => {
    console.log(id)
    const resDeleteCoffee = await stockApi.deleteCoffeeProduct(id)
    setRes(resDeleteCoffee.data);
  }

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
  }, [addCoffee,res]);

  useEffect(() => {
    const fetchCoffeeProduct = async () => {
      try {
        const resGetCoffee = await stockApi.getCoffee();
        setCoffeeProduct(resGetCoffee.data.coffee);
        const resNewProduct = await stockApi.getNewProduct();
        setNewProduct(resNewProduct.data.fetch);
        const resGetTool = await stockApi.getTool();
        setToolProduct(resGetTool.data.tool);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoffeeProduct();
  }, []);

  return (
    <StockContext.Provider
      value={{
        coffeeProduct,
        addProductCoffee,
        newProduct,
        toolProduct,
        handleEditCoffeeProduct,
        handleDeleteCoffee
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
