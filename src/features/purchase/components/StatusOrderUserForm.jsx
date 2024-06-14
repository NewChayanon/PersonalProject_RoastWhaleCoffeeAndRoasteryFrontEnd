import Span from "../../../components/Span";
import CartTableHeader from "./CartTableHeader";
import StatusOrderTable from "./StatusOrderTable";

export default function StatusOrderUserForm() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Span>การซื้อของฉัน</Span>
      </div>
      <div className="border">
        <CartTableHeader title="รายการสินค้า" />
        <StatusOrderTable/>
      </div>
    </div>
  );
}
