import { DatePicker, Input, message } from "antd";
import "./Consultation.css";
import { useState } from "react";
import moment from "moment/moment";
import "moment/locale/ru"; // without this line it didn't work
moment.locale("ru");
import "dayjs/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
const { TextArea } = Input;

const Consultation = () => {
  
  const initialValues = {
    fullName: "",
    phone: "",
    message: "",
    selectedTime: '',
  };
  const [values, setValues] = useState(initialValues);
  console.log(
    "🚀 ~ file: Consultation.jsx:23 ~ Consultation ~ values:",
    values
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Отправляется...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Отправлено!",
        duration: 2,
      });
      setValues({
        ...values,
        phone: '',
        message: '',
        fullName: ''
      })
    }, 2000);
  };

  const handleTimeChange = (_, dateString) => {
    setValues({
      ...values,
      selectedTime: dateString,
    });
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
            <div className="md:grid-cols-2 grid-cols-1 grid gap-3">
              <Input
                className="placeholder:text-gray-300 py-3 text-white md:text-base text-sm"
                placeholder="ФИО"
                name="fullName"
                onChange={handleInputChange}
                value={values.fullName}
              />
              <Input
                className="placeholder:text-gray-300 py-3 text-white md:text-base text-sm"
                placeholder="Тел: +7 --- --- -- --"
                name="phone"
                onChange={(e) => {
                  const regex = /^[0-9,+\b]+$/;
                  const { value } = e.target;
                  if (value === "" || regex.test(value)) {
                    setValues({
                      ...values,
                      phone: value,
                    });
                  }
                }}
                value={values.phone}
              />
            </div>
            <div className="grid-rows-1">
              <DatePicker
                placeholder="Выбрать время"
                showTime={{ format: "HH:mm" }}
                format={"Do MMMM YYYY, HH:mm"}
                onChange={handleTimeChange}
                locale={locale}
                className="py-3 w-full"
                allowClear
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
              onClick={openMessage}
              value={values.message}
              className="md:max-w-[280px] md:min-h-[60px] min-h-[50px] bg-[#c0bebd] rounded-lg font-semibold mt-[18px] text-[#24201f] "
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
