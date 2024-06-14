import Button from "../components/Button";
import Span from "../components/Span";
import testImage from "../assets/Ethiopia-Citrus-Symphony-A3-600.jpg";
import { useUser } from "../hooks/useUser";

export default function ProductContainer({ id, name, description }) {
  const { isUser } = useUser();
  const { handleClickAddCoffeeToCart } = useUser();

  return (
    <div className="w-[260px] max-h-[425px] p-3">
      <div>
        <div>
          <img src={testImage} alt="test-image" />
        </div>
      </div>
      <div>
        <div>
          <Span size={18} color="Support01/500" width="SemiBold">
            {name}
          </Span>
        </div>
        <div className="h-14">
          <Span size={12} color="Support01/950" width="Regular">
            {description}
          </Span>
        </div>
        <div className=" h-7" onClick={() => handleClickAddCoffeeToCart(id)}>
          <Button>{isUser?.["is_admin"] ? "Edit" : "Add to cart"}</Button>
        </div>
      </div>
    </div>
  );
}
