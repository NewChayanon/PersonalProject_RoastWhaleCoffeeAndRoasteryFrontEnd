import Span from "../../../components/Span";
import Count from "../../../layouts/Count";



export default function CartItemList() {
  return (
    <div className="grid grid-cols-4">
      {/* draft */}
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <Span>Ethiopia Citrus Symphony</Span>
          <Span>
            Lemon, Orange, White Flower, Bergamot, Lychee, Oolong Tea Finish
          </Span>
        </div>
      </div>
      <div>
        <Span>{`฿ 260`}</Span>
      </div>
      <div>
        <Count />
      </div>
      <div>
        <Span>{`฿ 260`}</Span>
      </div>
    </div>
  );
}
