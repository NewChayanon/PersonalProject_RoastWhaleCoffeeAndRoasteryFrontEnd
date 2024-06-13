/* eslint-disable react/prop-types */
import Button from "../components/Button";
import Span from "../components/Span";
import { useUser } from "../hooks/useUser";

export default function Count({cartItemId,productAndSizeId, quantity }) {
  const { handleIncrementProductInCart,handleDecrementProductInCart } = useUser();
  return (
    // draft
    <div className="border rounded-lg w-[5rem] flex justify-around">
      <div className="p-1 flex justify-center items-center" onClick={()=>handleDecrementProductInCart(productAndSizeId,quantity,cartItemId)}>
        <Button bg="none">-</Button>
      </div>
      <div className="w-6 flex justify-center items-center border-x">
        <Span>{quantity}</Span>
      </div>
      <div className="p-1 flex justify-center items-center" onClick={()=>handleIncrementProductInCart(productAndSizeId,quantity)}>
        <Button bg="none">+</Button>
      </div>
    </div>
  );
}
