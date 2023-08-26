import { useEffect, useState } from "react";
import { Menu } from "antd";

import "./navbar.css";
import BurgerCross from "../BurgerCross/BurgerCross";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../assets/images/logo_with_txt.svg";
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
          getItem("Оценка склада", "/services/store_valuation"),
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
    getItem(
      "Строительно-техническая экспертиза",
      "construction_and_technical_expert",
      null,
      [
        getItem(
          "Определение стоимости выполненных строительно-технических работ",
          "cost_of_completed_construction_work_determination"
        ),
        getItem(
          "Экспертиза сметной документации",
          "estimate_documentation_expert"
        ),
        getItem("Экспертиза фасада здания", "building_facade_expert"),
        getItem("Экспертиза окон", "window_expert"),
        getItem(
          "Экспертиза строительно-монтажных работ",
          "construction_and_installation_works_expert"
        ),
        getItem(
          "Экспертиза качества внутренней отделки",
          "quality_of_interior_decoration_expert"
        ),
        getItem(
          "Экспертиза зданий и сооружений",
          "buildings_and_structures_expert"
        ),
        getItem(
          "Экспертиза капитальности зданий",
          "capitality_of_buildings_expert"
        ),
        getItem("Экспертиза дверных блоков", "door_blocks_expert"),
        getItem(
          "Строительная экспертиза квартиры",
          "apartment_contruction_expert"
        ),
        getItem("Экспертиза кровли", "roof_expert"),
      ]
    ),
    getItem(
      "Техническая экспертиза документов",
      "technical_document_expert",
      null,
      [
        getItem(
          "Экспертиза срока давности составления документа",
          "statute_of_limitations_for_compiling_a_document_expert"
        ),
      ]
    ),
    getItem("Почерковедческая экспертиза", "handwriting_expert"),
    getItem(
      "Финансово-экономическая экспертиза",
      "financial_and_economic_expert"
    ),
    getItem("Бухгалтерская экспертиза", "accounting_expert"),
    getItem("Лингвистическая экспертиза", "linguistic_expert"),
    getItem("Фоноскопическая экспертиза", "phonoscopic_expert"),
    getItem(
      "Компьютерно-ехническая экспертиза",
      "computer_and_technical_expert"
    ),
    getItem(
      "Экспертиза объектов интеллектуальной деятельности",
      "intellectual_activity_objects_expert"
    ),
    getItem("Товароведческая экспертиза", "commodity_expert"),
    getItem("Автотехническая экспертиза", "automotive_expert"),
    getItem("Землеустроительная экспертиза", "land_management_expert"),
    getItem("Пожарная экспертиза", "fire_expert"),
    getItem("Оценочная экспертиза", "appraisal_expert"),
  ]),
  getItem("Снижение налогов ▼", "taxcuts", null, [
    getItem(
      "Оспаривание кадастровой стоимости недвижимости",
      "challenging_the_cadastral_value_of_real_estate"
    ),
    getItem("Применение налоговых льгот", "application_of_tax_incentives"),
    getItem(
      "Исключение объектов недвижимости из 700-ПП",
      "exclusion_of_real_estate_objects_from_700_pp"
    ),
  ]),
  getItem("Юридические услуги ▼", "legalservice", null, [
    getItem(
      "Изменение вида разрешенного использования земельного участка",
      "permitted_land_type_change"
    ),
    getItem("Изменение категории земельного участка", "land_category_change"),
    getItem(
      "Снижение арендной ставки земельного участка",
      "land_rent_decrease"
    ),
    getItem(
      "Легализация самовольной постройки",
      "unauthorized_construction_legalization"
    ),
    getItem("Юристы по кадастровым вопросам", "cadastral_matters_lawyers"),
    getItem("Согласование перепланировок", "redevelopment_coordination"),
  ]),
  getItem("Бизнес планирование ▼", "businessplanning", null, [
    getItem(
      "Анализ финансово-хозяйственной деятельности предприятия",
      "enterprise_financial_and_economic_activities_analysis"
    ),
    getItem("Разработка бизнес-плана", "business_plan_development"),
  ]),
  getItem("Переводческая деятельность ▼", "translating", null, [
    getItem("Письменный перевод", "written_translation", null, [
      getItem("Технический перевод", "technical_translation"),
      getItem("Перевод экономических текстов", "economic_texts_translation"),
      getItem("Финансовый перевод", "financial_translation"),
      getItem("ИТ перевод", "it_translation"),
      getItem("Юридический перевод", "legal_translation"),
      getItem("Медицинский перевод", "medical_translation"),
      getItem("Художественный перевод", "literary_translation"),
      getItem("Публицистический перевод", "publicistic_translation"),
      getItem("Перевод рекламных текстов", "advertising_texts_translation"),
      getItem("Фармацевтический перевод", "pharmaceutical_translation"),
    ]),
    getItem("Устный перевод", "oral_translation", null, [
      getItem("Перевод на переговорах", "for_negotiations_translation"),
      getItem("Переводчик на выставку", "for_exhibition_translation"),
      getItem(
        "Перевод на собраниях, конференциях",
        "for_meetings_and_conference_translation"
      ),
      getItem("Сопровождение делегации", "delegation_accompanying"),
      getItem(
        "Перевод при нотариальных действиях",
        "notarial_actions_translation"
      ),
      getItem("Перевод на производстве", "in_production_translation"),
      getItem("Гид-переводчик", "guide_interpreter"),
      getItem("Синхронный перевод", "synchronic_translation"),
      getItem("Специфический перевод", "specific_translation"),
    ]),
    getItem("Личные документы", "private_documents", null, [
      getItem("Перевод паспорта", "passport_translation"),
      getItem(
        "Перевод водительских удостоверений, ПТС",
        "drivers_licenses_and_pts_translation"
      ),
      getItem("Перевод печатей, апостилей", "seals_and_apostilles_translation"),
      getItem(
        "Перевод справок, свидетельств",
        "references_certificates_translation"
      ),
      getItem(
        "Перевод и нотариальное заверение согласий на выезд ребенка",
        "departure_of_child_consents_translation_and_notarization"
      ),
      getItem(
        "Перевод аттестатов и приложений",
        "certificates_and_applications_translation"
      ),
      getItem(
        "Перевод дипломов и приложений",
        "diplomas_and_applications_translation"
      ),
      getItem("Перевод зачетных книжек", "transcripts_translation"),
      getItem(
        "Перевод корпоративных документов",
        "corporate_documents_translation"
      ),
      getItem(
        "Перевод и апостилирование свидетельства о рождении",
        "birth_certificate_apostille_translation"
      ),
      getItem(
        "Перевод договоров, приложений",
        "contracts_and_applications_translation"
      ),
      getItem("Услуги по переводу документов", "document_translation_services"),
      getItem("Нотариальные услуги", "notary_services"),
    ]),
  ]),
];

