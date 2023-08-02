import { DatePicker, Input, message } from "antd";
import "./Consultation.css";
import { useState } from "react";
import moment from "moment/moment";
import "moment/locale/ru"; // without this line it didn't work
moment.locale("ru");
import "dayjs/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
const { TextArea } = Input;

const Consultation = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Отправляется...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Отправлено!',
        duration: 2,
      });
    }, 2000);
  };

  const handleTimeChange = (_, dateString) => {
    const time = moment(dateString).locale("ru").format("Do MMMM YYYY, h:mm");
    setSelectedTime(time);
  };

  const onOk = (value) => {
    console.log("onOk: ", selectedTime);
  };

  const textAreaOnChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      {contextHolder}
      <div className="consult_container  min-h-[400px] py-[50px] px-[100px]">
        <div className="flex flex-col gap-[30px]  w-[75%]">
          <p className=" text-white font-semibold text-[42px]">
            Бесплатная консультация
          </p>
          <div className="flex flex-col gap-3">
            <div className="grid-cols-2 grid gap-3">
              <Input
                className="placeholder:text-gray-300 py-3 text-white text-base"
                placeholder="ФИО"
              />
              <Input
                className="placeholder:text-gray-300 py-3 text-white text-base"
                placeholder="Тел: +7 --- --- -- --"
                onKeyPress={(event) => {
                  if (!/[0-9,+]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <div className="grid-rows-1">
              <DatePicker
                placeholder="Выбрать время"
                showTime={{ format: "HH:mm" }}
                format={"Do MMMM YYYY, \n h:mm"}
                onChange={handleTimeChange}
                onOk={onOk}
                locale={locale}
                className="py-3 text-white text-lg w-full"
              />
            </div>
            <div className="grid-rows-1">
              <TextArea
                showCount
                maxLength={10000}
                onChange={textAreaOnChange}
                placeholder="Ваше сообщение"
                className=" text-white text-base"
                style={{ padding: "10px 0" }}
              />
            </div>
            <button
              onClick={openMessage}
              className="max-w-[280px] min-h-[60px] bg-[#c0bebd] rounded-lg font-semibold mt-[18px] text-[#24201f] "
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