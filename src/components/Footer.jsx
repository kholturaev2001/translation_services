import { NavLink } from "react-router-dom";
import TelegramIcon from "./../assets/icons/TelegramIcon";
import WhatsAppIcon from "./../assets/icons/WhatsAppIcon";
import InstagramIcon from "./../assets/icons/InstagramIcon";
import Logo from "../assets/icons/Logo";
import moment from "moment/moment";


const Footer = () => {
  const navs = [
    {
      title: "Главное",
      url: "/",
    },
    {
      title: "Цены",
      url: "/prices",
    },
    {
      title: "Карьера",
      url: "/vacancies",
    },
    {
      title: "Контакты",
      url: "/contacts",
    },
  ];

  return (
    <div className="mt-16 bg-[#1b252e]">
      <div className="md:max-w-[1280px] mx-auto w-full flex flex-col">
        <div className="md:max-w-[1280px] mx-auto w-full md:min-h-[240px] flex md:flex-row flex-col items-center justify-between px-4 ">
          <div className="flex md:flex-row flex-col md:gap-14 gap-2 md:items-center items-start w-full">
            <Logo color='white' />
            <nav className="stroke flex md:flex-nowrap w-full flex-wrap md md:gap-7 font-medium text-white md:justify-start justify-between">
              {navs.map((nav, id) => (
                <NavLink
                  key={id}
                  to={nav.url}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-b-[#33a3ed] py-1 px-1"
                        : "to_hover py-1 px-1 text-[#5f6f79]"
                    } flex items-center justify-center text-center py-3 md:text-base text-sm`
                  }
                >
                  {nav.title}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex gap-3 w-full md:justify-end justify-center my-5">
            <a
              href="https://t.me/+41794997040"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon />
            </a>
            <a
              href="https://wa.me/+41794997040"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="http://instagram.com/_u/{USERNAME}/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="h-[100px] flex items-center text-[#CBD5E1] border-t border-[#FFFFFF33] md:text-base text-sm">
        © Все права защищены ООО АИС «ПЕРЕВОДЧИК»  {moment().year()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
