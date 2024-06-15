/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import {
  addCoffeeProductValidator,
  handleValidateCoffee,
} from "../../../validators/validators";
import { useStock } from "../../../hooks/useStock";

export default function AddProductForm({ onSuccess, category }) {
  const initialInput = {
    name: "",
    description: "",
    details: "",
    popular: 0,
    category: category,
    coffee: [
      {
        size: "ONE_HUNDRED",
        price: category == "coffee" ? "" : 0,
        stock: category == "coffee" ? "" : 0,
      },
      {
        size: "TWO_HUNDRED_FIFTY",
        price: category == "coffee" ? "" : 0,
        stock: category == "coffee" ? "" : 0,
      },
      {
        size: "FIVE_HUNDRED",
        price: category == "coffee" ? "" : 0,
        stock: category == "coffee" ? "" : 0,
      },
    ],
    tool: {
      size: "TOOL",
      price: category == "tool" ? "" : 0,
      stock: category == "tool" ? "" : 0,
    },
  
  };

  const initialErrorMessage = {
    name: "",
    description: "",
    details: "",
    popular: 0,
    category: category,
    "coffee[0].price": "",
    "coffee[0].stock": "",
    "coffee[1].price": "",
    "coffee[1].stock": "",
    "coffee[2].price": "",
    "coffee[2].stock": "",
    "tool.size": "",
    "tool.price": "",
    "tool.stock": "",
 
  };

  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const [file, setFile] = useState(null);
  const [errorMessageFile,setErrorMessageFile]=useState("")
  const { addProductCoffee } = useStock();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleChangeCoffee = (e, index) => {
    setInput({
      ...input,
      coffee: input.coffee.map((item, i) =>
        i === index ? { ...item, [e.target.name]: e.target.value } : item
      ),
    });
  };

  const handleChangTool = (e) => {
    setInput({
      ...input,
      tool: { ...input.tool, [e.target.name]: e.target.value },
    });
  };

  const handleSubmitForm = async (e) => {
    try {      
      e.preventDefault();
      const error = addCoffeeProductValidator(input);
      const { errorValidatorCoffee } = handleValidateCoffee(input);
    
      if (!file || error) {
        if (error) {
          error.coffee = errorValidatorCoffee;
          setErrorMessage(error);
        }else{
          setErrorMessage(initialErrorMessage)
        }
        
        if (!file) {  
          setErrorMessageFile("file is not allowed to be empty")
        } else{
          setErrorMessageFile("")
        }
        return 
      }
      setErrorMessageFile("")
      setErrorMessage(initialErrorMessage);
      await addProductCoffee(input, file);
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="m-4" onSubmit={handleSubmitForm}>
      <div>
        <Span>ชื่อสินค้า</Span>
        <Input
          type="text"
          placeholder="ชื่อสินค้า"
          value={input.name}
          onChange={handleChangeInput}
          name="name"
          error={errorMessage.name}
        />
      </div>

      <div className="flex justify-between">
        {category == "coffee" ? (
          <>
            <div>
              <Span>ราคาสินค้า 100/250/500 G</Span>
              <Input
                type="text"
                placeholder="ราคาสินค้าขนาด 100 กรัม"
                value={input.coffee[0].price}
                onChange={(e) => handleChangeCoffee(e, 0)}
                name="price"
                error={errorMessage["coffee[0].price"]}
              />
              <Input
                type="text"
                placeholder="ราคาสินค้าขนาด 250 กรัม"
                value={input.coffee[1].price}
                onChange={(e) => handleChangeCoffee(e, 1)}
                name="price"
                error={errorMessage["coffee[1].price"]}
              />
              <Input
                type="text"
                placeholder="ราคาสินค้าขนาด 500 กรัม"
                value={input.coffee[2].price}
                onChange={(e) => handleChangeCoffee(e, 2)}
                name="price"
                error={errorMessage["coffee[2].price"]}
              />
            </div>
            <div>
              <Span>จำนวนสินค้า</Span>
              <Input
                type="text"
                placeholder="จำนวนสินค้า"
                value={input.coffee[0].stock}
                onChange={(e) => handleChangeCoffee(e, 0)}
                name="stock"
                error={errorMessage["coffee[0].stock"]}
              />
              <Input
                type="text"
                placeholder="จำนวนสินค้า"
                value={input.coffee[1].stock}
                onChange={(e) => handleChangeCoffee(e, 1)}
                name="stock"
                error={errorMessage["coffee[1].stock"]}
              />
              <Input
                type="text"
                placeholder="จำนวนสินค้า"
                value={input.coffee[2].stock}
                onChange={(e) => handleChangeCoffee(e, 2)}
                name="stock"
                error={errorMessage["coffee[2].stock"]}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <Span>ราคาอุปกรณ์</Span>
              <Input
                type="text"
                placeholder="ราคาอุปกรณ์"
                value={input.tool.price}
                onChange={handleChangTool}
                name="price"
                error={errorMessage["tool.price"]}
              />
            </div>
            <div>
              <Span>จำนวนสินค้า</Span>
              <Input
                type="text"
                placeholder="จำนวนสินค้า"
                value={input.tool.stock}
                onChange={handleChangTool}
                name="stock"
                error={errorMessage["tool.stock"]}
              />
            </div>
          </>
        )}
      </div>

      <div>
        <Span>เนื้อหาย่อย</Span>
        <Input
          type="text"
          placeholder="เนื้อหาย่อย"
          value={input.description}
          onChange={handleChangeInput}
          name="description"
          error={errorMessage.description}
        />
      </div>

      <div className="flex flex-col">
        <Span>เนื้อหาหลัก</Span>
        <textarea
          rows={5}
          className="border rounded-lg w-full outline-none px-4 py-2 placeholder:text-[#707070] "
          placeholder="เนื้อหาหลัก"
          value={input.details}
          onChange={handleChangeInput}
          name="details"
        ></textarea>
        {errorMessage.details ? (
          <small className="text-red-500 px-2">{errorMessage.details}</small>
        ) : null}
      </div>

      <div>
        <Span>รูปภาพ</Span>
        <input
          type="file"
          
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        {errorMessageFile ? (
          <small className="text-red-500 px-2">{errorMessageFile}</small>
        ) : null}
      </div>

      <div className="flex h-9 justify-center">
        <div className="w-72">
          <Button>บันทึก</Button>
        </div>
      </div>
    </form>
  );
}
