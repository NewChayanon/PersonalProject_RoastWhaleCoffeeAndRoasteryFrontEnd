/* eslint-disable react/prop-types */

import Span from "../../../components/Span";

export default function StatusOrderList({ name, description, status }) {
  return (
    <div className="flex w-[50rem] justify-between">
      <div>
      <Span>{name}</Span>
      <br />
      <Span>{description}</Span>
      </div>
      <div>
        <Span>{status}</Span>
      </div>
    </div>
  );
}
