import { useState } from "react";
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
            "/services/non_residential_premises_valuation"
          ),
          getItem(
            "Оценка производственных помещений",
            "/services/industrial_premises_valuation"
          ),
          getItem("Оценка сооружений", "/services/building_valuation"),
          getItem(
            "Оценка имущественных комплексов",
            "/services/property_complexes_valuation"
          ),
          getItem(
            "Оценка объектов торговой недвижимости",
            "/services/commercial_estate_valuation"
          ),
          getItem("Оценка офиса", "/services/office_valuation"),
        ]
      ),

      getItem("Оценка земли", "land_valuation", null, [
        getItem(
          "Оценка земельных участков c/x назначения",
          "/services/agriculture_land_valuation"
        ),
        getItem(
          "Оценка сервитута земельного участка",
          "/services/easement_land_valuation"
        ),
      ]),
      getItem(
        "Оценка загородной недвижимости",
        "countryside_estate_valuation",
        null,
        [
          getItem("Оценка частного дома", "/services/private_house_valuation"),
          getItem("Оценка таунхауса", "/services/townhouse_valuation"),
          getItem("Оценка коттеджа", "/services/cottage_valuation"),
          getItem("Оценка особняка", "/services/mansion_valuation"),
          getItem(
            "Оценка дома без земельного участка",
            "/services/without_landplot_valuation"
          ),
          getItem("Оценка дачи", "/services/dacha_valuation"),
          getItem(
            "Оценка с земельным участком",
            "/services/with_landplot_valuation"
          ),
        ]
      ),
      getItem("Оценка квартиры", "/services/apartment_valuation", null, [
        getItem("Оценка доли квартиры", "/services/room_share_valuation"),
        getItem(
          "Оценка квартиры в новостройке, при покупке у застройщика",
          "/services/new_room_valuation"
        ),
        getItem(
          "Оценка квартиры для АИЖК",
          "/services/home_mortgage_agency_valuation"
        ),
        getItem("Оценка апартаментов", "/services/apartments_valuation"),
        getItem(
          "Оценка комнаты в коммунальной квартире",
          "/services/communal_room_valuation"
        ),
      ]),
      getItem(
        "Определение стоимости неотделимых улучшений",
        "/services/cost_of_inseparable_improvements"
      ),
      getItem(
        "Оценка объектов незавершенного строительства",
        "/services/under_construction_object_valuation"
      ),
      getItem(
        "Оценка технического состояния здания",
        "/services/building_technical_condition_valuation"
      ),
      getItem("Приемка помещений", "/services/room_acceptance_valuation"),
      getItem("Оценка гостиницы", "/services/hotel_valuation"),
      getItem("Оценка зданий", "/services/buildings_valuation"),
    ]),

    getItem("Оценка бизнеса", "business_valuation", null, [
      getItem("Оценка векселей", "/services/bills_valuation"),
      getItem("Оценка акций", "/services/stock_valuation"),
      getItem(
        "Оценка имущества компании",
        "/services/company_property_valuation"
      ),
      getItem(
        "Оценка инвестиционных проектов",
        "/services/investment_projects_valuation"
      ),
      getItem(
        "Оценка месторождений и недр",
        "/services/deposits_and_subsoil_valuation"
      ),
      getItem(
        "Оценка стоимости ценных бумаг",
        "/services/securities_valuation"
      ),
      getItem(
        "Оценка дебиторской задолженности",
        "/services/accounts_receivable_valuation"
      ),
      getItem(
        "Оценка стоимости доли в ООО",
        "/services/share_in_llc_valuation"
      ),
      getItem(
        "Оценка вклада в уставной капитал",
        "/services/capital_contribution_valuation"
      ),
    ]),
    getItem(
      "Оценка нематериальных активов",
      "intangible_assets_valuation",
      null,
      [
        getItem(
          "Оценка паевых инвестиционных фондов (ПИФ)",
          "/services/mutual_investment_funds_valuation"
        ),
        getItem(
          "Оценка патента на изобретение",
          "/services/invention_patent_valuation"
        ),
        getItem(
          "Оценка проблемных активов",
          "/services/distressed_assets_valuation"
        ),
        getItem("Оценка товарного знака", "/services/trademark_valuation"),
        getItem(
          "Оценка научно-исследовательских и опытно-конструкторских работ",
          "/services/research_and_development_work_valuation"
        ),
      ]
    ),
    getItem("Оценка транспорта", "transport_valuation", null, [
      getItem("Оценка спецтехники", "/services/special_equipment_valuation"),
      getItem("Оценка грузовых автомобилей", "/services/truck_valuation"),
      getItem("Оценка стоимости автомобиля", "/services/car_valuation"),
    ]),
    getItem("Оценка имущества", "property_valuation", null, [
      getItem("Оценка станков", "/services/machine_valuation"),
      getItem("Оценка оргтехники", "/services/office_equipment_valuation"),
      getItem("Оценка оружия", "/services/weapon_valuation"),
      getItem("Оценка компьютеров", "/services/computer_valuation"),
      getItem(
        "Оценка бытовой техники",
        "/services/household_appliances_valuation"
      ),
      getItem("Оценка мебели", "/services/furniture_valuation"),
    ]),
    getItem("Оценка ущерба", "damage_valuation", null, [
      getItem(
        "Оценка ущерба после пожара",
        "/services/damage_after_fire_valuation"
      ),
      getItem(
        "Оценка квартиры после залива",
        "/services/apartment_after_bay_valuation"
      ),
      getItem("Экспертиза после залива", "/services/bay_expertise_valuation"),
      getItem(
        "Оценка ущерба от действий/бездействия третьих лиц",
        "/services/actions_inaction_of_third_parties_damage_valuation"
      ),
      getItem("Оценка упущенной выгоды", "/services/lost_profit_valuation"),
    ]),
    getItem("Цели оценки", "valuation_aims", null, [
      getItem(
        "Оценка стоимости аренды помещения",
        "renting_room_cost_valuation",
        null,
        [
          getItem(
            "Оценка арендной платы нежилого помещения",
            "/services/non_residential_rent_valuation"
          ),
          getItem(
            "Оценка права аренды земельного участка",
            "/services/right_to_lease_land_valuation"
          ),
        ]
      ),
      getItem("Оценка для банка", "for_bank_valuation", null, [
        getItem(
          "Оценка квартиры для банка",
          "/services/apartment_for_bank_valuation"
        ),
        getItem(
          "Оценка недвижимости для банка",
          "/services/estate_for_bank_valuation"
        ),
        getItem(
          "Оценка дома для Сбербанка",
          "/services/house_for_sberbank_valuation"
        ),
      ]),
      getItem("Оценка для суда", "for_court_valuation", null, [
        getItem(
          "Оценка недвижимости для суда",
          "/services/real_estate_for_court_valuation"
        ),
        getItem(
          "Оценка квартиры для суда",
          "/services/apartment_for_court_valuation"
        ),
      ]),
      getItem("Оценка для нотариуса", "for_notary_valuation", null, [
        getItem(
          "Оценка квартиры для нотариуса",
          "/services/apartment_for_notary_valuation"
        ),
        getItem(
          "Оценка акций для нотариуса",
          "/services/shares_for_notary_valuation"
        ),
        getItem(
          "Оценка бизнеса для вступления в наследство",
          "/services/business_for_inheritance_valuation"
        ),
        getItem(
          "Оценка автомобиля для наследства",
          "/services/vehicle_for_inheritance_valuation"
        ),
        getItem(
          "Оценка мотоцикла для нотариуса",
          "/services/motorcycle_for_notary_valuation"
        ),
        getItem(
          "Оценка гаража для нотариуса",
          "/services/garage_for_notary_valuation"
        ),
        getItem(
          "Оценка катера/лодки для наследства",
          "/services/boat_for_inheritance_valuation"
        ),
        getItem(
          "Оценка земельного участка для нотариуса",
          "/services/land_for_notary_valuation"
        ),
      ]),
      getItem(
        "Оценка квартиры для продажи",
        "/services/apartment_for_sale_valuation"
      ),
      getItem("Оценка дома для ипотеки", "/services/mortgage_house_valuation"),
      getItem(
        "Оценка для арбитражных управляющих",
        "/services/for_arbitration_managers_valuation"
      ),
      getItem("Оценка для страхования", "/services/for_insurance_valuation"),
      getItem(
        "Оценка квартиры для опеки",
        "/services/apartment_for_guardianship_valuation"
      ),
      getItem("Оценка стоимости залога", "/services/collateral_valuation"),
      getItem(
        "Оценка для оспаривания кадастровой стоимости",
        "/services/cadastral_cost_valuation"
      ),
      getItem(
        "Оценка для постановки на баланс",
        "/services/house_balance_valuation"
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
          "/services/cost_of_completed_construction_work_determination"
        ),
        getItem(
          "Экспертиза сметной документации",
          "/services/estimate_documentation_expert"
        ),
        getItem("Экспертиза фасада здания", "building_facade_expert"),
        getItem("Экспертиза окон", "/services/window_expert"),
        getItem(
          "Экспертиза строительно-монтажных работ",
          "/services/construction_and_installation_works_expert"
        ),
        getItem(
          "Экспертиза качества внутренней отделки",
          "/services/quality_of_interior_decoration_expert"
        ),
        getItem(
          "Экспертиза зданий и сооружений",
          "/services/buildings_and_structures_expert"
        ),
        getItem(
          "Экспертиза капитальности зданий",
          "/services/capitality_of_buildings_expert"
        ),
        getItem("Экспертиза дверных блоков", "/services/door_blocks_expert"),
        getItem(
          "Строительная экспертиза квартиры",
          "/services/apartment_contruction_expert"
        ),
        getItem("Экспертиза кровли", "/services/roof_expert"),
        getItem(
          "Экспертиза удорожания стоимости строительства",
          "/services/increase_in_construction_сosts_expert"
        ),
        getItem(
          "Экспертиза деревянных конструкций",
          "/services/wooden_structures_exert"
        ),
      ]
    ),
    getItem(
      "Экспертиза срока давности составления документа",
      "/services/statute_of_limitations_for_compiling_a_document_expert"
    ),
    getItem("Почерковедческая экспертиза", "/services/handwriting_expert"),
    getItem(
      "Финансово-экономическая экспертиза",
      "/services/financial_and_economic_expert"
    ),
    getItem("Бухгалтерская экспертиза", "/services/accounting_expert"),
    getItem("Лингвистическая экспертиза", "/services/linguistic_expert"),
    getItem("Фоноскопическая экспертиза", "/services/phonoscopic_expert"),
    getItem(
      "Компьютерно-ехническая экспертиза",
      "/services/computer_and_technical_expert"
    ),
    getItem(
      "Экспертиза объектов интеллектуальной деятельности",
      "/services/intellectual_activity_objects_expert"
    ),
    getItem("Товароведческая экспертиза", "/services/commodity_expert"),
    getItem("Автотехническая экспертиза", "/services/automotive_expert"),
    getItem("Землеустроительная экспертиза", "/services/land_management_expert"),
    getItem("Пожарная экспертиза", "/services/fire_expert"),
    getItem("Оценочная экспертиза", "/services/appraisal_expert"),
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

const defaultOpenKeys = ["about_company"];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigateTo = useNavigate();
  const active_nav =
    sessionStorage.getItem("active_nav") !== null
      ? sessionStorage.getItem("active_nav")
      : "/";

  const handleBurgerClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleNavigate = ({ key }) => {
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
