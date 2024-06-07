import Span from "../../components/Span";
import Input from "../../components/Input";



export default function EmailAndPasswordForm({input,onChange}) {
 
  return (
    <>
      <div className="py-10">
        <Span size={36} width="ExtraBold">
          สมัครสมาชิก
        </Span>
      </div>
      <div className="w-full">
        <Input placeholder="อีเมล" type="email" value={input.email}  name="email" onChange={onChange} />
      </div>
      <div className="w-full">
        <Input placeholder="รหัสผ่าน" type="password" value={input.password} name="password"  onChange={onChange}/>
      </div>
    </>
  );
}
