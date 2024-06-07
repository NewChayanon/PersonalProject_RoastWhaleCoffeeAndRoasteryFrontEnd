import Span from "../../components/Span";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[40rem]  flex flex-col border p-5 rounded-xl gap-7 items-center">
        <div className="py-10">
          <Span size={36} width="ExtraBold">
            เข้าสู่ระบบ
          </Span>
        </div>
        <div className="w-full">
          <Input placeholder="อีเมล" />
        </div>
        <div className="w-full">
          <Input placeholder="รหัสผ่าน" />
        </div>

        <div className="flex justify-center bg-[#F9C06A] h-10 rounded-full w-full">
          <Button size={20} weight="SemiBold">
            เข้าสู่ระบบ
          </Button>
        </div>

        <div className="flex justify-center py-2">
          <Span width="Light" color="Neutral/500">
            ยังไม่เป็นสมาชิก?&nbsp;
          </Span>
          <Link
            to="/registers"
            className="font-light underline underline-offset-auto text-[#707070]"
          >
            สมัครสมาชิก
          </Link>
        </div>
      </div>
    </div>
  );
}
