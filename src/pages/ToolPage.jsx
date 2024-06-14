import Span from "../components/Span";
import { useStock } from "../hooks/useStock";
import ProductContainer from "../layouts/ProductContainer";



export default function ToolPage() {
  const { toolProduct } = useStock();
  return (
    <div className="flex flex-col items-center">
      <div>
        <Span size={36} width="ExtraBold" color="Support01/500">
          อุปกรณ์ทำกาแฟ
        </Span>
      </div>
      <div className="grid grid-cols-4">
        {/* wait edit */}
        {toolProduct?.map((el) => (
          <ProductContainer
            key={el.id}
            id={el.id}
            name={el.name}
            description={el.description}
          />
        ))}
      </div>
    </div>
  );
}
