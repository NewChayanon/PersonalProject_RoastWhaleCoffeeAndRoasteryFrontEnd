import Span from "../components/Span";
import ProductContainer from "../layouts/ProductContainer";

export default function CoffeePage() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Span size={36} width="ExtraBold" color="Support01/500">เมล็ดกาแฟคั่วอ่อน</Span>
      </div>
      <div>
        <Span size={18} width="Regular" color="Neutral/500" >
          ระดับการคั่วอ่อนถือว่าเป็นการคั่วที่เก็บความเป็นธรรมชาติของเมล็ดกาแฟ
          ได้สูงที่สุด แสดงความเป็นลักษณะของกาแฟแต่ละประเภทได้ดี
        </Span>
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
  );
}
