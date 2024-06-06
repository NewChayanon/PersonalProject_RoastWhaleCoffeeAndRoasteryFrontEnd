import { Link } from "react-router-dom";
import Button from "../components/Button";
import { IconCart } from "../icons/icon";
import { v4 as uuidv4 } from "uuid";

const LoginAndRegisterList = [
  { id: uuidv4(), title: "เข้าสู่ระบบ", size: 14,to:"/logins" },
  { id: uuidv4(), title: "ลงทะเบียน", size: 14,to:"registers" },
];

export default function ButtonLoginAndRegister() {
  return (
    <div className="flex">
      <Link to="/carts" className="flex mx-5">
        <IconCart width={30} />
      </Link>
      {LoginAndRegisterList.map((el) => (
        <Link key={el.id} to={el.to} className="py-2 px-4 bg-[#F9C06A] mx-2 rounded-lg w-24 h-10 flex justify-center items-center">
          <Button size={el.size}>{el.title}</Button>
        </Link>
      ))}
    </div>
  );
}
