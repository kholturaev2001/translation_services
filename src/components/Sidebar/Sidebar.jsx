import { NavLink } from "react-router-dom";
import BurgerCross from "../BurgerCross/BurgerCross";

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

const Sidebar = ({ isActive, onClick }) => {
  console.log("🚀 ~ file: Sidebar.jsx:24 ~ Sidebar ~ isActive:", isActive)
  return (
    <div
      className={` ${
        isActive ? "translate-x-0 shadow-2xl" : "translate-x-full"
      } fixed top-0 right-0 w-[60vw] h-full bg-[#f5f5f5]   ease-in-out duration-300 transition flex flex-col`}
    >
      <div className="flex justify-end py-3 px-5">
        <button className="md:hidden " onClick={onClick}>
          <BurgerCross isActive={isActive} />
        </button>
      </div>
      <nav className="flex flex-col  text-[15px]">
        {navs.map((nav, id) => (
          <NavLink
            key={id}
            to={nav.url}
            className={({ isActive }) =>
              `${
                isActive
                  ? "border-b-2 border-b-[#ef6f2e] text-[#ef6f2e]"
                  : "to_hover text-[#5f6f79] border-b-2 border-b-[#ebebec]"
              } py-4 mx-5 w-[120px]`
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
