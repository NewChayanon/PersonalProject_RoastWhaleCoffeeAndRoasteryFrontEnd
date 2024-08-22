import { useState } from "react";
import Span from "../components/Span";
import { useStock } from "../hooks/useStock";
import { useUser } from "../hooks/useUser";
import ProductContainer from "../layouts/ProductContainer";
import Modal from "../components/Modal";
import AddProduct from "../features/stock/components/AddProduct";
import AddProductForm from "../features/stock/components/AddProductForm";
import Spinner from "../components/Spinner";

export default function ToolPage() {
  const { loading, isUser } = useUser();
  const [open, setOpen] = useState(false);
  const { toolProduct } = useStock();
  return (
    <div className="flex flex-col py-12 items-center">
      {!toolProduct && <Spinner />}
      <div>
        <Span size={36} width="ExtraBold" color="Support01/500">
          อุปกรณ์ทำกาแฟ
        </Span>
      </div>
      <div className="grid grid-cols-4 py-6 gap-4">
        {toolProduct?.map((el) => (
          <ProductContainer
            key={el.id}
            id={el.id}
            name={el.name}
            description={el.description}
            item={el}
            category="tool"
            src={el.image[0]}
          />
        ))}

        {isUser?.["is_admin"] ? (
          <>
            <AddProduct onClick={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)} title="เพิ่ม / อัพเดท สินค้า" width={44}>
              <AddProductForm category="tool" onSuccess={() => setOpen(false)} />
            </Modal>
          </>
        ) : null}
      </div>
    </div>
  );
}
