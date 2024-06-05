import Logo from "./assets/coffee-beans-roast-brew-svgrepo-com.svg";
import cart from "./assets/cart-large-minimalistic-svgrepo-com.svg";
export function LogoRoastWhale({ width }) {
  return <img style={{ width: `${width}px` }} src={Logo} alt="logo" />;
}

export function IconCart({width}) {
  return <img style={{ width: `${width}px` }} src={cart} alt="icon-cart" />
}
