import { Link } from "react-router-dom";
import Span from "../components/Span";

export default function MenuItem({ title }) {
  return (
    <Link>
      <Span size={16} color="Primary/50" width="Regular">
        {title}
      </Span>
    </Link>
  );
}
