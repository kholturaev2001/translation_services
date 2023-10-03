import { useState } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import "./navbar.css";
import BurgerCross from "../BurgerCross/BurgerCross";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../assets/images/logo_with_txt.svg";
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
  getItem("Главная ▼", "main_page", null, [
    getItem("Главная", "/"),
    getItem("Цены", "/prices"),
    getItem("Карьера", "/vacancies"),
    getItem("Контакты", "/contacts"),
  ]),
  getItem("Письменный перевод ▼", "written_translation", null, [
    getItem("Технический перевод", "/services/technical_translation"),
    getItem(
      "Перевод экономических текстов",
      "/services/economic_texts_translation"
    ),
    getItem("Финансовый перевод", "/services/financial_translation"),
    getItem("ИТ перевод", "/services/it_translation"),
    getItem("Юридический перевод", "/services/legal_translation"),
    getItem("Медицинский перевод", "/services/medical_translation"),
    getItem("Художественный перевод", "/services/literary_translation"),
    getItem("Публицистический перевод", "/services/publicistic_translation"),
    getItem(
      "Перевод рекламных текстов",
      "/services/advertising_texts_translation"
    ),
    getItem("Фармацевтический перевод", "/services/pharmaceutical_translation"),
  ]),
  getItem("Устный перевод ▼", "oral_translation", null, [
    getItem("Перевод на переговорах", "/services/for_negotiations_translation"),
    getItem("Переводчик на выставку", "/services/for_exhibition_translation"),
    getItem(
      "Перевод на собраниях, конференциях",
      "/services/for_meetings_and_conference_translation"
    ),
    getItem("Сопровождение делегации", "/services/delegation_accompanying"),
    getItem(
      "Перевод при нотариальных действиях",
      "/services/notarial_actions_translation"
    ),
    getItem("Перевод на производстве", "/services/in_production_translation"),
    getItem("Гид-переводчик", "/services/guide_interpreter"),
    getItem("Синхронный перевод", "/services/synchronic_translation"),
    getItem("Специфический перевод", "/services/specific_translation"),
  ]),
  getItem("Личные документы ▼", "private_documents", null, [
    getItem("Перевод паспорта", "/services/passport_translation"),
    getItem(
      "Перевод водительских удостоверений, ПТС",
      "/services/drivers_licenses_and_pts_translation"
    ),
    getItem(
      "Перевод печатей, апостилей",
      "/services/seals_and_apostilles_translation"
    ),
    getItem(
      "Перевод справок, свидетельств",
      "/services/references_certificates_translation"
    ),
    getItem(
      "Перевод и нотариальное заверение согласий на выезд ребенка",
      "/services/departure_of_child_consents_translation_and_notarization"
    ),
    getItem(
      "Перевод аттестатов и приложений",
      "/services/certificates_and_applications_translation"
    ),
    getItem(
      "Перевод дипломов и приложений",
      "/services/diplomas_and_applications_translation"
    ),
    getItem("Перевод зачетных книжек", "/services/transcripts_translation"),
    getItem(
      "Перевод корпоративных документов",
      "/services/corporate_documents_translation"
    ),
    getItem(
      "Перевод и апостилирование свидетельства о рождении",
      "/services/birth_certificate_apostille_translation"
    ),
    getItem(
      "Перевод договоров, приложений",
      "/services/contracts_and_applications_translation"
    ),
    getItem(
      "Услуги по переводу документов",
      "/services/document_translation_services"
    ),
    getItem("Нотариальные услуги", "/services/notary_services"),
  ]),
];

const defaultOpenKeys = ["main_page"];

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

  const location = useLocation();

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
          </div>
          <div className=" w-full hidden md:block">
            <Menu
              onClick={handleNavigate}
              defaultSelectedKeys={[active_nav]}
              selectedKeys={[location.pathname]}
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
