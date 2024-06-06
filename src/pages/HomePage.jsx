import ImageSlidesShow from "../layouts/ImageSlidesShow";
import ProductRecommend from "../layouts/ProductRecommend";

export default function HomePage() {
  return (
    <div>
      <ImageSlidesShow />
      <ProductRecommend title="สินค้าใหม่" />
      <ProductRecommend title="สินค้าขายดี" />
    </div>
  );
}
