import Span from "../../../components/Span";
import { useUser } from "../../../hooks/useUser";

export default function Bill() {
  const { cartUser } = useUser();
  const initialValue = { quantity: 0, price: 0 };
  const sumWithInitial = cartUser?.reduce((acc, crr) => {
    acc.quantity = crr.quantity + acc.quantity;
    acc.price = acc.price + crr.quantity * crr["product_and_size"].price;
    return acc;
  }, initialValue);
  return (
    <div className="border p-4 rounded-lg flex flex-col gap-2 sticky top-24">
      <div>
        <Span>ยอดรวมตะกร้าสินค้า</Span>
      </div>
      <div className="flex justify-between gap-3">
        <Span>{`ยอดรวมสินค้า (${sumWithInitial?.quantity}ชิ้น)`}</Span>
        <Span>{`฿ ${sumWithInitial?.price.toFixed(2)}`}</Span>
      </div>
      <div className="flex justify-between g-3">
        <Span>ยอดรวมตะกร้าสินค้า</Span>
        <Span>{`฿ ${sumWithInitial?.price.toFixed(2)}`}</Span>
      </div>
    </div>
  );
}
