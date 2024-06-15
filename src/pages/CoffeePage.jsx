import { useState } from "react";
import Modal from "../components/Modal";
import Span from "../components/Span";
import AddProduct from "../features/stock/components/AddProduct";
import { useUser } from "../hooks/useUser";
import ProductContainer from "../layouts/ProductContainer";
import AddProductForm from "../features/stock/components/AddProductForm";
import { useStock } from "../hooks/useStock";

export default function CoffeePage() {
  const { isUser } = useUser();
  const [open, setOpen] = useState(false);
  const { coffeeProduct } = useStock();
  
  return (
    <div className="flex flex-col items-center">
      <div>
        <Span size={36} width="ExtraBold" color="Support01/500">
          เมล็ดกาแฟคั่วอ่อน
        </Span>
      </div>
      <div>
        <Span size={18} width="Regular" color="Neutral/500">
          ระดับการคั่วอ่อนถือว่าเป็นการคั่วที่เก็บความเป็นธรรมชาติของเมล็ดกาแฟ
          ได้สูงที่สุด แสดงความเป็นลักษณะของกาแฟแต่ละประเภทได้ดี
        </Span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* wait edit */}

      
        {coffeeProduct?.map((el) => (
          <ProductContainer
            key={el.id}
            id={el.id}
            name={el.name}
            description={el.description}
            item={el}
            category="coffee"
            src={el.image[0]}
          />
        ))}

        {isUser?.["is_admin"] ? (
          <>
            <AddProduct onClick={() => setOpen(true)} />
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title="เพิ่ม / อัพเดท สินค้า"
              width={44}
            >
              <AddProductForm category="coffee" onSuccess={() => setOpen(false)} />
            </Modal>
          </>
        ) : null}
      </div>
    </div>
  );
}
