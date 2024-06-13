import { useUser } from "../../../hooks/useUser";
import CartItemList from "./CartItemList";
import CartTableColumn from "./CartTableColumn";




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
      
      {cartUser?.map((el) => (
        <CartItemList
          key={el.id}
          cartItemId={el.id}
          productAndSizeId={el["product_and_size"].id}
          name={el["product_and_size"].product.name}
          description={el["product_and_size"].product.description}
          price={el["product_and_size"].price}
          quantity={el.quantity}

        />
      ))}
    </div>
  );
}
