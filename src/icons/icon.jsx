/* eslint-disable react/prop-types */
import logo from "./assets/coffee-beans-roast-brew-svgrepo-com.svg";
import cart from "./assets/cart-large-minimalistic-svgrepo-com.svg";
import facebook from "./assets/facebook-rounded-svgrepo-com.svg";
import instagram from "./assets/instagram-rounded-svgrepo-com.svg";
import twitter from "./assets/twitter-rounded-svgrepo-com.svg";
import youtube from "./assets/youtube-rounded-svgrepo-com.svg";
import user from "./assets/user-circle-svgrepo-com.svg";
import payment from "./assets/image-square-svgrepo-com.svg";
import google from "./assets/google-icon-logo-svgrepo-com.svg";

export function LogoRoastWhale({ width }) {
  return <img style={{ width: `${width}px` }} src={logo} alt="logo" />;
}

export function IconCart({ width }) {
  return <img style={{ width: `${width}px` }} src={cart} alt="icon-cart" />;
}

export function IconFacebook({ width }) {
  return <img style={{ width: `${width}px` }} src={facebook} alt="icon-facebook" />;
}
export function IconInstagram({ width }) {
  return <img style={{ width: `${width}px` }} src={instagram} alt="icon-instagram" />;
}
export function IconTwitter({ width }) {
  return <img style={{ width: `${width}px` }} src={twitter} alt="icon-twitter" />;
}
export function IconYoutube({ width }) {
  return <img style={{ width: `${width}px` }} src={youtube} alt="icon-youtube" />;
}

export const IconUser = ({ width }) => <img style={{ width: `${width}px` }} src={user} alt="icon-user" className="rounded-full" />;

export const IconPayment = ({ width, onClick }) => <img role="button" onClick={onClick} style={{ width: `${width}px` }} src={payment} alt="icon-payment" />;

export const IconGoogle = ({ width }) => <img style={{ width: `${width}px` }} src={google} alt="icon-google" />;
