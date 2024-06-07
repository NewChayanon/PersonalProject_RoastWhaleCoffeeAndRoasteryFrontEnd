import CartItemList from "./CartItemList";
import CartTableColumn from "./CartTableColumn";
import {v4 as uuidv4} from 'uuid'

const ItemList = [
  {id:uuidv4()},
  {id:uuidv4()},
  {id:uuidv4()},
  {id:uuidv4()},
  {id:uuidv4()},
  {id:uuidv4()},
]

export default function CartTableContent() {
  return (
    <div className="w-[80rem]" >
      <CartTableColumn />
    {/* draft */}
    {ItemList.map(el=>(
      <CartItemList key={el.id} />
    ))}
    </div>
  )
}
