/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { StockContextProvider } from "../contexts/StockContext";
import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";
import userApi from "../apis/user";
import { setAccessToken } from "../utils/local-storage";
import stockApi from "../apis/stock";
import Spinner from "../components/Spinner";
import { useUser } from "../hooks/useUser";
import Span from "../components/Span";

export default function HomePage() {
  const { loading,setIsUser } = useUser();
  const [newProduct, setNewProduct] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = new URLSearchParams(window.location.search);
        const tokenFromUrl = query.get("token");

        if (tokenFromUrl) {
          const base64Token = decodeURIComponent(tokenFromUrl);
          setAccessToken(base64Token);
          const [resUser, resNewProduct] = await Promise.all([userApi.getUser(), stockApi.getNewProduct()]);
          setIsUser(resUser.data.user);
          setNewProduct(resNewProduct.data.fetch);
          window.history.replaceState({}, document.title, "/");
        } else {
          const resNewProduct = await stockApi.getNewProduct();
          setNewProduct(resNewProduct.data.fetch);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <StockContextProvider>
        {!newProduct && <Spinner />}
        {loading && <Spinner />}
        <ImageSlidesShow />
        <div className="text-center">
          <Span width="ExtraBold" size={40}>
            ** เว็บไซต์นี้ทำเพื่อการศึกษาเท่านั้น ไม่สามารถซื้อขายได้ **
          </Span>
        </div>
        <ProductRecommend title="สินค้าใหม่" newProduct={newProduct} />
        <ProductRecommend title="สินค้าขายดี (coming soon)" newProduct={newProduct} />
      </StockContextProvider>
    </div>
  );
}
