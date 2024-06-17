/* eslint-disable react/prop-types */
import Span from "./Span";

const type = {
  ONE_HUNDRED: 100,
  TWO_HUNDRED_FIFTY: 250,
  FIVE_HUNDRED: 500,
};

export default function ChooseBox({ id, price, size, onClick }) {
  return (
    <div onClick={()=>onClick(id)} role="button" className="flex flex-col border rounded-md p-2 items-center flex-grow my-3 active:border-[#F9C06A] hover:scale-110 active:scale-100 transition-all duration-100">
      <Span size={14} color="Support01/950">{`ขนาด ${type[size]} กรัม`}</Span>
      <Span size={14} color="Support01/950">{`ราคา ${price} บาท`}</Span>
    </div>
  );
}
