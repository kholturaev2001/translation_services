import { NavLink } from "react-router-dom";
import BurgerCross from "../BurgerCross/BurgerCross";
import { Menu } from "antd";

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

const Sidebar = ({
  isActive,
  onClick,
  setIsActive,
  handleNavigate,
  items,
  defaultOpenKeys,
  defaultSelectedKeys
}) => {
  return (
    <div
      className={` ${
        isActive ? "translate-x-0 shadow-2xl" : "translate-x-full"
      } fixed top-0 right-0 w-[90vw] h-full bg-[#f5f5f5] z-10  ease-in-out duration-300 transition flex flex-col`}
    >
      <div className="flex justify-end py-3 px-5">
        <button className="md:hidden " onClick={onClick}>
          <BurgerCross isActive={isActive} />
        </button>
      </div>
      {/* <nav className="flex flex-col  text-sm">
        {navs.map((nav, id) => (
          <NavLink
            key={id}
            to={nav.url}
            className={({ isActive }) =>
              `${
                isActive
                  ? "border-b-2 border-b-[#33a3ed] text-[#33a3ed]"
                  : "to_hover text-[#5f6f79] border-b-2 border-b-[#ebebec]"
              } py-4 mx-5 w-[120px]`
            }
            onClick={() => setIsActive((prevState) => !prevState)}
          >
            {nav.title}
          </NavLink>
        ))}
      </nav> */}
      <Menu
        onClick={handleNavigate}
        defaultSelectedKeys={defaultSelectedKeys}
        style={{
          backgroundColor: "transparent",
          overflow: "auto",
        }}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
