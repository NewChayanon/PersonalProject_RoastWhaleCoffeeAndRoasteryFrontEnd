import Span from "../../components/Span";
import { useAdmin } from "../../hooks/useAdmin";
import OrderListAll from "./OrderListAll";

export default function OrderForm() {
  const { prepareOrder } = useAdmin();
  return (
    <div className="flex flex-col py-12 items-center">
      <div>
        <Span size={36} width="ExtraBold">
          คำสั่งซื้อที่รอตรวจสอบ
        </Span>
      </div>
      <div className="border my-6 rounded-3xl px-3 border-[#707070]">
        <div className="px-5 py-3">
          <Span size={24} width="SemiBold">
            รายการคำสั่งซื้อ
          </Span>
        </div>
        <div className="grid grid-cols-6 w-[80rem]  ">
          <div className="flex justify-center p-2">
            <Span size={20} width="SemiBold">สินค้า</Span>
          </div>
          <div className="flex justify-center p-2">
            <Span size={20} width="SemiBold">ชื่อลูกค้า</Span>
          </div>
          <div className="flex justify-center p-2">
            <Span size={20} width="SemiBold">ราคา</Span>
          </div>
          <div className="flex justify-center p-2">
            <Span size={20} width="SemiBold">หลักฐานการชำระ</Span>
          </div>
          <div className="flex justify-center p-2">
            <Span size={20} width="SemiBold">สถานะออเดอร์</Span>
          </div>
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
    </div>
  );
}
