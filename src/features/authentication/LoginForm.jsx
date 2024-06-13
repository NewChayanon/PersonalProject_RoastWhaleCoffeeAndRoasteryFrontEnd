import Span from "../../components/Span";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import EmailAndPasswordForm from "./EmailAndPasswordForm";
import { useState } from "react";
import { loginValidator } from "../../validators/validators";
import { useUser } from "../../hooks/useUser";

const initialInput = {
  email: "",
  password: "",
};
const initialErrorMessage = {
  email: "",
  password: "",
};
export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const { handleLogin } = useUser();
  const navigate = useNavigate();

  const handleChangeInput1 = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitInput = async (e) => {
    try {
      e.preventDefault();
      const error = loginValidator(input);
      if (error) {
        return setErrorMessage(error);
      }
      setErrorMessage(initialErrorMessage);
      const res = await handleLogin(input);
      // navigate(`/users/${res.data.user.id}`)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        className="w-[40rem]  flex flex-col border p-5 rounded-xl gap-7 items-center"
        onSubmit={handleSubmitInput}
      >
        <EmailAndPasswordForm
          title="เข้าสู่ระบบ"
          input={input}
          onChange={handleChangeInput1}
          error={errorMessage}
        />

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
      </form>
    </div>
  );
}
