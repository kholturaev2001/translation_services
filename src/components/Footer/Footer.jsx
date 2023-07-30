import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Logo";
import Navbar from "../Navbar/Navbar";

const Footer = () => {
  const navs = [
    {
      title: "Главное",
      url: "/",
    },
    {
      title: "O Компании",
      url: "/about",
    },
    {
      title: "Наши Проекты",
      url: "/projects",
    },
    {
      title: "Контакты",
      url: "/contacts",
    },
  ];

  return (
    <div
      className="mt-16  bg-[#24201F] "
    >
      <div className="container flex flex-col ">
        <div className="container h-[240px] flex gap-14 items-center px-4 ">
          <Logo color="#fff" />
          <nav className="stroke flex gap-7 font-medium text-white">
            {navs.map((nav, id) => (
              <NavLink
                key={id}
                to={nav.url}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-[#ef6f2e] py-1 px-1"
                    : "to_hover py-1 px-1 text-[#5f6f79]"
                }
              >
                {nav.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="h-[100px] flex items-center text-[#CBD5E1]">
          © Copyright 2022, All Rights Reserved by Pro.Build
        </div>
      </div>
    </div>
  );
};

export default Footer;
