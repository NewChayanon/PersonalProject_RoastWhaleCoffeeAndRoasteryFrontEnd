/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function ButtonLoginAndRegister({ item }) {
  return (
    <>
      {item.map((el) => (
        <Link
          key={el.id}
          to={el.to}
          className="py-2 px-4 bg-[#F9C06A] mx-2 rounded-lg w-24 h-10 flex justify-center items-center"
        >
          <Button size={el.size}>{el.title}</Button>
        </Link>
      ))}
    </>
  );
}
