import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Span from "../../components/Span";
import EmailAndPasswordForm from "./EmailAndPasswordForm";
import Input from "../../components/Input";
import { useState } from "react";
import authApi from "../../apis/auth";
import { registerValidator } from "../../validators/validators";

const initialInput = {
  email: "",
  password: "",
  confirmPassword: "",
};
const initialErrorMessage = {
  email: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitInput = async (e) => {
    try {
      e.preventDefault();
      const error = registerValidator(input);

      if (error) {
        return setErrorMessage(error);
      }
      setErrorMessage(initialErrorMessage);
      await authApi.register(input);
      navigate("/logins");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full min-h-full flex justify-center items-center" onSubmit={handleSubmitInput}>
      <form className="w-[40rem]  flex flex-col border p-5 rounded-xl gap-7 items-center">
        <EmailAndPasswordForm title="สมัครสมาชิก" input={input} onChange={handleChangeInput} error={errorMessage} />
        <div className="w-full px-1">
          <Span width="Light" color="Neutra/500">
            * รหัสผ่านจะต้องมีตัวอักษรอย่างน้อย 8 ตัวอักษร
          </Span>
          <br />
          <Span width="Light" color="Neutra/500">
            * รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และตัวเลข
          </Span>
        </div>
        <div className="w-full">
          <Input
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
            error={errorMessage.confirmPassword}
          />
        </div>
        <div className="flex justify-center bg-[#F9C06A] h-10 rounded-full w-full">
          <Button size={20} weight="SemiBold">
            สมัครสมาชิก
          </Button>
        </div>

        <div className="flex justify-center py-2">
          <Span width="Light" color="Neutral/500">
            มีบัญชีอยู่แล้ว?&nbsp;
          </Span>
          <Link to="/logins" className="font-light underline underline-offset-auto text-[#707070]">
            เข้าสู่ระบบ
          </Link>
        </div>
      </form>
    </div>
  );
}
