import { NavLink } from "react-router-dom";
import LocationIcon from "./../../assets/icons/LocationIcon";
import "./navbar.css";
import Logo from "../../assets/icons/Logo";

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

const Navbar = () => {
  return (
    <div className="w-screen backdrop-blur-[10px] bg-[#FFFFFF80]">
      <div className="container flex gap-14 items-center h-[100px] px-4 ">
        <Logo />
        <nav className="stroke flex gap-7 font-medium">
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
    </div>
  );
};

export default Navbar;
