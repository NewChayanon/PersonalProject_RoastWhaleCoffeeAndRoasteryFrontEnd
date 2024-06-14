import Span from "../../components/Span";



export default function OrderForm() {
  return (
    <div>
        <div className="flex justify-between">
        <Span>สินค้า</Span>
        <Span>ชื่อลูกค้า</Span>
        <Span>ราคา</Span>
        <Span>หลักฐานการชำระ</Span>
        <Span>สถานะออเดอร์</Span>
      </div>
      
      {/* {newShoppingList?.map((el) => (
        <StatusOrderList key={el.id}  name={el.name} description={el.description} status={el.status} />
      ))} */}
    </div>
  )
}
