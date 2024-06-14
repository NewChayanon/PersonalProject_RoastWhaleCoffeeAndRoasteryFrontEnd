import AdminContextProvider from "../contexts/AdminContext";
import OrderForm from "../features/admin/OrderForm";

export default function OrderPage() {
  return (
    <div>
      <AdminContextProvider>
        <OrderForm />
      </AdminContextProvider>
    </div>
  );
}
