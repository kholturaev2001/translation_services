import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/icons/Logo";
import BurgerCross from "../BurgerCross/BurgerCross";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

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
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="md:w-full w-screen overflow-hidden backdrop-blur-[10px] bg-[#FFFFFF80]">
        <div className="md:container flex md:gap-14 md:justify-start justify-between items-center md:h-[100px] h-[60px] ">
          <div className="scale-50 md:scale-90">
            <Logo />
          </div>
          <nav className="stroke md:flex gap-7 font-medium hidden">
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
          <button className="md:hidden px-5" onClick={handleBurgerClick}>
            <BurgerCross isActive={isActive} />
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <Sidebar isActive={isActive} onClick={handleBurgerClick} />
      </div>
    </>
  );
};

export default Navbar;
