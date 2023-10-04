import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/translating/written_translation/it_translation.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Ul from "../../../components/Typography/Ul";
import Title2 from "../../../components/Typography/Title2";
import TrDeadline from "../../../components/Translation/TrDeadline";
import TranslationFromLang from "../../../components/TranslationTables/TranslationFromLang";
import TranslationToLang from "../../../components/TranslationTables/TranslationToLang";
import OtherTypes from "../../../components/TranslationTables/OtherTypes";
import Discounts from "../../../components/TranslationTables/Discounts";
import AdditionInfo from "../../../components/TranslationTables/AdditionInfo";

const ITTranslation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Письменный перевод",
          },
          {
            title: "ИТ перевод",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Локализация программного обеспечения и перевод текстов в сфере информационных технологий"
      />
      <Description>
        Локализация программных продуктов – неизменная составляющая в работе
        компаний, специализирующихся на разработке программного обеспечения для
        персональных компьютеров и мобильных платформ. ИТ-перевод позволяет
        значительно расширить круг потребителей, а также увеличить прибыль
        студии-разработчика. Выполняется он одновременно двумя специалистами: в
        сфере переводов и информационных технологий.
      </Description>
      <Description>
        Бюро переводов ООО АИС «ПЕРЕВОДЧИК» может помочь Вам при осуществлении
        такого перевода. Скорость выполнения заказа зависит напрямую от объема
        текста, который необходимо локализовать, а также от его сложности и
        специфики. К примеру, русификация интерфейса – одна из самых простых
        задач. А вот перевод компьютерной игры – это уже целый проект, в котором
        будут участвовать несколько переводчиков и программистов.
      </Description>
      <Title2>Тематика:</Title2>
      <Ul>
        <li>Локализация ПО;</li>
        <li>ИТ статьи;</li>
        <li>Руководства по эксплуатации;</li>
        <li>Сравнительные обзоры;</li>
        <li>Пресс-релизы.</li>
      </Ul>
      <TrDeadline />
      <Title>Стоимость перевода программного обеспечения</Title>
      <TranslationFromLang />
      <TranslationToLang east_langs="от 700" />
      <OtherTypes />
      <Discounts />
      <AdditionInfo />
    </div>
  );
};

export default ITTranslation;
