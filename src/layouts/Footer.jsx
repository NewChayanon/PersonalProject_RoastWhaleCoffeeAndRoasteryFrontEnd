import { Link } from "react-router-dom";
import Span from "../components/Span";
import { IconTwitter, IconFacebook, IconInstagram, IconYoutube } from "../icons/icon";
import Logo from "./Logo";
import { v4 as uuidv4 } from "uuid";

const IconFooter = [
  { id: uuidv4(), icon: IconFacebook, to: "https://www.facebook.com/" },
  { id: uuidv4(), icon: IconTwitter, to: "https://twitter.com/?lang=en" },
  { id: uuidv4(), icon: IconInstagram, to: "https://www.instagram.com/" },
  { id: uuidv4(), icon: IconYoutube, to: "https://www.youtube.com/" },
];

export default function Footer() {
  return (
    <div className="bg-[#190F01] h-20 flex  w-full ">
      <div className="flex items-center justify-around flex-grow ">
        <Logo />
        <Span size={16} width="Regular" color="Primary/50">
          Copyright © 2025 Roast Whale Coffee & Roastery | All Rights Reserved
        </Span>
        <div className="flex gap-2">
          {IconFooter.map((el) => (
            <Link key={el.id} to={el.to}>
              <el.icon width={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
