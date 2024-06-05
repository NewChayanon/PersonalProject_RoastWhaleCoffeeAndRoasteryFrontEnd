import { LogoRoastWhale } from "../icons/icon";
import Span from "../components/Span";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="flex gap-1">
      <LogoRoastWhale width={64} />
      <div className="flex flex-col justify-center">
        <div>
          <Span size={24} color="Primary/50" width="ExtraBold">
            Roast Whale
          </Span>
        </div>
        <div className="flex ">
          <Span size={12} color="Primary/50" width="ExtraBold">
            Coffee & Roastery
          </Span>
        </div>
      </div>
    </Link>
  );
}
