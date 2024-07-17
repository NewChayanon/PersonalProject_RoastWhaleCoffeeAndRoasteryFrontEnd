import { useEffect } from "react";
import { StockContextProvider } from "../contexts/StockContext";
import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";
import userApi from "../apis/user";
import { setAccessToken } from "../utils/local-storage";

export default function HomePage() {
  useEffect(() => {
    const fetchUser = async () => {
      const query = new URLSearchParams(window.location.search);
      const tokenFromUrl = query.get("token");
  
      if (tokenFromUrl) {
        setAccessToken(tokenFromUrl);
        await userApi.getUser();
        window.history.replaceState({}, document.title, "/");
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <StockContextProvider>
        <ImageSlidesShow />
        <ProductRecommend title="สินค้าใหม่" />
        <ProductRecommend title="สินค้าขายดี (coming soon)" />
      </StockContextProvider>
    </div>
  );
}
