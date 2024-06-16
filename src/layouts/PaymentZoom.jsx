/* eslint-disable react/prop-types */

export default function PaymentZoom({ image }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={`http://localhost:8888/${image}`}
        alt="payment"
        className="rounded-md"
      />
    </div>
  );
}
