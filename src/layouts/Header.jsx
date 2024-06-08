import Logo from "./Logo";
import MenuCenter from "./MenuCenter";
import MenuRight from "./MenuRight";


export default function Header() {
  return (
    <header className="bg-[#190F01] h-20 flex fixed w-screen ">
      <div className="flex items-center justify-around flex-grow ">
        <Logo />
        <MenuCenter />
        <MenuRight />
      </div>
    </header>
  );
}
