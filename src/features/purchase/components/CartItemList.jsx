import Span from "../../../components/Span";
import Count from "../../../layouts/Count";



export default function CartItemList({name,description,price,quantity}) {
  return (
    <div className="grid grid-cols-4">
      {/* draft */}
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <Span>{name}</Span>
          <br />
          <Span>
            {description}
          </Span>
        </div>
      </div>
      <div>
        <Span>{price}</Span>
      </div>
      <div>
        <Count quantity={quantity} />
      </div>
      <div>
        <Span>{price*quantity}</Span>
      </div>
    </div>
  );
}
