/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";
import userApi from "../apis/user";
import { setAccessToken } from "../utils/local-storage";
import Spinner from "../components/Spinner";
import { useUser } from "../hooks/useUser";
import Span from "../components/Span";
import { useStock } from "../hooks/useStock";

export default function HomePage() {
  const { loading, setIsUser } = useUser();
  const { newProduct } = useStock();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = new URLSearchParams(window.location.search);
        const tokenFromUrl = query.get("token");

        if (tokenFromUrl) {
          const base64Token = decodeURIComponent(tokenFromUrl);
          setAccessToken(base64Token);
          const [resUser] = await Promise.all([userApi.getUser()]);
          setIsUser(resUser.data.user);
          window.history.replaceState({}, document.title, "/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
        {loading && <Spinner />}
        {!newProduct && <Spinner />}
        <ImageSlidesShow />
        <div className="text-center">
          <Span width="ExtraBold" size={40}>
            ** เว็บไซต์นี้ทำเพื่อการศึกษาเท่านั้น ไม่สามารถซื้อขายได้ **
          </Span>
        </div>
        <ProductRecommend title="สินค้าใหม่" newProduct={newProduct} />
        <ProductRecommend title="สินค้าขายดี (coming soon)" newProduct={newProduct} />
    </div>
  );
}
