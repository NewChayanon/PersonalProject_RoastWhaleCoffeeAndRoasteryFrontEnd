/* eslint-disable react/prop-types */

import Span from "../../../components/Span";
import testImage from "../../../assets/Ethiopia-Citrus-Symphony-A3-600.jpg";

export default function StatusOrderList({ name, description, status }) {
  return (
    <div className="flex w-[50rem] justify-between border-t-[1px] py-2">
      <div className=" w-full p-2 flex gap-2">
        <div className="h-20 w-24 flex justify-center items-center ">
          <img src={testImage} alt="shopping-list" className="rounded-md" />
        </div>
        <div className="w-full flex  flex-col justify-center">
          <Span size={14} width="SemiBold">
            {name}
          </Span>
          <Span size={11} color="Neutral/500">
            {description}
          </Span>
        </div>
      </div>
      <div className="flex items-center">
        <Span color="Neutral/500">{status}</Span>
      </div>
    </div>
  );
}
