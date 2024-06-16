/* eslint-disable react/prop-types */
import Span from "../../../components/Span";
import Count from "../../../layouts/Count";
import testImage from "../../../assets/Ethiopia-Citrus-Symphony-A3-600.jpg";

export default function CartItemList({
  cartItemId,
  productAndSizeId,
  name,
  description,
  price,
  quantity,
  src,
}) {
  return (
    <div className="grid grid-cols-4 border-t-2">
      <div className=" w-full p-2 flex gap-2">
        <div className="h-20 w-24 flex justify-center items-center ">
          <img src={src ? `http://localhost:8888/${src}` : testImage} alt="cart-image" className="rounded-md" />
        </div>
        <div className="w-full flex  flex-col justify-center">
          <Span>{name}</Span>
          <Span>{description}</Span>
        </div>
      </div>
      <div>
        <Span>{`฿ ${price.toFixed(2)}`}</Span>
      </div>
      <div>
        <Count
          cartItemId={cartItemId}
          productAndSizeId={productAndSizeId}
          quantity={quantity}
        />
      </div>
      <div>
        <Span>{`฿ ${(price * quantity).toFixed(2)}`}</Span>
      </div>
    </div>
  );
}
