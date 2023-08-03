import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import Consultation from "../components/Consultation/Consultation";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <>
      <div className="md:container md:px-0 px-3 flex flex-col">
        <div className=" flex md:flex-row flex-col h-[350px] items-center mb-10">
          <div className="relative flex items-center">
            <div className="flex items-center gap-4 transform md:-rotate-90">
              <span className="border-[1px] border-] w-[100px] "></span>
              <p className="md:text-2xl text-base text-[#cececd] font-semibold whitespace-nowrap">
                Контакты
              </p>
            </div>
          </div>
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
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="rotate-90 max-w-fit">
                  <PhoneIcon />
                </span>
                <a href="tel:+79689750768">+7 968 975-07-68</a>
                <a href="tel:+79689750768">+7 968 975-07-68</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="rotate-90 max-w-fit">
                  <EmailIcon />
                </span>
                <a href="mailto:probuild.company22@gmail.com">
                  probuild.company22@gmail.com
                </a>
                <a href="mailto:probuild.company22@gmail.com">
                  probuild.company22@gmail.com
                </a>
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
