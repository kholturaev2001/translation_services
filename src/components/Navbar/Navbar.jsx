import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { Menu } from "antd";

import "./navbar.css";
import BurgerCross from "../BurgerCross/BurgerCross";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../assets/images/logo.svg";
import LocationIcon from "../../assets/icons/LocationIcon";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("О компании ▼", "about_company", null, [
    getItem("Главная", "/"),
    getItem("Цены", "/about"),
    getItem("Карьера", "/vacancies"),
    getItem("Контакты", "/contacts"),
  ]),
  getItem(`Оценка ▼`, "valuation", null, [
    getItem("Оценка недвижимости", "estates_valuation", null, [
      getItem("Оценка коммерческой недвижимости", "commercial_estates_valuation", null, [
        getItem("Оценка склада", "store_valuation"),
        getItem("Оценка нежилых помещений", "non_residential_premises_valuation"),
        getItem("Оценка производственных помещений", "industrial_premises_valuation"),
        getItem("Оценка сооружений", "building_valuation"),
        getItem("Оценка имущественных комплексов", "property_complexes_valuation"),
        getItem("Оценка объектов торговой недвижимости", "commercial_estate_valuation"),
        getItem("Оценка офиса", "office_valuation"),
      ]),
      getItem("Оценка земли", "land_valuation", null, [
        getItem("Оценка земельных участков c/x назначения", "agriculture_land_valuation"),
        getItem("Оценка сервитута земельного участка", "easement_land_valuation"),
      ]),
      getItem("Оценка загородной недвижимости", "countryside_estate_valuation", null, [
        getItem("Оценка частого дома", "private_house_valuation"),
        getItem("Оценка таунхауса", "townhouse_valuation"),
        getItem("Оценка коттеджа", "cottage_valuation"),
        getItem("Оценка особняка", "mansion_valuation"),
        getItem("Оценка дома без земельного участка", "without_landplot_valuation"),
        getItem("Оценка дачи", "dacha_valuation"),
        getItem("Оценка с земельным участком", "with_landplot_valuation"),
      ]),
      getItem("Оценка квартиры", "apartment_valuation", null, [
        getItem("Оценка доли квартиры", "room_share_valuation"),
        getItem("Оценка квартиры в новостройке, при покупке у застройщика", "new_room_valuation"),
        getItem("Оценка квартиры для АИЖК", "home_mortgage_agency_valuation"),
        getItem("Оценка апартаментов", "apartments_valuation"),
        getItem("Оценка комнаты в коммунальной квартире", "shared_room_valuation"),
      ]),
      getItem("Определение стоимости неотделимых улучшений", "cost_of_inseparable_improvements"),
      getItem("Оценка объектов незавершенного строительства", "under_construction_object_valuation"),
      getItem("Оценка технического состояния здания", "building_technical_condition_valuation"),
      getItem("Приемка помещений", "room_acceptance_valuation"),
      getItem("Оценка зданий", "buildings_valuation"),
    ]),
    getItem("Оценка бизнеса", "business_valuation", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Оценка нематериальных активов", "assets_valuation", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Оценка транспорта", "transport_valuation", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Оценка имущества", "property_valuation", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Оценка ущерба", "damage_valuation", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Цели оценки", "valuation_aims", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Экспертиза ▼", "expert", null, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Снижение налогов ▼", "taxcuts", null, [
    getItem("Option 13", "13"),
    getItem("Option 14", "14"),
    getItem("Option 15", "15"),
    getItem("Option 16", "16"),
  ]),
  getItem("Юридические услуги ▼", "legalservice", null, [
    getItem("Option 17", "17"),
    getItem("Option 18", "18"),
    getItem("Option 19", "19"),
    getItem("Option 20", "20"),
  ]),
  getItem("Бизнес планирование ▼", "businessplanning", null, [
    getItem("Option 21", "21"),
    getItem("Option 22", "22"),
    getItem("Option 23", "23"),
    getItem("Option 24", "24"),
  ]),
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo("/");
  }, []);

  const handleBurgerClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleNavigate = (e) => {
    console.log("click", e);
    navigateTo(e.key);
  };

  return (
    <>
      <div className="w-full overflow-hidden backdrop-blur-[10px] md:px-3 bg-white  bg-opacity-60  text-[#33a3ed]">
        <div className="md:max-w-[1280px] mx-auto flex md:gap-4 justify-between items-center md:h-[100px] h-[60px] ">
          <div className="scale-50 md:scale-90 flex items-center">
            <div className="flex items-center  md:gap-14">
              <div className="w-[140px] ">
                <img src={logo} alt="" />
              </div>
            </div>
            <nav className="stroke md:flex gap-4 font-medium hidden"></nav>
          </div>
          <div className="nav_menu  w-full">
            <Menu
              onClick={handleNavigate}
              defaultSelectedKeys={["/"]}
              style={{
                backgroundColor: "transparent",
              }}
              mode="horizontal"
              items={items}
            />
          </div>
          <div className="md:block hidden text-sm">
            <section className="flex items-center justify-end gap-3 text-black">
              <button>
                <LocationIcon />
              </button>
              <a href="tel:+79559011516">79559011516</a>
            </section>
            <a href="mailto:akwindows@gmail.com">aisperevodchik@gmail.com</a>
          </div>
          {/* <button className="md:hidden px-5" onClick={handleBurgerClick}>
            <BurgerCross isActive={isActive} />
          </button> */}
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
