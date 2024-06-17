import Span from "../../../components/Span";
import CartTableHeader from "./CartTableHeader";
import StatusOrderTable from "./StatusOrderTable";

export default function StatusOrderUserForm() {
  return (
    <div className="flex flex-col items-center py-12">
      <div>
        <Span size={36} width="ExtraBold">การซื้อของฉัน</Span>
      </div>
      <div className="border p-6 my-6 rounded-3xl">
        <CartTableHeader title="รายการสินค้า" />
        <StatusOrderTable/>
      </div>
    </div>
  );
}
