import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem";
const menuList = [
  { id: uuidv4(), title: "หน้าแรก",to:"/" },
  { id: uuidv4(), title: "เมล็ดกาแฟ" ,to:"/product-coffees" },
  { id: uuidv4(), title: "อุปกรณ์ทำกาแฟ", to:"/product-tools" },
];

export default function Menu() {
  return (
    <nav className="flex justify-center gap-16">
      {menuList.map((el) => (
        <MenuItem key={el.id} title={el.title} to={el.to} />
      ))}
    </nav>
  );
}
