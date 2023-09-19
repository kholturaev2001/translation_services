import { Input, message } from "antd";
import "./Consultation.css";
import { useState } from "react";
import moment from "moment/moment";
import "moment/locale/ru"; // without this line it didn't work
moment.locale("ru");
import emailjs from "@emailjs/browser";
import "dayjs/locale/ru";
const { TextArea } = Input;
import { MaskedInput } from "antd-mask-input";

const Consultation = () => {
  const [maskedPhone, setMaskedPhone] = useState("");

  const initialValues = {
    fullName: "",
    message: "",
    emailjs: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setMaskedPhone(value);
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };


  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const handleSubmit = async () => {
    if (
      values.fullName.trim() &&
      maskedPhone.trim() &&
      values.emailjs.trim() &&
      values.message.trim()
    ) {
      messageApi.open({
        key,
        type: "loading",
        content: "Отправляется...",
      });
      emailjs
        .send(
          "service_ii58z1v",
          "template_d3bm84l",
          {
            fullName: values.fullName,
            to_name: "Muhammadrasul",
            to_email: "holturaevm@gmail.com",
            message: values.message,
            phone: maskedPhone,
            emailjs: values.emailjs,
          },
          "_rkzuLmsOwLYHbQq2"
        )
        .then(
          () => {
            messageApi.open({
              key,
              type: "success",
              content: "Отправлено!",
              duration: 2,
            });

            setValues({
              emailjs: "",
              message: "",
              fullName: "",
            });
            setMaskedPhone("");
          },
          (error) => {
            messageApi.open({
              key,
              type: "error",
              content: "Ошибка!",
              duration: 2,
            });
          }
        );
    } else {
      messageApi.open({
        key,
        type: "warning",
        content: "Все поля необходимы для заполнения!",
        duration: 2,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="consult_container  min-h-[400px] md:py-[50px] py-[30px] px-[20px] md:px-[100px]">
        <div className="flex flex-col gap-[30px]  md:w-[75%]">
          <p className=" text-white font-semibold md:text-[42px] text-[24px]">
            Бесплатная консультация
          </p>
          <div className="flex flex-col gap-3">
            <div className="grid-cols-1 grid gap-3">
              <Input
                className="placeholder:text-gray-300 py-3 text-white md:text-base text-sm"
                placeholder="ФИО"
                name="fullName"
                onChange={handleInputChange}
                value={values.fullName}
              />
            </div>
            <div className="grid-cols-2 grid gap-3">
              <MaskedInput
                mask="+7 (000) 000-00-00"
                name="phone"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={maskedPhone}
              />
              <Input
                className="placeholder:text-gray-300 py-3 text-white md:text-base text-sm"
                placeholder="Электронная почта"
                type="emailjs"
                name="emailjs"
                onChange={handleInputChange}
                value={values.emailjs}
              />
            </div>
            <div className="grid-rows-1">
              <TextArea
                showCount
                maxLength={1000}
                placeholder="Ваше сообщение"
                className=" text-white md:text-base"
                style={{ padding: "10px 0" }}
                name="message"
                onChange={handleInputChange}
                value={values.message}
              />
            </div>
            <button
              onClick={handleSubmit}
              value={values.message}
              className="md:max-w-[280px] md:min-h-[60px] min-h-[50px] text-white hover:text-[#33a3ed]  bg-[#33a3ed] hover:bg-white border-2 hover:border-[#33a3ed] rounded-lg font-semibold mt-[18px] duration-500 ease-in-out "
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
