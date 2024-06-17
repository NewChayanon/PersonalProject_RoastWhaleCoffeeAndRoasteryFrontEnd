/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Span from "../components/Span";

export default function MenuItem({ title, to }) {
  return (
    <Link to={to} className="hover:scale-110 active:scale-100 transition-all ">
      <Span size={16} color="Primary/50" width="Regular">
        <div className="hover:scale-[150%] hover:brightness-120 hover:duration-300">{title}</div>
      </Span>
    </Link>
  );
}
