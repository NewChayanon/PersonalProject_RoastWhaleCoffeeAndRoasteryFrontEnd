/* eslint-disable react/prop-types */
import Button from "../components/Button";
import Span from "../components/Span";
import testImage from "../assets/Ethiopia-Citrus-Symphony-A3-600.jpg";
import { useUser } from "../hooks/useUser";
import { useState } from "react";
import Modal from "../components/Modal";
import EditProductCoffee from "../features/admin/EditProductCoffee";
import { BACKGROUND_COLOR } from "../constants/InfoFigma";
import { Link, useNavigate } from "react-router-dom";
import formatCurrency from "../utils/currency-format";

export default function ProductContainer({ id, name, description, item, category, src }) {
  const [open, setOpen] = useState(false);
  const { handleClickAddCoffeeToCart, isUser } = useUser();

  const navigate = useNavigate();

  const handleCheckUser = () => {
    if (!isUser) {
      navigate("/logins");
    }
    handleClickAddCoffeeToCart(id);
  };

  // lowest price
  const lowestPrice = item?.["product_and_size"].reduce(
    (acc, crr) => {
      if (crr.price < acc.lowestPrice && crr.price > 0) {
        acc.lowestPrice = crr.price;
      }
      return acc;
    },
    { lowestPrice: Infinity }
  );

  return (
    <div className="w-[260px] max-h-[425px]  flex flex-col justify-between border rounded-lg border-[#FDEACE] shadow-md hover:scale-[105%] active:scale-100 transition-all">
      <div>
        <Link className="relative" to={`/product/${id}`}>
          <img
            className="max-h-[16rem] w-96 rounded-t-lg "
            src={src ? `http://localhost:8888/${src.image}` : testImage}
            alt="test-image"
          />

          <div className={`absolute top-2 right-4 ${BACKGROUND_COLOR["Support02/500"]} py-1 px-2 rounded-md`}>
            <Span size={14} width="SemiBold">{`฿ ${formatCurrency(lowestPrice.lowestPrice)}`}</Span>
          </div>
        </Link>
      </div>
      <div className="px-4 pb-4 pt-2">
        <div className="truncate">
          <Span size={18} color="Support01/500" width="SemiBold">
            {name}
          </Span>
        </div>
        <div className="h-14 text-clip">
          <Span size={12} color="Support01/950" width="Regular">
            {description}
          </Span>
        </div>
        <div className=" h-7">
          <Button isButtonInCardTool={true}>
            {isUser?.["is_admin"] ? (
              <div onClick={() => setOpen(true)} className="h-full flex justify-center items-center">
                <Span size={12} width="SemiBold" color="Support01/950">
                  Edit
                </Span>
                <Modal open={open} onClose={() => setOpen(false)} title="เพิ่ม / อัพเดท สินค้า" width={44}>
                  <EditProductCoffee item={item} category={category} onSuccess={() => setOpen(false)} />
                </Modal>
              </div>
            ) : (
              <div className="h-full flex justify-center items-center" onClick={handleCheckUser}>
                <Span size={12} width="SemiBold" color="Support01/950">
                  Add to cart
                </Span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
