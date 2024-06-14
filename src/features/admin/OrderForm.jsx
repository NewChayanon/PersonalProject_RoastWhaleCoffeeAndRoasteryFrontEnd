import Span from "../../components/Span";
import { useAdmin } from "../../hooks/useAdmin";
import OrderListAll from "./OrderListAll";

export default function OrderForm() {
  const { prepareOrder } = useAdmin();
  return (
    <div >
      <div className="grid grid-cols-6">
        <Span>สินค้า</Span>
        <Span>ชื่อลูกค้า</Span>
        <Span>ราคา</Span>
        <Span>หลักฐานการชำระ</Span>
        <Span>สถานะออเดอร์</Span>
      </div>
      {/* prepareOrder = {id:"",name:"",description:"",firstName:"",lastName:"",address:"",price:"",image:"",status:""} */}
      {prepareOrder?.map((el) => (
        <OrderListAll
          key={el.id}
          id={el.id}
          name={el.name}
          description={el.description}
          firstName={el.firstName}
          lastName={el.lastName}
          address={el.address}
          price={el.price}
          image={el.image}
          status={el.status}
        />
      ))}
    </div>
  );
}
