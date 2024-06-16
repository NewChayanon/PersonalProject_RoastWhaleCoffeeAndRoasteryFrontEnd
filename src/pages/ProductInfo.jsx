import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  console.log(productInfo);

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
    <div className="flex justify-center gap-5">
      <div>
        <img
          src={`http://localhost:8888/${productInfo?.image[0].image}`}
          alt="product-image"
        />
      </div>
      <div>
        <div className="flex flex-col">
          <Span>{productInfo?.name}</Span>
          <Span>{productInfo?.description}</Span>
          <Span>{productInfo?.details}</Span>
          <Span>{`มีสินค้าอยู่ ${sumStock}`}</Span>
          <Span>{`ระยะเวลาการสั่ง : พร้อมจัดส่งภายใน 2 วันหลังสั่ง`}</Span>
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
            <div className="flex justify-center items-center">
              <CountNonApi
                decrement={handleDecrement}
                quantity={quantity}
                increment={handleIncrement}
              />
              <Button onClick={handleSubmit}>หยิบใส่ตะกร้า</Button>
            </div>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
}
