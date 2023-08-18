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
      getItem(
        "Оценка коммерческой недвижимости",
        "commercial_estates_valuation",
        null,
        [
          getItem("Оценка склада", "store_valuation"),
          getItem(
            "Оценка нежилых помещений",
            "non_residential_premises_valuation"
          ),
          getItem(
            "Оценка производственных помещений",
            "industrial_premises_valuation"
          ),
          getItem("Оценка сооружений", "building_valuation"),
          getItem(
            "Оценка имущественных комплексов",
            "property_complexes_valuation"
          ),
          getItem(
            "Оценка объектов торговой недвижимости",
            "commercial_estate_valuation"
          ),
          getItem("Оценка офиса", "office_valuation"),
        ]
      ),
      getItem("Оценка земли", "land_valuation", null, [
        getItem(
          "Оценка земельных участков c/x назначения",
          "agriculture_land_valuation"
        ),
        getItem(
          "Оценка сервитута земельного участка",
          "easement_land_valuation"
        ),
      ]),
      getItem(
        "Оценка загородной недвижимости",
        "countryside_estate_valuation",
        null,
        [
          getItem("Оценка частого дома", "private_house_valuation"),
          getItem("Оценка таунхауса", "townhouse_valuation"),
          getItem("Оценка коттеджа", "cottage_valuation"),
          getItem("Оценка особняка", "mansion_valuation"),
          getItem(
            "Оценка дома без земельного участка",
            "without_landplot_valuation"
          ),
          getItem("Оценка дачи", "dacha_valuation"),
          getItem("Оценка с земельным участком", "with_landplot_valuation"),
        ]
      ),
      getItem("Оценка квартиры", "apartment_valuation", null, [
        getItem("Оценка доли квартиры", "room_share_valuation"),
        getItem(
          "Оценка квартиры в новостройке, при покупке у застройщика",
          "new_room_valuation"
        ),
        getItem("Оценка квартиры для АИЖК", "home_mortgage_agency_valuation"),
        getItem("Оценка апартаментов", "apartments_valuation"),
        getItem(
          "Оценка комнаты в коммунальной квартире",
          "shared_room_valuation"
        ),
      ]),
      getItem(
        "Определение стоимости неотделимых улучшений",
        "cost_of_inseparable_improvements"
      ),
      getItem(
        "Оценка объектов незавершенного строительства",
        "under_construction_object_valuation"
      ),
      getItem(
        "Оценка технического состояния здания",
        "building_technical_condition_valuation"
      ),
      getItem("Приемка помещений", "room_acceptance_valuation"),
      getItem("Оценка зданий", "buildings_valuation"),
    ]),
    getItem("Оценка бизнеса", "business_valuation", null, [
      getItem("Оценка векселей", "bills_valuation"),
      getItem("Оценка акций", "stock_valuation"),
      getItem("Оценка имущества компании", "company_property_valuation"),
      getItem(
        "Оценка инвестиционных проектов",
        "investment_projects_valuation"
      ),
      getItem("Оценка месторождений и недр", "deposits_and_subsoil_valuation"),
      getItem("Оценка стоимости ценных бумаг", "securities_valuation"),
      getItem(
        "Оценка дебиторской задолженности",
        "accounts_receivable_valuation"
      ),
      getItem("Оценка стоимости доли в ООО", "share_in_llc_valuation"),
      getItem(
        "Оценка вклада в уставной капитал",
        "capital_contribution_valuation"
      ),
    ]),
    getItem("Оценка нематериальных активов", "assets_valuation", null, [
      getItem(
        "Оценка паевых инвестиционных фондов (ПИФ)",
        "mutual investment_unds_valuation"
      ),
      getItem("Оценка патента на изобретение", "invention_patent_valuation"),
      getItem("Оценка проблемных активов", "distressed_assets_valuation"),
      getItem("Оценка товарного знака", "trademark_valuation"),
      getItem(
        "Оценка научно-исследовательских и опытно-конструкторских работ",
        "research_and_development_work_valuation"
      ),
    ]),
    getItem("Оценка транспорта", "transport_valuation", null, [
      getItem("Оценка спецтехники", "special_equipment_valuation"),
      getItem("Оценка грузовых автомобилей", "truck_valuation"),
      getItem("Оценка стоимости автомобиля", "car_valuation"),
    ]),
    getItem("Оценка имущества", "property_valuation", null, [
      getItem("Оценка станков", "machine_valuation"),
      getItem("Оценка оргтехники", "office_equipment_valuation"),
      getItem("Оценка оружия", "weapon_valuation"),
      getItem("Оценка компьютеров", "computer_valuation"),
      getItem("Оценка бытовой техники", "household_appliances_valuation"),
      getItem("Оценка мебели", "furniture_valuation"),
    ]),
    getItem("Оценка ущерба", "damage_valuation", null, [
      getItem("Оценка ущерба после пожара", "damage_after_fire_valuation"),
      getItem("Оценка квартиры после залива", "apartment_after_bay_valuation"),
      getItem("Экспертиза после залива", "bay_expertise_valuation"),
      getItem(
        "Оценка ущерба от действий/бездействия третьих лиц",
        "actions_inaction_of_third_parties_damage_valuation"
      ),
      getItem("Оценка упущенной выгоды", "lost_profit_valuation"),
    ]),
    getItem("Цели оценки", "valuation_aims", null, [
      getItem(
        "Оценка стоимости аренды помещения",
        "renting_room_cost_valuation",
        null,
        [
          getItem(
            "Оценка арендной платы нежилого помещения",
            "non_residential_rent_valuation"
          ),
          getItem(
            "Оценка права аренды земельного участка",
            "right_to_lease_land_valuation"
          ),
        ]
      ),
      getItem("Оценка для банка", "for_bank_valuation", null, [
        getItem("Оценка квартиры для банка", "apartment_for_bank_valuation"),
        getItem("Оценка недвижимости для банка", "estate_for_bank_valuation"),
        getItem("Оценка дома для Сбербанка", "house_for_sberbank_valuation"),
      ]),
      getItem("Оценка для суда", "for_court_valuation", null, [
        getItem(
          "Оценка недвижимости для суда",
          "real_estate_for_court_valuation"
        ),
        getItem("Оценка квартиры для суда", "apartment_for_court_valuation"),
      ]),
      getItem("Оценка для нотариуса", "for_notary_valuation", null, [
        getItem(
          "Оценка квартиры для нотариуса",
          "apartment_for_notary_valuation"
        ),
        getItem("Оценка акций для нотариуса", "shares_for_notary_valuation"),
        getItem(
          "Оценка бизнеса для вступления в наследство",
          "business_for_inheritance_valuation"
        ),
        getItem(
          "Оценка автомобиля для наследства",
          "vehicle_for_inheritance_valuation"
        ),
        getItem(
          "Оценка мотоцикла для нотариуса",
          "motorcycle_for_notary_valuation"
        ),
        getItem("Оценка гаража для нотариуса", "garage_for_notary_valuation"),
        getItem(
          "Оценка катера/лодки для наследства",
          "boat_for_inheritance_valuation"
        ),
        getItem(
          "Оценка земельного участка для нотариуса",
          "land_for_notary_valuation"
        ),
      ]),
      getItem("Оценка для продажи", "for_sale_valuation", null, [
        getItem("Оценка квартиры для продажи", "apartment_for_sale_valuation"),
      ]),
      getItem("Оценка для ипотеки", "for_mortgage_valuation", null, [
        getItem("Оценка дома для ипотеки", "mortgage_house_valuation"),
      ]),
      getItem(
        "Оценка для арбитражных управляющих",
        "for_arbitration_managers_valuation"
      ),
      getItem("Оценка для страхования", "for_insurance_valuation"),
      getItem("Оценка для опеки", "for_guardianship_valuation", null, [
        getItem(
          "Оценка квартиры для опеки",
          "apartment_for_guardianship_valuation"
        ),
      ]),
      getItem("Оценка стоимости залога", "collateral_valuation"),
      getItem(
        "Оценка для оспаривания кадастровой стоимости",
        "cadastral_cost_valuation"
      ),
    ]),
  ]),
  getItem("Экспертиза ▼", "expert", null, [
    getItem("Строительно-техническая экспертиза", "9"),
    getItem("Техническая экспертиза документов", "10"),
    getItem("Почерковедческая экспертиза", "11"),
    getItem("Финансово-экономическая экспертиза", "12"),
    getItem("Бухгалтерская экспертиза", "12"),
    getItem("Лингвистическая экспертиза", "12"),
    getItem("Фоноскопическая экспертиза", "12"),
    getItem("Компьютерно-техническая экспертиза", "12"),
    getItem("Экспертиза объектов интеллектуальной деятельности", "12"),
    getItem("Товароведческая экспертиза", "12"),
    getItem("Автотехническая экспертиза", "12"),
    getItem("Землеустроительная экспертиза", "12"),
    getItem("Пожарная экспертиза", "12"),
    getItem("Оценочная экспертиза", "12"),
  ]),
  getItem("Снижение налогов ▼", "taxcuts", null, [
    getItem("Оспаривание кадастровой стоимости недвижимости", "13"),
    getItem("Применение налоговых льгот", "14"),
    getItem("Исключение объектов недвижимости из 700-ПП", "15"),
  ]),
  getItem("Юридические услуги ▼", "legalservice", null, [
    getItem(
      "Изменение вида разрешенного использования земельного участка",
      "17"
    ),
    getItem("Изменение категории земельного участка", "18"),
    getItem("Снижение арендной ставки земельного участка", "19"),
    getItem("Легализация самовольной постройки", "20"),
    getItem("Юристы по кадастровым вопросам", "20"),
    getItem("Согласование перепланировок", "20"),
  ]),
  getItem("Бизнес планирование ▼", "businessplanning", null, [
    getItem("Анализ финансово-хозяйственной деятельности предприятия", "21"),
    getItem("Разработка бизнес-плана", "22"),
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
