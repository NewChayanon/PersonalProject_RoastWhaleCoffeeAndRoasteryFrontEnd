/* eslint-disable react/prop-types */
import Span from "../components/Span";
import { useStock } from "../hooks/useStock";
import ProductContainer from "./ProductContainer";

export default function ProductRecommend({ title }) {
  const { newProduct } = useStock();
  console.log(newProduct);
  return (
    <div>
      {/* wait map */}
      <div>
        <div className="flex justify-center">
          <Span>{title}</Span>
        </div>
        <div className="flex justify-center gap-5">
          {newProduct?.map((el) => (
            <ProductContainer
              key={el.id}
              id={el.id}
              name={el.name}
              description={el.description}
              item={el}
              category={el.category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
