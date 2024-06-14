import Span from "../../../components/Span";
import { useUser } from "../../../hooks/useUser";

export default function CartTableFooter() {
  const { handleAllDeleteInCart } = useUser();
  return (
    <div  className="border-t-2 flex justify-end">
      <div role="button" onClick={handleAllDeleteInCart}>
        <Span>ลบสินค้าในตะกร้าทั้งหมด</Span>
      </div>
    </div>
  );
}
