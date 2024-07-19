import { useEffect, useState } from "react";
import Span from "../../../components/Span";
import StatusOrderList from "./StatusOrderList";
import userApi from "../../../apis/user";
import Spinner from "../../../components/Spinner";

export default function StatusOrderTable() {
  const [shoppingList, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(false)

  const newShoppingList = shoppingList?.map((el) => {
    const obj = {};
    obj.id = el.id;
    obj.name = el.cart.cart_items[0].product_and_size.product.name;
    obj.description = el.cart.cart_items[0].product_and_size.product.description;
    obj.status = el.status;
    return obj;
  });

  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        setLoading(true)
        const resShoppingList = await userApi.getShoppingList();
        setShoppingList(resShoppingList.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    fetchShoppingList();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-3">
        {loading && <Spinner/>}
        <Span size={20} width="SemiBold">
          สินค้า
        </Span>
        <Span size={20} width="SemiBold">
          สถานะออเดอร์
        </Span>
      </div>
      {newShoppingList?.map((el) => (
        <StatusOrderList key={el.id} name={el.name} description={el.description} status={el.status} />
      ))}
    </div>
  );
}
