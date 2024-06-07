import Button from "../components/Button";
import Span from "../components/Span";

export default function Count() {
  return (
    // draft
    <div className="border rounded-lg w-[5rem] flex justify-around">
      <div className="p-1 flex justify-center items-center">
        <Button bg="none">-</Button>
      </div>
      <div className="w-6 flex justify-center items-center border-x">
        <Span>1</Span>
      </div>
      <div className="p-1 flex justify-center items-center">
        <Button bg="none">+</Button>
      </div>
    </div>
  );
}
