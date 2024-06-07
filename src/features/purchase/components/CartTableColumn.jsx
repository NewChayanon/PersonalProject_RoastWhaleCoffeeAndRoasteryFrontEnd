import Span from "../../../components/Span";
import { v4 as uuidv4 } from "uuid";
const column = [
  { id: uuidv4(), title: "สินค้า" },
  { id: uuidv4(), title: "ราคา/ชิ้น" },
  { id: uuidv4(), title: "จำนวน" },
  { id: uuidv4(), title: "ราคารวม" },
];

export default function CartTableColumn() {
  return (
    <div className="grid grid-cols-4">
      {column.map((el) => (
        <Span key={el.id} size={20} width="SemiBold">
          {el.title}
        </Span>
      ))}
    </div>
  );
}
