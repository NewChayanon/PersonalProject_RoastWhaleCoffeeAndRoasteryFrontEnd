import { useUser } from "../../../hooks/useUser";
import CartItemList from "./CartItemList";
import CartTableColumn from "./CartTableColumn";

export default function CartTableContent() {
  const { cartUser } = useUser();
 
  return (
    <div className="w-[60rem]">
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
          src={el["product_and_size"].product.image[0].image}
          
        />
      ))}
    </div>
  );
}
