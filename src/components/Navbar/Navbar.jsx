import { NavLink } from "react-router-dom";
import LocationIcon from "./../../assets/icons/LocationIcon";
import "./navbar.css";

const navs = [
  {
    title: "Главное",
    url: "/",
  },
  {
    title: "О Компании",
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
    <>
      <div className="flex w-screen justify-between items-center h-14 bg-navbar-color bg-opacity-80 text-white px-4">
        <p>LOGO</p>
        <nav className="stroke flex gap-7 font-medium">
          {navs.map((nav, id) => (
            <NavLink
              key={id}
              to={nav.url}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-[#ef6f2e] py-1 px-1"
                  : "to_hover py-1 px-1"
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </nav>
        <section className="flex items-center justify-center gap-3">
          <button>
            <LocationIcon />
          </button>
          <p>+79224583465</p>
        </section>
      </div>
    </>
  );
};

export default Navbar;
