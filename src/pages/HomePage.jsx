import { useEffect, useState } from "react";
import { StockContextProvider } from "../contexts/StockContext";
import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";
import userApi from "../apis/user";
import { setAccessToken } from "../utils/local-storage";
import stockApi from "../apis/stock";
import Spinner from "../components/Spinner";

export default function HomePage() {
  const [newProduct, setNewProduct] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const query = new URLSearchParams(window.location.search);
      const tokenFromUrl = query.get("token");

      const resNewProduct = await stockApi.getNewProduct();
      setNewProduct(resNewProduct.data.fetch);

      if (tokenFromUrl) {
        const base64Token = decodeURIComponent(tokenFromUrl);
        setAccessToken(base64Token);
        await userApi.getUser();
        window.history.replaceState({}, document.title, "/");
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <StockContextProvider>
        {!newProduct && <Spinner />}
        <ImageSlidesShow />
        <ProductRecommend title="สินค้าใหม่" newProduct={newProduct} />
        <ProductRecommend title="สินค้าขายดี (coming soon)" newProduct={newProduct} />
      </StockContextProvider>
    </div>
  );
}
