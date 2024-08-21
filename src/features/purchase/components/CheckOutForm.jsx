import { useState } from "react";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import { addressValidate, paymentValidate } from "../../../validators/validators";
import Button from "../../../components/Button";
import Bill from "./Bill";
import { useUser } from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";

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
  image: "wait",
  date: "",
  hour: "",
  minute: "",
};

const initialPaymentError = {
  image: "wait",
  date: "",
  hour: "",
  minute: "",
};

export default function CheckOutForm() {
  const [input, setInput] = useState(initialInput);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
  const [payment, setPayment] = useState(initialPayment);
  const [errorMessagePayment, setErrorMessagePayment] = useState(initialPaymentError);
  const [file, setFile] = useState(null);
  const [errorMessageFile, setErrorMessageFile] = useState("");
  const { isUser, checkOutCart, loading } = useUser();

  const navigator = useNavigate();

  const handleChangeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const handlePaymentInput = (e) => setPayment({ ...payment, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const errorAddress = addressValidate(input);
      const errorPayment = paymentValidate(payment);

      if (errorAddress || errorPayment || !file) {
        if (errorAddress) {
          setErrorMessage(errorAddress);
        } else {
          setErrorMessage(initialErrorMessage);
        }
        if (errorPayment) {
          setErrorMessagePayment(errorPayment);
        } else {
          setErrorMessagePayment(initialPaymentError);
        }
        if (!file) {
          setErrorMessageFile("file is not allowed to be empty");
        } else {
          setErrorMessageFile("");
        }
        return;
      }
      setErrorMessageFile("");
      setErrorMessage(initialErrorMessage);
      setErrorMessagePayment(initialPaymentError);
      await checkOutCart(input, payment, file);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col ">
      {loading && <Spinner/>}
      <div className="flex justify-center pt-8 pb-4">
        <Span size={40} width="ExtraBold">
          ชำระเงิน
        </Span>
      </div>
      <div className="flex justify-center items-start gap-5 my-4">
        <form onSubmit={handleSubmitForm} className="w-[60rem] ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <Span size={24} width="SemiBold">
                รายละเอียดลูกค้า
              </Span>
              <div>
                <Span>อีเมล : </Span>
                <Span>{isUser?.email}</Span>
              </div>
              <div>
                <Span>
                  ชื่อ<span className="text-red-400">*</span>
                </Span>
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
                <Span>
                  นามสกุล<span className="text-red-400">*</span>
                </Span>
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
                <Span>
                  โทรศัพท์<span className="text-red-400">*</span>
                </Span>
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
            <div className="flex flex-col gap-5">
              <Span size={24} width="SemiBold">
                รายละเอียดการจัดส่ง
              </Span>
              <div>
                <Span>
                  ประเทศ/ภูมิภาค<span className="text-red-400">*</span>
                </Span>
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
                <Span>
                  ที่อยู่<span className="text-red-400">*</span>
                </Span>
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
                <Span>
                  เมือง/อำเภอ<span className="text-red-400">*</span>
                </Span>
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
                <Span>
                  จังหวัด<span className="text-red-400">*</span>
                </Span>
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
                <Span>
                  รหัสไปรษณีย์<span className="text-red-400">*</span>
                </Span>
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
              <Span size={24} width="SemiBold">
                ช่องทางชำระเงิน
              </Span>
              <div className="bg-gray-300 w-auto h-40 px-4 py-4 my-2  rounded-lg">
                <div>
                  <div></div>
                  <div>
                    <Span>ชื่อ : นาย ชญานนท์ นิลปานะ</Span>
                    <br />
                    <Span>บัญชี : xxx-x-xxxxx-x</Span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <Span>
                      แนบสลิป<span className="text-red-400">*</span>
                    </Span>

                    <div className="bg-white h-full flex justify-center items-center px-2 rounded-lg">
                      <input
                        type="file"
                        onChange={(e) => {
                          if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                          }
                        }}
                      />
                    </div>
                    {errorMessageFile ? <small className="text-red-500 px-2">{errorMessageFile}</small> : null}
                  </div>
                  <div>
                    <Span>
                      วันที่ชำระ<span className="text-red-400">*</span>
                    </Span>
                    <Input
                      type="text"
                      placeholder="วันที่ชำระ (วัน/เดือน/ปี)"
                      value={payment.date}
                      onChange={handlePaymentInput}
                      name="date"
                      error={errorMessagePayment.date}
                    />
                  </div>
                  <div>
                    <Span>
                      เวลาที่ชำระ<span className="text-red-400">*</span>
                    </Span>
                    <div className="flex gap-3 items-center">
                      <div className="w-[5rem]">
                        <Input
                          type="text"
                          placeholder="ชั่วโมง"
                          value={payment.hour}
                          onChange={handlePaymentInput}
                          name="hour"
                          error={errorMessagePayment.hour}
                        />
                      </div>
                      <Span>:</Span>
                      <div className="w-[5rem]">
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
          </div>
          <div className="h-7">
            <Button>สั่งซื้อสินค้า</Button>
          </div>
        </form>
        <Bill />
      </div>
    </div>
  );
}
