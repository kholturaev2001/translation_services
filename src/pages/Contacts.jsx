import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import Consultation from "../components/Consultation/Consultation";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <>
      <div className="container flex flex-col">
        <div className=" flex h-[350px] items-center mb-10">
          <div className="relative flex items-center">
            <div className="flex items-center gap-4 transform -rotate-90 ">
              <span className="border-[1px] border-] w-[100px] "></span>
              <p className="text-2xl text-[#cececd] font-semibold whitespace-nowrap">
                Контакты
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[32px] font-semibold">Наши контакты</h2>
              <p className="">
                Если у вас возникли вопросы, комментарии или вы хотите получить
                дополнительную информацию о наших услугах, пожалуйста, не
                стесняйтесь связаться с нами.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="rotate-90 max-w-fit">
                  <PhoneIcon />
                </span>
                <a href="tel:+7 922 458 3465">+7 922 458 3465</a>
                <a href="tel:+7 922 425 2638">+7 922 425 2638</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="rotate-90 max-w-fit">
                  <EmailIcon />
                </span>
                <a href="mailto:addres@probuild.com">addres@probuild.com</a>
                <a href="mailto:addres@probuild.com">addres@probuild.com</a>
              </div>
            </div>
          </div>
        </div>
        <Consultation />
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
