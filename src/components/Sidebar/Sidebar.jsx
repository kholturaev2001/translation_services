import { useLocation } from "react-router-dom";
import BurgerCross from "../BurgerCross/BurgerCross";
import { Menu } from "antd";


const Sidebar = ({
  isActive,
  onClick,
  handleNavigate,
  items,
  defaultOpenKeys,
  defaultSelectedKeys
}) => {
  const location = useLocation();

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
      <Menu
        onClick={handleNavigate}
        selectedKeys={[location.pathname]}
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
