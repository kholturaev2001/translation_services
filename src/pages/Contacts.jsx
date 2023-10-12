import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import TimeIcon from "../assets/icons/TimeIcon";
import Consultation from "../components/Consultation/Consultation";
import Footer from "../components/Footer";
import HeadBreadcrumb from "../components/HeadBreadcrumb";
import Email from "../components/Typography/Email";
import PhoneNumber from "../components/Typography/PhoneNumber";
import YandexMap from "./../components/YandexMap";

const Contacts = () => {
  return (
    <>
      <div className="md:max-w-[1280px] mx-auto md:px-0 px-3 flex flex-col">
        <div className=" flex flex-col mb-10">
          <HeadBreadcrumb
            items={[
              {
                title: "Главная",
              },
              {
                title: "Контакты",
              },
            ]}
          />
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-[20px]">
              <h2 className="md:text-[32px] text-[24px] font-semibold">
                Наши контакты
              </h2>
              <p className="md:text-start text-justify">
                Если у вас возникли вопросы, комментарии или вы хотите получить
                дополнительную информацию о наших услугах, пожалуйста, не
                стесняйтесь связаться с нами.
              </p>
            </div>
            <div className="mx-3 mt-7">
              <div className=" p-3 rounded-md mx-auto md:max-w-[400px] max-w-[100%] border border-[#33a3ed] bg-gray-100">
                <div className="flex   flex-col  justify-between gap-4 my-3 md:text-base text-small">
                  <div className="flex items-center md:justify-start justify-center gap-4">
                    <span className="rotate-90 max-w-fit">
                      <PhoneIcon color="gray" />
                    </span>
                    <span className="md:block hidden">

                    Телефон:
                    </span>
                    <PhoneNumber />
                  </div>
                  <div className="flex items-center md:justify-start justify-center gap-4">
                    <span className="rotate-90 max-w-fit">
                      <EmailIcon color="gray" />
                    </span>
                    <span className="md:block hidden">

                    Эл. почта:
                    </span>
                    <Email />
                  </div>
                  <div className="flex items-center md:justify-start justify-center gap-4">
                    <span className="rotate-90 max-w-fit">
                      <TimeIcon color="gray" />
                    </span>
                    <span className="md:block hidden">

                    Режим работы:
                    </span>
                    <p className="text-[#33a3ed]">24/7 (круглосуточно)</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <YandexMap />
        <br />
        <Consultation />
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
