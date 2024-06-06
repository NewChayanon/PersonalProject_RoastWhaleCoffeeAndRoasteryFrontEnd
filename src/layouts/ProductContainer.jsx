import { Link } from "react-router-dom";
import Button from "../components/Button";
import Span from "../components/Span";
import testImage from '../assets/Ethiopia-Citrus-Symphony-A3-600.jpg'

export default function ProductContainer() {
  return (
    <div className="max-w-[260px] max-h-[425px] p-3">
      <div>
        {/* show-image */}
        <div>
          <img src={testImage} alt="test-image" />
        </div>
      </div>
      <div>
        {/* product-description */}
        <div>
          <Span size={18} color="Support01/500" width="SemiBold">
            Pa Miang
          </Span>
        </div>
        <div>
          <Span size={12} color="Support01/950" width="Regular">
            Dark Chocolate, Prunes, Brown Sugar, Black Tea, Brown Spice, Honey
          </Span>
        </div>
        <Link className=" h-10">
          <Button>Add to cart</Button>
        </Link>
      </div>
    </div>
  );
}
