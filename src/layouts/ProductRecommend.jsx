import Span from "../components/Span";
import ProductContainer from "./ProductContainer";

export default function ProductRecommend({title}) {
  return (
    <div>
        {/* wait map */}
      <div>
        <div className="flex justify-center">
          <Span>{title}</Span>
        </div>
        <div className="flex justify-center gap-5">
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
      </div>
    </div>
  );
}
