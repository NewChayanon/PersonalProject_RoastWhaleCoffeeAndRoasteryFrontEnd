import ButtonLoginAndRegister from "./ButtonLoginAndRegister";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="bg-[#190F01] h-20 flex fixed w-screen ">
      <div className="flex items-center justify-around flex-grow ">
        <Logo />
        <Menu />
        <ButtonLoginAndRegister />
      </div>
    </header>
  );
}
