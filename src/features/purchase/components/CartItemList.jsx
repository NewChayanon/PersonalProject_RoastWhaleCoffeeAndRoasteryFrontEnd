/* eslint-disable react/prop-types */
import Span from "../../../components/Span";
import Count from "../../../layouts/Count";
import testImage from "../../../assets/Ethiopia-Citrus-Symphony-A3-600.jpg";
import formatCurrency from "../../../utils/currency-format";

export default function CartItemList({ cartItemId, productAndSizeId, name, description, price, quantity, src }) {
  return (
    <div className="grid grid-cols-4 border-t-[1px]">
      <div className=" w-full p-2 flex gap-2">
        <div className="h-full w-24 flex justify-center items-center ">
          <img src={src ? `http://localhost:8888/${src}` : testImage} alt="cart-image" className="rounded-md" />
        </div>
        <div className="w-full flex flex-col justify-center items-start">
          <Span size={14} width="SemiBold">
            {name}
          </Span>
          <Span size={11} color="Neutral/500">
            {description}
          </Span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Span color="Neutral/500">{`฿ ${formatCurrency(price.toFixed(2))}`}</Span>
      </div>
      <div className="flex justify-center items-center">
        <Count cartItemId={cartItemId} productAndSizeId={productAndSizeId} quantity={quantity} />
      </div>
      <div className="flex justify-center items-center">
        <Span color="Neutral/500">{`฿ ${formatCurrency((price * quantity).toFixed(2))}`}</Span>
      </div>
    </div>
  );
}
