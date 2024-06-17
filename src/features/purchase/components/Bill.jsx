import Span from "../../../components/Span";
import { useUser } from "../../../hooks/useUser";
import formatCurrency from "../../../utils/currency-format";



export default function Bill() {
  const { cartUser } = useUser();
  const initialValue = { quantity: 0, price: 0 };
  const sumWithInitial = cartUser?.reduce((acc, crr) => {
    acc.quantity = crr.quantity + acc.quantity;
    acc.price = acc.price + crr.quantity * crr["product_and_size"].price;
    return acc;
  }, initialValue);
  return (
    <div className="border border-[#FDEACE] p-4 mt-6 rounded-lg flex flex-col gap-2 sticky top-24 bg-[#FFF9F1]">
      <div>
        <Span size={24} color="Primary/950" >ยอดรวมตะกร้าสินค้า</Span>
      </div>
      <div className="flex justify-between gap-3">
        <Span size={16} color="Primary/950">{`ยอดรวมสินค้า (${sumWithInitial?.quantity}ชิ้น)`}</Span>
        <Span size={16} color="Primary/950">{`฿ ${formatCurrency(sumWithInitial?.price.toFixed(2))}`}</Span>
      </div>
      <Span>------------------------------------</Span>
      <div className="flex justify-between g-3">
        <Span size={16} color="Primary/950" width="SemiBold">ยอดรวมตะกร้าสินค้า</Span>
        <Span size={16} color="Primary/950" width="SemiBold">{`฿ ${formatCurrency(sumWithInitial?.price.toFixed(2))}`}</Span>
      </div>
    </div>
  );
}
