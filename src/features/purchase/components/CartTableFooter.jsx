import Span from "../../../components/Span";
import { useUser } from "../../../hooks/useUser";

export default function CartTableFooter() {
  const { handleAllDeleteInCart } = useUser();
  return (
    <div  className="border-t-[1px] flex justify-end items-center">
      <div role="button" onClick={handleAllDeleteInCart} className="flex mt-3 mx-3">
        <Span size={20} >ลบสินค้าในตะกร้าทั้งหมด</Span>
      </div>
    </div>
  );
}
