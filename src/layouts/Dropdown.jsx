/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import PTag from "../components/PTag";

export default function Dropdown({ item }) {
  return (
    <>
      {item.map((el) => (
        <div  key={el.id} className="hover:bg-[#FFD399] p-3 rounded-lg " onClick={el.onClick} role="button">
          <Link to={el.to}>
            <PTag width={el.width}>{el.title}</PTag>
          </Link>
        </div>
      ))}
    </>
  );
}
