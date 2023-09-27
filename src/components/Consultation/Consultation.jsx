import { MaskedInput } from "antd-mask-input";
import { Input, Select, message } from "antd";
import { useState } from "react";
import moment from "moment/moment";
import emailjs from "@emailjs/browser";
import "dayjs/locale/ru";
import "moment/locale/ru"; // without this line it didn't work
moment.locale("ru");

import "./Consultation.css";

const Consultation = () => {
  const initialValues = {
    fullName: "",
    emailjs: "",
  };

  const [maskedPhone, setMaskedPhone] = useState("");
  const [values, setValues] = useState(initialValues);
  const [serviceNameValue, setServiceNameValue] = useState("Оценка");

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

  const handleChangeSelect = (value) => {
    setServiceNameValue(value);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const handleSubmit = async () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Отправляется...",
    });
    emailjs
      .send(
        "service_b6mg5bo",
        "template_yvid0i7",
        {
          fullName: values.fullName,
          to_name: "Damir",
          to_email: "9168081166f@gmail.com",
          serviceName: serviceNameValue,
          phone: maskedPhone,
          emailjs: values.emailjs,
        },
        "4T749zp8I-lwm7wNc"
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
            fullName: "",
          });
          setMaskedPhone("");
        },
        () => {
          messageApi.open({
            key,
            type: "error",
            content: "Ошибка!",
            duration: 2,
          });
        }
      );
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
            <div className="md:grid-cols-2 grid-cols-1 grid gap-3">
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
              <Select
                allowClear={false}
                className="w-full text-white md:text-base md:min-h-[50px] min-h-[40px]"
                defaultValue="Оценка"
                name="service_name"
                value={serviceNameValue}
                onChange={handleChangeSelect}
                options={[
                  {
                    value: "Оценка",
                    label: "Оценка",
                  },
                  {
                    value: "Экспертиза",
                    label: "Экспертиза",
                  },
                  {
                    value: "Снижение налогов",
                    label: "Снижение налогов",
                  },
                  {
                    value: "Юридические услуги",
                    label: "Юридические услуги",
                  },
                  {
                    value: "Бизнес планирование",
                    label: "Бизнес планирование",
                  },
                ]}
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
