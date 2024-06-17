import Span from "../../../components/Span";
import { useUser } from "../../../hooks/useUser";
import StatusOrderList from "./StatusOrderList";

export default function StatusOrderTable() {
  const { shoppingList } = useUser();
  console.log(shoppingList);
  // el.status
  // el.cart.cart_items[0].product_and_size.product_id
  // = [{name : "", description:"",status:""}]

  // const test = shoppingList?.[0].status
  // console.log(test)
  // const test2 =shoppingList?.[0].cart.cart_items[0].product_and_size.product_id
  // console.log(test2)
  // const test3 =shoppingList?.[0].cart.cart_items[0].product_and_size.product.name
  // console.log(test3)
  // const test4 =shoppingList?.[0].cart.cart_items[0].product_and_size.product.description
  // console.log(test4)

  const newShoppingList = shoppingList?.map((el) => {
    const obj = {};
    obj.id = el.id;
    obj.name = el.cart.cart_items[0].product_and_size.product.name;
    obj.description = el.cart.cart_items[0].product_and_size.product.description;
    obj.status = el.status;
    return obj;
  });
  

  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <Span size={20} width="SemiBold">สินค้า</Span>
        <Span size={20} width="SemiBold">สถานะออเดอร์</Span>
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
