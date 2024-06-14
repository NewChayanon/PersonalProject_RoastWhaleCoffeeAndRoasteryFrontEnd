/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import adminApi from "../../apis/admin";
import Button from "../../components/Button";
import Span from "../../components/Span";
import { useAdmin } from "../../hooks/useAdmin";

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
        <Span>{image}</Span>
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
