/* eslint-disable react/prop-types */
import Span from "../components/Span";
import { useStock } from "../hooks/useStock";
import ProductContainer from "./ProductContainer";

export default function ProductRecommend({ title }) {
  const { newProduct } = useStock();
  return (
    <div className="py-5">
      <div>
        <div className="flex justify-center py-8">
          <Span size={36} width="ExtraBold">{title}</Span>
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
              src={el.image[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
