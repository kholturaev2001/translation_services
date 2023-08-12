import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./navbar.css";
// import Logo from "../../assets/icons/Logo";
import BurgerCross from "../BurgerCross/BurgerCross";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../assets/images/ais_perevodchik.jpg";

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
    title: "Вакансии",
    url: "/vacancies",
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
      <div className="w-full overflow-hidden bg-white fixed z-50  text-[#33a3ed]">
        <div className="md:max-w-[1280px] mx-auto flex md:gap-14 md:justify-start justify-between items-center md:h-[100px] h-[60px] ">
          <div className="scale-50 md:scale-90">
            {/* <Logo color='white' /> */}
            <div className="w-[140px]">
              <img src={logo} alt="" />
            </div>
          </div>
          <nav className="stroke md:flex gap-7 font-medium hidden">
            {navs.map((nav, id) => (
              <NavLink
                key={id}
                to={nav.url}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-[#33a3ed] py-1 px-1"
                    : "to_hover py-1 px-1 text-black"
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
        <Sidebar
          isActive={isActive}
          setIsActive={setIsActive}
          onClick={handleBurgerClick}
        />
      </div>
    </>
  );
};

export default Navbar;
