import Span from "../components/Span";
import ProductContainer from "../layouts/ProductContainer";


export default function ToolPage() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Span size={36} width="ExtraBold" color="Support01/500">อุปกรณ์ทำกาแฟ</Span>
      </div>
      <div className="grid grid-cols-4">
        {/* wait edit */}
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
    </div>
  )
}