const defaultSelectedKeys = ["/"];
const defaultOpenKeys = ["about_company"];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigateTo = useNavigate();
  const active_nav = sessionStorage.getItem("active_nav");

  const handleBurgerClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleNavigate = ({ key }) => {
    // console.log("click", key);
    navigateTo(key);
    setIsActive((prevState) => !prevState);
    sessionStorage.setItem("active_nav", key);
  };

  return (
    <>
      <div className="w-full overflow-hidden backdrop-blur-[10px] md:px-3 bg-white  bg-opacity-60  text-[#33a3ed]">
        <div className="md:max-w-[1280px] mx-auto flex md:gap-4 justify-between items-center md:h-[100px] h-[60px] ">
          <div className="scale-50 md:scale-90 flex items-center">
            <div className="flex items-center  md:gap-14">
              <div className="w-[100px] ">
                <img src={logo} alt="" />
              </div>
            </div>
            <nav className="stroke md:flex gap-4 font-medium hidden"></nav>
          </div>
          <div className=" w-full hidden md:block">
            <Menu
              onClick={handleNavigate}
              defaultSelectedKeys={[active_nav]}
              style={{
                backgroundColor: "transparent",
                textTransform: "uppercase",
              }}
              mode="horizontal"
              items={items}
            />
          </div>
          <button className="md:hidden px-5" onClick={handleBurgerClick}>
            <BurgerCross isActive={isActive} />
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <Sidebar
          isActive={isActive}
          onClick={handleBurgerClick}
          handleNavigate={handleNavigate}
          items={items}
          defaultSelectedKeys={[active_nav]}
          defaultOpenKeys={defaultOpenKeys}
        />
      </div>
    </>
  );
};

export default Navbar;
