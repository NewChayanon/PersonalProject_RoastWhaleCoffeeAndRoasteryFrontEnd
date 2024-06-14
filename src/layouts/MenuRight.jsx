import { Link } from "react-router-dom";
import { IconCart, IconUser } from "../icons/icon";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "../hooks/useUser";
import Dropdown from "./Dropdown";
import ButtonLoginAndRegister from "./ButtonLoginAndRegister";
import { BACKGROUND_COLOR } from "../constants/InfoFigma";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginAndRegisterList = [
  { id: uuidv4(), title: "เข้าสู่ระบบ", size: 14, to: "/logins" },
  { id: uuidv4(), title: "ลงทะเบียน", size: 14, to: "/registers" },
];

export default function MenuRight() {
  const [open, setOpen] = useState(false);
  
  const { isUser, handleLogout } = useUser();

  const navigate = useNavigate();

  const dropdownUser = [
    { id: uuidv4(), title: isUser?.["email"], width: "SemiBold" },
    {
      id: uuidv4(),
      title: isUser?.["is_admin"] ? "ออเดอร์" : "รายการคำสั่งซื้อ",
      to: isUser?.["is_admin"] ? "/order" : "/shopping-list",
    },
    {
      id: uuidv4(),
      title: "ล็อคเอาท์",
      onClick: function handleClickLogout() {
        handleLogout();
        navigate("/logins");
      },
    },
  ];

  return (
    <div className="flex">
      <Link to="/carts" className="flex mx-5">
        {!isUser?.["is_admin"] && <IconCart width={30} />}
      </Link>
      {isUser ? (
        <div
          role="button"
          className="relative rounded-full"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IconUser width={40} />
          {open && (
            <div
              className={`absolute ${BACKGROUND_COLOR["Support02/500"]} right-0 translate-y-1.5 w-[11rem] p-3 rounded-lg`}
            >
              <Dropdown item={dropdownUser} />
            </div>
          )}
        </div>
      ) : (
        <ButtonLoginAndRegister item={LoginAndRegisterList} />
      )}
    </div>
  );
}
