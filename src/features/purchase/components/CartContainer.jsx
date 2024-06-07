import Span from "../../../components/Span";
import CartTable from "./CartTable";


export default function CartContainer() {
  return (
    <div className="flex flex-col items-center">
        <Span size={36} width="ExtraBold">ตะกร้าสินค้า</Span>
        <CartTable />
    </div>
  )
}
