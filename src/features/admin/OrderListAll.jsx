/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import adminApi from "../../apis/admin";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Span from "../../components/Span";
import { useAdmin } from "../../hooks/useAdmin";
import { IconPayment } from "../../icons/icon";
import AddProductForm from "../stock/components/AddProductForm";
import PaymentZoom from "../../layouts/PaymentZoom";

export default function OrderListAll({
  id,
  name,
  description,
  firstName,
  lastName,
  address,
  price,
  image,
  status,
}) {
  const [open, setOpen] = useState(false);

  const { handlePending, handSuccess, handFailed } = useAdmin();
  return (
    <div className="grid grid-cols-6 py-6 px-2  gap-2 w-[80rem] border-t-[1px]">
      <div className="flex flex-col justify-center items-start">
        <Span size={14} width="SemiBold">{name}</Span>
        <Span size={11} width="Regular" color="Neutral/500">
          {description}
        </Span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Span color="Neutral/500">{`${firstName} ${lastName}`}</Span>
        </div>
        <div>
          <Span size={11} color="Neutral/500">{`${address}`}</Span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Span color="Neutral/500">{`฿ ${price.toFixed(2)}`}</Span>
      </div>
      <div className="flex justify-center items-center">
        <IconPayment onClick={() => setOpen(true)} width={40} />

        {/* <Span>{image}</Span> */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="หลักฐานการชำระ"
          width={44}
        >
          <PaymentZoom image={image} />
        </Modal>
      </div>
      <div className="flex justify-center items-center">
        <Span color="Neutral/500">{status}</Span>
      </div>
      <div className="flex justify-center">
        <div className="m-1 w-20 " onClick={() => handlePending(id)}>
          <Button weight='Regular' bg="Neutral/500" color="white">
            PENDING
          </Button>
        </div>
        <div className="m-1 w-20" onClick={() => handSuccess(id)}>
          <Button weight='Regular' bg="Primary/500" color="black">
            SUCCESSED
          </Button>
        </div>
        <div className="m-1 w-20" onClick={() => handFailed(id)}>
          <Button weight='Regular' bg="Support01/500" color="white">
            FAILED
          </Button>
        </div>
      </div>
    </div>
  );
}
