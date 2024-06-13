/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import { addCoffeeProductValidator, handleValidateCoffee } from "../../../validators/validators";
import stockApi from "../../../apis/stock";
import { useStock } from "../../../hooks/useStock";


const initialInput = {
  name: "",
  description: "",
  details: "",
  popular: 0,
  category: "coffee",
  coffee: [
    { size: "ONE_HUNDRED", price: "", stock: "" },
    { size: "TWO_HUNDRED_FIFTY", price: "", stock: "" },
    { size: "FIVE_HUNDRED", price: "", stock: "" },
  ],
  tool: { size: "TOOL", price: 0, stock: 0 },
  image: [{ image: "z," }, { image: "s," }],
};
const initialErrorMessage = {
  name: "",
  description: "",
  details: "",
  popular: 0,
  category: "coffee",
  coffee: [
    { size: "ONE_HUNDRED", price: "", stock: "" },
    { size: "TWO_HUNDRED_FIFTY", price: "", stock: "" },
    { size: "FIVE_HUNDRED", price: "", stock: "" },
  ],
  tool: { size: "TOOL", price: 0, stock: 0 },
  image: [{ image: "z," }, { image: "s," }],
};

export default function AddProductForm({onSuccess}) {
  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const {addProductCoffee} = useStock()
  
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
  const handleSubmitForm = async (e) => {
    try {
      console.log(input);
      e.preventDefault();
      const error = addCoffeeProductValidator(input);
      const { errorValidatorCoffee} = handleValidateCoffee(input)
      if (error) {
        error.coffee = errorValidatorCoffee
        return setErrorMessage(error);
      }
      setErrorMessage(initialErrorMessage);
      await addProductCoffee(input)
      onSuccess()
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
        <div>
          <Span>ราคาสินค้า 100/250/500 G</Span>
          <Input
            type="text"
            placeholder="ราคาสินค้าขนาด 100 กรัม"
            value={input.coffee[0].price}
            onChange={(e) => handleChangeCoffee(e, 0)}
            name="price"
              error={errorMessage.coffee[0].price}
          />
          <Input
            type="text"
            placeholder="ราคาสินค้าขนาด 250 กรัม"
            value={input.coffee[1].price}
            onChange={(e) => handleChangeCoffee(e, 1)}
            name="price"
            error={errorMessage.coffee[1].price}
          />
          <Input
            type="text"
            placeholder="ราคาสินค้าขนาด 500 กรัม"
            value={input.coffee[2].price}
            onChange={(e) => handleChangeCoffee(e, 2)}
            name="price"
            error={errorMessage.coffee[2].price}
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
            error={errorMessage.coffee[0].stock}
          />
          <Input
            type="text"
            placeholder="จำนวนสินค้า"
            value={input.coffee[1].stock}
            onChange={(e) => handleChangeCoffee(e, 1)}
            name="stock"
            error={errorMessage.coffee[1].stock}
          />
          <Input
            type="text"
            placeholder="จำนวนสินค้า"
            value={input.coffee[2].stock}
            onChange={(e) => handleChangeCoffee(e, 2)}
            name="stock"
            error={errorMessage.coffee[2].stock}
          />
        </div>
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
        <Input />
      </div>

      <div className="flex h-9 justify-between">
        <div className="w-72">
          <Button>ลบ</Button>
        </div>
        <div className="w-72">
          <Button>บันทึก</Button>
        </div>
      </div>
    </form>
  );
}
