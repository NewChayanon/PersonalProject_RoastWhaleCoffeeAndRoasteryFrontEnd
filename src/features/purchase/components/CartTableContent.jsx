import { useUser } from "../../../hooks/useUser";
import CartItemList from "./CartItemList";
import CartTableColumn from "./CartTableColumn";
import { v4 as uuidv4 } from "uuid";

const ItemList = [
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
  { id: uuidv4() },
];

export default function CartTableContent() {
  const { cartUser } = useUser();
  cartUser ? cartUser : null;
  // console.log(cartUser?.[0].quantity);
  // console.log(cartUser?.[0]["product_and_size"].price);
  // console.log(cartUser?.[0]["product_and_size"].product.name);
  // console.log(cartUser?.[0]["product_and_size"].product.description);
  console.log(cartUser)
  return (
    <div className="w-[80rem]">
      <CartTableColumn />
      {/* draft */}
      {cartUser?.map((el,index) => (
        <CartItemList
          key={el.id}
          cartItemId={el.id}
          productAndSizeId={el["product_and_size"].id}
          name={cartUser?.[index]["product_and_size"].product.name}
          description={cartUser?.[index]["product_and_size"].product.description}
          price={cartUser?.[index]["product_and_size"].price}
          quantity={cartUser?.[index].quantity}

        />
      ))}
    </div>
  );
}
