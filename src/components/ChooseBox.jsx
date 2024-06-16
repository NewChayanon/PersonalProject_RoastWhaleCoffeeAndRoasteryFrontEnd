/* eslint-disable react/prop-types */
import Span from "./Span";

const type = {
  ONE_HUNDRED: 100,
  TWO_HUNDRED_FIFTY: 250,
  FIVE_HUNDRED: 500,
};

export default function ChooseBox({ id, price, size, onClick }) {
  return (
    <div onClick={()=>onClick(id)} role="button" className="flex flex-col border rounded-md p-2 items-center flex-grow ">
      <Span>{`ขนาด ${type[size]} กรัม`}</Span>
      <Span>{`ราคา ${price} บาท`}</Span>
    </div>
  );
}
