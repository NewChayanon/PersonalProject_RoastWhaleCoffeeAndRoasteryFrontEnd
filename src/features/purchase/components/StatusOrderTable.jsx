import Span from "../../../components/Span";
import StatusOrderList from "./StatusOrderList";
import Spinner from "../../../components/Spinner";
import { useUser } from "../../../hooks/useUser";

export default function StatusOrderTable() {
  const { loading, shoppingList } = useUser();

  const newShoppingList = shoppingList?.map((el) => {
    const obj = {};
    obj.id = el.id;
    obj.name = el.cart.cart_items[0].product_and_size.product.name;
    obj.description = el.cart.cart_items[0].product_and_size.product.description;
    obj.status = el.status;
    return obj;
  });

  return (
    <div className="min-h-[400px] min-w-[800px]">
      <div className="flex justify-between items-center py-3 ">
        {loading && <Spinner />}
        <Span size={20} width="SemiBold">
          สินค้า
        </Span>
        <Span size={20} width="SemiBold">
          สถานะออเดอร์
        </Span>
      </div>
      {newShoppingList?.map((el) => (
        <StatusOrderList
          key={el.id}
          name={el.name}
          description={el.description}
          status={el.status}
        />
      ))}
    </div>
  );
}
