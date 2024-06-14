import { useState } from "react";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import {
  addressValidate,
  paymentValidate,
} from "../../../validators/validators";
import Button from "../../../components/Button";
import Bill from "./Bill";
import { useUser } from "../../../hooks/useUser";

const initialInput = {
  firstName: "",
  lastName: "",
  mobile: "",
  country: "",
  address: "",
  district: "",
  province: "",
  postcode: "",
};
const initialErrorMessage = {
  firstName: "",
  lastName: "",
  mobile: "",
  country: "",
  address: "",
  district: "",
  province: "",
  postcode: "",
};
const initialPayment = {
  image: "",
  date: "",
  hour: "",
  minute: "",
};

const initialPaymentError = {
  image: "",
  date: "",
  hour: "",
  minute: "",
};

export default function CheckOutForm() {
  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const [payment, setPayment] = useState(initialPayment);
  const [errorMessagePayment, setErrorMessagePayment] =
    useState(initialPaymentError);
    const {isUser}=useUser()

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handlePaymentInput = (e) =>
    setPayment({ ...payment, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const errorAddress = addressValidate(input);
      const errorPayment = paymentValidate(payment);

      console.log(errorAddress)
      console.log(errorPayment)


      if (errorAddress || errorPayment) {
        if(errorAddress){
          setErrorMessage(errorAddress);
        }
        setErrorMessage(initialErrorMessage);
        if (errorPayment) {
          setErrorMessagePayment(errorPayment)
        }
        return
      }

      setErrorMessage(initialErrorMessage);
      setErrorMessagePayment(initialPaymentError)
      //   await addProductCoffee(input)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-start">
      <form onSubmit={handleSubmitForm}>
        <div>
          <Span>ชำระเงิน</Span>
        </div>
        <div>
          <div>
            <Span>รายละเอียดลูกค้า</Span>
            <div>
              <Span>อีเมล : </Span>
              <Span>{isUser?.email}</Span>
            </div>
            <div>
              <Span>ชื่อ *</Span>
              <Input
                type="text"
                placeholder="ชื่อ"
                value={input.firstName}
                onChange={handleChangeInput}
                name="firstName"
                error={errorMessage.firstName}
              />
            </div>
            <div>
              <Span>นามสกุล *</Span>
              <Input
                type="text"
                placeholder="นามสกุล"
                value={input.lastName}
                onChange={handleChangeInput}
                name="lastName"
                error={errorMessage.lastName}
              />
            </div>
            <div>
              <Span>โทรศัพท์ *</Span>
              <Input
                type="text"
                placeholder="โทรศัพท์"
                value={input.mobile}
                onChange={handleChangeInput}
                name="mobile"
                error={errorMessage.mobile}
              />
            </div>
          </div>
          <div>
            <Span>รายละเอียดการจัดส่ง</Span>
            <div>
              <Span>ประเทศ/ภูมิภาค *</Span>
              <Input
                type="text"
                placeholder="ประเทศ/ภูมิภาค"
                value={input.country}
                onChange={handleChangeInput}
                name="country"
                error={errorMessage.country}
              />
            </div>
            <div>
              <Span>ที่อยู่ *</Span>
              <Input
                type="text"
                placeholder="ที่อยู่"
                value={input.address}
                onChange={handleChangeInput}
                name="address"
                error={errorMessage.address}
              />
            </div>
            <div>
              <Span>เมือง/อำเภอ *</Span>
              <Input
                type="text"
                placeholder="เมือง/อำเภอ"
                value={input.district}
                onChange={handleChangeInput}
                name="district"
                error={errorMessage.district}
              />
            </div>
            <div>
              <Span>จังหวัด *</Span>
              <Input
                type="text"
                placeholder="จังหวัด"
                value={input.province}
                onChange={handleChangeInput}
                name="province"
                error={errorMessage.province}
              />
            </div>
            <div>
              <Span>รหัสไปรษณีย์ *</Span>
              <Input
                type="text"
                placeholder="รหัสไปรษณีย์"
                value={input.postcode}
                onChange={handleChangeInput}
                name="postcode"
                error={errorMessage.postcode}
              />
            </div>
          </div>
          <div>
            <Span>ช่องทางชำระเงิน</Span>
            <div className="bg-gray-300 w-auto h-40 p-2 ">
              <div>
                <div></div>
                <div>
                  <Span>ชื่อ : นาย ชญานนท์ นิลปานะ</Span>
                  <br />
                  <Span>บัญชี : xxx-x-xxxxx-x</Span>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <Span>แนบสลิป *</Span>
                  <Input
                    type="text"
                    placeholder="แนบสลิป"
                    value={payment.image}
                    onChange={handlePaymentInput}
                    name="image"
                    error={errorMessagePayment.image}
                  />
                </div>
                <div>
                  <Span>วันที่ชำระ *</Span>
                  <Input
                    type="text"
                    placeholder="วันที่ชำระ"
                    value={payment.date}
                    onChange={handlePaymentInput}
                    name="date"
                    error={errorMessagePayment.date}
                  />
                </div>
                <div>
                  <Span>เวลาที่ชำระ *</Span>
                  <div className="flex gap-3 items-center">
                    <Input
                      type="text"
                      placeholder="ชั่วโมง"
                      value={payment.hour}
                      onChange={handlePaymentInput}
                      name="hour"
                      error={errorMessagePayment.hour}
                    />{" "}
                    <Span>:</Span>{" "}
                    <Input
                      type="text"
                      placeholder="นาที"
                      value={payment.minute}
                      onChange={handlePaymentInput}
                      name="minute"
                      error={errorMessagePayment.minute}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-7">
          <Button>สั่งซื้อสินค้า</Button>
        </div>
      </form>
      <Bill />
    </div>
  );
}
