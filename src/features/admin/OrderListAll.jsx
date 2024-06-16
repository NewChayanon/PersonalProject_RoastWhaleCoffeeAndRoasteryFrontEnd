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
   
    const {handlePending,handSuccess,handFailed} = useAdmin()
  return (
    <div className="grid grid-cols-6">
      <div>
        <Span>{name}</Span>
      </div>
      <div>
        <div>
          <Span>{`${firstName} ${lastName}`}</Span>
        </div>
        <div>
          <Span>{`${address}`}</Span>
        </div>
      </div>
      <div>
        <Span>{`฿ ${price.toFixed(2)}`}</Span>
      </div>
      <div>
        <IconPayment onClick={() => setOpen(true)} width={40} />

        {/* <Span>{image}</Span> */}
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title="หลักฐานการชำระ"
              width={44}
            >
              <PaymentZoom image={image}/>
            </Modal>
      </div>
      <div>
        <Span>{status}</Span>
      </div>
      <div className="flex">
        <div className="m-1 w-24 " onClick={()=>handlePending(id)}>
          <Button bg="Neutral/500" color="white">PENDING</Button>
        </div>
        <div className="m-1 w-24" onClick={()=>handSuccess(id)}>
          <Button bg="Primary/500" color="black">SUCCESSED</Button>
        </div>
        <div className="m-1 w-24" onClick={()=>handFailed(id)}>
          <Button bg="Support01/500" color="white">FAILED</Button>
        </div>
      </div>
    </div>
  );
}
