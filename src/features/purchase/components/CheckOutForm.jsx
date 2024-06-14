import { useState } from "react";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import { addressValidate } from "../../../validators/validators";
import Button from "../../../components/Button";
import Bill from "./Bill";

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

export default function CheckOutForm() {
  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log("first");
      const error = addressValidate(input);
      if (error) {
        return setErrorMessage(error);
      }

      setErrorMessage(initialErrorMessage);
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
              <Span>อีเมล *</Span>
              <Span>new@1mail.com</Span>
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
          </div>
        </div>
        <div className="h-7">
          <Button>สั่งซื้อสินค้า</Button>
        </div>
      </form>

      <Bill/>
    </div>
  );
}
