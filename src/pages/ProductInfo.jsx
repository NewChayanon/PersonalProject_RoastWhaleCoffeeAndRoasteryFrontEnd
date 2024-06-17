import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import stockApi from "../apis/stock";
import Span from "../components/Span";
import ChooseBox from "../components/ChooseBox";
import Button from "../components/Button";
import CountNonApi from "../components/CountNonApi";
import { useUser } from "../hooks/useUser";

export default function ProductInfo() {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeId, setSizeId] = useState(null);
  const { handleAddProductBySize, isUser } = useUser();
  const navigate = useNavigate();

  const sumStock = productInfo?.product_and_size.reduce((acc, crr) => {
    if (crr.price !== 0) {
      acc = acc + crr.stock;
    }
    return acc;
  }, 0);

  const haveSize = productInfo?.product_and_size.reduce((acc, crr) => {
    if (crr.price !== 0) {
      acc.push(crr);
    }
    return acc;
  }, []);

  const handleIncrement = () => setQuantity((quantity) => quantity + 1);

  const handleDecrement = () =>
    quantity > 1 ? setQuantity((quantity) => quantity - 1) : 1;

  const handleClickChooseSize = (id) => setSizeId(id);

  const handleSubmit = async () => {
    if (!isUser) {
      return navigate("/logins");
    }
    const body = { quantity: quantity };
    await handleAddProductBySize(sizeId, body);
    setQuantity(1);
  };

  useEffect(() => {
    const fetchInfoProduct = async () => {
      const res = await stockApi.getProductInfo(productId);
      setProductInfo(res.data);
    };
    fetchInfoProduct();
  }, [productId]);
  return (
    <div className="flex justify-center gap-10 p-12">
      <div>
        <img
          className="max-w-[35rem] rounded-lg"
          src={`http://localhost:8888/${productInfo?.image[0].image}`}
          alt="product-image"
        />
      </div>
      <div className="max-w-[35rem]">
        <div className="flex flex-col gap-2">
          <Span size={24} width="SemiBold">
            {productInfo?.name}
          </Span>
          <Span size={14} width="Light" color="Neutral/500">
            {productInfo?.description}
          </Span>
          <Span size={14} width="Light" color="Neutral/500">
            {productInfo?.details}
          </Span>
          <Span
            width="SemiBold"
            color="Support01/950"
          >{`มีสินค้าอยู่ ${sumStock}`}</Span>
          <Span
            width="SemiBold"
            color="Support01/950"
          >{`ระยะเวลาการสั่ง : พร้อมจัดส่งภายใน 2 วันหลังสั่ง`}</Span>
        </div>
        {!isUser?.["is_admin"] ? (
          <div>
            <div className="flex gap-2 justify-between">
              {haveSize?.map((el) => (
                <ChooseBox
                  key={el.id}
                  id={el.id}
                  price={el.price}
                  size={el.size.size}
                  onClick={handleClickChooseSize}
                />
              ))}
            </div>
            <div className="flex gap-3 justify-center items-center">
              <div>
                <CountNonApi
                  decrement={handleDecrement}
                  quantity={quantity}
                  increment={handleIncrement}
                />
              </div>
              <div className="w-full h-8">
                <Button onClick={handleSubmit}>หยิบใส่ตะกร้า</Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
