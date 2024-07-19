import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Span from "../../../components/Span";
import CartTable from "./CartTable";
import Bill from "./Bill";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../../components/Spinner";

export default function CartContainer() {
  const { loading, cartUser } = useUser();
  return (
    <div className="py-12">
      {loading && <Spinner />}
      <div className="flex flex-col items-center">
        <Span size={36} width="ExtraBold">
          ตะกร้าสินค้า
        </Span>
        <div className="flex">
          <div className="flex flex-col item-end mt-6 pr-6 gap-3">
            <CartTable />
            <div className="flex justify-end gap-3 mt-3">
              <Link className=" w-32 h-8" to={"/product-coffees"}>
                <Button size={16} weight="Regular">
                  ซื้อสินค้าต่อ
                </Button>
              </Link>
              <Link className="w-32 h-8" to={cartUser.length != 0 ? "/check-out" : null}>
                <Button size={16} weight="Regular">
                  สั่งซื้อสินค้า
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Bill />
          </div>
        </div>
      </div>
    </div>
  );
}
