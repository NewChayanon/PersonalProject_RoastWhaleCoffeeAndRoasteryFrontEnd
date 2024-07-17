import CartTableContent from "./CartTableContent";
import CartTableFooter from "./CartTableFooter";
import CartTableHeader from "./CartTableHeader";

export default function CartTable() {
  return (
    <div className="p-4 border border-[#707070] rounded-3xl">
      <CartTableHeader title="สินค้าในตะกร้า" />
      <CartTableContent />
      <CartTableFooter />
    </div>
  );
}
