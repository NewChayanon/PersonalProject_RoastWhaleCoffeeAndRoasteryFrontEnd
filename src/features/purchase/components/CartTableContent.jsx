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
  // const initialValue = {quantity:0,price:0}
  // const sumWithInitial = cartUser?.useUser((acc,crr)=>{
  //   acc[crr["product_and_size"].price] = 2
  // },initialValue)
  // console.log(sumWithInitial)
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
