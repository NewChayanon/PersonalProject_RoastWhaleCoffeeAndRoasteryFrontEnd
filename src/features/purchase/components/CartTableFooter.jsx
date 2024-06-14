import Span from "../../../components/Span";
import { useUser } from "../../../hooks/useUser";


export default function CartTableFooter() {
  const { handleAllDeleteInCart } = useUser();
  return (
    <div role="button" onClick={handleAllDeleteInCart}>
      <Span>ลบสินค้าในตะกร้าทั้งหมด</Span>
    </div>
  )
}
