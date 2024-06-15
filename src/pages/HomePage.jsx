import { StockContextProvider } from "../contexts/StockContext";
import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";

export default function HomePage() {
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
