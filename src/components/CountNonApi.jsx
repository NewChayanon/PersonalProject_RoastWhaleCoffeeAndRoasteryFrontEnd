import Button from "./Button";
import Span from "./Span";

// eslint-disable-next-line react/prop-types
export default function CountNonApi({ decrement, quantity, increment }) {
  return (
    <div className="border rounded-lg w-[5rem] flex justify-around h-8">
      <div className="p-1 flex justify-center items-center" onClick={decrement}>
        <Button bg="none">-</Button>
      </div>
      <div className="w-6 flex justify-center items-center border-x">
        <Span>{quantity}</Span>
      </div>
      <div className="p-1 flex justify-center items-center" onClick={increment}>
        <Button bg="none">+</Button>
      </div>
    </div>
  );
}
