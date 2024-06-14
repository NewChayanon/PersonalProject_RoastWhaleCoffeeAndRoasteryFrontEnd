import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Span from "../../../components/Span";
import CartTable from "./CartTable";
import Bill from "./Bill";

export default function CartContainer() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Span size={36} width="ExtraBold">
          ตะกร้าสินค้า
        </Span>
        <div className="flex">
          <div className="flex flex-col item-end pr-6 gap-3">
            <CartTable />
            <div className="flex justify-end gap-3">
              <Link className=" w-32 h-8" to={"/product-coffees"}>
                <Button>ซื้อสินค้าต่อ</Button>
              </Link>
              <Link className="w-32 h-8" to={"/check-out"}>
                <Button>สั่งซื้อสินค้า</Button>
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
