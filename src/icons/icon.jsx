import logo from "./assets/coffee-beans-roast-brew-svgrepo-com.svg";
import cart from "./assets/cart-large-minimalistic-svgrepo-com.svg";
import facebook from "./assets/facebook-rounded-svgrepo-com.svg";
import instagram from "./assets/instagram-rounded-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import youtube from "./assets/youtube-rounded-svgrepo-com.svg";

export function LogoRoastWhale({ width }) {
  return  <img  style={{ width: `${width}px` }} src={logo} alt="logo" />;
}

export function IconCart({ width }) {
  return <img style={{ width: `${width}px` }} src={cart} alt="icon-cart" />;
}

export function Iconfacebook({ width }) {
  return (
    <img style={{ width: `${width}px` }} src={facebook} alt="icon-facebook" />
  );
}
export function IconInstagram({ width }) {
  return (
    <img style={{ width: `${width}px` }} src={instagram} alt="icon-instagram" />
  );
}
export function IconTwitter({ width }) {
  return (
    <img style={{ width: `${width}px` }} src={twitter} alt="icon-twitter" />
  );
}
export function IconYoutube({ width }) {
  return (
    <img style={{ width: `${width}px` }} src={youtube} alt="icon-youtube" />
  );
}
