/* eslint-disable react/prop-types */

export default function PaymentZoom({ image }) {
  return (
    <div className="flex justify-center items-center">
      <img src={image} alt="payment" className="rounded-md" />
    </div>
  );
}
