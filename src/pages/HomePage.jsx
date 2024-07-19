import { useEffect, useState } from "react";
import { StockContextProvider } from "../contexts/StockContext";
import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";
import userApi from "../apis/user";
import { setAccessToken } from "../utils/local-storage";
import stockApi from "../apis/stock";
import Spinner from "../components/Spinner";
import { useUser } from "../hooks/useUser";

export default function HomePage() {
  const { setIsUser } = useUser();
  const [newProduct, setNewProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams(window.location.search);
        const tokenFromUrl = query.get("token");

        const resNewProduct = await stockApi.getNewProduct();
        setNewProduct(resNewProduct.data.fetch);

        if (tokenFromUrl) {
          const base64Token = decodeURIComponent(tokenFromUrl);
          setAccessToken(base64Token);

          const res = await userApi.getUser();
          setIsUser(res.data.user);
          window.history.replaceState({}, document.title, "/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setIsUser]);

  return (
    <div>
      {loading && <Spinner />}
      <StockContextProvider>
        <ImageSlidesShow />
        <ProductRecommend title="สินค้าใหม่" newProduct={newProduct} />
        <ProductRecommend title="สินค้าขายดี (coming soon)" newProduct={newProduct} />
      </StockContextProvider>
    </div>
  );
}
